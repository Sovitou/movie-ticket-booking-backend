import { z } from "zod";

export const PromotionCreateSchema = z.object({
  code: z.string(),
  description: z.string().optional(),
  discount_type: z.enum(["percentage", "fixed"]),
  discount_value: z.number(),
  valid_from: z.string().datetime(),
  valid_until: z.string().datetime(),
  max_uses: z.number().optional(),
});

export const PromotionUpdateSchema = PromotionCreateSchema.partial();
