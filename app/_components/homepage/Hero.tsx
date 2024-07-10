


const Hero = () => {
  return (
    <div className=" flex flex-col gap-6 justify-start items-center p-24">
        <h1 className="text-2xl lg:text-5xl">The Hub for  <span className="bg-gray-800 text-white px-2 rounded"> Self-Taught Devs</span> <br/></h1>
        <h2 className="text-xl lg:text-4xl text-orange-500"><i>Connect, Showcase, Get Hired</i></h2>
        <p className="w-full mx-auto lg:w-4/5 text-gray-400 text-sm">
        your gateway to a thriving developer community and exciting career opportunities.  Create a profile, showcase your projects, connect with like-minded individuals, and get noticed by top employers seeking talented self-taught developers.
        </p>
        <div className="w-full flex gap-6 justify-center">
            <button className="w-1/5 bg-orange-500 hover:bg-orange-600 text-white p2 rounded">
                Sign Up
            </button>
            <button className="w-1/5 bg-gray-950 hover:bg-black text-white p-2 rounded">
                Browse Jobs
            </button>
        </div>
    </div>
  )
}

export default Hero