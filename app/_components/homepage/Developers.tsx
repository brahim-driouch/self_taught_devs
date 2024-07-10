import { TbPlugConnected } from "react-icons/tb";
import { RiSlideshow2Fill } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Image from "next/image";


const Developers = () => {
  return (
    <section className="w-full mt-20 p-8 rounded  flex  justify-center items-start gap-3">
       <div className="w-full lg:w-1/2 py-16 ">
       <h2 className="text-xl lg:text-3xl uppercase font-bold dark:text-gray-400 my-6 "></h2>
        <div className="w-4/5 mx-auto grid grid-cols-1 gap-6 p-2">
          <div className="p-4 border-b dark:border-b-gray-700 ">
            <div className="flex gap-2 items-center p-2">
              <div className="bg-blue-50/75 rounded  p-2">
              <TbPlugConnected className="text-xl text-blue-500"/>
              </div>
            <h3 className="">Connect</h3>
            </div>
            <p className="text-sm dark:text-gray-400">
            Break through the isolation of learning alone. Connect with a thriving community of self-taught developers to share experiences, learn from each other, and find your tribe.
            </p>
          </div>
          <div className="p-4 border-b dark:border-b-gray-700">
          <div className="flex gap-2 items-center p-2">

              <div className="bg-green-50/75 rounded p-2 ">
              <RiSlideshow2Fill className="text-xl text-green-500"/>
              </div>
            <h3 className="">Showcase</h3>
            </div>
            <p className="text-sm dark:text-gray-400">
            Forget the resume black hole. Showcase your real skills and passion through your projects. Stand out from the crowd and get noticed by the right employers.
          
            </p>
          </div>
          <div className="p-4 border-b dark:border-b-gray-700">
          <div className=" flex gap-2 items-center p-2">

          <div className="p-2 bg-orange-50/75 rounded">
          <FaMoneyBillTrendUp className="text-orange-500 text-xl"/>
          </div>
           <h3 className="">Get Hired</h3>
           </div>
            <p className="text-sm dark:text-gray-400">
            Cut through the job search noise. Get hired faster with The Hub. Showcase your skills, connect with employers, and find your dream job – all in one place.
            </p>
          </div>
        </div>
       
       </div>
       <div className="w-full lg:w-1/2 relative h-[600px]">

<Image
alt="programmer_image"
src={"/images/programmer_image.svg"}
fill={true}
/>

</div>
    </section>
  )
}

export default Developers