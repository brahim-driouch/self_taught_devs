"use client"

import { AccountType } from "@/dataSchama"
import { useState } from "react"
import RegisterForm from "./regsiterForm/RegisterForm"



const FormContainer = () => {
    const [accountType,setAccountTpe]=useState(AccountType.Developer)
  return (
    <div className="w-full">

        {/**heading of the form */}
        <div className="w-full   rounded flex justify-center font-medium my-4 ">
            <button onClick={()=>{setAccountTpe(AccountType.Developer)}} 
            className={`${accountType === AccountType.Developer ? " border-b-4 border-b-gray-700 bg-gray-100 dark:bg-gray-950 rounded": " border-b-4 border-b-transparent  "} " w-1/2  text-center p-4 "`}> 
                <span>Developer</span>
            </button>
            <button onClick={()=>{setAccountTpe(AccountType.Employer)}} 
             className={`${accountType === AccountType.Employer ? "border-b-4 border-b-gray-700 bg-gray-100 dark:bg-gray-950 rounded": " border-b-4 border-b-transparent  "} " w-1/2  text-center p-4 "`}> 
                <span>Employer</span>
            </button>
           
         </div>
         <div>
            <RegisterForm accountType={accountType}/>

         </div>
    </div>
  )
}

export default FormContainer