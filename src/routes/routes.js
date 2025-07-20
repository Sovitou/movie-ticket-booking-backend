import express from "express";
import authRoutes from "../api/auth/auth.routes.js";
import profileRoutes from "../api/users/profile.routes.js";
import adminRoutes from "../api/admin/admin.routes.js";

const route = express.Router();


route.use("/auth", authRoutes); //authentication
route.use("/profile", profileRoutes); //profile
route.use("/admin", adminRoutes); //admin

export default route;
