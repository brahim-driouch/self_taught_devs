import Developers from "./_components/homepage/Developers";
import Hero from "./_components/homepage/Hero";

export default function Home() {
  return (
    <div className="lg:p-24 flex flex-col justify-start items-center gap-10">
         <Hero/>
         <Developers/>
    </div>
  );
}
