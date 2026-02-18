
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
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const today = new Date().toISOString().split("T")[0];

    // 🔢 Total visits
    const statsResult = await client.query("SELECT * FROM stats LIMIT 1");
    const stats = statsResult.rows[0];

    await client.query(
      "UPDATE stats SET total_visits = total_visits + 1 WHERE id = $1",
      [stats.id]
    );

    // 📅 Daily visits
    const dailyCheck = await client.query(
      "SELECT * FROM daily_stats WHERE date = $1",
      [today]
    );

    if (dailyCheck.rows.length === 0) {
      await client.query(
        "INSERT INTO daily_stats (date, visits) VALUES ($1, 1)",
        [today]
      );
    } else {
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


