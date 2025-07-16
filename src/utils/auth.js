import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const JWT_SECRET = process.env.JWT_SECRET;

export function generateToken(user) {
  if (!JWT_SECRET) {
    throw new Error("JWT secret not configured");
  }
  return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });
}

export async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}
