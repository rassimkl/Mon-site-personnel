"use client";

import Link from "next/link";
import styles from "../../styles/PortfolioPage.module.css";

export default function PortfolioPage() {
  return (
    <section className={styles.container}>
      
      {/* LOGO RETOUR */}
      <Link href="/" className={styles.logoLink}>
        <img
          src="/images/logo.png"
          alt="Logo"
          className={styles.logo}
        />
      </Link>

      {/* RESEAUX */}
      <div className={`${styles.section} ${styles.network}`}>
        <div className={`${styles.overlay} ${styles.overlayNetwork}`} />
        <Link href="/portfolio/reseau">
          <button className={styles.button}>
            Réseau
          </button>
        </Link>
      </div>

      {/* DEV */}
      <div className={`${styles.section} ${styles.dev}`}>
        <div className={`${styles.overlay} ${styles.overlayDev}`} />
        <Link href="/portfolio/developpement">
          <button className={styles.button}>
            Développement
          </button>
        </Link>
      </div>

    </section>
  );
}