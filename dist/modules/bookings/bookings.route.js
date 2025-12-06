"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middleware/auth"));
const bookings_controller_1 = require("./bookings.controller");
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)(), bookings_controller_1.bookingController.getAllBooking);
router.post("/", (0, auth_1.default)(), bookings_controller_1.bookingController.createBooking);
router.put("/:bookingId", (0, auth_1.default)(), bookings_controller_1.bookingController.updateBooking);
exports.bookingRoute = router;
