import React, { useState } from "react";
import { FaGithub, FaPlay, FaExternalLinkAlt, FaCode, FaMobile, FaDesktop, FaFilter } from "react-icons/fa";
import digitalLaundri from "../assets/portfolio/digitalLaundri.png";
import fileSystem from "../assets/portfolio/fileSystem.png";
import itemList from "../assets/portfolio/itemList.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolios = [
    {
      id: 1,
      src: fileSystem,
      title: "File Organizer",
      description: "Automated file organization system with intelligent categorization and smart folder management",
      longDescription: "A Python-based file organization tool that automatically categorizes files based on their type, date, and content. Features include batch processing, custom rules, and duplicate detection.",
      demo: "https://drive.google.com/file/d/1dI6a1Q8j7aUyxnP-y2R_3KZlzi52SUUu/view",
      code: "https://github.com/TEJASVISJAIN/FileOrganiser",
      tech: ["Python", "File Management", "Automation", "OS Integration"],
      category: "automation",
      status: "completed",
      featured: true,
    },
    {
      id: 2,
      src: digitalLaundri,
      title: "Digital Laundri App",
      description: "Full-stack laundry management application with booking system and real-time tracking",
      longDescription: "A comprehensive laundry service application built with React and Node.js. Features include user authentication, booking management, payment integration, and real-time order tracking.",
      demo: "https://youtu.be/TDzTaSWn1sk",
      code: "https://github.com/TEJASVISJAIN/laundriApp",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      category: "web",
      status: "completed",
      featured: true,
    },
    {
      id: 3,
      src: itemList,
      title: "Item List Filter App",
      description: "Dynamic item filtering and search application with advanced sorting capabilities",
      longDescription: "A React-based application for managing and filtering item lists with real-time search, category filtering, and dynamic sorting options. Perfect for inventory management and data organization.",
      demo: "",
      code: "https://github.com/TEJASVISJAIN/ItemListFilterApp",
      tech: ["React", "JavaScript", "CSS3", "Local Storage"],
      category: "web",
      status: "completed",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: <FaFilter size={14} /> },
    { id: "web", label: "Web Apps", icon: <FaDesktop size={14} /> },
    { id: "automation", label: "Automation", icon: <FaCode size={14} /> },
    { id: "featured", label: "Featured", icon: <FaExternalLinkAlt size={14} /> },
  ];

  const filteredPortfolios = portfolios.filter(project => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });

  const redirectToDemoCode = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed": return "text-green-400 bg-green-400/20 border-green-400/30";
      case "in-progress": return "text-yellow-400 bg-yellow-400/20 border-yellow-400/30";
      case "planned": return "text-blue-400 bg-blue-400/20 border-blue-400/30";
      default: return "text-gray-400 bg-gray-400/20 border-gray-400/30";
    }
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 w-full text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my recent projects and the technologies I've been working with
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20"
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPortfolios.map((project) => (
            <div
              key={project.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                      ⭐ Featured
                    </span>
                  </div>
                )}
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.demo && (
                    <button
                      onClick={() => redirectToDemoCode(project.demo)}
                      className="flex items-center space-x-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-full text-white font-semibold transition-colors duration-300 hover:scale-110"
                    >
                      <FaPlay size={14} />
                      <span>Demo</span>
                    </button>
                  )}
                  <button
                    onClick={() => redirectToDemoCode(project.code)}
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-full text-white font-semibold transition-colors duration-300 hover:scale-110"
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((technology, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-xs text-cyan-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {project.demo && (
                    <button
                      onClick={() => redirectToDemoCode(project.demo)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 rounded-lg text-cyan-300 hover:text-cyan-200 transition-all duration-300"
                    >
                      <FaPlay size={12} />
                      <span className="text-sm font-medium">View Demo</span>
                    </button>
                  )}
                  <button
                    onClick={() => redirectToDemoCode(project.code)}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/30 rounded-lg text-purple-300 hover:text-purple-200 transition-all duration-300"
                  >
                    <FaGithub size={12} />
                    <span className="text-sm font-medium">View Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Want to see more?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and learning new technologies. 
              Check out my GitHub profile to see all my repositories and contributions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => redirectToDemoCode("https://github.com/TEJASVISJAIN")}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <FaGithub size={20} />
                <span>View All Projects</span>
                <FaExternalLinkAlt size={16} />
              </button>
              <button
                onClick={() => redirectToDemoCode("mailto:tejasvisjain0214@gmail.com")}
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>Let's Collaborate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
