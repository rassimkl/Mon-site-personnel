"use client";

import styles from "../../../styles/DeveloppementPage.module.css";
import { Database, Smartphone, Rocket, Server } from "lucide-react";

export default function Developpement() {
  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1>Mes travaux en développement</h1>
        <p>
          Applications web & mobile – architecture backend, API sécurisées et déploiement.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className={styles.section}>
        <div className={styles.experienceCard}>
          <Server size={28} className={styles.icon} />

          <div>
            <h2>Développeur Full Stack – The Inspire Academy</h2>
            <span className={styles.period}>Octobre 2025 – Mars 2026</span>

              <p>
                Intervention sur une application interne de gestion développée en PHP / Laravel.
                L’application ayant déjà été conçue, j’interviens sur son évolution :
                ajout de nouvelles fonctionnalités, amélioration des performances
                et optimisation de l’architecture existante.
              </p>

            <br/> 
              <p>
                En parallèle, je travaille également sur le site public de l’entreprise
                sous WordPress : amélioration de la fluidité, optimisation des pages,
                mise à jour des contenus et intégration de nouvelles fonctionnalités.
              </p>

              <br/>
              <p>
                Je développe actuellement une application mobile avec un backend
                en Java / Spring Boot et un frontend en React Native,
                incluant la mise en place d’API REST sécurisées (JWT),
                la conteneurisation avec Docker et le déploiement automatisé via CI/CD.
              </p>

            <div className={styles.tags}>
              <span>PHP / Laravel</span>
              <span>Architecture MVC</span>
              <span>Spring Boot / Java</span>
              <span>Architecture en couches</span>
              <span>Authentification JWT</span>
              <span>React Native / JavaScript / TypeScript</span>
              <span>Docker</span>
              <span>Git / GitHub / GitHub actions</span>
              <span>WordPress</span>
            </div>

              <a
                href="https://github.com/rassimkl/inspireAcademy"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Voir le code du site Laravel sur GitHub →
              </a>

              <br/>
              <a
                href="https://github.com/rassimkl/AppliMobileIA_API"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Voir le code de l'application mobile (Backend) sur GitHub →
              </a>

              <br/>
              <a
                href="https://github.com/rassimkl/AppliMobileIAFront"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Voir le code de l'application mobile (Frontend) sur GitHub →
              </a>
          </div>
        </div>
      </section>

      {/* PROJETS */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>
          Projets académiques & personnels
        </h2>

        <div className={styles.projectsGrid}>

          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              Portfolio Full Stack – Next.js
            </h3>

            <p>
              Application moderne avec API sécurisées. <br/>
              JWT et base PostgreSQL. <br/>
              Architecture modulaire avec App Router.
            </p>

            <div className={styles.tags}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>PostgreSQL</span>
              <span>Authentification JWT</span>
            </div>
              <a
                href="https://github.com/rassimkl/Mon-site-personnel"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                Voir le code sur GitHub →
              </a>
          </div>

          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              Application de gestion de patients dans un hopital
            </h3>
            
            <h4>Projet de fin de cycle Licence</h4>

            <br/>
            
            <p>
              Application web multi-rôles avec backend PHP/MySQL. <br/>
              Modélisation UML et architecture relationnelle optimisée.
            </p>

            <div className={styles.tags}>
              <span>HTML5</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>JavaScript</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>

              <a
                href="/documents/rapport_projet_fin_de_cycle_(licence).pdf"
                target="_blank"
                className={styles.projectLink}
              >
                Consulter le rapport de fin de cycle licence (PDF) →
              </a>
          </div>

          <div className={styles.projectCard}>
            <h3 className={styles.projectTitle}>
              Application météo – Vue.js
            </h3>

            <p>
              SPA développée en Vue.js avec intégration de l’API OpenWeatherMap
              et gestion asynchrone des données.
            </p>

            <div className={styles.tags}>
              <span>Vue.js</span>
              <span>API REST</span>
              <span>JavaScript</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}