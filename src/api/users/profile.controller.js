import {
  UpdateProfileSchema,
  ChangePasswordSchema,
} from "../../validations/user.validation.js";
import * as profileService from "./profile.service.js";

export async function updateUserProfile(req, res, next) {
  try {
    const data = UpdateProfileSchema.parse(req.body);
    const userId = req.user.id;
    const result = await profileService.updateProfile(userId, data);
    res.json(result);
  } catch (err) {
    next(err);
  }
}

export async function changeUserPassword(req, res, next) {
  try {
    const data = ChangePasswordSchema.parse(req.body);
    const userId = req.user.id;
    const result = await profileService.changePassword(userId, data);
    res.json(result);
  } catch (err) {
    next(err);
  }
}
