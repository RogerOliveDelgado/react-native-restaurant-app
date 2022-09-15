type ConfigOptions = {
  app: {
    PORT: string | number;
  };
  logger: {
    warn: (message: string) => void;
    info: (message: string) => void;
    error: (message: string) => void;
    trace: (message: string) => void;
    debug: (message: string) => void;
  };
  db: {
    url: string | undefined;
  };
};

export type GenericConfig = {
  [key: string]: ConfigOptions;
  production: ConfigOptions;
  test: ConfigOptions;
  development: ConfigOptions;
};

type ConfigType = "production" | "development" | "test";

export type Config = Record<ConfigType, ConfigOptions>;
