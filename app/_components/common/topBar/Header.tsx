import ThemeSwithcher from "../ThemeSwithcher"
import AuthLinks from "./AuthLinks"
import NavLg from "./NavLg"

const Header = () => {
  return (
    <header className="w-full flex justify-between py-4">
      <div>
        STWs
      </div>
      <NavLg/>
      <div className="w-1/3   flex justify-end gap-10 items-center">
         <AuthLinks/>
        <ThemeSwithcher/>
      </div>
        
    </header>
  )
}

export default Header