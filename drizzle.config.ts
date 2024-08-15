import { defineConfig } from 'drizzle-kit'
import dotenv from "dotenv"
dotenv.config({ path: __dirname + "/.env.local" });


export default defineConfig({
  dialect: "postgresql",
  schema: "./config/db/schema.ts",
  out: "./drizzle",
  dbCredentials:{
    url:process.env.RAILWAY_DB_URL!
  }
 
})