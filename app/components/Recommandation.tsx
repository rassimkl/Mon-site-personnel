"use client";

import { motion } from "framer-motion";
import styles from "../../styles/Recommandation.module.css";
import { Quote, ShieldCheck } from "lucide-react";

export default function Recommandation() {
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
          Recommandation professionnelle
        </motion.h2>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 80, rotate: -2 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <div className={styles.badge}>
            <ShieldCheck size={16} />
            Recommandation certifiée
          </div>

          <div className={styles.companyLogo}>
            <img src="/images/logoE.png" alt="Logo entreprise" />
          </div>

          <Quote className={styles.quoteIcon} size={40} />

          <p className={styles.text}>
            Nous attestons que Rassim KLOUL a fait preuve d’un grand
            professionnalisme, d’autonomie et d’une capacité
            d’adaptation remarquable. Son implication dans
            l’amélioration de nos systèmes internes a eu un impact
            significatif sur notre organisation.
          </p>

          {/* SIGNATURE QUI S'ÉCRIT VRAIMENT */}
          <div className={styles.signature}>
  <motion.svg
    viewBox="0 0 500 150"
    className={styles.signatureSvg}
  >
    <motion.path
      d="
      M40 95
      Q70 40 100 85
      Q120 115 150 70
      Q180 35 210 90
      Q230 120 260 75
      Q290 40 320 90
      Q350 120 380 75
      Q410 50 450 85
      "
      stroke="#1a1a2e"
      strokeWidth="3"
      fill="transparent"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2.2, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.8 }}
    />
  </motion.svg>

  <span className={styles.signatureNom}>
    NOM Prénom
  </span>

  <span className={styles.signatureTitle}>
    Directrice – The Inspire Academy
  </span>
</div>

  {/* Lien vers attestation */}
  <a
    href="/documents/attestation_recommandation.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.attestationLink}
  >
    Voir l’attestation officielle →
  </a>

        </motion.div>

      </div>
    </section>
  );
}