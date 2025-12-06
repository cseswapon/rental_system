"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const authGuard = (...roles) => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization?.split(" ")[1];
            if (!token) {
                res.status(401).json({
                    success: false,
                    statusCode: 401,
                    message: "Unauthorized Access",
                });
                return;
            }
            const decode = jsonwebtoken_1.default.verify(token, config_1.default.JWT_SECRET);
            req.user = decode;
            if (roles.length && !roles.includes(decode.role)) {
                res.status(403).json({
                    success: false,
                    statusCode: 403,
                    message: "Forbidden",
                });
                return;
            }
            next();
        }
        catch (error) {
            res.send(401).send({
                success: false,
                message: error.message,
                data: null,
            });
        }
    };
};
exports.default = authGuard;
