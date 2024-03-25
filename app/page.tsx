import Image from "next/image";

export default function Home() {
  return (
    <div >
      {/* <Navbar /> */}
      <div className="flex flex-row justify-between">
        <div >
          <p  >WORK HARD</p>
          <h3 >GET YOUR BODY MOVING</h3>
          <p >Leave the comfort zone and get to know all of our programs personalized especially for you</p> <br />


          <p>Follow Us on Our Socials</p>
          <br />
          <div >
            <Image src='' height={20} width={20} alt="socials" />
            <Image src='' height={20} width={20} alt="socials" />
            <Image src='' height={20} width={20} alt="socials" />
          </div>
        </div>

        {/* {isLargerThan768 &&
          <div position='relative'>
            <Image as={PiCircleDashedThin} divSize={450} color='primary.medium' position='absolute' right={180} top={150} zIndex={0} />
            <Image src={hero} h={'800'} position='relative' />
            {heroCardData.map((card, index) => (
              <HeroCard key={index} {...card} />
            ))}
          </div>

        } */}



      </div>
    </div>
  );
}
