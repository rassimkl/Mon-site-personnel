"use client";

import styles from "../../styles/Parcours.module.css";

export default function Parcours() {
  return (
    <section className={styles.parcours}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mon Parcours</h2>

        <div className={styles.timeline}>

          <div className={styles.card}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle} >Stage – Développeur Web (The Inspire Academy, Biarritz)</h3>
              <p>
                Développeur principal au sein de l’entreprise, j’interviens sur l’ensemble des projets web et applicatifs. <br/> <br/>

                J’ai contribué à l’amélioration et à l’évolution d’une application interne développée en PHP/Laravel, en ajoutant de nouvelles fonctionnalités et en optimisant celles existantes. <br/> <br/>

                J’assure également la gestion et l’évolution du site public sous WordPress (optimisation, mise à jour de contenus, amélioration de la fluidité et des pages). <br/> <br/>

                En parallèle, je développe actuellement une application mobile avec un backend en Java / Spring Boot et un frontend en React Native. <br/> <br/>

                J’ai mis en place la conteneurisation du backend et de la base de données PostgreSQL avec Docker, ainsi qu’une automatisation CI/CD incluant le build, le push vers Docker Hub et le déploiement automatique.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.dot}></div>
            <div className={styles.content}>
              <h3 className={styles.cardTitle}>Ma formation</h3>
              <p>
                Titulaire d’une Licence en Réseaux et Sécurité obtenue à l’Université de Béjaïa, j’y ai acquis des bases solides en administration réseau, sécurité informatique et développement web. <br/> <br/>

                J’ai poursuivi avec une première année de Master dans la même spécialité, approfondissant les concepts de réseau, de sécurité et de programmation avancée. <br/> <br/>

                J’ai ensuite intégré un Master en Réseaux et Développement Web en France, où j’ai renforcé mes compétences en administration réseau, Java, Spring Boot et technologies web modernes. <br/> <br/>

                Ce parcours m’a permis de développer un profil hybride alliant infrastructure réseau et développement d'applications.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}