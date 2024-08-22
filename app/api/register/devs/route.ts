import userController from "@/controllers";
import { DeveloperType, MyResponseType } from "@/dataSchama";
import { NextResponse } from "next/server";
import { ZodIssue } from "zod";




export async function POST(req:Request):Promise<NextResponse<MyResponseType>> {

    try {
        const dev = await req.json() as DeveloperType
        const result = await userController.registerNewUser(dev)
   
    if(result.errors){
        return NextResponse.json({
            status:"failure",
            errors:result.errors
        })
    }
    return NextResponse.json({
        message:result.message,
        status:"success"
    })
    } catch (error) {
        if(error && typeof error === "object" &&  "errors" in error ){
         
            return NextResponse.json({
                status:"failure",
                errors:error.errors as ZodIssue[]
            })
        }
        const errorMessage = error &&  typeof error === "object" && "message" in error ? error.message as string : "An error occured"
        
        return NextResponse.json({
            status:"failure",
            errors: [{message:errorMessage,path:["all"],code:"custom"}]
        })
    }


    
}