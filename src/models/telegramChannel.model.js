import { z } from "zod";

export const TelegramChannelCreateSchema = z.object({
  theater_id: z.number(),
  name: z.string(),
});

export const TelegramChannelUpdateSchema =
  TelegramChannelCreateSchema.partial();
