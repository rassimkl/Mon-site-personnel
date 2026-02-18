"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
      }}
    >
      {/* ================= NETWORK SIDE ================= */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 80px",
          color: "white",
          overflow: "hidden",
          backgroundImage: "url('/images/network-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay sombre */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(10,30,40,0.9), rgba(20,60,80,0.85))",
          }}
        />

        {/* Contenu */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "25px",
              marginTop: "-65px",
            }}
          >
            🌐 Ingénieur Réseau
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              opacity: 0.9,
              maxWidth: "500px",
            }}
          >
            Architecture et administration d’infrastructures réseau, déploiement VoIP, sécurisation des systèmes et optimisation des performances dans des environnements multi-serveurs.
          </p>

          <div style={{ marginTop: "40px" }}>
            <Link href="/portfolio/reseau">
              <button
                style={{
                  background: "white",
                  color: "#0f2027",
                  padding: "14px 32px",
                  borderRadius: "30px",
                  border: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Mon portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
      

      {/* ================= DEV SIDE ================= */}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "100px 80px",
          color: "white",
          overflow: "hidden",
          backgroundImage: "url('/images/dev-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay sombre */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(100,0,120,0.85), rgba(255,0,85,0.85))",
          }}
        />

        {/* Contenu */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "25px",
            }}
          >
            💻 Développeur Web & Mobile - Full Stack
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              opacity: 0.95,
              maxWidth: "500px",
            }}
          >
Conception et développement d’applications web et mobiles modernes, intégrant des architectures sécurisées et des bases de données relationnelles.
          </p>

          <div style={{ marginTop: "40px", display: "flex", gap: "20px" }}>
            <Link href="/portfolio/developpement">
              <button
                style={{
                  background: "white",
                  color: "#ff0055",
                  padding: "14px 32px",
                  borderRadius: "30px",
                  border: "none",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Mon portfolio
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
