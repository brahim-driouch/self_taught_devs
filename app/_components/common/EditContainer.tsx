"use client"

import { CgClose } from "react-icons/cg"
import EditPersonnalInfo from "../profilePage/editComponents/EditPersonnalInfo"

export const editableContent ={
    "personnalInfo":EditPersonnalInfo
}

const EditContainer = ({editable,setEditable}:{editable:keyof typeof editableContent | null,setEditable:(editable :keyof typeof editableContent | null)=>void}) => {

  const closeModal = ()=>{
    setEditable(null)
  }
   
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-800 z-20 flex flex-col justify-center items-center">
       <div className="w-full md:w-3/5">
       <div className="w-full flex justify-end">
          <CgClose className="border rounded cursor-pointer hover:text-red-500 hover:border-red-500" onClick={closeModal}/>
        </div>
        <div className="w-full p-6  dark:bg-gray-800 rounded">
           {editable &&  editableContent[editable]()}

        </div>
       </div>

    </div>
  )
}

export default EditContainer