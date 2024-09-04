"use client"

import { useState } from "react"
import PersonalInfo from "./PersonalInfo"
import SocialProifiles from "./SocilaProfiles"
import About from "./About"
import Technologies from "./Technologies"
import EditContainer, { editableContent } from "../common/EditContainer"
import { BiEdit } from "react-icons/bi"



const ProfileWrapper = () => {
    const [editable,setEditable]=useState<keyof typeof editableContent | null>(null)

   

  return (
    <div>
      {editable &&          <EditContainer setEditable={setEditable}editable={editable}/>
    }
           <div className="flex justify-between items-start">
           <PersonalInfo/>
           <BiEdit onClick={()=>setEditable("personnalInfo")}/>
           </div>
            <SocialProifiles/>
            <About/>
            <Technologies/>

    </div>
  )
}

export default ProfileWrapper