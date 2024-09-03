import express from "express";
import { singupUser } from "../controllers/user.js";
import { AddReview, getReview } from "../controllers/review.js";

const router = express.Router();

router.post("/singup", singupUser);

router.post("/reviews/new", AddReview);
router.get("/reviews", getReview);


export default router;
