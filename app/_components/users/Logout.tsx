"use client"
import userController from "@/controllers"
import { CgLogOut } from "react-icons/cg"






const Logout = () => {

    const endSession= async()=>{
         await  userController.logout()
    }
  return (
    <button  onClick={endSession} className="flex justify-center items-center gap-2 p-1">
        <CgLogOut />
        <span>logout</span>
      </button>
  )
}

export default Logout