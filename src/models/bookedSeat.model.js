import { z } from "zod";

export const BookedSeatCreateSchema = z.object({
  booking_id: z.number(),
  seat_id: z.number(),
});

export const BookedSeatUpdateSchema = BookedSeatCreateSchema.partial();
