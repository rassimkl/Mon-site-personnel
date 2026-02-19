
import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await pool.connect();

  try {
    const total = await client.query(
      "SELECT total_visits FROM stats WHERE id = 1"
    );

    const unique = await client.query(
      "SELECT COUNT(*) FROM visitors"
    );

    const today = await client.query(
      "SELECT visits FROM daily_stats WHERE date = CURRENT_DATE"
    );

    return NextResponse.json({
      totalVisits: total.rows[0]?.total_visits || 0,
      uniqueVisitors: parseInt(unique.rows[0]?.count || "0"),
      todayVisits: today.rows[0]?.visits || 0
    });

  } catch (err) {
    console.error(err);
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


