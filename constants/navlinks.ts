


export type Navlink = {
    name:string,
    path:string
}

export const navlinks:Navlink[] =[
    {
        name:"Home",
        path:"/",

    },
    {
        name:"Jobs",
        path:"/jobs"
    },
    {
        name:"projects",
        path:"/projects"
    },
    {
        name:"devs",
        path:"/devs"
    }
    
]

export const authLinks: Navlink[]=[
    {
        name:"login",
        path:"/login"
    },{
        name:"Sign Up",
        path:"/sign-up"
    }
]