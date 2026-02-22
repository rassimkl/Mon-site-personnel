"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AdminModal from "./components/AdminModal";
import Parcours from "./components/Parcours";
import Competences from "./components/Competences"; // ✅ AJOUT

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Tracking visite
  useEffect(() => {
    fetch("/api/track", { method: "POST" });
  }, []);

  // Stats
  useEffect(() => {
    fetch("/api/stats", {
      method: "POST"
    });
  }, []);

  // Lire localStorage au chargement
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
      <Hero />

      <Parcours />

      {/* ✅ SECTION COMPÉTENCES */}
      <Competences />

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