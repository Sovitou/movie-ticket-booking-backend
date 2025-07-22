import prisma from "../../../prisma/client.js";

export async function createTheater(data) {
  const theater = await prisma.theaters.create({ data });
  return { message: "Theater created successfully", theater };
}

export async function updateTheater(id, data) {
  const theater = await prisma.theaters.findUnique({ where: { id } });
  if (!theater) throw new Error("Theater not found");

  const updatedTheater = await prisma.theaters.update({
    where: { id },
    data,
  });
  return { message: "Theater updated successfully", updatedTheater };
}

export async function deleteTheater(id) {
  const theater = await prisma.theaters.findUnique({ where: { id } });
  if (!theater) throw new Error("Theater not found");

  const deletedTheater = await prisma.theaters.delete({ where: { id } });
  return { message: "Theater deleted successfully", deletedTheater };
}

export async function getTheaters() {
  const theaters = await prisma.theaters.findMany();
  return { message: "Theaters fetched successfully", theaters };
}

export async function getTheaterById(id) {
  const theater = await prisma.theaters.findUnique({ where: { id } });
  if (!theater) throw new Error("Theater not found");
  return { message: "Theater fetched successfully", theater };
}
