import { Request } from "express";
import { compareDate, getDaysBetweenDates } from "../../utils/dateCal";
import { pool } from "../../config/db";

const createBooking = async (req: Request) => {
  const { customer_id, vehicle_id, rent_start_date, rent_end_date } = req.body;
  const isValidDateRange = compareDate(rent_start_date, rent_end_date);
  if (!isValidDateRange) {
    throw new Error("Invalid date ranger");
  }
  const totalDay = getDaysBetweenDates(rent_start_date, rent_end_date);
  console.log(totalDay, customer_id, vehicle_id);
  const vehicleRows = await pool.query(
    `SELECT * FROM vehicles WHERE id=$1 AND availability_status='available'`,
    [vehicle_id]
  );

  if (vehicleRows.rows.length === 0) {
    throw new Error("Vehicle not available for booking");
  }

  let vehicle = {
    vehicle_name: vehicleRows.rows[0].vehicle_name,
    daily_rent_price: vehicleRows.rows[0].daily_rent_price,
  };

  const totalPrice =
    Number(vehicleRows.rows[0]?.daily_rent_price) * Number(totalDay);

  const result = await pool.query(
    `
        INSERT INTO bookings(customer_id,vehicle_id,rent_start_date,rent_end_date,total_price,status) VALUES($1,$2,$3,$4,$5,$6) RETURNING id,customer_id,vehicle_id,rent_start_date,rent_end_date,total_price,status
    `,
    [
      customer_id,
      vehicle_id,
      rent_start_date,
      rent_end_date,
      totalPrice,
      "active",
    ]
  );

  await pool.query(
    `UPDATE vehicles SET availability_status='booked' WHERE id=$1`,
    [vehicle_id]
  );

  return {
    result: result.rows[0],
    vehicle,
  };
};
const getAllBooking = () => {};
const updateBooking = () => {};
export const bookingService = {
  createBooking,
  getAllBooking,
  updateBooking,
};
