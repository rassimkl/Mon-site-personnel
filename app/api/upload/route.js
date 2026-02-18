import fs from "fs";
import path from "path";

export async function POST(req) {
  const formData = await req.formData();

  const file = formData.get("file");
  const folder = formData.get("folder"); // destination choisie

  if (!file || !folder) {
    return Response.json({ error: "Missing data" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadPath = path.join(
    process.cwd(),
    "public/documents",
    folder,
    file.name
  );

  fs.writeFileSync(uploadPath, buffer);

  return Response.json({ success: true });
}
