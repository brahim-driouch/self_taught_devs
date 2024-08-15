import GitHub from "next-auth/providers/github"
import type { NextAuthConfig } from "next-auth"
import Google from "next-auth/providers/google"
 
export default {  providers: [Google({
  
    authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
      clientId:process.env.GOOGLE_CLIENT_ID! ,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET!
      
  }),
  GitHub({
    clientId:process.env.GOOGLE_CLIENT_ID!,
    clientSecret:process.env.GITHUB_SECRET!,
  })
], } satisfies NextAuthConfig