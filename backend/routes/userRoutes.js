import express from "express";
import {
  createUserIfNotExists,
  borrowBook,
  getLastReadBook,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/create", createUserIfNotExists);
router.post("/borrow", borrowBook);
router.get("/lastread/:uid", getLastReadBook);

export default router;
