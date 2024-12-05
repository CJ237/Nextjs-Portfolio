"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: "Course Tracker",
    description:
      "MERN Stack app that allows you to track you progress in your classes",
    image: "/images/courseTracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CJ237/Online-Note-Sharing-App",
    previewUrl: "https://course-tracker-r0tu.onrender.com/",
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Portfolio in Next.js",
    image: "/images/portfolioNext.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CJ237/Nextjs-Portfolio",
    previewUrl: "https://nextjs-portfolio-lime-phi.vercel.app/",
  },
  {
    id: 3,
    title: "The Weather App",
    description:
      "The weather forecast",
    image: "/images/Weather.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/weather",
    previewUrl: "https://weatherapp562.netlify.app",
  },
  {
    id: 4,
    title: "Jate",
    description:
      "Just Another Text Editor",
    image: "/images/JATE.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/pwaJATE19",
    previewUrl: "https://pwajate19.onrender.com/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },

  }
  return (
    <section >
      <h1 className="text-center text-4xl font-bold text-white mt-4" id="project">
        My Projects
      </h1>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md: grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>{" "}
    </section>
  );
};

export default ProjectSection;
