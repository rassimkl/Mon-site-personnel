"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../styles/AdminPage.module.css";

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
    <div className={styles.container}>

      <Link href="/" className={styles.logoLink}>
        <img
          src="/images/logo.png"
          alt="Logo"
          className={styles.logo}
        />
      </Link>

      <h1 className={styles.title}>📊 Statistiques</h1>

      <div className={styles.statsRow}>

        <div className={styles.statBlock}>
          <h2>Total visites</h2>
          <p className={styles.statNumber}>
            {stats.total_visits}
          </p>
        </div>

        <div className={styles.statBlock}>
          <h2>Visiteurs uniques</h2>
          <p className={styles.statNumber}>
            {stats.unique_visitors}
          </p>
        </div>

        <div className={styles.statBlock}>
          <h2>Visites aujourd'hui</h2>
          <p className={styles.statNumber}>
            {todayStats ? todayStats.visits : 0}
          </p>
        </div>

      </div>
    </div>
  );
}