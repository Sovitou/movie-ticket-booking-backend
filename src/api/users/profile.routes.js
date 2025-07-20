import express from "express";
import {
  updateUserProfile,
  changeUserPassword,
} from "./profile.controller.js";
import { authenticateToken } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authenticateToken);

router.patch("/", updateUserProfile);
router.post("/change-password", changeUserPassword);

export default router;
