import prisma from "../../../prisma/client.js";

export async function createMovie(data) {
  const movie = await prisma.movies.create({ data });
  return { message: "Movie created successfully", movie };
}

export async function updateMovie(id, data) {
  const movie = await prisma.movies.findUnique({ where: { id } });
  if (!movie) throw new Error("Movie not found");

  const updatedMovie = await prisma.movies.update({
    where: { id },
    data,
  });
  return { message: "Movie updated successfully", updatedMovie };
}

export async function deleteMovie(id) {
  const movie = await prisma.movies.findUnique({ where: { id } });
  if (!movie) throw new Error("Movie not found");

  const deletedMovie = await prisma.movies.delete({ where: { id } });
  return { message: "Movie deleted successfully", deletedMovie };
}

export async function getMovies() {
  const movies = await prisma.movies.findMany();
  return { message: "Movies fetched successfully", movies };
}

export async function getMovieById(id) {
  const movie = await prisma.movies.findUnique({ where: { id } });
  if (!movie) throw new Error("Movie not found");
  return { message: "Movie fetched successfully", movie };
}
