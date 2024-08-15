import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./config/db"
 
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  secret:process.env.AUTH_SECRET!,
  ...authConfig,
 callbacks:{

  jwt:async({token})=>{
    console.log(token)
    return token
  }
  // session:async({session,user})=>{
  //   session.user.accountType =user.accountType

  //   return session
  // }
 }
})  