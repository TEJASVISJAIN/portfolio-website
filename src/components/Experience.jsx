import React from "react";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools, FaBrain, FaMobile } from "react-icons/fa";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import postman from "../assets/postman.png";
import gcp from "../assets/gcp.webp";
import angular from "../assets/angular.png";

const Experience = () => {
  const techCategories = [
    {
      id: 1,
      title: "Frontend Development",
      icon: <FaCode className="text-cyan-400" size={24} />,
      description: "Building responsive and interactive user interfaces",
      technologies: [
        { src: reactImage, name: "React.JS" },
        { src: angular, name: "Angular" },
        { name: "Next.js" },
        { name: "React Native" },
        { name: "TypeScript" },
        { name: "Redux" },
        { name: "Vite" },
        { src: html, name: "HTML5" },
        { src: css, name: "CSS3" },
        { name: "SCSS" },
        { src: tailwind, name: "Tailwind CSS" },
        { src: javascript, name: "JavaScript" },
        { name: "Webpack" },
      ]
    },
    {
      id: 2,
      title: "Backend & APIs",
      icon: <FaServer className="text-purple-400" size={24} />,
      description: "Server-side development and API integration",
      technologies: [
        { name: "Node.js" },
        { name: "Fast API" },
        { name: "RESTful APIs" },
        { name: "GraphQL" },
        { src: postman, name: "Postman" },
        { name: "Docker" },
        { name: "Redis" },
        { name: "Kafka" },
      ]
    },
    {
      id: 3,
      title: "GenAI & AI/ML",
      icon: <FaBrain className="text-pink-400" size={24} />,
      description: "Artificial Intelligence and Machine Learning technologies",
      technologies: [
        { name: "GenAI" },
        { name: "Langchain" },
        { name: "AI Integration" },
        { name: "Machine Learning" },
      ]
    },
    {
      id: 4,
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-green-400" size={24} />,
      description: "Cloud platforms and deployment strategies",
      technologies: [
        { src: gcp, name: "Google Cloud Platform" },
        { name: "Kubernetes" },
        { name: "CI/CD" },
        { name: "CDN" },
        { name: "Scalable Solutions" },
      ]
    },
    {
      id: 5,
      title: "Database & Storage",
      icon: <FaDatabase className="text-orange-400" size={24} />,
      description: "Database management and data storage solutions",
      technologies: [
        { name: "MySQL" },
        { name: "Redis" },
        { name: "Database Design" },
        { name: "ACID Properties" },
      ]
    },
    {
      id: 6,
      title: "Development Practices",
      icon: <FaTools className="text-blue-400" size={24} />,
      description: "Software development methodologies and best practices",
      technologies: [
        { src: github, name: "GitHub" },
        { name: "Agile Development" },
        { name: "Algorithms" },
        { name: "Low-Level Design" },
        { name: "High-Level Design" },
        { name: "SOLID Principles" },
        { name: "Vibe Coding" },
        { name: "Cursor" },
      ]
    }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 w-full text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack & Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital experiences
          </p>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {techCategories.map((category) => (
            <div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                {category.icon}
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-300">{category.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <div className="relative">
                        {tech.src ? (
                          <img 
                            src={tech.src} 
                            alt={tech.name} 
                            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300" 
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-cyan-400 font-bold text-sm">{tech.name.charAt(0)}</span>
                          </div>
                        )}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="text-center">
                        <h4 className="font-semibold text-white text-xs leading-tight">{tech.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Full-Stack Expertise</h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              I specialize in building scalable, modern applications using cutting-edge technologies. 
              From frontend frameworks to AI integration, cloud deployment to database design, 
              I bring comprehensive technical expertise to every project.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">40+</div>
                <div className="text-gray-300 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">6</div>
                <div className="text-gray-300 text-sm">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">AI</div>
                <div className="text-gray-300 text-sm">GenAI Expert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">∞</div>
                <div className="text-gray-300 text-sm">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
