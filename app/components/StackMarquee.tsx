"use client";

import styles from "../../styles/StackMarquee.module.css";
import {
  FaJava,
  FaDocker,
  FaLinux,
  FaPhp,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiLaravel,
  SiReact,
  SiPostgresql,
  SiGithubactions,
} from "react-icons/si";

export default function StackMarquee() {

  const stack = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Laravel", icon: <SiLaravel /> },
    { name: "React Native", icon: <SiReact /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "CI/CD", icon: <SiGithubactions /> },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {[...stack, ...stack].map((tech, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.icon}>{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}