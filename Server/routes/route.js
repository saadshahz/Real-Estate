import express from "express";
import { singupUser } from "../controllers/user.js";
import { AddReview, getReview } from "../controllers/review.js";
import { getProperty, getPropertyById } from "../controllers/property.js";

const router = express.Router();

router.post("/singup", singupUser);

router.post("/reviews/new", AddReview);
router.get("/reviews", getReview);

router.get("/property", getProperty);
router.get("/property/:id", getPropertyById);

export default router;
