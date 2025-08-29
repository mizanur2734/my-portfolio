import React from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    image: "https://via.placeholder.com/400x250",
    description:
      "A full-stack e-commerce website with React, Node.js, and MongoDB.",
    link: "https://your-ecommerce-link.com",
    github: "https://github.com/yourusername/ecommerce-project",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/400x250",
    description:
      "A personal portfolio website built with React and Tailwind CSS.",
    link: "https://your-portfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 3,
    title: "Blog Platform",
    image: "https://via.placeholder.com/400x250",
    description: "A blog platform with authentication and CRUD features.",
    link: "https://your-blog-link.com",
    github: "https://github.com/yourusername/blog-platform",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-[#0ef]">Projects</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
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
                    className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
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
