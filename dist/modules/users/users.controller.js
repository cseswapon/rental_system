"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const users_service_1 = require("./users.service");
const getUsers = async (req, res) => {
    try {
        const result = await users_service_1.userService.getUsers();
        res.status(200).send({
            success: true,
            message: "Users retrieved successfully",
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
const updateUser = async (req, res) => {
    try {
        const paramId = Number(req.params.userId);
        const userId = Number(req.user?.id);
        const role = req.user?.role;
        if (role !== "admin" && paramId !== userId) {
            throw new Error("You cannot access another user's data.");
        }
        const id = role === "admin" ? paramId : userId;
        const result = await users_service_1.userService.updateUser(req, id);
        res.status(200).send({
            success: true,
            message: "User updated successfully",
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
const deleteUser = async (req, res) => {
    try {
        const id = Number(req.params.userId);
        const result = await users_service_1.userService.deleteUser(id);
        res.status(200).send({
            success: true,
            message: "User Delete successfully",
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
exports.userController = {
    getUsers,
    updateUser,
    deleteUser,
};
