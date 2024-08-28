import PersonalInfo from "@/app/_components/profilePage/PersonalInfo";
import Skills from "@/app/_components/profilePage/Skills";




export default async function ProfilePage() {
    return (
        <div className="w-full p-24 flex flex-col justify-start items-center gap-6  ">
            <PersonalInfo/>
            <Skills/>
        </div>
    )
    
}