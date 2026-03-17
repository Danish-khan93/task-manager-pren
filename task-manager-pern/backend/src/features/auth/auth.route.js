import express from "express";
import {registerUser} from "./auth.controller.js"
const router = express.Router();

// user creation and registeration route 
router.post("/registerUser",registerUser);

// user Authentication and login 
router.post("/login",(req, res) => {
  console.log(req, res);
});


export default router