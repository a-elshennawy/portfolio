import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, rate, note } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailToSelf = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `new review added from ${name}`,
      text: `Name: ${name}\nRate:${rate}\nNote:${note}`,
    };

    await transporter.sendMail(mailToSelf);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
