import express from "express";
import {
  createBoard,
  getAllboards,
  getBoardById,
  updateBoard,
} from "./board.controllers.js";
import { authGuard } from "../../middleware/auth.middleware.js";

const router = express.Router();

router.get("getAllBoards", getAllboards);
router.get("getBoardById", getBoardById);
router.post("/createBoard",authGuard, createBoard);
router.put("updateBoard",authGuard, updateBoard);

export default router;
