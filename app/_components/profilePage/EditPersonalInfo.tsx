"use client"

import { CgClose } from "react-icons/cg"
import FormField from "../reusables/FormField"


const EditPersonalInfo = ({showEditPersonnalInfo}:{showEditPersonnalInfo:()=>void}) => {
  return (
    <div className=" fixed top-0 left-0 min-h-screen flex flex-col justify-center items-center  w-full bg-gray-800/75 z-20">
      <div className=" flex flex-col items-end justify-start bg-gray-900  p-4">
      <CgClose className="-ml-4" onClick={showEditPersonnalInfo}/>


       <form className="h-[400px] w-[300px]">
    form
       </form>
      </div>
    </div>
  )
}

export default EditPersonalInfo