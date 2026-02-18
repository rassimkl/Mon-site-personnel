"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AdminModal from "./components/AdminModal";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  fetch("/api/track", { method: "POST" });
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
      <Navbar 
        onAdminClick={() => setShowModal(true)} 
        isAdmin={isAdmin}
        onLogout={handleLogout}
      />

      <Hero isAdmin={isAdmin} />

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
