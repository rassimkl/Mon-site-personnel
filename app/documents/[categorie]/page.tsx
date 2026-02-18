import fs from "fs";
import path from "path";
import Link from "next/link";


export default async function CategoriePage({
  params,
}: {
  params: Promise<{ categorie: string }>;
}) {
  const { categorie } = await params;
  const decodedCategorie = decodeURIComponent(categorie);

  const folderPath = path.join(
    process.cwd(),
    "public",
    "documents",
    decodedCategorie
  );

  let files: string[] = [];

  if (fs.existsSync(folderPath)) {
    files = fs.readdirSync(folderPath);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        padding: "120px 80px",
        color: "white",
        backgroundImage: "url('/images/dev-workspace.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(20,20,40,0.92), rgba(80,0,120,0.85))",
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>

        {/* TITRE */}
        <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>
          {decodedCategorie.replace("_", " ").toUpperCase()}
        </h1>

        {files.length === 0 ? (
          <p style={{ opacity: 0.7 }}>
            Aucun document disponible.
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
            }}
          >
            {files.map((file) => (
              <div
                key={file}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                  padding: "25px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(15px)",
                }}
              >
                <p style={{ marginBottom: "15px" }}>{file}</p>

                <a
                  href={`/documents/${categorie}/${file}`}
                  target="_blank"
                  style={{ color: "#ffffff" }}
                >
                  Voir le document
                </a>

                <a
                  href={`/documents/${categorie}/${file}`}
                  download
                  style={{
                    marginLeft: 10,
                    color: "#ffffff",
                    fontWeight: "600",
                  }}
                >
                  Télécharger
                </a>
              </div>
            ))}
          </div>
        )}

        {/* RETOUR */}
        <div style={{ marginTop: "60px" }}>
          <Link
            href="/documents"
            style={{
              color: "white",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.35)",
              padding: "8px 20px",
              borderRadius: "20px",
              backdropFilter: "blur(10px)",
            }}
          >
            ← Retour
          </Link>
        </div>
        
      </div>
    </div>
  );
}
