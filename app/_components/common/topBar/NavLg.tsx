"use client"
import { type Navlink,navlinks } from "@/constants/navlinks"
import Link from "next/link"
import { usePathname } from "next/navigation"
const NavLg = () => {
const pathname = usePathname()
  const links = navlinks
  console.log(pathname)
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-4">
        {links.map((link:Navlink)=>(
          <li key={link.name}>
           <Link href={link.path} className={`${pathname.includes(link.path) ? " text-gray-400 ": ""}   hover:text-gray-400 py-2 px-4 rounded`}>
           {link.name}
           </Link>
          </li>
        ))}
        
      </ul>
    </nav>
  )
}

export default NavLg