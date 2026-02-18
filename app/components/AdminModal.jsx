"use client";

import { useState } from "react";

export default function AdminModal({ onClose, onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      onSuccess();
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "40px",
          borderRadius: "25px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          color: "white",
        }}
      >
        <h2
          style={{
            marginBottom: "25px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          🔐 Accès Administrateur
        </h2>

        <input
          type="password"
          placeholder="Entrez le mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 15px",
            borderRadius: "12px",
            border: "none",
            marginBottom: "15px",
            outline: "none",
          }}
        />

        {error && (
          <p
            style={{
              color: "#ff4d6d",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            {error}
          </p>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <button
            onClick={handleLogin}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "20px",
              border: "none",
              background: "#ff0055",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Se connecter
          </button>

          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.4)",
              background: "transparent",
              color: "white",
              cursor: "pointer",
            }}
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
