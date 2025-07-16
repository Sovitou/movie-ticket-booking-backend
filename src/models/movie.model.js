import { z } from "zod";

const isoDate = () =>
  z.string().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  });

export const MovieCreateSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  duration: z.number().int(),
  genre: z.string(),
  rating: z.string().max(10),
  poster_url: z.string().url().optional(),
  release_date: isoDate(),
  director: z.string().optional(),
  cast: z.string().optional(),
  trailer_url: z.string().url().optional(),
  language: z.string().optional(),
  start_date: isoDate(),
  end_date: isoDate(),
  play_days: z.string(),
});

export const MovieUpdateSchema = MovieCreateSchema.partial();
