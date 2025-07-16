import express from "express";
import { root } from "../service/testing.js";
import {
  createAccount,
  loginUserAccount,
} from "../controller/userController.js";
const route = express.Router();


route.get("/", root);

//authentication
route.post("/user/signup", createAccount);
route.post("/user/signin", loginUserAccount);


export default route;
