"use client";

import Link from "next/link";
import styles from "../../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Ingénieur IT spécialisé en Développement Web & Mobile et Infrastructure Réseau
        </h1>

        <p className={styles.subtitle}>
          Conception d’infrastructures sécurisées, développement d’applications
          web et mobiles performantes, architecture backend Spring Boot,
          bases de données PostgreSQL et solutions cloud modernes.
        </p>

        <div className={styles.buttons}>
          <Link href="/portfolio">
            <button className={styles.primaryBtn}>
              Voir mon portfolio
            </button>
          </Link>

          <Link href="/contact">
            <button className={styles.secondaryBtn}>
              Me contacter
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}