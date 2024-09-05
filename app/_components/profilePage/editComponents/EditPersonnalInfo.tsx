import { FieldError, useForm,SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  personnalInfoEditionFields,
  personnalInfoEditionSchema,
  PersonnalInfoEditionType,
  ValidPersonnalInfoFieldNames,
} from "@/dataschema";
import { formatFieldName } from "@/utils/formatFieldName";
import { useSession } from "next-auth/react";

import axios from "axios";
import { PERSONNAL_USER_INFO_UPDATE } from "@/constants/endpoints";
import { toast } from "react-toastify";

const EditPersonnalInfo = () => {
const session = useSession()

const user = session.data?.user
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonnalInfoEditionType>({
    resolver: zodResolver(personnalInfoEditionSchema),
    mode: "all",
    defaultValues:{
      name:user?.name,
      email:user?.email,
      password:"",
      passwordConfirmation:""
    }
  });

  const watchedEmail = watch("email",user?.email)
  const onsubmit:SubmitHandler<PersonnalInfoEditionType> = async(data)=>{
      try {
       const response = await axios.put(PERSONNAL_USER_INFO_UPDATE,data,{
          headers:{
            "Content-Type":"application/json"
          }
        })  
        session.update(response.data)
        toast.success(response.data.message)
           
      
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div className="w-full">

      <form className="w-full flex flex-col justify-start items-center gap-4 " onSubmit={handleSubmit(onsubmit)}>
        {personnalInfoEditionFields.map((fieldName) => (
          <div key={fieldName} className="w-full">
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
              {...register(fieldName as ValidPersonnalInfoFieldNames)}
            />
            {(errors[fieldName as keyof typeof errors] as FieldError) && (
              <span className="text-red-500 text-sm">
                {errors[fieldName as keyof typeof errors]?.message}
              </span>
            )}
          </div>
        ))}
        {watchedEmail !== user?.email && (
          <>
                <div className="w-full">
            <input
              
              className={ "w-full p-2  border dark:border-gray-700 rounded bg-inherit outline-none focus:border-2 dark:focus:border-yellow-100 "}
              type="password"
              placeholder={formatFieldName("password")}
              {...register("password")}
            />
            {(errors["password"]) && (
              <span className="text-red-500 text-sm">
                {errors["password"]?.message}
              </span>
            )}
          </div>
          <div className="w-full">
            <input
              
              className={ "w-full p-2  border dark:border-gray-700 rounded bg-inherit outline-none focus:border-2 dark:focus:border-yellow-100 "}
              type="password"
              placeholder={formatFieldName("passwordConfirmation")}
              {...register("passwordConfirmation")}
            />
            {(errors["passwordConfirmation"]) && (
              <span className="text-red-500 text-sm">
                {errors["passwordConfirmation"]?.message}
              </span>
            )}
          </div>
          </>
        )}
     
       <button type="submit" className="w-full rounded bg-yellow-100 p-2 text-gray-800">
          Submit
      
       </button>
      </form>
    </div>
  );
};

export default EditPersonnalInfo;
