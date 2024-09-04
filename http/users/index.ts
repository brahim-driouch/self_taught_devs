import { DEV_REGISTRATION, PERSONNAL_USER_INFO_UPDATE } from "@/constants/endpoints";
import { DeveloperType, PersonnalInfoEditionType } from "@/dataschema";
import axios from "axios";




 async function registerDev(dev:DeveloperType) {
    return await axios.post(DEV_REGISTRATION,dev,{
      headers:{
        "Content-Type":"application/json"
      }
    })
}
async function updatePersonnalInfo(data:PersonnalInfoEditionType) {
  return await axios.put(PERSONNAL_USER_INFO_UPDATE,data,{
    headers:{
      "Content-Type":"application/json"
    }
  })
}



const userService = {
    registerDev,
    updatePersonnalInfo
}

export default userService