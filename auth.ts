import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./config/db"
import userController from "./controllers"
 
 
export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  secret:process.env.AUTH_SECRET!,
  ...authConfig,
 callbacks:{

  jwt:async({token})=>{
    if(token){
      const dbUser = await userController.getUserById(token.sub!)
      token.name = dbUser.name
    }
  return token
  },
  session:async({session,token})=>{
    if(session){
      session.user.image = token.picture ?? ""
      session.user.email = token.email!
      session.user.name =token.name!
    }

    return session
  }
 }
})  