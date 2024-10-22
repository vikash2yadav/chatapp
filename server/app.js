import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import chatRoute from "./routes/chat.js";

dotenv.config({ path: "./.env" });

const app = express();

const mongoURI = process.env.MONGO_URL;
const port = process.env.PORT || 9000;

connectDB(mongoURI);

app.use(cookieParser());
app.use(express.json());

app.use("/user", userRoute);
app.use("/chat", chatRoute);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Service is working on port ${port}`);
});
