import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
