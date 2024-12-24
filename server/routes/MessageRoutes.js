import express from "express";
import { addMessage } from "../controllers/MessageController";
const router = express.Router();
router.post("/add-message", addMessage);
export default router;
