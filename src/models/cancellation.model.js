import { z } from "zod";

export const CancellationCreateSchema = z.object({
  booking_id: z.number(),
  reason: z.string().optional(),
  status: z.enum(["pending", "approved", "rejected"]),
  refund_amount: z.number().optional(),
  processed_at: z.string().datetime().optional(),
});

export const CancellationUpdateSchema = CancellationCreateSchema.partial();
