import NextAuth, { DefaultSession } from "next-auth"
import { AccountType } from "./dataSchama"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      accountType:AccountType
    } & DefaultSession
  }
  interface User {
    accountType:AccountType
  }  
}