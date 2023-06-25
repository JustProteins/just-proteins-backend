export interface AppNamespace {
  nodeEnv: string;
  appName: string;
  port: number;
}

export interface RedisNamespace {
  port: number;
  host: string;
}
