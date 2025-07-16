import { z } from "zod";

const isoDate = () =>
  z.string().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  });

export const PromotionCreateSchema = z.object({
  code: z.string(),
  description: z.string().optional(),
  discount_type: z.enum(["percentage", "fixed"]),
  discount_value: z.number(),
  valid_from: isoDate(),
  valid_until: isoDate(),
  max_uses: z.number().optional(),
});

export const PromotionUpdateSchema = PromotionCreateSchema.partial();
