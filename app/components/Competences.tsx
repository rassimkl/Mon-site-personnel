"use client";

import Link from "next/link";
import styles from "../../styles/Competences.module.css";

export default function Competences() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Mes Compétences</h2>

      <div className={styles.grid}>

        {/* DEVELOPPEMENT */}
        <div className={styles.card}>
          <div className={styles.icon}>💻</div>

          <h3>Développement Web & Mobile</h3>

          <p>
            Conception d’applications modernes, architectures backend robustes
            et interfaces dynamiques.
          </p>

          <div className={styles.tags}>
            <span>Java / Spring Boot</span>
            <span>Architecture en couches</span>
            <span>PHP / Laravel</span>
            <span>Architecture MVC</span>
            <span>React / React Native</span>
            <span>JavaScript / TypeScript</span>
            <span>PostgreSQL</span>
            <span>Docker & CI/CD</span>
          </div>

          <Link href="../portfolio/developpement" className={styles.button}>
            Voir mes travaux en développement →
          </Link>
        </div>

        {/* RESEAU */}
        <div className={styles.card}>
          <div className={styles.icon}>🌐</div>

          <h3>Réseaux & Infrastructure</h3>

          <p>
            Administration réseau, sécurité des systèmes et déploiement
            d’infrastructures fiables.
          </p>

          <div className={styles.tags}>
            <span>Administration réseau</span>
            <span>Routage</span>
            <span>VLAN & Sous-réseaux</span>
            <span>VoIP</span>
            <span>Sécurité</span>
            <span>Linux & Shell</span>
          </div>

          <Link href="../portfolio/reseau" className={styles.button}>
            Voir mes travaux en réseau →
          </Link>
        </div>

      </div>
    </section>
  );
}