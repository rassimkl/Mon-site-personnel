"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    alert("Message envoyé avec succès !");
    setForm({ nom: "", email: "", message: "" });
  } else {
    alert("Erreur lors de l'envoi.");
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #ff0055 100%)",
        padding: "120px 80px",
        color: "white",
      }}
    >

      {/* 🔥 LOGO CLIQUABLE */}
    <Link href="/" style={{ textDecoration: "none" }}>
      <img
        src="/images/logo.png"
        alt="Logo"
        style={{
          width: "90px",
          borderRadius: "20px",
          marginTop: "-70px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.transform = "scale(1.05)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
      />
    </Link>
      <h1
        style={{
          fontSize: "56px",
          marginBottom: "80px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Me Contacter
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
        }}
      >
        {/* COLONNE INFOS */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "40px",
            borderRadius: "20px",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>📌 Informations</h2>

          <div style={{ lineHeight: "2.2" }}>
            <p><strong>Email :</strong> kloulrassim25@email.com</p>
            <p><strong>Téléphone :</strong> +33 7 67 55 65 34</p>
            <p>
              <strong>LinkedIn :</strong>{" "}
              <a
                href="https://www.linkedin.com/in/rassim-kloul-ba5b842a5/"
                target="_blank"
                style={{
                  color: "#ff0055",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Voir mon profil
              </a>
            </p>
          </div>
        </div>

        {/* COLONNE FORMULAIRE */}
        <div
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "40px",
            borderRadius: "20px",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2 style={{ marginBottom: "30px" }}>📨 Envoyer un message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={form.nom}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, height: "140px", resize: "none" }}
            />

            <button type="submit" style={buttonStyle}>
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.08)",
  color: "white",
  fontSize: "15px",
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  background: "#ff0055",
  padding: "14px",
  borderRadius: "30px",
  border: "none",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "10px",
};
