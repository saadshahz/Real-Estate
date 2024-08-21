import express from "express";
import { singupUser } from "../controllers/user.js";

const router = express.Router();

router.post("/singup", singupUser);


export default router;
