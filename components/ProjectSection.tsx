import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Leader_Board",
    description:
      "The leader board is designed with a clean and modern interface, making it easy for users to quickly understand their position and progress in the rankings. Users can view their own scores and achievements, as well as those of other users or teams they are competing against.",
    image: "/project1.png",
    github: "",
    link: "",
  },
  {
    name: "Music-Analyser",
    description:
      " Introducing Music-Analyser, a powerful web application for analyzing and visualizing music! With Music-Analyser, you can upload your favorite songs and get a detailed analysis of the music's structure, chords, melody, and more. The application uses advanced algorithms and machine learning techniques to analyze the music and provide insights into its composition and structure. Users can view detailed visualizations of the music, including graphs, charts, and other visual elements that help to highlight key features and patterns in the music. ",
    image: "/project2.png",
    github: "",
    link: "",
  },
  {
    name: "Weather-Analyser",
    description:
      "Introducing Weather-Analyser, a powerful web application for analyzing and visualizing weather data! With Weather-Analyser, you can get up-to-date information on the current weather conditions and also view historical weather data for any location in the world. Users can view detailed charts and graphs that highlight temperature, precipitation, wind speed, and other key weather metrics, allowing them to better understand and plan for weather-related events.",
    image: "/project3.png",
    github: "",
    link: "",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px  -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="mt-8 md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opoacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-12 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 ">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
