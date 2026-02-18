import { pool } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const total = await pool.query("SELECT total_visits FROM stats LIMIT 1");
  const daily = await pool.query(
    "SELECT visits FROM daily_stats WHERE date = CURRENT_DATE"
  );

  return NextResponse.json({
    total: total.rows[0]?.total_visits || 0,
    today: daily.rows[0]?.visits || 0,
  });
}

export async function POST(req: Request) {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // 🔢 Total global
    await client.query(
      "UPDATE stats SET total_visits = total_visits + 1 WHERE id = 1"
    );

    // 📅 Date du jour
    const today = new Date().toISOString().split("T")[0];

    // Vérifier si date existe
    const dailyCheck = await client.query(
      "SELECT * FROM daily_stats WHERE date = $1",
      [today]
    );

    if (dailyCheck.rowCount === 0) {
      // Nouvelle date
      await client.query(
        "INSERT INTO daily_stats (date, visits) VALUES ($1, 1)",
        [today]
      );
    } else {
      // Incrémenter
      await client.query(
        "UPDATE daily_stats SET visits = visits + 1 WHERE date = $1",
        [today]
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

