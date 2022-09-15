import { Config, GenericConfig } from '../types/config';
const dotenv = require("dotenv")
import * as logger from 'loglevel'

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

logger.enableAll();

const CONFIG: GenericConfig = {
  production: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.DB_URL,
    },
  },
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.DB_URL,
    },
  },
  test: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
      trace: logger.trace,
      debug: logger.debug,
    },
    db: {
      url: process.env.DB_URL,
    },
  },
};

export default CONFIG[ENV];

