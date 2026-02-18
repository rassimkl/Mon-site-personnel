"use client";

import Link from "next/link";

export default function DeveloppementPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",

        // ✅ on garde ta structure
        padding: "100px 80px",
        color: "white",

        // ✅ design only
        backgroundImage: "url('/images/dev.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Overlay design */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(100,0,120,0.92), rgba(0, 0, 0, 0.9))",
        }}
      />

      {/* ✅ Logo accueil (ajout visuel seulement) */}
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

      {/* ✅ contenu au-dessus de l’overlay */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ marginTop: "30px", marginBottom: "20px" }}>
          <Link
            href="/portfolio"
            style={{
              // ✅ visuel uniquement
              color: "white",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.35)",
              padding: "8px 18px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
            }}
          >
            ← Retour
          </Link>
        </div>

        {/* HEADER */}
        <div style={{ maxWidth: "900px", marginBottom: "80px" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Développeur Web & Mobile - Full Stack
          </h1>

          <p style={{ opacity: 0.8, fontSize: "18px", lineHeight: "1.6" }}>
            Développeur Web & Mobile Full Stack, je conçois et développe des
            applications web et mobiles modernes, en maîtrisant aussi bien le
            front-end, le back-end que la gestion des bases de données et des
            environnements de déploiement. <br /> <br />
            • Frontend : React.js, Next.js, Vue.js, HTML, CSS, JavaScript,
            Tailwind CSS, Bootstrap <br />
            • Backend : Java (Spring Boot), PHP (Laravel), développement d’API
            REST sécurisées <br />
            • Mobile : React Native (applications cross-platform) <br />
            • Bases de données : PostgreSQL, MySQL, SQL <br />
            • Architecture : POO, Design Patterns, modélisation UML <br />
            • Outils & DevOps : Git/GitHub, Postman, Docker, VS Code, XAMPP,
            Tomcat <br />
            • CMS : WordPress
          </p>
        </div>

        {/* EXPÉRIENCE */}
        <h2 style={{ marginBottom: "30px" }}>Expérience Professionnelle</h2>

        <div
          style={{
            // ✅ même structure, juste glass
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
            padding: "30px",
            borderRadius: "20px",
            marginBottom: "60px",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(15px)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>
            Développeur Web & Mobile – The Inspire Academy
          </h3>
          <p style={{ opacity: 0.7, marginBottom: "15px" }}>
            Octobre 2025 – Mars 2026 | Biarritz
          </p>

          <p style={{ opacity: 0.85 }}>
            • J'interviens sur l'application web interne de l'école développée
            en PHP/Laravel (amélioration de fonctionnalités existantes, ajout de
            nouvelles fonctionnalités). <br />
            • Je travaille sur le site publique de l'école créé avec Wordpress
            (fluidités, contenu, création de nouvelles pages et
            fonctionnalités). <br />
            • Je développe une application mobile avec backend (Java/Spring
            Boot) et Frontend (React Native).
          </p>
        </div>

        {/* PROJETS */}
        <h2 style={{ marginBottom: "30px" }}>Mes projets</h2>

        <div
          style={{
            // ✅ EXACTEMENT comme avant
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "30px",
          }}
        >
          {/* PROJET 1 */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(15px)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              Application Mobile "The Inspire Academy"
            </h3>

            <p style={{ opacity: 0.85 }}>
              • Backend : Java, Spring Boot, API REST sécurisée <br />
              • Base de données : PostgreSQL <br />
              • Authentification : JWT <br />
              • Architecture : séparation Controller / Service / Repository{" "}
              <br />
              • Frontend mobile : React Native (application cross-platform){" "}
              <br />
              • Communication via API REST
            </p>
          </div>

          {/* PROJET 2 */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(15px)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Mon site "portfolio"</h3>

            <p style={{ opacity: 0.85 }}>
              • Développement avec Next.js (App Router) <br />
              • API Routes sécurisées <br />
              • Authentification administrateur avec JWT <br />
              • Hashage des mots de passe avec bcrypt <br />
              • Base de données PostgreSQL <br />
              • Upload et gestion de documents <br />
              • Routing dynamique <br />
              • Architecture modulaire <br />
            </p>
          </div>

          {/* PROJET 3 */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(15px)",
              transition: "0.3s",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>
              Application de Gestion de Patients
            </h3>

            <p style={{ opacity: 0.85 }}>
              • Analyse et spécification des besoins <br />
              • Modélisation UML (cas d’utilisation, séquence, activité,
              diagramme de classes) <br />
              • Conception du modèle relationnel et dictionnaire de données{" "}
              <br />
              • Authentification multi-rôles (Administrateur, Médecin, Agent de
              saisie) <br />
              • Gestion complète des patients : admission, modification,
              archivage <br />
              • Génération et impression de documents administratifs <br />
              • Calcul de statistiques (naissances, décès, hospitalisations){" "}
              <br />
              • Frontend : HTML, CSS, JavaScript, Bootstrap <br />
              • Backend : PHP <br />
              • Base de données : MySQL (phpMyAdmin, XAMPP)
            </p>
          </div>

          {/* PROJET 4 */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
              padding: "25px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(15px)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Application Météo</h3>

            <p style={{ opacity: 0.85 }}>
              • Application web développée avec Vue.js <br />
              • Intégration de l’API OpenWeatherMap <br />
              • Récupération et affichage dynamique des données météo <br />
              • Utilisation de requêtes asynchrones <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
