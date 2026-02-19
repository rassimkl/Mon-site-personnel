"use client";

import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* NETWORK SIDE */}
      <div className={`${styles.side} ${styles.network}`}>
        <div className={styles.overlayNetwork} />

        <div className={styles.content}>
          <h1 className={`${styles.title} ${styles.titleNetwork}`}>
            🌐 Ingénieur Réseau
          </h1>

          <p className={styles.description}>
            Architecture et administration d’infrastructures réseau, déploiement
            VoIP, sécurisation des systèmes et optimisation des performances
            dans des environnements multi-serveurs.
          </p>

          <div className={styles.buttonContainer}>
            <Link href="/portfolio/reseau">
              <button
                className={`${styles.button} ${styles.buttonNetwork}`}
              >
                Mon portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* DEV SIDE */}
      <div className={`${styles.side} ${styles.dev}`}>
        <div className={styles.overlayDev} />

        <div className={styles.content}>
          <h1 className={styles.title}>
            💻 Développeur Web & Mobile - Full Stack
          </h1>

          <p
            className={`${styles.description} ${styles.descriptionDev}`}
          >
            Conception et développement d’applications web et mobiles modernes,
            intégrant des architectures sécurisées et des bases de données
            relationnelles.
          </p>

          <div className={styles.buttonContainer}>
            <Link href="/portfolio/developpement">
              <button
                className={`${styles.button} ${styles.buttonDev}`}
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
