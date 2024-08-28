import { FieldError, UseFormRegister } from 'react-hook-form';
import { ZodIssue } from 'zod';
import * as z from "zod"

export type Status = "success" | "failure"
export  type MyResponseType = {
    status:Status,
    errors?: ZodIssue[],
    message?:string
}
export enum AccountType  {
    Developer = "Developer",
    Employer = "Employer"

}
export const userFieldNames = ["username","name","email","password","passwordConfirmation"]
export const loginFiledNames = ["email","password"]
export type ValidDeveloperFormNames = "username" |  "name" | "email" | "password" | "passwordConfirmation" | "isVerfied" | "AccountType" | "createdAt" | "updatedAt"

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
    name : z.string().min(4,{message:" name is required and must be at least 4 characters. "}),
    email:z.string().email({message:"Please enter a valid email."}),
    password:z.string().min(8,{message:"Password must be at least 8 characters."}),
    passwordConfirmation:z.string().min(8,{message:"Passwords do not match."}),
    emailVerified:z.boolean().default(false).optional(),
    accountType:z.nativeEnum(AccountType,{message:"invalid account type."}).default(AccountType.Developer),
    image:z.string().optional(),
    createdAt:z.date().optional(),
    updatedAt:z.date().optional()


}).superRefine((data,ctx)=>{
    if(data.password !== data.passwordConfirmation){
        ctx.addIssue({
            message:"Passwords do not match",
            code:"custom",
            path:["passwordConfirmation"]
        })
    }
})

export type DeveloperType = z.infer<typeof developerSchema>


export const profileSchema = z.object({
    id:z.string().optional(),
    userId:z.string({message:"user id missing."}),
    about:z.string().min(150,{message:"About section must be at least 200 characters."}),
    website:z.string().optional(),
    github:z.string().optional(),
    LinkedIn:z.string().optional(),
    skills:z.string({message:"Please briefly describe your skills."}),
    technologies:z.string({message:"You need to specify at least one technology you are comfortable with."})
})

export type ProfileType = z.infer<typeof profileSchema>

export const projectSchema = z.object({
    id:z.string().optional(),
    title:z.string().min(1,{message:"Please choose a title for your project."}),
    description:z.string().min(30,{message:"Please add a project description, no less than 30 charactetrs."}),
    link:z.string().default(""),
    screenshot:z.string().default(""),
    repo:z.string().default("")
})
export type ProjectType = z.infer<typeof projectSchema>