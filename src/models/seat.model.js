import { z } from "zod";

export const SeatCreateSchema = z.object({
  screen_id: z.number().int(),
  seat_number: z.string(),
  seat_type: z.enum(["regular", "VIP"]),
  is_available: z.boolean().optional(),
  price_modifier: z.number().optional(),
});

export const SeatUpdateSchema = SeatCreateSchema.partial();
