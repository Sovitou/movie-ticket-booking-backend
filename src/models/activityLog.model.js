import { z } from "zod";

export const ActivityLogCreateSchema = z.object({
  user_id: z.number().optional(),
  action: z.string(),
  entity_type: z.string().optional(),
  entity_id: z.number().optional(),
  details: z.any().optional(),
});
