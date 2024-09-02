"use client"

import { useState } from "react"
import EditPersonalInfo from "./EditPersonalInfo"
import PersonalInfo from "./PersonalInfo"
import SocialProifiles from "./SocilaProfiles"
import About from "./About"
import Technologies from "./Technologies"



const ProfileWrapper = () => {
    const [editPersonnalInfo,setEditPersonnalInfo]=useState(false)

    const showEditPersonnalInfo = ()=>{
        setEditPersonnalInfo(prev=>!prev)
      }

  return (
    <div>
         {editPersonnalInfo && <EditPersonalInfo showEditPersonnalInfo={showEditPersonnalInfo}/>}
            <PersonalInfo/>
            <SocialProifiles/>
            <About/>
            <Technologies/>

    </div>
  )
}

export default ProfileWrapper