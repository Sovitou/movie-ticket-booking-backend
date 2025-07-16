import { z } from "zod";

const isoDate = () =>
  z.string().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  });

export const CancellationCreateSchema = z.object({
  booking_id: z.number(),
  reason: z.string().optional(),
  status: z.enum(["pending", "approved", "rejected"]),
  refund_amount: z.number().optional(),
  processed_at: isoDate().optional(),
});

export const CancellationUpdateSchema = CancellationCreateSchema.partial();
