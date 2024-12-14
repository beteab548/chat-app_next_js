import express from "express";
import { checkAuth, onBoardUser } from "../controllers/AuthController.js";
const router = express.Router();
router.post("/check-user", checkAuth);
router.post('/onboard-user',onBoardUser)
export default router;
