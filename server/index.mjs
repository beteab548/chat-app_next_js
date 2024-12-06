import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/AuthRoutes.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use("/api/auth", router);
app.listen(process.env.PORT, () => {
  console.log(`server started on PORT: ${process.env.PORT}`);
});
