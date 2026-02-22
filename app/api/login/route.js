import { pool } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { password } = await req.json();

    if (!password) {
      return Response.json(
        { error: "Password required" },
        { status: 400 }
      );
    }

    const result = await pool.query(
      "SELECT password_hash FROM admin LIMIT 1"
    );

    if (result.rows.length === 0) {
      return Response.json(
        { error: "Admin not configured" },
        { status: 500 }
      );
    }

    const hash = result.rows[0].password_hash;

    const valid = await bcrypt.compare(password, hash);

    if (!valid) {
      return Response.json(
        { error: "Invalid password" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    return Response.json({ token });

  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}