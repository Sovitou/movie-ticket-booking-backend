import prisma from "../../prisma/client.js";

export async function getUsers() {
  const users = await prisma.users.findMany();
  return { message: "Users fetched successfully", users };
}

export async function getUserById(parsedId) {
  const user = await prisma.users.findUnique({ where: { id: parsedId } });
  if (!user) {
    throw new Error("User not found");
  }
  return { message: "User fetched successfully", user };
}

export async function deleteUserById(parsedId) {
  const user = await prisma.users.delete({
    where: { id: parsedId },
  });
  if (!user) {
    throw new Error("User not found");
  }
  return { message: "User deleted successfully", user };
}

export async function updateUserById(parsedId, data) {
  const user = await prisma.users.update({
    where: { id: parsedId },
    data,
  });
  if (!user) {
    throw new Error("User not found");
  }
  return { message: "User updated successfully", user };
}
