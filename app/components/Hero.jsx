"use client";

import Link from "next/link";
import styles from "../../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Overlay gradient */}
      <div className={styles.overlay} />

      {/* Effet lumière */}
      <div className={styles.lightEffect} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Ingénieur IT
          <span className={styles.highlight}> Développement Web & Mobile </span>
          & Infrastructure Réseau
        </h1>

        <p className={styles.subtitle}>
        Je conçois des infrastructures sécurisées et développe des applications web et mobiles performantes basées sur des architectures modernes.
        </p>

        <div className={styles.buttons}>
          <a href="https://www.linkedin.com/in/rassim-kloul-ba5b842a5/" className={styles.primaryBtn}>
            LinkedIn
          </a>

          <Link href="/contact" className={styles.secondaryBtn}>
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}