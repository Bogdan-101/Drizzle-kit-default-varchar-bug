import { defineConfig, type Config } from "drizzle-kit";
require("dotenv").config();

export default defineConfig({
  schema: "src/schema.ts",
  out: "drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env["DB_URL"]!,
  },
  verbose: true,
  strict: true,
}) satisfies Config;
