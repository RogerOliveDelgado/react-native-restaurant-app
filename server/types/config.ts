type ConfigOptions = {
    app: {
        PORT: string | number;
      };
      logger: {
        warn: () => void;
        info: () => void;
        error: () => void;
        trace: () => void;
        debug: () => void;
      };
      db: {
        url: string | undefined;
      };
};

export type GenericConfig = {
    [key: string] : ConfigOptions,
    production : ConfigOptions,
    test : ConfigOptions,
    development : ConfigOptions
}

type ConfigType = "production" | "development" | "test";

export type Config = Record<ConfigType, ConfigOptions>;