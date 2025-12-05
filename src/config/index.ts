import dotenv from "dotenv";
import path from "path";

const currentPath = path.join(__dirname, "../../.env");
dotenv.config({ path: currentPath });

const config = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
};

export default config;
