import React from "react";

import udemyProject from "../assets/udemy.png";
import myBookProject from "../assets/mybook.png";
import natoursProject from "../assets/natours.png";
import drinkBuddyProject from "../assets/drinkbuddy.png";
import bonAppetitProject from "../assets/bonAppetit.png";
import trapTheCatProject from "../assets/trapTheCat.png";
import investItProject from "../assets/investit.png";
import truckBamoshava from "../assets/truckbamoshava.png";
import movieStarProject from "../assets/movieStar.png";
import cafeDeaz from "../assets/cafedeaz.png";
import { AiOutlineGithub } from "react-icons/ai";
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
      github: "https://github.com/IdoCohen7/drinkBuddy",
    },
  },
  {
    img: bonAppetitProject, // שים null אם אין לך עדיין תמונה
    title: "BonAppetit",
    description:
      "A cloud-based restaurant ordering system built using AWS Serverless architecture. Customers can place orders for delivery or pickup, while restaurant staff can manage the menu, orders, and delivery assignments. Features real-time updates, scheduled tasks, user authentication, and route estimation.",
    links: {
      site: "http://bonapetit-website.s3-website-us-east-1.amazonaws.com/",
      github: "https://github.com/IdoCohen7/BonAppetit", // אם יש לך רפו, אחרת תוכל להסיר את השורה
    },
  },
  {
    img: investItProject,
    title: "Invest It",
    description:
      "A social platform for finance enthusiasts that connects beginners with experts. Features include chat rooms, a dynamic post feed, user profiles, live stock data, and financial news. The app supports real-time messaging via Supabase and leverages an intelligent algorithm to categorize posts based on user interests.",
    links: {
      site: "https://proj.ruppin.ac.il/cgroup75/test2/tar2/dist/index.html",
      github: "https://github.com/IdoCohen7/InvestIt",
    },
  },
  {
    img: movieStarProject,
    title: "Movie Star (Work in progress)",
    description:
      "A movie discovery react native platform that allows users to search for movies, view details, and manage their watchlist. The app features a responsive design, user authentication, and integrates with the TMDB API for real-time movie data.",
    links: {
      github: "https://github.com/IdoCohen7/MovieStar",
    },
  },
];

const landingPages = [
  {
    img: truckBamoshava, // תמונה של Truck BaMoshava
    title: "Truck Bamoshava | טראק במושבה",
    description:
      "A stylish, responsive landing page for a food truck business.",
    links: {
      site: "https://truckbamoshava.co.il",
    },
  },
  {
    img: cafeDeaz, // תמונה של Cafe De Az
    title: "Cafe Deaz | קפה דאז",
    description:
      "A visually engaging landing page for a boutique coffee truck.",
    links: {
      site: "https://cafedeaz.co.il",
    },
  },
];

const games = [
  {
    img: trapTheCatProject,
    title: "Trap The Cat",
    description:
      "A strategy game where the player must trap a cat attempting to escape a hexagonal grid. In each turn, the player can block one tile or place a mouse bait to distract the cat. The cat uses a combination of A* pathfinding and Minimax algorithms to intelligently plan its moves, break through defenses, and reach the edge of the board. Built with Python and Pygame, featuring smooth animations, sound effects, and real-time decision-making.",
    links: {
      github: "https://github.com/IdoCohen7/TrapTheCat",
      demo: "https://www.youtube.com/watch?v=xsYrPa3r9XI&ab_channel=IdoCohen",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

      {/* Main Projects */}
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

      {/* Landing Pages Section */}
      <h2 className="text-3xl font-bold text-gray-200 mt-20 mb-8">
        Landing Pages
      </h2>
      {landingPages.map((page, index) => (
        <Reveal key={`landing-${index}`}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              {page.img ? (
                <img
                  src={page.img}
                  alt={page.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-full h-64 bg-slate-800 rounded-lg flex items-center justify-center text-gray-500">
                  No image yet
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {page.title}
              </h3>
              <p className="text-gray-300 mb-4">{page.description}</p>
              <div>
                {page.links.site && (
                  <a
                    href={page.links.site}
                    className="inline-block px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
      {/* Games Section */}
      <h2 className="text-3xl font-bold text-gray-200 mt-20 mb-8">Games</h2>
      {games.map((game, index) => (
        <Reveal key={`game-${index}`}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              {game.img ? (
                <img
                  src={game.img}
                  alt={game.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              ) : (
                <div className="w-full h-64 bg-slate-800 rounded-lg flex items-center justify-center text-gray-500">
                  No image yet
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {game.title}
              </h3>
              <p className="text-gray-300 mb-4">{game.description}</p>
              <div>
                <div className="flex space-x-4">
                  {game.links.demo && (
                    <a
                      href={game.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                    >
                      View Demo
                    </a>
                  )}
                  {game.links.github && (
                    <a
                      href={game.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                    >
                      <AiOutlineGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
