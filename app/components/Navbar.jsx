"use client";

import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export default function Navbar({ onAdminClick, isAdmin, onLogout }) {
  return (
    <nav className={styles.navbar}>
      {/* LOGO */}
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="logo"
          className={styles.logo}
        />
      </Link>

      {/* MENU */}
      <div className={styles.menu}>
        {[
          { label: "Mon portfolio", href: "/portfolio" },
          { label: "Mes documents", href: "/documents" },
          { label: "Me contacter", href: "/contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={styles.link}
          >
            {item.label}
          </Link>
        ))}

        {isAdmin && (
          <Link href="/admin" className={styles.link}>
            Stats
          </Link>
        )}
      </div>

      {/* ADMIN */}
      <div>
        {!isAdmin ? (
          <button
            onClick={onAdminClick}
            className={styles.adminIcon}
          >
            ⚙
          </button>
        ) : (
          <button
            onClick={onLogout}
            className={styles.logoutBtn}
          >
            Déconnexion
          </button>
        )}
      </div>
    </nav>
  );
}