import { z } from "zod";

const isoDate = () =>
  z.string().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  });

export const ShowtimeCreateSchema = z.object({
  movie_id: z.number().int(),
  screen_id: z.number().int(),
  start_time: isoDate(),
  end_time: isoDate(),
  language: z.string(),
  price: z.number(),
  seats_available: z.number().int(),
  is_active: z.boolean().optional(),
});

export const ShowtimeUpdateSchema = ShowtimeCreateSchema.partial();
