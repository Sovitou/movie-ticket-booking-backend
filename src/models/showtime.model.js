import { z } from "zod";

export const ShowtimeCreateSchema = z.object({
  movie_id: z.number().int(),
  screen_id: z.number().int(),
  start_time: z.string().datetime(),
  end_time: z.string().datetime(),
  language: z.string(),
  price: z.number(),
  seats_available: z.number().int(),
  is_active: z.boolean().optional(),
});

export const ShowtimeUpdateSchema = ShowtimeCreateSchema.partial();
