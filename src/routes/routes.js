import express from "express";
import { root } from "../services/testing.js";
import authRoutes from "./auth.routes.js";
import profileRoutes from "./profile.routes.js";

const route = express.Router();

route.get("/", root);

route.use("/auth", authRoutes); //authentication
route.use("/profile", profileRoutes); //profile

export default route;
