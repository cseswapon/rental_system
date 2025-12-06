"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingController = void 0;
const bookings_service_1 = require("./bookings.service");
const createBooking = async (req, res) => {
    try {
        const result = await bookings_service_1.bookingService.createBooking(req);
        res.status(201).send({
            success: true,
            message: "Booking created successfully",
            data: {
                ...result.result,
                vehicle: result.vehicle,
            },
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            data: null,
        });
    }
};
const getAllBooking = async (req, res) => {
    try {
        const result = await bookings_service_1.bookingService.getAllBooking(req);
        res.status(200).send({
            success: true,
            message: "Booking retrieved successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            data: null,
        });
    }
};
const updateBooking = async (req, res) => {
    try {
        const id = Number(req.params.bookingId);
        const result = await bookings_service_1.bookingService.updateBooking(req, id);
        res.status(200).send({
            success: true,
            message: req.user?.role === "customer"
                ? "Booking Update successfully"
                : "Booking marked as returned. Vehicle is now available",
            data: result,
        });
    }
    catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
            data: null,
        });
    }
};
exports.bookingController = {
    createBooking,
    getAllBooking,
    updateBooking,
};
