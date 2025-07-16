import { z } from "zod";

export const ReviewCreateSchema = z.object({
  user_id: z.number(),
  movie_id: z.number(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  is_verified: z.boolean().optional(),
});

export const ReviewUpdateSchema = ReviewCreateSchema.partial();
