"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import AdminModal from "./AdminModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      setIsAdmin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  };

  return (
    <>
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <nav className={`${styles.navbar} ${isOpen ? styles.active : ""}`}>
        <div className={styles.panel}>
          <Link href="/" className={styles.link} onClick={() => setIsOpen(false)}>
            Accueil
          </Link>

          <Link href="/contact" className={styles.link} onClick={() => setIsOpen(false)}>
            Me contacter
          </Link>

          {!isAdmin ? (
            <button
              onClick={() => setShowModal(true)}
              className={styles.adminIcon}
            >
              ⚙
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className={styles.logoutBtn}
            >
              Déconnexion
            </button>
          )}
        </div>
      </nav>

      {showModal && (
        <AdminModal
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            localStorage.setItem("isAdmin", "true");
            setIsAdmin(true);
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}