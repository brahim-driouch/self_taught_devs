import { FieldError, UseFormRegister } from 'react-hook-form';
import * as z from 'zod'

export enum AccountType  {
    Developer = "Developer",
    Employer = "Employer"

}
export const developerFieldNames = ["username","firstName","lastName","email","password","passwordConfirmation"]
export type ValidDeveloperFormNames = "username" | "firstName" | "lastName" | "email" | "password" | "passwordConfirmation" | "isVerfied" | "AccountType" | "createdAt" | "updatedAt"

export type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidDeveloperFormNames;
    register: UseFormRegister<DeveloperType>;
    error: FieldError | undefined;
    cssClass : string

  };

export const developerSchema = z.object({
    username :z.string().min(3,{message:"Username must be at least 3 characters."}),
    firstName : z.string().min(2,{message:"First name is required and must be at least 2 characters. "}),
    lastName : z.string().min(2,{message:"Last name is required and must be at least 2 characters. "}),
    email:z.string().email({message:"Please enter a valid email."}),
    password:z.string().min(8,{message:"Password must be at least 8 characters."}),
    passwordConfirmation:z.string().min(8,{message:"Passwords do not match."}),
    isVerfied:z.boolean().default(false).optional(),
    AccountType:z.nativeEnum(AccountType),
    createdAt:z.date().optional(),
    updatedAt:z.date().optional()

}).refine((data)=>data.password !== data.passwordConfirmation,{
    message:"Password do not match."
})

export type DeveloperType = z.infer<typeof developerSchema>

