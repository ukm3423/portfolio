import React from "react";

import learnifyBanner from "../assets/learnify-banner.png";

export default function Projects() {

  const projectList = [
    {
      id: 1,
      title: "Learnify App",
      image: learnifyBanner,
      description:
        "An e-learning web application where users can access courses, track progress, and take quizzes.",
      teamSize: 3,
      technologies: ["React", "Tailwind CSS", "Material-UI"],
      liveLink: "https://golearnify.netlify.app/",
      githubLink: "https://github.com/ukm3423/learnify",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      image: "https://source.unsplash.com/400x200/?dashboard",
      description:
        "A responsive admin dashboard with charts, analytics, and user management.",
      teamSize: 2,
      technologies: ["React", "Chart.js", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Inventory Management System",
      image: "https://source.unsplash.com/400x200/?inventory,warehouse", // replace with local image if available
      description:
        "A web-based inventory management system to track stock levels, manage product categories, suppliers, and generate reports. It improves warehouse efficiency and reduces manual effort.",
      teamSize: 2,
      technologies: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      liveLink: "#", // add deployment link if hosted
      githubLink: "https://github.com/ukm3423/inventory-management", // replace with actual repo
    },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Here are some of the projects I've worked on. Each project highlights
          different aspects of my skills and experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>

                <p className="text-gray-700 text-xs mb-1">
                  <strong>Team Size:</strong> {project.teamSize}
                </p>

                <p className="text-gray-700 text-xs mb-2">
                  <strong>Tech Stack:</strong> {project.technologies.join(", ")}
                </p>

                <div className="flex space-x-4 mt-3">
                  <a
                    href={project.liveLink}
                    className="text-sm text-blue-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.githubLink}
                    className="text-sm text-gray-600 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </>
  );
}
