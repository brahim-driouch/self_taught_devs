import { auth } from "@/auth";
import { authLinks } from "@/constants/navlinks";
import Link from "next/link";
import ProfileTag from "../../users/ProfileTag";

const AuthLinks = async () => {
  const session = await auth();
  return session && session.user ? (
    <ProfileTag />
    // <ul>
    //   <li>
    //     <Link className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600" href={"/logout"}>logout</Link>
    //   </li>
    // </ul>
  ) : (
    <ul className="flex-grow  flex justify-end items-center gap-6 ">
      <li>
        <Link
          href={"/sign-in"}
          className="py-2 px-6 border border-gray-200 rounded dark:border-gray-600 backdrop-blur-md hover:border-gray-500"
        >
          Sign in
        </Link>
      </li>
      <li>
        <Link
          href={"/sign-up"}
          className="bg-orange-500 text-white py-2 px-6 hover:bg-orange-600 rounded"
        >
          Sign up
        </Link>
      </li>
    </ul>
  );
};

export default AuthLinks;
