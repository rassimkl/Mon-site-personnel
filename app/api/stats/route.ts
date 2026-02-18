import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const filePath = path.join(process.cwd(), "data", "stats.json");

  const file = fs.readFileSync(filePath, "utf-8");
  const stats = JSON.parse(file);

  return NextResponse.json(stats);
}

export async function POST(req: Request) {
  const filePath = path.join(process.cwd(), "data", "stats.json");
  const file = fs.readFileSync(filePath, "utf-8");
  const stats = JSON.parse(file);

  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "local";

  const today = new Date().toISOString().split("T")[0];

  // 🔢 Total visites
  stats.totalVisits += 1;

  // 📅 Compteur journalier
  if (!stats.dailyVisits[today]) {
    stats.dailyVisits[today] = 0;
  }
  stats.dailyVisits[today] += 1;

  // 👤 Visiteurs uniques
  if (!stats.ips.includes(ip)) {
    stats.ips.push(ip);
    stats.uniqueVisitors += 1;
  }

  fs.writeFileSync(filePath, JSON.stringify(stats, null, 2));

  return NextResponse.json({ success: true });
}
