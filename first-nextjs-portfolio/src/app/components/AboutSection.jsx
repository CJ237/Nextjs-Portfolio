"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton.";



const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSql</li>
                <li>Sequelize</li>
                <li>mongodb</li>
                <li>Mongoose</li>
                <li>GraphQl</li>
                <li>C++</li>
                <li>Java</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Souther Methodist University, Full Stack Developer Boot Camp</li>
                <li>University of Phoenix</li>
                <li>California State University, Fullerton</li>
                <li>Mount San Antonio College</li>
                <li>El Paso Community College</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Full Stack Developer Certificate</li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-10">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 xl:py-16">
        <Image
          src="/images/fullstackImage.png"
          width={500}
          height={200}
          alt="full stack"
          style={{borderRadius: 10}}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4" id="about" >
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            A dedicated Army combat veteran and lifelong learner. I bring a
            resilient and adaptable mindset to everything I pursue. As a fast
            learner with a passion for full-stack development, I enjoy exploring
            the depths of technology and honing my skills to build impactful
            solutions.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8" >{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
