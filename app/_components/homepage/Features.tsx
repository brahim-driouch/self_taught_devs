import { TbPlugConnected } from "react-icons/tb";
import { RiSlideshow2Fill } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Image from "next/image";

const Developers = () => {
  return (
    <section className="w-full mt-16 p-8 rounded  flex flex-col justify-center items-start gap-3">
      <h2 className="text-xl lg:text-3xl uppercase font-bold dark:text-gray-400 my-6 "></h2>
      <div className="w-full mx-auto  gap-6 p-2">
        <div className="p-4 border-b dark:border-b-gray-700 ">
          <div className="flex gap-2 items-center p-2">
            <div className="bg-blue-50/75 rounded  p-2">
              <TbPlugConnected className="text-3xl text-blue-500" />
            </div>
            <h3 className="text-3xl font-black">Connect</h3>
          </div>
          <p className="text-sm dark:text-gray-400">
            Break through the isolation of learning alone. Connect with a
            thriving community of self-taught developers to share experiences,
            learn from each other, collaborate on a project, and find your
            tribe.
          </p>
          <div className="w-full flex justify-end">
            <button className="bg-blue-500 text-white w-1/5 p-2 rounded hover:bg-blue-600">Visit Commuity</button>
          </div>
        </div>
        <div className="p-4 border-b dark:border-b-gray-700">
          <div className="flex gap-2 items-center p-2">
            <div className="bg-green-50/75 rounded p-2 ">
              <RiSlideshow2Fill className="text-3xl text-green-500" />
            </div>
            <h3 className="text-3xl font-black">Showcase</h3>
          </div>
          <p className="text-sm dark:text-gray-400">
            Forget the resume black hole. Showcase your real skills and passion
            through your projects. Stand out from the crowd and get noticed by
            the right employers.
          </p>
          <div className="w-full flex justify-end">
            <button className="bg-green-500 text-white w-1/5 p-2 rounded hover:bg-green-600">Create your profile</button>
          </div>
        </div>
        <div className="p-4 border-b dark:border-b-gray-700">
          <div className=" flex gap-2 items-center p-2">
            <div className="p-2 bg-orange-50/75 rounded">
              <FaMoneyBillTrendUp className="text-orange-500 text-3xl" />
            </div>
            <h3 className="text-3xl font-black">Get Hired</h3>
          </div>
          <p className="text-sm dark:text-gray-400">
            Cut through the job search noise. Get hired faster with The Hub.
            Showcase your skills, connect with employers, and find your dream
            job – all in one place.
          </p>
          <div className="w-full flex justify-end">
            <button className="bg-orange-500 text-white w-1/5 p-2 rounded hover:bg-orange-600">See Job listings</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
