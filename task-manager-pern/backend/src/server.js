import { app } from "./app.js";
import { config } from "./config/configForenv.js";


const port = config?.port;

app.listen(port, () => {
  console.log(`This app is running on port ${port}`);
});
