import prisma from "../../../prisma/client.js";
import { verifyPassword, hashPassword } from "../../utils/auth.js";

export async function updateProfile(userId, updateData) {
  const updated = await prisma.users.update({
    where: { id: userId },
    data: updateData,
  });
  return { message: "Profile updated", user: updated };
}

export async function changePassword(userId, { oldPassword, newPassword }) {
  const user = await prisma.users.findUnique({ where: { id: userId } });
  if (!user || !(await verifyPassword(oldPassword, user.password_hash))) {
    throw new Error("Old password is incorrect");
  }

  const hashed = await hashPassword(newPassword);
  await prisma.users.update({
    where: { id: userId },
    data: { password_hash: hashed },
  });

  return { message: "Password changed successfully" };
}
