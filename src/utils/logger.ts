import winston from "winston";
import { config } from "../config/config";

const { combine, timestamp, json, printf } = winston.format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

export const logger = winston.createLogger({
  level: config.LOG_LEVEL,
  format: combine(timestamp(), json(), logFormat),
  transports: [new winston.transports.Console()],
});
