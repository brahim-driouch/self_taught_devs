"use client"
import { BiLink } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"
import { MdEmail } from "react-icons/md"




const SocialProifiles = () => {
  return (
    <div className="w-full p-4 flex flex-col gap-2 ">
       <h2 className="text-3xl font-black">
             Social Profiles 
        </h2>
   <div className="flex items-center gap-2">
   <BsGithub /><span>Github</span>
   </div>
   <div className="flex items-center gap-2">
   <BiLink /><span className="">mywebsite.com</span>
   </div>
   
   <div  className="flex items-center gap-2">
    <MdEmail /><span>contact</span>
   </div>
  </div>
  )
}

export default SocialProifiles