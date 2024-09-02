import PersonalInfo from "@/app/_components/profilePage/PersonalInfo";
import About from "@/app/_components/profilePage/About";
import SocialProifiles from "@/app/_components/profilePage/SocilaProfiles";
import Technologies from "@/app/_components/profilePage/Technologies";
import ProfileWrapper from "@/app/_components/profilePage/ProfileWrapper";




export default async function ProfilePage() {
    return (
        <div className="w-full p-24 flex flex-col justify-start items-center gap-2 ">
            <ProfileWrapper/>
        </div>
    )
    
}