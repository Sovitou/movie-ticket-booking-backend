import express from "express";
import {
  registerUser,
  loginUser,
  resetPassword,
} from "./auth.controller.js";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);

export default router;
