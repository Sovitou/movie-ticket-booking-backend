import { z } from "zod";

export const MovieCreateSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  duration: z.number().int(),
  genre: z.string(),
  rating: z.string().max(10),
  poster_url: z.string().url().optional(),
  release_date: z.string().datetime(),
  director: z.string().optional(),
  cast: z.string().optional(),
  trailer_url: z.string().url().optional(),
  language: z.string().optional(),
  start_date: z.string().datetime(),
  end_date: z.string().datetime(),
  play_days: z.string(),
});

export const MovieUpdateSchema = MovieCreateSchema.partial();
