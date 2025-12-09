import 'dotenv/config';
import { Resend } from 'resend';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Navidad2025Email from '../emails/navidad-2025';
import { Recipient } from './types';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL ?? '';

function getRecipients(): Recipient[] {
  if (!process.env.RECIPIENT_EMAILS) {
    throw new Error('RECIPIENT_EMAILS environment variable is required');
  }

  return process.env.RECIPIENT_EMAILS.split(',').map(entry => {
    const [name, email] = entry.split('||');
    if (!name || !email) {
      throw new Error(`Invalid recipient format. Expected "name||email", got "${entry}"`);
    }
    return {
      name: name.trim(),
      email: email.trim()
    };
  });
}

async function sendEmail() {
  try {
    const recipients = getRecipients();

    if (recipients.length === 0) {
      throw new Error('No recipients configured');
    }

    console.log(`📧 Sending Navidad 2025 email to ${recipients.length} recipient(s)...`);

    // Send individual emails to each recipient
    const emailPromises = recipients.map(recipient => {
      const emailHtml = ReactDOMServer.renderToStaticMarkup(
        <Navidad2025Email recipientName={recipient.name} />
      );

      console.log(`  → ${recipient.name} (${recipient.email})`);

      return resend.emails.send({
        from: fromEmail,
        to: recipient.email,
        subject: `Un calendario de adviento especial te espera...`,
        html: emailHtml,
      });
    });

    const responses = await Promise.all(emailPromises);
    console.log('\n✅ All emails sent successfully!');
    responses.forEach((res, i) => {
      console.log(`  ${recipients[i].name}: ${res.data?.id || 'sent'}`);
    });
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    process.exit(1);
  }
}

sendEmail();
