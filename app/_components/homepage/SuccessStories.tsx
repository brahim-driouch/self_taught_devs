import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";

const SuccessStories = () => {
  return (
    <section className="flex flex-col" >
        <h2 className="text-2xl lg:text-3xl font-black p-4">
            SELF TAUGHT DEVS SUCCESS STORIES
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-6 italic">

        <div className="flex flex-col gap-2 border p-8 rounded">
           <div className="flex gap-4 items-center">
            <div className="h-[50px] w-[50px] relative rounded-full">
                <Image
                src={"/images/justin.jpeg"}
                alt="justin"
                fill={true}
                className="rounded-full"
                />
            </div>
            <h3>Justion bizman</h3>

           </div>
            <p className="indent-6">
            Self-taught coder Justin Zimmerman left sales to pursue a career in software development. After ten years in sales, he decided to learn how to code, and this interview explains how he accomplished it. Justin talks about how he obtained his first job as a developer, why he enjoys the Ruby on Rails coding platform
            
        
           
            </p>
            <Link href={'/'} className=" bg-orange-500 text-center  py-2 px-4 rounded text-white inline-block  items-center ">
            Read more <FaArrowRight className="inline"/>
            </Link>
        </div>

        <div className="flex flex-col gap-2 border p-8 rounded">
           <div className="flex gap-4 items-center">
            <div className="h-[50px] w-[50px] relative rounded-full">
                <Image
                src={"/images/justin.jpeg"}
                alt="justin"
                fill={true}
                className="rounded-full"
                />
            </div>
            <h3>Justion bizman</h3>

           </div>
            <p className="indent-6">
            Self-taught coder Justin Zimmerman left sales to pursue a career in software development. After ten years in sales, he decided to learn how to code, and this interview explains how he accomplished it. Justin talks about how he obtained his first job as a developer, why he enjoys the Ruby on Rails coding platform.
            
            </p>
            <Link href={'/'} className=" bg-orange-500 text-center  py-2 px-4 rounded text-white inline-block  items-center ">
            Read more <FaArrowRight className="inline"/>
            </Link>
        </div>
        </div>


    </section>
  )
}

export default SuccessStories