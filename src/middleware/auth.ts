// src/middleware/auth.ts
const jwt = require("jsonwebtoken");
import createHttpError from "http-errors";
import { Request, Response, NextFunction } from "express";

export const authenticate = (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return next(createHttpError(401, "Authentication required"));
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = payload;
    next();
  } catch (error) {
    next(createHttpError(401, "Invalid token"));
  }
};
