// An Express Router is used to define and manage routes in a modular way.
// It acts like a mini application that handles related routes and can be mounted in the main app.
// router.METHOD(path, callback)
// METHOD GET POST PUT PATCH DELETE
// Path is endpoint 
// callback is the function that have req and res paremeter
import express from "express";
import authRoutes from "../features/auth/auth.route.js";

const router = express.Router();



router.use("/auth",authRoutes)

export default router