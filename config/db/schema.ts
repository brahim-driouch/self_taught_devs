import Projects from "@/app/_components/profilePage/Projects";
import { time } from "console";
import { relations } from "drizzle-orm";
import {
    boolean,
    timestamp,
    pgTable,
    text,
    primaryKey,
    integer,
    pgSchema,
    pgEnum,
    PgDate,
    varchar,
  } from "drizzle-orm/pg-core"
 
  import type { AdapterAccountType } from "next-auth/adapters"
import LinkedIn from "next-auth/providers/linkedin";
   


  export const accountTypes = pgEnum('accountType', ['Developer', 'Employer']);

  export const users = pgTable("user", {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email:text("email").unique(),
    image:text("image").default(''),
    password:text("password").default(''),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    createdAt:timestamp("createdAt",{mode:"date"}),
    updatedAt:timestamp("updatedAt",{mode:"date"}),
    accountType:accountTypes("accountType").default("Developer")
   
  })

  export const profiles = pgTable("profile",{
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
    about:varchar("about",{length:250}),
    website:varchar("website",{length:250}),
    github:varchar("github",{length:250}).default(""),
    LinkedIn:varchar("linkedIn",{length:250}).default(""),
    skills:varchar("skills",{length:350}),
    technologies:text("technologies")
   
  })


  export const projects = pgTable("projects",{
    id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
    title:varchar("title",{length:250}),
    description:text("description"),
    link:varchar("link",{length:250}).default(""),
    screenshot:text("screenshot").default(""),
    repo:text("repo").default("")

  })

  export const userProjects = relations(users,({many})=>({
    projects:many(projects)
  }))
   
export const accounts = pgTable(
    "account",
    {
      userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      type: text("type").$type<AdapterAccountType>().notNull(),
      provider: text("provider").notNull(),
      providerAccountId: text("providerAccountId").notNull(),
      refresh_token: text("refresh_token"),
      access_token: text("access_token"),
      expires_at: integer("expires_at"),
      token_type: text("token_type"),
      scope: text("scope"),
      id_token: text("id_token"),
      session_state: text("session_state"),
    },
    (account) => ({
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    })
  )
   
  export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  })
   
  export const verificationTokens = pgTable(
    "verificationToken",
    {
      identifier: text("identifier").notNull(),
      token: text("token").notNull(),
      expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (verificationToken) => ({
      compositePk: primaryKey({
        columns: [verificationToken.identifier, verificationToken.token],
      }),
    })
  )
   
  export const authenticators = pgTable(
    "authenticator",
    {
      credentialID: text("credentialID").notNull().unique(),
      userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      providerAccountId: text("providerAccountId").notNull(),
      credentialPublicKey: text("credentialPublicKey").notNull(),
      counter: integer("counter").notNull(),
      credentialDeviceType: text("credentialDeviceType").notNull(),
      credentialBackedUp: boolean("credentialBackedUp").notNull(),
      transports: text("transports"),
    },
    (authenticator) => ({
      compositePK: primaryKey({
        columns: [authenticator.userId, authenticator.credentialID],
      }),
    })
  )