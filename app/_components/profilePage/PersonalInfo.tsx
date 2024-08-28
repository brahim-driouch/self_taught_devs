"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { BiEdit, BiLink } from "react-icons/bi";
import { Suspense, useState } from "react";
import { CircleLoader } from "react-spinners";
import EditPersonalInfo from "./EditPersonalInfo";

const PersonalInfo = () => {
  const [editPersonnalInfo,setEditPersonnalInfo]=useState(false)
  const session = useSession();
  const user = session.data?.user;

  if(!session?.data?.user) return  (
   <div className="w-full h-[200px] flex justify-center items-center">
     <CircleLoader color="#d9d3d2" />
   </div>
  );

  const showEditPersonnalInfo = ()=>{
    setEditPersonnalInfo(prev=>!prev)
  }
  return  (
  <Suspense>
      <div className="w-full flex flex-col  ">
      {editPersonnalInfo && <EditPersonalInfo showEditPersonnalInfo={showEditPersonnalInfo}/>}

      <div className="w-full flex  items-center justify-between gap-2 dark:border-b-gray-700 border-b p-10 ">
        
          <div className="relative ">
            <Image
              src={user?.image ?? ""}
              alt="user_image"
              width={200}
              height={200}
              
              className="rounded aspect-auto"
            />
          </div>
          <div className="flex flex-col justify-start  ">
            <h2 className="text-3xl font-black"> {user?.name} </h2>
            <h3 className="text-sm">{user?.email} </h3>
            <div className="flex gap-2 mt-2">
            <BsGithub />
            <BiLink />
            <MdEmail />
          </div>
          <p className="w-10/12 text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, assumenda. Tenetur esse excepturi enim pariatur, commodi odio accusamus officia. Sit.
          </p>
          <div className="w-full flex justify-end">
        <BiEdit onClick={showEditPersonnalInfo} className="hover:text-gray-600 cursor-pointer"/>

      </div>
          </div>
         
        
      </div>
     
      
    </div>
  </Suspense>
  ) 
};

export default PersonalInfo;
