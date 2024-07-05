import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as dotenv from "dotenv";
import * as schema from "../../../migrations/schema";
import { migrate } from "drizzle-orm/postgres-js/migrator";
//
dotenv.config({ path: ".env" });

if (!process.env.DATABASE_URL) {
  console.log("no database url");
}

const client = postgres(process.env.DATABASE_URL as string, { max: 1 });
const db = drizzle(client, { schema });

const migratedb = async () => {
  try {
    console.log("Migrating client started");
    await migrate(db, { migrationsFolder: "migrations" });
    console.log("successfully migrated");
  } catch (error) {
    console.log(`Errorr is Occured ${error}`);
  }
};

// calling db
migratedb();
export default db;
