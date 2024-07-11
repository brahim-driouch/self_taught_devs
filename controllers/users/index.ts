import { developerSchema, DeveloperType } from "@/dataSchama";


export async function registerDeveloper(dev:DeveloperType) {
    
    try {
        await developerSchema.parseAsync(dev)
        
        
    } catch (error) {
        return error
    }

}