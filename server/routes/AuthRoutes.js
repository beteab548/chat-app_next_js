import express from "express";
import {
  checkAuth,
  getAllUsers,
  onBoardUser,
} from "../controllers/AuthController.js";
const router = express.Router();
router.post("/check-user", checkAuth);
router.post("/onboard-user", onBoardUser);
router.get("/fetchContacts", getAllUsers);
export default router;
