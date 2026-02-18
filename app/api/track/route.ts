import fs from "fs";
import path from "path";

export async function POST() {
  const filePath = path.join(process.cwd(), "data", "stats.json");

  try {
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify({ totalVisits: 1 }, null, 2));
      return Response.json({ success: true });
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    data.totalVisits += 1;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
