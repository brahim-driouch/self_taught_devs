import NextAuth, { DefaultSession } from "next-auth"
import { AccountType } from "./dataschema"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      accountType:AccountType
      image:string,
      id:string,
      name:string,
      email:string,
      hasPassword:boolean
    } 
  }
  // interface User {
  //   accountType:AccountType
  // }  
}