"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiclesController = void 0;
const vehicles_service_1 = require("./vehicles.service");
const create = async (req, res) => {
    try {
        const result = await vehicles_service_1.vehiclesService.created(req);
        res.status(201).send({
            success: true,
            message: "Vehicle created successfully",
            data: result.rows[0],
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
const update = async (req, res) => {
    try {
        const id = Number(req.params.vehicleId);
        const result = await vehicles_service_1.vehiclesService.update(req, id);
        res.status(200).send({
            success: true,
            message: "Vehicle update successfully",
            data: result.rows[0],
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
const getAll = async (req, res) => {
    try {
        const result = await vehicles_service_1.vehiclesService.getAll();
        res.status(200).send({
            success: true,
            message: result.rows.length === 0
                ? "No vehicles found"
                : "Vehicles retrieved successfully",
            data: result.rows,
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
const getSingle = async (req, res) => {
    try {
        const id = Number(req.params.vehicleId);
        const result = await vehicles_service_1.vehiclesService.getSingle(id);
        res.status(200).send({
            success: true,
            message: "Vehicles retrieved successfully",
            data: result.rows[0],
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
const deleteId = async (req, res) => {
    try {
        const id = Number(req.params.vehicleId);
        await vehicles_service_1.vehiclesService.deleteId(id);
        res.status(200).send({
            success: true,
            message: "Vehicles deleted successfully",
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
exports.vehiclesController = {
    create,
    getAll,
    getSingle,
    update,
    deleteId,
};
