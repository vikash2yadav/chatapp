import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { newGroupChat, getMyChats } from "../controllers/chat.js";

const app = express.Router();

app.use(isAuthenticated);

app.post("/new", newGroupChat);

app.post("/my", getMyChats);

export default app;
