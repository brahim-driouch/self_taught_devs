import { DeveloperType } from "@/dataSchama"
import { FormEventHandler } from "react"

// TODO   IMPLEMENT REGISTERATION USING STATE OR ACIONS WITH FORMDTA

const DevelopersForm = () => {

    const onsubmit = (e:React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
       const formdata = new FormData()
       const newDeveloper :DeveloperType = {
        username:formdata.get("username")as string || "",
        firstName:formdata.get("firstName")as string || "",
        lastName:formdata.get("lastName")as string || "",
        email:formdata.get("email")as string || "",
        password:formdata.get("password") as string || "",
        passwordConfirmation:formdata.get("passwordConfirmation") as string || ""
       }

       console.log(newDeveloper)
    }
  return (
    <div className="w-full ">
       <form onSubmit={(e)=>onsubmit(e)} className="flex flex-col gap-2">
           <input name="username" className="w-full p-2 border dark:border-gray-700 rounded bg-inherit" type="text" placeholder="Username" />
           <input name="firstName" className="w-full p-2 border dark:border-gray-700 rounded bg-inherit" type="text" placeholder="First name" />
           <input name="lastName" className="w-full p-2 border dark:border-gray-700 rounded bg-inherit" type="text" placeholder="Last name" />
           <input name="email" className="w-full p-2 border dark:border-gray-700 rounded bg-inherit" type="email" placeholder="Email " />
           <input name="password" className="w-full p-2 border dark:border-gray-700 rounded bg-inherit" type="password" placeholder="Password" />
           <input name="passwordConfirmation" className="w-full p-2 border dark:border-gray-700 rounded bg-inherit" type="password" placeholder="Confirm Password" />
           <button  className="w-full p-2 outline-none text-white none rounded bg-blue-500 hover:bg-blue-600">
               Sign Up
           </button>
       </form>

    </div>
  )
}

export default DevelopersForm