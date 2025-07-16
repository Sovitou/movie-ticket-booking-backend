import { z } from "zod";

// User signup
export const SignupSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  phone_number: z.string().optional(),
  role: z.enum(["user", "admin"]),
});

// User login
export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

// Password reset
export const ResetPasswordSchema = z.object({
  email: z.string().email(),
  newPassword: z.string().min(6),
});

// Change password
export const ChangePasswordSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string().min(6),
});

// Update profile (partial update)
export const UpdateProfileSchema = z.object({
  name: z.string().optional(),
  phone_number: z.string().optional(),
});
