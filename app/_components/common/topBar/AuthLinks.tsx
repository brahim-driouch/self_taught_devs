
import { authLinks } from "@/constants/navlinks"
import Link from "next/link"
const AuthLinks = () => {

    const isRegisterLinks=(name:string):boolean=>{
        return name === "Sign Up"

    }
  
  return (
   <ul className="flex gap-4 justify-end">
    {
    authLinks.map((link)=>(
        <li className="">
            <Link href={link.path} className={`${isRegisterLinks(link.name) ? "bg-orange-500 text-white  hover:bg-orange-600 px-4": " px-6 border border-gray-300  dark:border-gray-700"} py-2 rounded py-2 `}>
                {link.name}
            </Link>
        </li>
    ))
    }
   </ul>
  )
}

export default AuthLinks