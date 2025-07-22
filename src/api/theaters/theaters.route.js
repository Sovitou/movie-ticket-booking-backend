import { Router } from "express";
import { authenticateToken } from "../../middlewares/auth.middleware.js";
import { isAdmin } from "../../middlewares/role.middleware.js";
import {
  createTheater,
  updateTheater,
  deleteTheater,
  getTheaters,
  getTheaterById,
} from "./theaters.controller.js";

const router = Router();

// Theater Routes for User
router.get("/", getTheaters);
router.get("/:id", getTheaterById);

// Theater Routes for Admin
router.use(authenticateToken);
router.use(isAdmin);
router.post("/", createTheater);
router.put("/:id", updateTheater);
router.delete("/:id", deleteTheater);

export default router;
