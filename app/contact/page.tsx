"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/ContactPage.module.css";

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
    <div className={styles.container}>

      <h1 className={styles.title}>Me Contacter</h1>

      <div className={styles.grid}>

        {/* INFOS */}
        <div className={styles.card}>
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

        {/* FORMULAIRE */}
        <div className={styles.card}>
          <h2 style={{ marginBottom: "30px" }}>📨 Envoyer un message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={form.nom}
              onChange={handleChange}
              required
              className={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
              className={styles.input}
            />

            <textarea
              name="message"
              placeholder="Votre message"
              value={form.message}
              onChange={handleChange}
              required
              className={`${styles.input} ${styles.textarea}`}
            />

            <button type="submit" className={styles.button}>
              Envoyer le message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}