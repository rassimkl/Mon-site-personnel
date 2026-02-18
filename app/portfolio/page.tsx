"use client";

import Link from "next/link";

export default function PortfolioPage() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        position: "relative",
      }}
    >
      {/* 🔥 LOGO RETOUR ACCUEIL */}
      <Link
        href="/"
        style={{
          position: "absolute",
          top: "40px",
          left: "60px",
          zIndex: 1000,
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            width: "70px",
            borderRadius: "18px",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        />
      </Link>

      {/* ================= RESEAUX ================= */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('/images/network-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(10,30,40,0.85), rgba(20,60,80,0.85))",
          }}
        />

        <Link href="/portfolio/reseau" style={{ zIndex: 2 }}>
          <button
            style={{
              padding: "18px 45px",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "30px",
              border: "2px solid white",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Voir Portfolio Réseau
          </button>
        </Link>
      </div>

      {/* ================= DEV ================= */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url('/images/dev-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(100,0,120,0.85), rgba(255,0,85,0.85))",
          }}
        />

        <Link href="/portfolio/developpement" style={{ zIndex: 2 }}>
          <button
            style={{
              padding: "18px 45px",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "30px",
              border: "2px solid white",
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Voir Portfolio Développement
          </button>
        </Link>
      </div>
    </section>
  );
}
