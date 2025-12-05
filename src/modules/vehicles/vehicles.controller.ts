import { Request, Response } from "express";
import { vehiclesService } from "./vehicles.service";

const create = async (req: Request, res: Response) => {
  try {
    const result = await vehiclesService.created(req);
    res.status(201).send({
      success: true,
      message: "Vehicle created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.vehicleId);
      const result = await vehiclesService.update(req,id);
    res.status(200).send({
      success: true,
      message: "Vehicle update successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
const getAll = async (req: Request, res: Response) => {
  try {
    const result = await vehiclesService.getAll();
    res.status(200).send({
      success: true,
      message:
        result.rows.length === 0
          ? "No vehicles found"
          : "Vehicles retrieved successfully",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
const getSingle = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.vehicleId);
    const result = await vehiclesService.getSingle(id);
    res.status(200).send({
      success: true,
      message: "Vehicles retrieved successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
const deleteId = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.vehicleId);
    await vehiclesService.deleteId(id);
    res.status(200).send({
      success: true,
      message: "Vehicles deleted successfully",
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
export const vehiclesController = {
  create,
  getAll,
  getSingle,
  update,
  deleteId,
};
