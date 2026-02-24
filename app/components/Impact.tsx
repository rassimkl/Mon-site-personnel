"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "../../styles/Impact.module.css";
import { Gauge, GraduationCap } from "lucide-react";
import { CreditCard } from "lucide-react";
import { PhoneCall } from "lucide-react";

function Counter({ end, startAnimation }: { end: number; startAnimation: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return <span>{count}</span>;
}

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section className={styles.section} ref={ref}>
      <div className={styles.wrapper}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Chiffres & Impact
        </motion.h2>

        <div className={styles.grid}>

          {/* WordPress */}
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className={`${styles.bigNumber} ${styles.numberText}`}>
              +<Counter end={50} startAnimation={isInView} />%
            </div>
            <h3>Performance du site WordPress</h3>
            <p>
              Optimisation complète du site public de mon entreprise :
              amélioration du temps de chargement (+50%), meilleure
              fluidité et optimisation du référencement sur Google et ChatGPT.
            </p>
          </motion.div>

          {/* Laravel */}
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className={styles.bigNumber}
              animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
              transition={{ duration: 0.6 }}
            >
              <Gauge size={80} />
            </motion.div>

            <h3>Optimisation de l'administration</h3>
            <p>
              Site de gestion interne (Laravel) :
              automatisation de processus internes.
              Réduction du temps administratif et meilleure organisation.
            </p>
          </motion.div>

          {/* Application mobile */}
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className={styles.bigNumber}
              animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.8 }}
            >
              <GraduationCap size={80} />
            </motion.div>

            <h3>Digitalisation de l'apprentissage</h3>
            <p>
              Application mobile (Spring Boot / React Native) :
              entraînements linguistiques et test de positionnement
              automatisé avec résultats instantanés.
            </p>
          </motion.div>

          {/* Application mobile */}
          <motion.div
            className={styles.block}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              className={styles.bigNumber}
              animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.8 }}
            >
              <CreditCard size={80} />
            </motion.div>

            <h3>Réservation et paiement sécurisé</h3>
            <p>
              Application mobile (Spring Boot / React Native) :
              Réservation de cours d'une manière sécurisée et pratique
            </p>
          </motion.div>

              {/* VoIP */}
              <motion.div
                className={styles.block}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  className={styles.bigNumber}
                  animate={isInView ? { scale: [0.8, 1.1, 1] } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <PhoneCall size={80} />
                </motion.div>

                <h3>Optimisation des communications VoIP</h3>
                <p>
                  Mise en place de mécanismes QoS permettant la priorisation
                  du trafic voix, réduisant la latence et améliorant
                  la stabilité des communications internes.
                </p>
              </motion.div>

        </div>
      </div>
    </section>
  );
}