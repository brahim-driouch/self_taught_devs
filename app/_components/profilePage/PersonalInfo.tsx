"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

import { Suspense, useState } from "react";
import { CircleLoader } from "react-spinners";
import EditPersonalInfo from "./EditPersonalInfo";

const PersonalInfo = () => {
  const session = useSession();
  const user = session.data?.user;

  if(!session?.data?.user) return  (
   <div className="w-full h-[200px] flex justify-center items-center">
     <CircleLoader color="#d9d3d2" />
   </div>
  );

 
  return  (
  <Suspense>
      <div className="w-full flex flex-col p-4">
     

      <div className="w-full flex flex-col  items-start justify-between gap-2 dark:border-b-gray-700  ">
        
        <div className="w-full flex gap-6">
        <div className="relative ">
            <Image
              src={user?.image ?? ""}
              alt="user_image"
              width={100}
              height={100}
              
              className="rounded aspect-auto"
            />
          </div>
          <div className=" grow flex flex-col justify-start  ">
            <h2 className="text-3xl font-black"> {user?.name} </h2>
            <h3 className="text-sm">{user?.email} </h3>
          </div>
           
         
     
          </div>
         
        
      </div>
     
      
    </div>
  </Suspense>
  ) 
};

export default PersonalInfo;
