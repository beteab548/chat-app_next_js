import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
import messageRoutes from "./routes/MessageRoutes.js";
import { Server } from "socket.io";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRoutes);
app.use("/api/message", messageRoutes);
const server = app.listen(process.env.PORT, () => {
  console.log(`server started on PORT: ${process.env.PORT}`);
});
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
global.onlineUserLists = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    //check if the userId is passed properly
    onlineUserLists.set(userId, socket.id);
  });
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUserLists.get(data.to);
    if (sendUserSocket) {
      socket
        .to(sendUserSocket)
        .emit("msg-recieve", { from: data.from, message: data.message });
    }
  });
});
