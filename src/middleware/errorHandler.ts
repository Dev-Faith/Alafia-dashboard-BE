import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { logger } from "../utils/logger";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let status = 500;
  let message = "Internal Server Error";

  if (err instanceof createHttpError.HttpError) {
    status = err.statusCode;
    message = err.message;
  }

  logger.error(`${status} - ${message} - ${req.originalUrl} - ${req.method}`);

  res.status(status).json({
    status: "error",
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
