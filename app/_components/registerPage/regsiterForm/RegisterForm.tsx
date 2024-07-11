"use client"

import { AccountType } from "@/dataSchama"
import { ChangeEvent, useEffect, useState } from "react"
import { businessCategories } from "@/constants/businessCategories"
import EmployersForm from "./EmployersForm"
import DevelopersForm from "./DevelopersForm"

type FormProps = {
    accountType:AccountType
}
const RegisterForm = ({accountType}:FormProps) => {
 

   

    
  return (
   <>
   {accountType === AccountType.Developer ? <DevelopersForm/> :<EmployersForm/>}
   </>
  )
}

export default RegisterForm