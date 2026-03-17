import express from "express";
import versionRoute from "./routes/v1.route.js";

const app = express();

// middelware
app.use(express.json());
// route step
app.use("/api/v1",versionRoute)


export { app };
