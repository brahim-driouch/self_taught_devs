import { DEV_REGISTRATION, PERSONNAL_USER_INFO_UPDATE } from "@/constants/endpoints";
import { DeveloperType, PersonnalInfoEditionType } from "@/dataschema";
import axios from "axios";
import { revalidatePath } from "next/cache";




 export async function registerDev(dev:DeveloperType) {
    return await axios.post(DEV_REGISTRATION,dev,{
      headers:{
        "Content-Type":"application/json"
      }
    })
}
export async function updatePersonnalInfo(data:PersonnalInfoEditionType) {
   await axios.put(PERSONNAL_USER_INFO_UPDATE,data,{
    headers:{
      "Content-Type":"application/json"
    }
  })
  revalidatePath("/in/profile");
}



