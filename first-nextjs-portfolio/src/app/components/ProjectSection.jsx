"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
const projectData = [
  {
    id: 1,
    title: "Course Tracker",
    description:
      "React app that allows you to track you progress in your classes",
    image: "/images/courseTracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CJ237/Online-Note-Sharing-App",
    previewUrl: "https://course-tracker-r0tu.onrender.com/",
  },
];
const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
);

  return (
    <>
      <h1 className="text-center text-4xl font-bold text-white mt-4"id="projects">
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
      <div>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tag={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>{" "}
    </>
  );
};

export default ProjectSection;
