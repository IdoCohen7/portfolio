import React from "react";

import udemyProject from "../assets/udemy.png";
import myBookProject from "../assets/mybook.png";
import natoursProject from "../assets/natours.png";
import drinkBuddyProject from "../assets/drinkbuddy.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: udemyProject,
    title: "Udemy Re-Creation",
    description:
      "Developed a Udemy-like web app with user and course management.",
    links: {
      github: "https://github.com/IdoCohen7/UdemyRepo",
    },
  },
  {
    img: myBookProject,
    title: "My Book",
    description:
      "Developed a digital library website featuring book and user management and integrated the Google Books API.",
    links: {
      site: "https://proj.ruppin.ac.il/cgroup75/test2/tar6/index.html",
      github: "https://github.com/IdoCohen7/AILibrary",
    },
  },
  {
    img: natoursProject,
    title: "Natours",
    description:
      "Created a website during a Udemy digital course, featuring user and tour management.",
    links: {
      github: "https://github.com/IdoCohen7/natours",
    },
  },
  {
    img: drinkBuddyProject,
    title: "Drink Buddy",
    description:
      "Developed a cloud-based daily hydration tracking system using AWS, leveraging serverless architecture for real-time data storage, analysis, and personalized hydration reminders.",
    links: {
      site: "http://drink-buddy-s3.s3-website-us-east-1.amazonaws.com/landing.html",
      github: "https://github.com/IdoCohen7/drinkBuddy",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                {project.links.site && (
                  <a
                    href={project.links.site}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    <AiOutlineGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
