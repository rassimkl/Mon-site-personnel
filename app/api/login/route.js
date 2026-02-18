import { pool } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { password } = await req.json();

  const result = await pool.query("SELECT * FROM admin LIMIT 1");
  const admin = result.rows[0];

  if (!admin) {
    return Response.json({ error: "Admin not found" }, { status: 500 });
  }

  const valid = await bcrypt.compare(password, admin.password_hash);

  if (!valid) {
    return Response.json({ error: "Invalid password" }, { status: 401 });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  return Response.json({ token });
}