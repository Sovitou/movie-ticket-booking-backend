import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/role.middleware.js";
import {
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
} from "../controllers/admin.controller.js";

const router = Router();
router.use(authenticateToken);
router.use(isAdmin);

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.delete("/users/:id", deleteUserById);
router.put("/users/:id", updateUserById);

export default router;
