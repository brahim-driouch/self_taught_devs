import { db } from "@/config/db";
import { users } from "@/config/db/schema";
import { PersonnalInfoEditionType } from "@/dataschema";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";





export  async function PUT(req:Request){

    try {
        const data = await req.json() as PersonnalInfoEditionType
        if(!data) {
            return NextResponse.json({error:"no data sent."},{status:400})
        }
       const dbQuery = await db.update(users).set({
            name:data.name,
            email:data.email,
            password:data.password ?? ""
        })
        revalidatePath("/in/profile")
        return NextResponse.json({
            message:"updated successfully",
            data:dbQuery

        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error:"an error occured while processing your request."
        },{status:500})
    }

}