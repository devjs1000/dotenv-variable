import { readFileSync } from "fs";
import { parse } from "yaml";
const { env } = process;

export const config = async () => {
  const configs = readFileSync(`${process.cwd()}/.env`, {
    encoding: "utf8",
  });
  const parsed = parse(configs);
  const isProduction = parsed.isProduction == undefined ? false : true;
  const myConfig = isProduction ? parsed.production : parsed.dev;
  for (const key in myConfig) {
    env[key] = myConfig[key];
  }
};
