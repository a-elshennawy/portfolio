import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, note } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Mail to YOU
    const mailToSelf = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Request from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nNote: ${note}`,
    };

    // 2. Mail to CLIENT
    const mailToClient = {
      from: `"Ahmed El-Shennawy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for your request",
      html: `
      <img src="https://ahmed-elshennawy.vercel.app/avatar/welcoming.webp" alt="Logo">
        <p>Thank you <strong>${name}</strong> for your contact, I received your request.</p>
        <p>Kindly expect a call within 48 hours from a number <strong>+201033926177</strong> or a whatsApp message in case you are not available</p>
      `,
    };

    // Send both
    await transporter.sendMail(mailToSelf);
    await transporter.sendMail(mailToClient);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
