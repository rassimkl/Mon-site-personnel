"use client";

import styles from "../../styles/Confiance.module.css";
import { Zap, RefreshCw, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Confiance() {
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
          Pourquoi me faire confiance ?
        </motion.h2>

        <div className={styles.grid}>

          {[{
            icon: <Zap size={32} />,
            title: "Autonomie & responsabilité",
            text: "Capable de travailler de manière autonome sur des projets complets, de la conception jusqu’au déploiement."
          },
          {
            icon: <RefreshCw size={32} />,
            title: "Apprentissage rapide",
            text: "Capacité d’adaptation aux nouveaux environnements et montée rapide en compétence."
          },
          {
            icon: <Users size={32} />,
            title: "Travail en équipe",
            text: "Collaboration fluide avec équipes techniques et métier. Communication claire."
          }].map((item, index) => (
            <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ amount: 0.1 }} 
            >
              <div className={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}