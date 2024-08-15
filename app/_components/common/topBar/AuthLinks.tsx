
import { auth } from "@/auth"
import { authLinks } from "@/constants/navlinks"
import Link from "next/link"

const AuthLinks = async() => {
     const session = await auth()
     const isAuthenticated = !!session
    const isRegisterLinks=(name:string):boolean=>{
        return name === "Sign Up"

    }
  
  return (
   <ul className="flex gap-4 justify-end">
    {isAuthenticated ? (
       <Link href={"/logout"} className="py-1 px-6 bg-red-500 text-white rounded outline-none hover:bg-red-600">
        log out
       </Link>
    ):(
        authLinks.map((link)=>(
            <li  key={link.name} className="">
                <Link href={link.path} className={`${isRegisterLinks(link.name) ? "bg-orange-500 text-white  hover:bg-orange-600 px-4": " px-6 border border-gray-300  dark:border-gray-700"} py-2 rounded py-2 `}>
                    {link.name}
                </Link>
            </li>
        ))
    )
  
    }
   </ul>

  )
}

export default AuthLinks