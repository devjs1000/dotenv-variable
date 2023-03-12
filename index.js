const { readFileSync } = require("fs");
const { parse } = require("yaml");
const { env } = process;

const config = () => {
  const configs = readFileSync(`${process.cwd()}/.env`, {
    encoding: "utf8",
  });

  if(!configs) throw new Error("No .env file found");
  
  const parsed = parse(configs);
  const isProd = parsed?.isProduction;
  const isProduction = Boolean(isProd);
  console.log("isProduction", isProduction);
  console.log("parsed", parsed);
  const myConfig = isProduction ? parsed?.production : parsed?.dev;
  const keys = Object.keys(myConfig);

  for (const key of keys) {
    env[key] = myConfig[key];
  }
  return myConfig;
};

module.exports = {
  config,
};
