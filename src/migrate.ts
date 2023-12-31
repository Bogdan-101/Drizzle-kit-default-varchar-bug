import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Client } from "pg";

const runMigrations = async () => {
  const connection = new Client({ connectionString: process.env["DB_URL"]! });
  await connection.connect();
  const db = drizzle(connection);
  await migrate(db, {migrationsFolder: 'drizzle'});
}

runMigrations();
