"use client";


import Link from "next/link";
import {useEffect, useState } from "react";

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
  if (admin === "true") {
    setIsAdmin(true);
  }
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

  if (res.ok) {
    alert("Upload réussi !");
  } else {
    alert("Erreur upload");
  }
};



  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "160px 80px 100px 80px",
        color: "white",
        position: "relative",
        overflow: "hidden",
        backgroundImage: "url('/images/dev-workspace.jpg')", // 🔥 ton image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(20,20,40,0.92), rgba(80,0,120,0.85))",
        }}
      />

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

      {/* CONTENU */}
      <div style={{ position: "relative", zIndex: 2 }}>

        {/* TITRE */}
        <h1
          style={{
            fontSize: "52px",
            marginBottom: "70px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Parcours & Documents
        </h1>

        {/* SPLIT LAYOUT */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "80px",
          }}
        >
          {/* 🎓 PARCOURS */}
          <div>
            <h2 style={{ marginBottom: "30px" }}>🎓 Mon Parcours</h2>

            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                backdropFilter: "blur(20px)",
                padding: "40px",
                borderRadius: "25px",
                border: "1px solid rgba(255,255,255,0.2)",
                lineHeight: 1.8,
                boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
              }}
            >
              <h3>Stage de fin d'études (Développeur Web et Mobile) (Octobre 2025-Mars 2026)</h3>
              <h2>The Inspire Academy, Biarritz</h2>

              <hr style={{ margin: "25px 0", borderColor: "rgba(255,255,255,0.1)" }} />

              <h3>Master Ingénierie et Innovation en Réseau et Image (2023-2025)</h3>
              <h2>Univérsité Sorbonne Paris Nord, Villetaneuse</h2>

              <hr style={{ margin: "25px 0", borderColor: "rgba(255,255,255,0.1)" }} />

              <h3>Master 1 Réseau et Sécurité (2022-2023)</h3>
              <h2>Univérsité de Béjaïa</h2>

              <hr style={{ margin: "25px 0", borderColor: "rgba(255,255,255,0.1)" }} />

              <h3>Licence Réseau et Sécurité (2019-2022)</h3>
              <h2>Université de Béjaïa</h2>

              <hr style={{ margin: "25px 0", borderColor: "rgba(255,255,255,0.1)" }} />

              <h3>Baccalauréat série mathémathiques (2019)</h3>
              <h2>Tizi Ouzou</h2>
            </div>
          </div>

          {/* 📂 DOCUMENTS */}
          <div>
            <h2 style={{ marginBottom: "30px" }}>📂 Mes Documents</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "25px",
              }}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/documents/${cat.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))",
                      backdropFilter: "blur(15px)",
                      padding: "30px",
                      borderRadius: "20px",
                      border: "1px solid rgba(255,255,255,0.2)",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-5px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0px)")
                    }
                  >
                    {cat.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {isAdmin && (
  <div
    style={{
      marginTop: "80px",
      padding: "50px",
      borderRadius: "30px",
      background: "rgba(255,255,255,0.08)",
      backdropFilter: "blur(30px)",
      border: "1px solid rgba(255,255,255,0.15)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
    }}
  >
    <h2
      style={{
        marginBottom: "35px",
        fontWeight: "600",
        fontSize: "22px",
      }}
    >
      👑 Upload Administrateur
    </h2>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "25px",
        flexWrap: "wrap",
      }}
    >
      {/* FILE INPUT CUSTOM */}
      <label
        style={{
          padding: "14px 25px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          cursor: "pointer",
          fontWeight: "500",
          transition: "0.3s",
        }}
      >
        📁 {selectedFile ? selectedFile.name : "Choisir un fichier"}
        <input
          type="file"
          hidden
          onChange={(e) =>
            setSelectedFile(e.target.files ? e.target.files[0] : null)
          }
        />
      </label>

      {/* SELECT MODERNE */}
      <select
        value={folder}
        onChange={(e) => setFolder(e.target.value)}
        style={{
          padding: "14px 20px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "white",
          outline: "none",
          fontWeight: "500",
          cursor: "pointer",
          backdropFilter: "blur(15px)",
        }}
      >
        {categories.map((cat) => (
          <option
            key={cat.slug}
            value={cat.slug}
            style={{ background: "#3c1f55" }}
          >
            {cat.name}
          </option>
        ))}
      </select>

      {/* BOUTON PREMIUM */}
      <button
        onClick={handleUpload}
        style={{
          padding: "14px 30px",
          borderRadius: "25px",
          border: "none",
          background: "linear-gradient(135deg, #ff0077, #6a00ff)",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(255,0,120,0.4)",
          transition: "0.3s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-3px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0px)")
        }
      >
        🚀 Téléverser
      </button>
    </div>
  </div>
)}
</div>

    </div>
    </div>
  );
}
