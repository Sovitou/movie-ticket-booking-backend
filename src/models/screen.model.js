import { z } from "zod";

export const ScreenCreateSchema = z.object({
  theater_id: z.number().int(),
  name: z.string(),
  total_seats: z.number().int(),
});

export const ScreenUpdateSchema = ScreenCreateSchema.partial();
