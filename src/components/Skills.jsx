import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiPython,
  DiJava,
} from "react-icons/di";
import Reveal from "./Reveal";
import { TbBrandCSharp } from "react-icons/tb";
import { PiFileC } from "react-icons/pi";
import { FaAws } from "react-icons/fa";
import { AiOutlineConsoleSql, AiOutlineDotNet } from "react-icons/ai";
import { SiExpress, SiTypescript } from "react-icons/si";

const skills = [
  {
    category: "Languages",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
      { name: "Python", icon: <DiPython className="text-yellow-500" /> },
      { name: "Java", icon: <DiJava className="text-red-600" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "C#", icon: <TbBrandCSharp className="text-yellow-200" /> },
      { name: "C", icon: <PiFileC className="text-yellow-200" /> },
    ],
  },
  {
    category: "Fullstack & Other",
    technologies: [
      { name: "SQL", icon: <AiOutlineConsoleSql className="text-blue-500" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Express", icon: <SiExpress className="text-green-500" /> },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
      { name: ".NET", icon: <AiOutlineDotNet className="text-pink-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="scroll-mt-24 min-h-screen max-w-[900px] mx-auto flex flex-col items-center justify-center px-6 text-gray-200 pt-24 pb-20 md:py-32"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

        <div className="flex flex-col gap-10 w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                {skill.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center text-center hover:scale-105 transition-transform"
                  >
                    <span className="text-4xl mb-2">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
