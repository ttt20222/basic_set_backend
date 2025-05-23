import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export function getEnv(key: string, defaultValue: string) {
  const env = process.env[key];
  if (env === undefined) {
    return defaultValue;
  }
  if (env === undefined) {
    throw new Error(`not found env`);
  }
  return env.trim();
}
