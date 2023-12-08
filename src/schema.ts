import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  avatar: varchar("avatar", { length: 255 }).default(
    "https://example.com/images/avatar.png"),
});
