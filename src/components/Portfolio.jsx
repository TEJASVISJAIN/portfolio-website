import React, { useState } from "react";
import { FaGithub, FaPlay } from "react-icons/fa";
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
      description: "Automated file organization with smart categorization!",
      demo: "https://drive.google.com/file/d/1dI6a1Q8j7aUyxnP-y2R_3KZlzi52SUUu/view",
      code: "https://github.com/TEJASVISJAIN/FileOrganiser",
      tech: ["Python", "Automation"],
      category: "automation",
    },
    {
      id: 2,
      src: digitalLaundri,
      title: "Digital Laundri App",
      description: "Full-stack laundry management with real-time tracking!",
      demo: "https://youtu.be/TDzTaSWn1sk",
      code: "https://github.com/TEJASVISJAIN/laundriApp",
      tech: ["React", "Node.js", "MongoDB"],
      category: "web",
    },
    {
      id: 3,
      src: itemList,
      title: "Item List Filter",
      description: "Dynamic item filtering with advanced sorting!",
      demo: "",
      code: "https://github.com/TEJASVISJAIN/ItemListFilterApp",
      tech: ["React", "JavaScript"],
      category: "web",
    },
  ];

  const filteredPortfolios = portfolios.filter(project => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const redirectToDemoCode = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div name="portfolio" className="bg-comic-paper w-full text-black py-20 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Comic Book Title */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <h2 className="font-comic text-6xl md:text-7xl text-comic-red mb-2" style={{
              textShadow: '6px 6px 0px #000, -3px -3px 0px #FFE135'
            }}>
              MY PORTFOLIO!
            </h2>
            <div className="h-2 bg-black"></div>
          </div>
          
          <div className="speech-bubble bg-white max-w-2xl mx-auto">
            <p className="font-speech text-xl text-black">
              Check out these <strong className="text-comic-blue">AMAZING</strong> projects! 
              Each one is a <strong className="text-comic-red">SUPER</strong> adventure in code! 🚀
            </p>
          </div>
        </div>

        {/* Filter Buttons - Comic Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`comic-button ${activeFilter === "all" ? "comic-button-red" : "comic-button-blue"}`}
          >
            ALL PROJECTS
          </button>
          <button
            onClick={() => setActiveFilter("web")}
            className={`comic-button ${activeFilter === "web" ? "comic-button-red" : "comic-button-green"}`}
          >
            WEB APPS 🌐
          </button>
          <button
            onClick={() => setActiveFilter("automation")}
            className={`comic-button ${activeFilter === "automation" ? "comic-button-red" : "comic-button-blue"}`}
          >
            AUTOMATION 🤖
          </button>
        </div>

        {/* Portfolio Grid - Comic Panels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolios.map(({ id, src, title, description, demo, code, tech }) => (
            <div
              key={id}
              className="comic-panel bg-white p-4 hover:rotate-2 transform transition-all duration-300 animate-zoom-in group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden border-4 border-black mb-4">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Comic Book Burst Effect */}
                <div className="absolute top-2 right-2 font-comic text-3xl text-comic-yellow animate-pulse-fast" style={{
                  textShadow: '2px 2px 0px #000'
                }}>
                  ⭐
                </div>
              </div>

              {/* Title */}
              <h3 className="font-comic text-2xl text-black mb-3 text-center">
                {title}
              </h3>

              {/* Description */}
              <div className="mb-4 bg-comic-yellow border-3 border-black p-3 rounded-lg">
                <p className="font-speech text-black text-center">
                  {description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {tech.map((technology, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-black text-white font-comic text-sm border-2 border-black rounded-full"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-center">
                {demo && (
                  <button
                    onClick={() => redirectToDemoCode(demo)}
                    className="flex items-center gap-2 px-4 py-2 bg-comic-blue text-white font-comic border-3 border-black rounded-lg shadow-comic hover:scale-110 transition-transform duration-200"
                  >
                    <FaPlay size={16} />
                    DEMO
                  </button>
                )}
                {code && (
                  <button
                    onClick={() => redirectToDemoCode(code)}
                    className="flex items-center gap-2 px-4 py-2 bg-comic-green text-black font-comic border-3 border-black rounded-lg shadow-comic hover:scale-110 transition-transform duration-200"
                  >
                    <FaGithub size={16} />
                    CODE
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Text */}
        <div className="mt-16 text-center">
          <div className="thought-bubble bg-white inline-block">
            <p className="font-handwriting text-2xl text-black">
              More projects coming soon! 💭
            </p>
          </div>
        </div>
      </div>

      {/* Background Comic Elements */}
      <div className="fixed top-1/4 right-10 opacity-10 pointer-events-none font-comic text-8xl text-comic-red transform rotate-12">
        WHAM!
      </div>
      <div className="fixed bottom-1/4 left-10 opacity-10 pointer-events-none font-comic text-8xl text-comic-blue transform -rotate-12">
        BANG!
      </div>
    </div>
  );
};

export default Portfolio;
