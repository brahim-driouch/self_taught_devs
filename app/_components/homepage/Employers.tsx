



const Employers = () => {
  return (
    <section className="w-full p-8 rounded  flex flex-col justify-center items-start gap-3 font-medium  dark:bg-gradient-to-br dark:from-gray-950 dark:to-gray-800 bg-gradient-to-br from-blue-700 to-blue-500  dark:text-gray-300 text-white shadow-md">
        
        <h2 className="text-xl lg:text-3xl uppercase font-bold dark:text-gray-400 my-6 ">For employers</h2>
        <h3 className=" text-yellow-400 font-bold text-xl">Find Your Next Junior Developer</h3>
   <p>
   Looking to nurture raw talent? Our community is a hub for aspiring web developers eager to learn and grow. Connect with motivated individuals who are passionate about coding. Post your junior developer roles and be part of their journey as they build their careers
   </p>
   <div className="w-full flex justify-end">
    <button className="w-1/4 p-2 font-semibold bg-white hover:bg-gray-300 rounded outline-none text-gray-800">Post a job</button>
   </div>
    </section>
  )
}

export default Employers