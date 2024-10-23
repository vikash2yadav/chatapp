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
import { NEW_MESSAGE, NEW_MESSAGE_ALERT } from "./constants/events.js";
dotenv.config({ path: "./.env" });
import { v4 as uuid } from "uuid";
import { getSockets } from "./lib/helper.js";
import { Message } from "./models/message.js";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: corsOptions,
});

io.use((socket, next)=> {});

io.on("connection", (socket) => {
  socket.handshake.query.auth;
  const user = {
    _id: "sdas",
    name: "dfdsf",
  };

  userSocketIDs.set(user._id.toString(), socket.id);

  socket.on(NEW_MESSAGE, async ({ chatId, members, message }) => {
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
    const messageForDB = {
      content: message,
      sender: user._id,
      chat: chatId,
    };

    console.log("message", messageForRealTime);
    const membersSocket = getSockets(members);
    io.to(membersSocket).emit(NEW_MESSAGE, {
      chatId,
      message: messageForRealTime,
    });
    io.to(membersSocket).emit(NEW_MESSAGE_ALERT, { chatId });

    try {
      await Message.create(messageForDB);
    } catch (error) {
      console.log("error", error);
    }
  });
  socket.on("disconnect", () => {
    userSocketIDs.delete(user._id.toString());
    console.log("disconnected");
  });
});

const adminSecretKey = process.env.ADMIN_SECRET_KEY || "vikashissecret";
const userSocketIDs = new Map();

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
