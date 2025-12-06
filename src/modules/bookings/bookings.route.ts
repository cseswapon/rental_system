import express from "express";
import authGuard from "../../middleware/auth";
import { bookingController } from "./bookings.controller";
const router = express.Router();

router.get("/", authGuard(), bookingController.getAllBooking);
router.post("/", authGuard(), bookingController.createBooking);
router.put("/:bookingId", authGuard(), bookingController.updateBooking);

export const bookingRoute = router;
