import prisma from "../../../prisma/client.js";
import {
  hashPassword,
  verifyPassword,
  generateToken,
} from "../../utils/auth.js";

export async function register({ data }) {
  const { email, password, name, role } = data;
  const exists = await prisma.users.findUnique({ where: { email } });
  if (exists) throw new Error("Email already exists");

  const hashed = await hashPassword(password);
  const user = await prisma.users.create({
    data: { email, password_hash: hashed, name, role: role || "user" },
  });

  return { token: generateToken(user) };
}

export async function login({ email, password }) {
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user || !(await verifyPassword(password, user.password_hash))) {
    throw new Error("Invalid email or password");
  }

  return { token: generateToken(user) };
}

export async function resetPassword({ email, newPassword }) {
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user) throw new Error("User not found");

  const hashed = await hashPassword(newPassword);
  await prisma.users.update({
    where: { email },
    data: { password_hash: hashed },
  });

  return { message: "Password reset successfully" };
}
