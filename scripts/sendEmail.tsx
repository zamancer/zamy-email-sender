import 'dotenv/config';
import { Resend } from 'resend';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import NavidadEmail from '../emails/navidad-2024';
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

    const RICK_ROLL_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    const xmasVideoUrl = process.env.XMAS_VIDEO_URL || RICK_ROLL_URL;

    // Send individual emails to each recipient
    const emailPromises = recipients.map(recipient => {
      const emailHtml = ReactDOMServer.renderToStaticMarkup(
        <NavidadEmail recipientName={recipient.name} videoUrl={xmasVideoUrl} />
      );

      return resend.emails.send({
        from: fromEmail,
        to: recipient.email,
        subject: `🎁 Un pedacito de mi año para acompañar tu Navidad! 🎄`,
        html: emailHtml,
      });
    });

    const responses = await Promise.all(emailPromises);
    console.log('✅ Emails sent successfully:', responses);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    process.exit(1);
  }
}

sendEmail();
