"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../../styles/DocumentsPage.module.css";

const categories = [
  { name: "Attestations", slug: "Attestations" },
  { name: "Certifications", slug: "Certifications" },
  { name: "Diplômes", slug: "Diplômes" },
  { name: "Rapports & Projets", slug: "Rapports_Projets" },
  { name: "Relevés de notes", slug: "Relevés de notes" },
];

export default function DocumentsPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [folder, setFolder] = useState("Attestations");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    if (admin === "true") setIsAdmin(true);
  }, []);

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Veuillez choisir un fichier");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("folder", folder);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) alert("Upload réussi !");
    else alert("Erreur upload");
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />

      <Link href="/" className={styles.logoLink}>
        <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      </Link>

      <div className={styles.content}>
        <h1 className={styles.title}>Parcours & Documents</h1>

        <div className={styles.splitLayout}>

          {/* PARCOURS */}
          <div>
            <h2 style={{ marginBottom: "30px" }}>🎓 Mon Parcours</h2>

            <div className={styles.parcoursCard}>
              <h3>Stage de fin d'études (Développeur Web et Mobile) (Octobre 2025-Mars 2026)</h3>
              <h2>The Inspire Academy, Biarritz</h2>
              <hr />
              <h3>Master Ingénierie et Innovation en Réseau et Image (2023-2025)</h3>
              <h2>Univérsité Sorbonne Paris Nord, Villetaneuse</h2>
              <hr />
              <h3>Master 1 Réseau et Sécurité (2022-2023)</h3>
              <h2>Univérsité de Béjaïa</h2>
              <hr />
              <h3>Licence Réseau et Sécurité (2019-2022)</h3>
              <h2>Université de Béjaïa</h2>
              <hr />
              <h3>Baccalauréat série mathémathiques (2019)</h3>
              <h2>Tizi Ouzou</h2>
            </div>
          </div>

          {/* DOCUMENTS */}
          <div>
            <h2 style={{ marginBottom: "30px" }}>📂 Mes Documents</h2>

            <div className={styles.documentsGrid}>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/documents/${cat.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className={styles.documentCard}>
                    {cat.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>

        {isAdmin && (
  <div className={styles.adminPanel}>
    <h2 className={styles.adminTitle}>👑 Espace Administrateur</h2>

    <div className={styles.uploadCard}>
      
      <div
        className={styles.dropZone}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        {selectedFile ? (
          <div className={styles.fileInfo}>
            📄 {selectedFile.name}
          </div>
        ) : (
          <div className={styles.dropText}>
            Glissez votre fichier ici ou cliquez pour sélectionner
          </div>
        )}

        <input
          id="fileInput"
          type="file"
          hidden
          onChange={(e) =>
            setSelectedFile(e.target.files ? e.target.files[0] : null)
          }
        />
      </div>

      <div className={styles.uploadControls}>
        <select
          value={folder}
          onChange={(e) => setFolder(e.target.value)}
          className={styles.select}
        >
          {categories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
        </select>

        <button onClick={handleUpload} className={styles.uploadButton}>
          🚀 Téléverser
        </button>
      </div>

    </div>
  </div>
)}
      </div>
    </div>
  );
}