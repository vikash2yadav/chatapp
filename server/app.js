import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import chatRoute from "./routes/chat.js";
import adminRoute from "./routes/admin.js";
import { Server } from "socket.io";
import { corsOptions } from "./constants/config.js";
import { createServer } from "http";
import { NEW_MESSAGE } from "./constants/events.js";
dotenv.config({ path: "./.env" });
import { v4 as uuid } from "uuid";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: corsOptions,
});

io.on("connection", (socket) => {
  const user = {
    _id: "sdas",
    name: "dfdsf",
  };

  socket.on(NEW_MESSAGE, ({ chatId, members, message }) => {
    const messageForRealTime = {
      content: message,
      _id: uuid(),
      sender: {
        _id: user._id,
        name: user.name,
      },
      chat: chatId,
      createdAt: new Date().toISOString(),
    };
    console.log("new", messageForRealTime);
  });
  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

const adminSecretKey = process.env.ADMIN_SECRET_KEY || "vikashissecret";

const mongoURI = process.env.MONGO_URL;
const port = process.env.PORT || 9000;

const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";

connectDB(mongoURI);

app.use(cookieParser());
app.use(express.json());

app.use("/user", userRoute);
app.use("/chat", chatRoute);
app.use("/admin", adminRoute);

app.use(errorMiddleware);

server.listen(port, () => {
  console.log(`Service is working on port ${port} in ${envMode} Mode`);
});

export { envMode, adminSecretKey };
