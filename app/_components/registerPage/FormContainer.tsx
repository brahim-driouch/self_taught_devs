"use client"

import { AccountType } from "@/dataSchama"
import { useState } from "react"
import RegisterForm from "./regsiterForm/RegisterForm"



const FormContainer = () => {
    const [accountType,setAccountTpe]=useState(AccountType.Developer)

    const inActiveClass = 
    "  border-b-gray-700 bg-gray-100 dark:bg-gray-950 rounded border-b-gray-700 bg-gray-100 dark:bg-gray-950 rounded"
    const activeClass = "  border-b-transparent border-b-transparent "
  return (
    <div className="w-full">

        {/**heading of the form */}
        <div className="w-full flex justify-center font-medium my-4 border rounded border-gray-700">
            <button onClick={()=>{setAccountTpe(AccountType.Developer)}} 
            className={`${accountType === AccountType.Developer ? activeClass: inActiveClass} " w-1/2  text-center p-4 "`}> 
                <span>Developer</span>
            </button>
            <button onClick={()=>{setAccountTpe(AccountType.Employer)}} 
             className={`${accountType === AccountType.Employer ? activeClass: inActiveClass} " w-1/2  text-center p-4 "`}> 
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