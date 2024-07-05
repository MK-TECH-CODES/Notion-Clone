import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/supabase/schema.ts",
  out: "./migrations",
});
