import { z } from "zod";

export const UserCreateSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password_hash: z.string(),
  role: z.enum(["user", "admin"]),
  phone_number: z.string().optional(),
  status: z.enum(["active", "inactive", "banned"]).optional(),
  last_login: z
    .string()
    .refine((val) => !val || !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    })
    .optional(),
});

export const UserUpdateSchema = UserCreateSchema.partial();
