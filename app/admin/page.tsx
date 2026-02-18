"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPage() {
  const [stats, setStats] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin !== "true") {
      router.push("/");
      return;
    }

    fetch("/api/stats")
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  if (!stats) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    
    <div
      style={{
        minHeight: "100vh",
        padding: "160px",
        color: "white",
        background: "linear-gradient(135deg, #1e1e3f, #5e2b97)",
      }}
    >

            {/* 🔥 LOGO */}
      <Link
        href="/"
        style={{
          position: "absolute",
          top: "40px",
          left: "60px",
          zIndex: 2,
        }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{
            width: "90px",
            borderRadius: "20px",
            cursor: "pointer",
            boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
          }}
        />
      </Link>

      <h1 style={{ fontSize: "40px", marginBottom: "50px" }}>
        📊 Statistiques
      </h1>

      <div style={{ display: "flex", gap: "80px" }}>
        <div>
          <h2>Total visites</h2>
          <p style={{ fontSize: "60px" }}>{stats.totalVisits}</p>
        </div>

        <div>
          <h2>Visiteurs uniques</h2>
          <p style={{ fontSize: "60px" }}>{stats.uniqueVisitors}</p>
        </div>

        <div>
          <h2>Visites aujourd’hui</h2>
          <p style={{ fontSize: "60px" }}>
            {stats.dailyVisits[today] || 0}
          </p>
        </div>
      </div>
    </div>
  );
}
