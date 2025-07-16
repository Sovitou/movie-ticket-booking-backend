import { z } from "zod";

export const PaymentCreateSchema = z.object({
  booking_id: z.number(),
  amount: z.number(),
  currency: z.string().length(3),
  payment_method: z.enum(["cash_on_delivery", "card", "wallet"]),
  payment_status: z.enum(["pending", "completed", "failed"]),
  transaction_id: z.string().optional(),
});

export const PaymentUpdateSchema = PaymentCreateSchema.partial();
