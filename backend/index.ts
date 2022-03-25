import express from "express";
import { config } from "dotenv";
import requestLogger from "./middleware/loggerMiddleware";
import router from "./routes";
import "./db"
config();

const app = express();
const PORT = process.env.APP_PORT;
app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is runnin' on port ${PORT}`);
});
