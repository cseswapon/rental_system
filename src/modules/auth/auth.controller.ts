import { Request, Response } from "express";
import { authService } from "./auth.service";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { pool } from "../../config/db";
import config from "../../config";

const login = async (req: Request, res: Response) => {
  try {
    const result = await authService.login(req);
    const token = jwt.sign(result.rows[0], config.JWT_SECRET as string, {
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
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

const signup = async (req: Request, res: Response) => {
  try {
    const result = await authService.signup(req);
    res.status(201).send({
      success: true,
      message: "User registered successfully",
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

export const authController = {
  login,
  signup,
};
