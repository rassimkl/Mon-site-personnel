"use client";

import Link from "next/link";
import styles from "../../../styles/DeveloppementPage.module.css";

export default function DeveloppementPage() {
  return (
    <div className={styles.container}>
      
      <div className={styles.overlay} />

      {/* LOGO */}
      <Link href="/" className={styles.logoLink}>
        <img
          src="/images/logo.png"
          alt="Logo"
          className={styles.logo}
        />
      </Link>

      <div className={styles.content}>

        <div style={{ marginTop: "30px", marginBottom: "20px" }}>
          <Link href="/portfolio" className={styles.backLink}>
            ← Retour
          </Link>
        </div>

        {/* HEADER */}
        <div className={styles.header}>
          <h1 className={styles.title}>
            Développeur Web & Mobile - Full Stack
          </h1>

          <p className={styles.paragraph}>
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
        <h2 className={styles.sectionTitle}>
          Expérience Professionnelle
        </h2>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>
            Développeur Web & Mobile – The Inspire Academy (stage)
          </h3>
          <p className={styles.cardSub}>
            Octobre 2025 – Mars 2026 | Biarritz
          </p>

          <p className={styles.cardText}>
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
        <h2 className={styles.sectionTitle}>Mes projets</h2>

        <div className={styles.projectsGrid}>

          {/* PROJET 1 */}
          <div className={`${styles.card} ${styles.cardSmall}`}>
            <h3 className={styles.cardTitle}>
              Application Mobile "The Inspire Academy"
            </h3>

            <p className={styles.cardText}>
              • Backend : Java, Spring Boot, API REST sécurisée <br />
              • Base de données : PostgreSQL <br />
              • Authentification : JWT <br />
              • Architecture : séparation Controller / Service / Repository <br />
              • Frontend mobile : React Native (application cross-platform) <br />
              • Communication via API REST
            </p>
          </div>

          {/* PROJET 2 */}
          <div className={`${styles.card} ${styles.cardSmall}`}>
            <h3 className={styles.cardTitle}>Mon site "portfolio"</h3>

            <p className={styles.cardText}>
              • Développement avec Next.js (App Router) <br />
              • API Routes sécurisées <br />
              • Authentification administrateur avec JWT <br />
              • Hashage des mots de passe avec bcrypt <br />
              • Base de données PostgreSQL <br />
              • Upload et gestion de documents <br />
              • Routing dynamique <br />
              • Architecture modulaire
            </p>
          </div>

          {/* PROJET 3 */}
          <div className={`${styles.card} ${styles.cardSmall}`}>
            <h3 className={styles.cardTitle}>
              Application de Gestion de Patients
            </h3>

            <p className={styles.cardText}>
              • Analyse et spécification des besoins <br />
              • Modélisation UML (cas d’utilisation, séquence, activité,
              diagramme de classes) <br />
              • Conception du modèle relationnel et dictionnaire de données <br />
              • Authentification multi-rôles (Administrateur, Médecin, Agent de
              saisie) <br />
              • Gestion complète des patients : admission, modification,
              archivage <br />
              • Génération et impression de documents administratifs <br />
              • Calcul de statistiques (naissances, décès, hospitalisations) <br />
              • Frontend : HTML, CSS, JavaScript, Bootstrap <br />
              • Backend : PHP <br />
              • Base de données : MySQL (phpMyAdmin, XAMPP)
            </p>
          </div>

          {/* PROJET 4 */}
          <div className={`${styles.card} ${styles.cardSmall}`}>
            <h3 className={styles.cardTitle}>Application Météo</h3>

            <p className={styles.cardText}>
              • Application web développée avec Vue.js <br />
              • Intégration de l’API OpenWeatherMap <br />
              • Récupération et affichage dynamique des données météo <br />
              • Utilisation de requêtes asynchrones
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}