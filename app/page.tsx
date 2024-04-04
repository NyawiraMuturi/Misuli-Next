import Image from "next/image";
import { heroCardData } from "@/lib/data";
import HeroCard from "@/components/custom/cards/HeroCard";
import Navbar from "@/components/custom/cards/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#05071D] from-60% to-[#ff2357] h-screen" >
      <Navbar />
      <div className="flex flex-row justify-between py-4 px-6 h-[90%]">
        <div className="text-white text-lg space-y-4 flex flex-col justify-center w-1/2">
          <p className="font-extrabold text-lg text-[#FFC121]">WORK HARD</p>
          <h3 className="font-extrabold text-8xl">GET YOUR BODY MOVING</h3>
          <p className="font-thin text-xl">Leave the comfort zone and get to know all of <br /> our programs personalized especially for you</p> <br />
          <p className="font-extrabold text-lg text-[#FFC121]">Follow Us on Our Socials</p>
          <br />
          <div className="flex gap-x-4" >
            <Image src='/fb.png' height={20} width={20} alt="socials" />
            <Image src='/ig.png' height={20} width={20} alt="socials" />
            <Image src='/x.png' height={20} width={20} alt="socials" />
          </div>
        </div>

        
          <div className=" w-1/2">
            <div className="border-dotted border border-[#ff2357]  absolute h-72 w-72 rounded-full top-15 right-45">

            </div>
            <div className="border border-[#FFC121] relative rounded-full ">
              <Image src='/hero.jpg' height={100} width={20} layout="responsive" alt="hero" />
            </div>
            
            {heroCardData.map((card, index) => (
              <div key={index} className="relative">
                <HeroCard {...card}/>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
