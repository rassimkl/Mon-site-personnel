"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type DailyStat = {
  id: number;
  date: string;
  visits: number;
};

type Stats = {
  id: number;
  total_visits: number;
  unique_visitors: number;
  dailyStats: DailyStat[];
};

export default function AdminPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin !== "true") {
      router.push("/");
      return;
    }

    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error(err));
  }, []);

  if (!stats) return null;

  const today = new Date().toISOString().split("T")[0];

  const todayStats = stats.dailyStats.find(
    (d) => d.date.split("T")[0] === today
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "120px",
        color: "white",
        background: "linear-gradient(135deg, #1e1e3f, #5e2b97)",
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          position: "absolute",
          top: "40px",
          left: "60px",
          zIndex: 2,
        }}
      >
        <img src="/images/logo.png" alt="Logo" width={90} />
      </Link>

      <h1 style={{ fontSize: "40px", marginBottom: "50px" }}>
        📊 Statistiques
      </h1>

      <div style={{ display: "flex", gap: "80px" }}>
        {/* Total */}
        <div>
          <h2>Total visites</h2>
          <p style={{ fontSize: "60px" }}>
            {stats.total_visits}
          </p>
        </div>

        {/* Unique */}
        <div>
          <h2>Visiteurs uniques</h2>
          <p style={{ fontSize: "60px" }}>
            {stats.unique_visitors}
          </p>
        </div>

        {/* Aujourd'hui */}
        <div>
          <h2>Visites aujourd'hui</h2>
          <p style={{ fontSize: "60px" }}>
            {todayStats ? todayStats.visits : 0}
          </p>
        </div>
      </div>
    </div>
  );
}
