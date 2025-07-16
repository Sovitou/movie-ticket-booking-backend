import { z } from "zod";

export const TheaterCreateSchema = z.object({
  name: z.string(),
  location: z.string(),
  city: z.string(),
  contact_info: z.string().optional(),
  total_seats: z.number().int(),
});

export const TheaterUpdateSchema = TheaterCreateSchema.partial();
