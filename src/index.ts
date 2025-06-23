import app from "./app";
import { connectDB } from "./db/connect";
import { config } from "./config/config";
import { logger } from "./utils/logger";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.PORT, () => {
      logger.info(`Server running on port ${config.PORT}`);
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
