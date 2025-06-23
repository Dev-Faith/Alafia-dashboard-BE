import express from "express";
import cors from "cors";
import helmet from "helmet";
const morgan = require("morgan");
import { config } from "./config/config";
import { logger } from "./utils/logger";
// import residentRouter from "./routes/resident.routes";
import { errorHandler } from "./middleware/errorHandler";
import router from "./routes/index";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(
  morgan("combined", {
    stream: { write: (message: any) => logger.http(message) },
  })
);

app.use(router);

// Error handling
app.use(errorHandler);

export default app;
