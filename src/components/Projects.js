import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const projects = [
    {
      title: "Maths Magician",
      image: "calc.png",
      sourceUrl: "https://github.com/markotuya0/math-magicians",
      demoUrl: "https://marks-math-magician.netlify.app/",
    },
    {
      title: "TO-DO List",
      image: "todo.png",
      sourceUrl: "https://github.com/markotuya0/to-do-list",
      demoUrl: "https://mark-todolist.netlify.app/",
    },
    {
      title: "Space Traveler's Hub",
      image: "space.png",
      sourceUrl: "https://github.com/markotuya0/Space-Travelers-Hub2",
      demoUrl: "https://delightful-starship-b08d3e.netlify.app/",
    },
    {
      title: "Bookstore App",
      image: "lib.png",
      sourceUrl: "https://github.com/markotuya0/Bookstore-React-Redux",
      demoUrl: "https://mark-react-bookstore.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-blue-500" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I’m a creative Full-Stack Developer with a passion for building visually appealing and
            highly functional web applications. I excel at delivering seamless user experiences,
            always ensuring projects yield high value and impact. Below are some of my latest
            projects that showcase my skills and dedication to creating exceptional digital
            solutions..
          </p>
        </div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg h-full overflow-hidden">
                <div className="w-full h-56 flex items-center justify-center bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="font-bold text-xl text-white mb-4">{project.title}</h2>
                  <div className="flex justify-center space-x-4 mt-auto">
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 font-semibold transition duration-300">
                      Source
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View More Button */}
        <div className="mt-10">
          <a
            href="https://github.com/markotuya0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
            View More on my Github
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
