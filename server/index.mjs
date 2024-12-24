import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/AuthRoutes.js";
import messageRoutes from "./routes/MessageRoutes.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/auth", AuthRoutes);
app.use("/api/message/add-message", messageRoutes);
app.listen(process.env.PORT, () => {
  console.log(`server started on PORT: ${process.env.PORT}`);
});
global.onlineUserLists = new Map();
