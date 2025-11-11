import React from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    image: "/src/assets/photo1.png",
    description:
      "E-commerce site with full CRUD (React, Node.js, MongoDB)",
    link: "https://mellow-klepon-9731bb.netlify.app",
    github:
      "https://github.com/mizanur2734/coffee-king-online-store-client",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "/src/assets/photo2.png",
    description:
      "A personal portfolio website built with React and Tailwind CSS.",
    link: "https://binary-fusion.vercel.app/",
    github: "https://github.com/mizanur2734/binary-fusion",
  },
  {
    id: 3,
    title: "Blog Platform",
    image: "/src/assets/photo3.png",
    description: "A blog platform website built using React and Tailwind CSS.",
    link: "https://our-best-doctors.vercel.app/",
    github:
      "https://github.com/mizanur2734/Our-Best-Doctors-",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="mt-22 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-[#0ef]">Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center justify-center gap-2 
                bg-gray-800 rounded-2xl shadow-lg overflow-hidden 
                  hover:scale-105 transition-transform duration-300 border border-gray-600"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex btn-box-hover px-4 py-2 bg-[#0ef] rounded-lg text-black"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
