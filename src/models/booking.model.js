import { z } from "zod";

export const BookingCreateSchema = z.object({
  user_id: z.number().optional(),
  showtime_id: z.number(),
  promotion_id: z.number().optional(),
  total_amount: z.number(),
  number_of_tickets: z.number(),
  status: z.enum(["pending", "accepted", "picked_up", "cancelled"]),
  guest_email: z.string().email().optional(),
  guest_phone: z.string().optional(),
});

export const BookingUpdateSchema = BookingCreateSchema.partial();
