import {
  SignupSchema,
  LoginSchema,
  ResetPasswordSchema,
} from "../validations/user.validation.js";
import * as authService from "../services/auth.service.js";

export async function registerUser(req, res, next) {
  try {
    const data = SignupSchema.parse(req.body);
    const result = await authService.register({ data });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
}

export async function loginUser(req, res, next) {
  try {
    const data = LoginSchema.parse(req.body);
    const result = await authService.login(data);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function resetPassword(req, res, next) {
  try {
    const data = ResetPasswordSchema.parse(req.body);
    const result = await authService.resetPassword(data);
    res.json(result);
  } catch (err) {
    next(err);
  }
}
