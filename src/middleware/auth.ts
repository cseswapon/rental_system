import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import config from "../config";
const authGuard = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1] as string;
      if (!token) {
        res.status(401).json({
          success: false,
          statusCode: 401,
          message: "Unauthorized Access",
        });
        return;
      }
      const decode = jwt.verify(
        token,
        config.JWT_SECRET as Secret
      ) as JwtPayload;
      req.user = decode;
      if (roles.length && !roles.includes(decode.role)) {
        res.status(401).json({
          success: false,
          statusCode: 401,
          message: "Unauthorized Role Access",
        });
        return;
      }
      next();
    } catch (error: any) {
      res.send(401).send({
        success: false,
        message: error.message,
        data: null,
      });
    }
  };
};

export default authGuard;
