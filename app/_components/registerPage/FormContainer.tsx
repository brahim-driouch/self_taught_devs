"use client"

import { AccountType } from "@/dataSchama"
import { useState } from "react"
import RegisterForm from "./regsiterForm/RegisterForm"
import DevelopersForm from "./regsiterForm/DevelopersForm"
import EmployersForm from "./regsiterForm/EmployersForm"



const FormContainer = () => {
    const [accountType,setAccountTpe]=useState<AccountType | null>(null)

    const inActiveClass = 
    "   bg-gray-100 rounded bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-900 hover:border border-gray-700"
    const activeClass = "  border-transparent  "
  return (
    <div className="w-full ">

        {/**heading of the form */}
        <h1 className="text-2xl lg:text-3xl font-black">{accountType === null && "Select account type"}</h1>

        {accountType === null && (
          <div className="w-full flex justify-center font-medium my-4  rounded gap-3 ">
          <button onClick={()=>{setAccountTpe(AccountType.Developer)}} 
          className={`${accountType === AccountType.Developer ? activeClass: inActiveClass} " w-1/2  text-center p-4 "`}> 
              <span>Developer</span>
          </button>
          <button onClick={()=>{setAccountTpe(AccountType.Employer)}} 
           className={`${accountType === AccountType.Employer ? activeClass: inActiveClass} " w-1/2  text-center p-4 "`}> 
              <span>Employer</span>
          </button>
         
       </div>
        )}
         <div>
          {accountType === AccountType.Developer ? <DevelopersForm/>  : accountType === AccountType.Employer ? <EmployersForm/>  : <></>}
         </div>
    </div>
  )
}

export default FormContainer