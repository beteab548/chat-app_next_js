import express from "express";
import {
  checkAuth,
  getAllUsers,
  onBoardUser,
} from "../controllers/AuthController.js";
const router = express.Router();
router.post("/check-user", checkAuth);
router.post("/onboard-user", onBoardUser);
router.get("/get-contacts ", getAllUsers);
export default router;
