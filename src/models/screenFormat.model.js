import { z } from "zod";

export const ScreenFormatCreateSchema = z.object({
  showtime_id: z.number(),
  format: z.string(),
});

export const ScreenFormatUpdateSchema = ScreenFormatCreateSchema.partial();
