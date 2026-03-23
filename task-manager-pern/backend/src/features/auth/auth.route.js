import express from "express";
import {login, registerUser} from "./auth.controller.js"
import { checkingReqBody } from "./auth.validation.js";
const router = express.Router();

// user creation and registeration route 
router.post("/registerUser",checkingReqBody, registerUser);

// user Authentication and login 
router.post("/login",checkingReqBody,login);


export default router