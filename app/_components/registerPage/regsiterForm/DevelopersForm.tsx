import { developerFieldNames, developerSchema, DeveloperType, ValidDeveloperFormNames } from "@/dataSchama"
import FormField from "../../reusables/FormField"
import { FieldError, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// TODO   IMPLEMENT REGISTERATION USING STATE OR ACIONS WITH FORMDTA

const DevelopersForm = () => {
  const inputClass = "w-full p-2  border dark:border-gray-700 rounded bg-inherit outline-none focus:border-2 dark:focus:border-yellow-100 "
  const { register, handleSubmit, formState: { errors } } = useForm<DeveloperType>({
    resolver:zodResolver(developerSchema),
    mode:'onBlur'
  });

  function formatFieldName(fieldName: string): string {
    // Replace camelCase transitions with spaces
    const spacedString = fieldName.replace(/([a-z])([A-Z])/g, '$1 $2');
  
    // Capitalize the first letter
    return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
  }
  const onSubmit: SubmitHandler<DeveloperType> = data => console.log(data);

  return (
    <div className="w-full ">
       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
           {developerFieldNames.map((fieldName)=>(
            <FormField
            type= {fieldName === "email" ? "email" : fieldName === "password" || fieldName === "passwordConfirmation" ? "password" : "text"}
            placeholder={formatFieldName(fieldName)}           
            register={register}
            name={fieldName as ValidDeveloperFormNames}
            error={errors[fieldName as keyof typeof errors] as FieldError}
            cssClass={`${errors[fieldName as keyof typeof errors]?.message  ? "  border-red-500  ": "  "} ${inputClass}`}
            />
           ))}
           
           <button  className="w-full p-2 outline-none text-white none rounded bg-blue-500 hover:bg-blue-600">
               Sign Up
           </button>
       </form>

    </div>
  )
}

export default DevelopersForm