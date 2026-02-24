"use client";

import styles from "../../styles/FinalCTA.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Actuellement ouvert aux opportunités en développement & ingénierie IT
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Disponible pour intégrer une équipe technique en backend, full stack ou environnement IT structuré.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className={styles.primaryBtn}>
            Me contacter
          </Link>

          <a
            href="https://www.linkedin.com/in/rassim-kloul-ba5b842a5/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Voir mon LinkedIn
          </a>
        </motion.div>

      </div>
    </section>
  );
}