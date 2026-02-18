import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { nom, email, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: "Champs manquants" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
        tls: {
          rejectUnauthorized: false, // 👈 IMPORTANT
        },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message de ${nom}`,
      html: `
        <h2>Nouveau message depuis ton portfolio</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
