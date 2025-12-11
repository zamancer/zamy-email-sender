import "dotenv/config";
import { Resend } from "resend";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Navidad2025Email from "../emails/navidad-2025";
import { Recipient } from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL ?? "";
const adventCalendarUrl = process.env.ADVENT_CALENDAR_URL ?? "";

function getRecipients(): Recipient[] {
  if (!process.env.RECIPIENT_EMAILS) {
    throw new Error("RECIPIENT_EMAILS environment variable is required");
  }

  return process.env.RECIPIENT_EMAILS.split(",").map((entry) => {
    const [name, email] = entry.split("||");
    if (!name || !email) {
      throw new Error(
        `Invalid recipient format. Expected "name||email", got "${entry}"`
      );
    }
    return {
      name: name.trim(),
      email: email.trim(),
    };
  });
}

async function sendEmail() {
  try {
    const recipients = getRecipients();

    if (recipients.length === 0) {
      throw new Error("No recipients configured");
    }

    if (!adventCalendarUrl) {
      throw new Error("ADVENT_CALENDAR_URL environment variable is required");
    }

    // Send individual emails to each recipient
    const emailPromises = recipients.map((recipient) => {
      const emailHtml = ReactDOMServer.renderToStaticMarkup(
        <Navidad2025Email
          recipientName={recipient.name}
          adventCalendarUrl={adventCalendarUrl}
        />
      );

      return resend.emails.send({
        from: fromEmail,
        to: recipient.email,
        subject: `🎄 Un calendario de adviento te espera`,
        html: emailHtml,
      });
    });

    const results = await Promise.allSettled(emailPromises);

    const succeeded = results.filter(
      (
        r
      ): r is PromiseFulfilledResult<
        Awaited<ReturnType<typeof resend.emails.send>>
      > => r.status === "fulfilled"
    );
    const failed = results.filter(
      (r): r is PromiseRejectedResult => r.status === "rejected"
    );

    succeeded.forEach((result) => {
      const recipient = recipients[results.indexOf(result)];
      console.log(
        `✅ Email sent to ${recipient.name} (${recipient.email}):`,
        result.value
      );
    });

    failed.forEach((result) => {
      const originalIndex = results.indexOf(result);
      const recipient = recipients[originalIndex];
      console.error(
        `❌ Failed to send to ${recipient.name} (${recipient.email}):`,
        result.reason
      );
    });

    console.log(
      `\n📊 Summary: ${succeeded.length}/${recipients.length} emails sent successfully`
    );

    if (failed.length > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Failed to send emails:", error);
    process.exit(1);
  }
}

sendEmail();
