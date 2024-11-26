"use client";
import Image from "next/image";
import { useState } from 'react';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownload = () => {
    const pdfUrl = "/Resume.pdf"; // Path to the PDF in the public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // Default filename for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="lg:py-16 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h2 className="text-white mb-4 text-4xl sm:text-6xl lg:text-6xl lg:leading-normal  font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Clifford Thompson",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Full Stack Developer",
                1000,
                "A UI/UX Designer",
                1000,
                "A Combat Veteran",
                1000,
                "A Husband and A Father",
                1000,
              ]}
              wrapper="span"
              speed={30}
              style={{ fontSize: 50 }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-[#ADB7BE] text-base sm:text-xl mb-6 lg:text-xl p-3">
            with a Bachelors in Computer Science and Full Stack Developer
            Certified.{" "}
          </p>
          <div>
           
            <button onClick={handleDownload} className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br  from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-4">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" >
                Download Resume
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] relative mt-10">
            <Image
              src="/images/hero.png"
              alt="hero image"
              className="absolute transform translate-x-6 -translate-y-1/2 top-1/2 rounded-full"
              width={250}
              height={250}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default HeroSection;
