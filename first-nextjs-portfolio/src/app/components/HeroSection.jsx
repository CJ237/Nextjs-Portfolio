"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';  

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h2 className="text-white mb-4 text-4xl sm:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-teal-600">Hello, I am{" "}</span>
            <br/>
            <TypeAnimation
              sequence={[
              // Same substring at the start will only be typed out once, initially
              'Clifford Thompson',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'A Full Stack Developer',
              1000,
              'A UI/UX Designer',
              1000,
              'A Combat Veteran',
              1000,
              'A Husband and Father',
              1000
          ]}
          wrapper="span"
          speed={30}
          style={{fontSize: 40}}
          repeat={Infinity}
          />
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-xl mb-6 lg:text-xl p-3">
            with a Bachelors in Computer Science and Full Stack Developer Certified.{" "}
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-sky-50 via-slate-500 to-teal-500 hover:bg-white text-white">
              Hire</button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-sky-50 via-slate-500 to-teal-500 hover:bg-slate-800 text-white mt-4">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
              </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
           <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative">
            <Image 
            src="/images/hero.png" 
            alt="hero image" 
            className="absolute transform translate-x-6 -translate-y-1/2 top-1/2 rounded-full"
            width={250} 
            height={250}/>  
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
