import express from "express";
import authRoutes from "../api/auth/auth.routes.js";
import profileRoutes from "../api/users/profile.routes.js";
import adminRoutes from "../api/admin/admin.routes.js";
import moviesRoutes from "../api/movies/movies.route.js";
// import theaterRoutes from "../api/theaters/";
const route = express.Router();

route.use("/auth", authRoutes); //authentication
route.use("/profile", profileRoutes); //profile
route.use("/admin", adminRoutes); //admin
route.use("/movies", moviesRoutes); //movies
// route.use("/theaters", theaterRoutes)

export default route;
