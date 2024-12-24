import express from "express";
import { addMessage } from "../controllers/MessageController.js";
const router = express.Router();
router.post("/addMessage", addMessage);
export default router;
