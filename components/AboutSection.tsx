import React from "react";
import Image from "next/image";

const Skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Notebooks" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              {""}
              Hi, my name is junaid tariq and i am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{"self-motivated"}</span>, and &nbsp;
              <span className="font-bold">{"driven"}</span> software enginier
              based in Lahore .
            </p>
            <br />
            <p>
              I graduated from Multan, ISP in 2021 and have been Working in the
              field ever since.
            </p>
            <br />
            <p>
              I have wide range of hobbies and passions that keep me busy. From
              reading, playing sports ,travelling , I am always seeking new
              experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you shoud{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I srive to do , I have a pasion for technology
              and a desire to always push the limits of what is possible . I am
              excited to see where my careeer takes me and am always open to new
              opportunities .
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {Skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 mt-5"
              src="/presenting_skills.png"
              alt=""
              width={300}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
