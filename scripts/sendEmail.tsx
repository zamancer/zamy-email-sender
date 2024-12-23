import { Resend } from 'resend';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import XmasEmail from '../emails/xmas-email';

const resend = new Resend('re_TtNmBoxD_BZKQ7FtgbzQ5EtkMQmz3pPqE');

async function sendEmail() {
  try {
    // Render JSX into a static HTML string
    const emailHtml = ReactDOMServer.renderToStaticMarkup(<XmasEmail />);

    // Send the email with Resend
    const response = await resend.emails.send({
      from: 'alan@zammx.com',
      to: 'alnzam17@gmail.com',
      subject: 'Merry Xmas!',
      html: emailHtml,
    });

    console.log('✅ Email sent successfully:', response);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}

sendEmail();
