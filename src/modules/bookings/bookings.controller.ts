import { Request, Response } from "express";
import { bookingService } from "./bookings.service";

const createBooking = async (req: Request, res: Response) => {
  try {
    const result = await bookingService.createBooking(req);
    res.status(201).send({
      success: true,
      message: "Booking created successfully",
      data: {
        ...result.result,
        vehicle: result.vehicle,
      },
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
const getAllBooking = async (req: Request, res: Response) => {};
const updateBooking = async (req: Request, res: Response) => {};
export const bookingController = {
  createBooking,
  getAllBooking,
  updateBooking,
};
