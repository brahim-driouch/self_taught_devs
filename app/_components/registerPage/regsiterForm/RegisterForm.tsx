"use client"
import {  developerSchema, DeveloperType, FormFieldProps, PersonnalInfoEditionType, userFieldNames, ValidDeveloperFormNames } from "@/dataschema"
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import userService from "@/http/users";
import { PiGoogleLogo } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";
import { signInWithGoogle } from "@/controllers/users/userController";
import { formatFieldName } from "@/utils/formatFieldName";



const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<DeveloperType>({
    resolver:zodResolver(developerSchema),
    mode:'all'
  });

 
  
  const onsubmit: SubmitHandler<DeveloperType> = async (data )=>{
    
    try {
    
      //await developerSchema.parseAsync(data)
      await userService.registerDev(data)
      
    } catch (error) {
      
    }
  };



  return (
    <div className="w-full ">
       <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-2">
           {userFieldNames.map((fieldName)=>(
              <div>
              <input
                className={ "w-full p-2  border dark:border-gray-700 rounded bg-inherit outline-none focus:border-2 dark:focus:border-yellow-100 "}
                type={
                  fieldName === "email"
                    ? "email"
                    : fieldName === "password" ||
                      fieldName === "passwordConfirmation"
                    ? "password"
                    : "text"
                }
                placeholder={formatFieldName(fieldName)}
                {...register(fieldName as ValidDeveloperFormNames)}
              />
              {(errors[fieldName as keyof typeof errors] as FieldError) && (
                <span className="text-red-500 text-sm">
                  {errors[fieldName as keyof typeof errors]?.message}
                </span>
              )}
            </div>
           
           ))}
           
           <button type="submit"  className="w-full p-2 outline-none text-white none rounded bg-blue-500 hover:bg-blue-600">
               Sign Up
           </button>
       </form>
       <h2 className="block w-full text-center my-6">OR</h2>
       <div>
        <form action={signInWithGoogle}>
        <button type="submit" className="w-full p-2 rounded outline-none hover:bg-gray-900 hover:border hover:border-gray-500 flex items-center justify-center gap-4 bg-gray-800">
          Sign up with Google <span><FcGoogle />
          </span>
        </button>
        </form>
        </div>

    </div>
  )
}

export default RegisterForm