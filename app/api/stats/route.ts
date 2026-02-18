
import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await pool.connect();

  try {
    const statsResult = await client.query("SELECT * FROM stats LIMIT 1");
    const dailyResult = await client.query("SELECT * FROM daily_stats");

    return NextResponse.json({
      ...statsResult.rows[0],
      dailyStats: dailyResult.rows,
    });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    client.release();
  }
}


export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // 1️⃣ Incrémenter total visits
    await client.query(
      "UPDATE stats SET total_visits = total_visits + 1 WHERE id = 1"
    );

    // 2️⃣ Vérifier si IP existe
    const existing = await client.query(
      "SELECT * FROM visitors WHERE ip = $1",
      [ip]
    );

    if (existing.rows.length === 0) {
      // Nouvelle IP → unique visitor
      await client.query(
        "INSERT INTO visitors (ip) VALUES ($1)",
        [ip]
      );

      await client.query(
        "UPDATE stats SET unique_visitors = unique_visitors + 1 WHERE id = 1"
      );
    }

    await client.query("COMMIT");

    return NextResponse.json({ success: true });

  } catch (err) {
    await client.query("ROLLBACK");
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  } finally {
    client.release();
  }
}


