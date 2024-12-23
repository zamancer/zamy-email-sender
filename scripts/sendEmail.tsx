import 'dotenv/config';
import { Resend } from 'resend';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import XmasEmail from '../emails/xmas-email';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL ?? '';
const recipientsFromEnv = process.env.RECIPIENT_EMAILS?.split(',') ?? [];

async function sendEmail() {
  try {
    // Render JSX into a static HTML string
    const emailHtml = ReactDOMServer.renderToStaticMarkup(<XmasEmail />);

    // Send the email with Resend
    const response = await resend.emails.send({
      from: fromEmail,
      to: recipientsFromEnv,
      subject: 'Merry Xmas to you all!',
      html: emailHtml,
    });

    console.log('✅ Email sent successfully:', response);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

sendEmail();
