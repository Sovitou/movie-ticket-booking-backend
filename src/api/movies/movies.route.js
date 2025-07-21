import { Router } from "express";
import { authenticateToken } from "../../middlewares/auth.middleware.js";
import { isAdmin } from "../../middlewares/role.middleware.js";
import {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovies,
  getMovieById,
} from "./movies.controller.js";

const router = Router();


// Movie Routes for User
router.get("/", getMovies);
router.get("/:id", getMovieById);


router.use(authenticateToken);


// Movie Routes for Admin
router.use(isAdmin);
router.post("/", createMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
