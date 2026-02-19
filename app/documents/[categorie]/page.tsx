import fs from "fs";
import path from "path";
import Link from "next/link";
import styles from "@/styles/CategoriePage.module.css";

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
    <div className={styles.container}>
      <div className={styles.overlay} />

      <div className={styles.content}>

        <h1 className={styles.title}>
          {decodedCategorie.replace("_", " ").toUpperCase()}
        </h1>

        {files.length === 0 ? (
          <p className={styles.emptyText}>
            Aucun document disponible.
          </p>
        ) : (
          <div className={styles.filesGrid}>
            {files.map((file) => (
              <div key={file} className={styles.fileCard}>
                <p className={styles.fileName}>{file}</p>

                <a
                  href={`/documents/${categorie}/${file}`}
                  target="_blank"
                  className={styles.link}
                >
                  Voir le document
                </a>

                <a
                  href={`/documents/${categorie}/${file}`}
                  download
                  className={styles.download}
                >
                  Télécharger
                </a>
              </div>
            ))}
          </div>
        )}

        <div className={styles.back}>
          <Link href="/documents" className={styles.backLink}>
            ← Retour
          </Link>
        </div>

      </div>
    </div>
  );
}