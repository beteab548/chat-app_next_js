import express from "express";
import { checkAuth } from "../controllers/AuthController.js";
const router = express.Router();
router.post("/check-user", checkAuth);
export default router;
