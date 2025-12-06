"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_service_1 = require("./auth.service");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const login = async (req, res) => {
    try {
        const result = await auth_service_1.authService.login(req);
        const token = jsonwebtoken_1.default.sign(result.rows[0], config_1.default.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "Login successful",
            data: {
                token,
                user: result.rows[0],
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
const signup = async (req, res) => {
    try {
        const result = await auth_service_1.authService.signup(req);
        res.status(201).send({
            success: true,
            message: "User registered successfully",
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
exports.authController = {
    login,
    signup,
};
