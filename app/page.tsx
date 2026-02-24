"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AdminModal from "./components/AdminModal";
import Parcours from "./components/Parcours";
import Competences from "./components/Competences"; // ✅ AJOUT
import Impact from "./components/Impact";
import Confiance from "./components/Confiance";
import Recommandation from "./components/Recommandation";
import StackMarquee from "./components/StackMarquee";
import FinalCTA from "./components/FinalCTA";

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
      
      <Impact />

      <Confiance />

      {/* <Recommandation /> */}

      <FinalCTA />

      <StackMarquee />

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