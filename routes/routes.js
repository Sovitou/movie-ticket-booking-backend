import express from "express";
import {root} from "../service/testing.js"
import  {createAccount}  from "../controller/userController.js";
const route = express.Router()
//authentication
route.get("/",root)
route.post("/user/signup",createAccount)
export default route