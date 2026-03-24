import express from "express";
import {login, logout, registerUser} from "./auth.controller.js"
import { checkingReqBody } from "./auth.validation.js";
import { authGuard } from "../../middleware/auth.middleware.js";
const router = express.Router();

// user creation and registeration route 
router.post("/registerUser",checkingReqBody, registerUser);

// user Authentication and login 
router.post("/login",checkingReqBody,login);


// logout 
router.post("/logout", authGuard , logout);


export default router