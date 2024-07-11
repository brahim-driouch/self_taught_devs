import Features from "./_components/homepage/Features";
import Hero from "./_components/homepage/Hero";
import SuccessStories from "./_components/homepage/SuccessStories";

export default function Home() {
  return (
    <div className="lg:p-24 flex flex-col justify-start items-center gap-10">
         <Hero/>
         <Features/>
         <SuccessStories/>
    </div>
  );
}
