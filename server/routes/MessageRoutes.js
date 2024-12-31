import express from "express";
import { addMessage, getMessages } from "../controllers/MessageController.js";
const router = express.Router();
router.post("/addMessage", addMessage);
router.get("/getMessages/:from/:to", getMessages);
export default router;
