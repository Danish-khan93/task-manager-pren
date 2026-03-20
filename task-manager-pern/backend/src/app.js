import express from "express";
import versionRoute from "./routes/v1.route.js";
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express();

// middelware
// CORS = Cross-Origin Resource Sharing
// Browsers block requests from one domain to another by default (security).
// cors middleware lets your backend allow requests from other origins (like your frontend).
app.use(cookieParser())
app.use(cors())
app.use(express.json());
// route step
app.use("/api/v1",versionRoute)


export { app };
