"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const db_1 = require("../../config/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const login = async (req) => {
    const { email, password } = req.body;
    const result = await db_1.pool.query(`SELECT id,name, email,password, phone, role FROM users WHERE email=$1`, [email]);
    const comparePassword = await bcryptjs_1.default.compare(password, result.rows[0]?.password);
    if (!comparePassword) {
        throw new Error("Password not match");
    }
    delete result.rows[0].password;
    return result;
};
const signup = async (req) => {
    const { name, email, password, phone, role = "customer" } = req.body;
    if (password?.length < 6) {
        throw Error("Password min 6 characters");
    }
    const hashPassword = await bcryptjs_1.default.hash(password, 10);
    const lowerCaseEmail = String(email).toLowerCase();
    if (!["customer", "admin"].includes(role)) {
        throw Error("Role not using customer and admin");
    }
    const result = await db_1.pool.query(`INSERT INTO users(name, email, password, phone, role) VALUES($1,$2,$3,$4,$5) RETURNING id,name,email,phone, role`, [name, lowerCaseEmail, hashPassword, phone, role]);
    return result;
};
exports.authService = {
    login,
    signup,
};
