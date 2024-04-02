import Image from "next/image";
import { heroCardData } from "@/lib/data";
import HeroCard from "@/components/custom/cards/HeroCard";
import Navbar from "@/components/custom/cards/Navbar";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-[#05071D] from-60% to-[#ff2357] h-screen" >
      <Navbar />
      <div className="flex flex-row justify-between p-4">
        <div className="text-white">
          <p>WORK HARD</p>
          <h3>GET YOUR BODY MOVING</h3>
          <p>Leave the comfort zone and get to know all of our programs personalized especially for you</p> <br />
          <p>Follow Us on Our Socials</p>
          <br />
          <div >
            <Image src='/fb.png' height={20} width={20} alt="socials" />
            <Image src='/ig.png' height={20} width={20} alt="socials" />
            <Image src='/x.png' height={20} width={20} alt="socials" />
          </div>
        </div>

        
          <div>
            <Image src='/hero.jpg' height={100} width={20} layout="responsive" alt="hero" />
            {heroCardData.map((card, index) => (
              <div key={index}>
                <HeroCard {...card}/>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
