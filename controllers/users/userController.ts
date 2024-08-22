"use server"
import { signIn, signOut } from "@/auth";
import { developerSchema, DeveloperType ,MyResponseType} from "@/dataSchama";
import { error } from "console";
export async function registerNewUser(dev:DeveloperType):Promise<MyResponseType> {
    
    try {
        const res =  developerSchema.safeParse(dev)
        if(res.error?.errors){
           return {
            status:"failure",
            errors:res.error.errors
           }
        }

        
        const {passwordConfirmation,...newDev } = dev
      const response = {error:""}

       if(response.error){
        return  {
            status:"failure",
            errors:[{message:error.toString(),path:["all"],code:"custom"}]
        }
       }
        return {status:"success"}
        
    } catch (error:any) {
        if(error && typeof error === "object" &&  "errors" in error ){
         
            return {
                status:"failure",
                errors:error.errors 
            }
        }
        const errorMessage = error &&  typeof error === "object" && "message" in error ? error.message as string : "An error occured"
        
        return {
            status:"failure",
            errors: [{message:errorMessage,path:["all"],code:"custom"}]
        }
    }

}

export async function signInWithGoogle() {
     await signIn("google",{
        redirectTo:"/in"
        
    })
    
}

export async function logout(){
    await signOut({
        redirectTo:"/"
    })
}