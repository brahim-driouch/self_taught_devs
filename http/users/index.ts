import { DEV_REGISTRATION } from "@/constants/endpoints";
import { DeveloperType } from "@/dataSchama";
import axios from "axios";




 async function registerDev(dev:DeveloperType) {
    return await axios.post(DEV_REGISTRATION,dev,{
      headers:{
        "Content-Type":"application/json"
      }
    })
}



const userService = {
    registerDev
}

export default userService