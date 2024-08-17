"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import { GoProject } from "react-icons/go";
import { PiRobotFill } from "react-icons/pi";

const ProfileCrad = ({ showCard }: { showCard: () => void }) => {
  return (
    <div
      onMouseLeave={showCard}
      className="w-screen md:w-[300px] slide absolute top-0 right-12 p-4 flex flex-col justify-start gap-4 items-start bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded shadow-lg"
    >
      <Link href="/logout" className="flex justify-center items-center gap-2 p-1 hover:text-gray-400">
        <GoProject />
        <span >My projects</span>
        </Link>
      
      <Link href="/logout" className="flex justify-center items-center gap-2 p-1">
        <PiRobotFill />
        <span>Profile</span>
      </Link>
      <Link href="/logout" className="flex justify-center items-center gap-2 p-1">
        <CgLogOut />
        <span>logout</span>
      </Link>
    </div>
  );
};


const ProfileTag = () => {
  const [cardShown, setCardShown] = useState(false);
  const session = useSession();
  const user = session?.data?.user;

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((sub) => sub.charAt(0).toUpperCase())
      .join("");
  };
  const showCard = () => {
    setCardShown((prev) => !prev);
  };
  return (
    <Suspense>
      <div
        onClick={showCard}
        className="w-[40px] h-[40px] overflow-visible  rounded-full relative border border-transparent hover:border-gray-700 hover:dark:border-gray-400 cursor-pointer"
      >
        {user?.image ? (
          <Image
            alt="Profile"
            src={user?.image}
            fill={true}
            className="rounded-full"
          />
        ) : (
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full bg-gray-600 text-white dark:bg-gray-300 dark:text-gray-900 p-2 border dark:border-gray-600">
            <span className=" font-medium text-sm  ">
              {user?.name && getInitials(user?.name)}
            </span>
          </div>
        )}
        {cardShown && <ProfileCrad showCard={showCard} />}
      </div>
    </Suspense>
  );
};

export default ProfileTag;
