import React from "react";
import linkedinLogo from "../assets/images/linkedin.svg";
import leetcodeLogo from "../assets/images/leetcode.png";

const About = () => {
  const goToLinks = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="about"
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Typing Animation & Profile */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=28&pause=500&center=true&vCenter=true&width=400&lines=Hello%2C+There!+%F0%9F%91%8B;This+is+Tejasvi+S+Jain..;Nice+to+meet+you!"
                  alt="Typing SVG"
                  className="mx-auto lg:mx-0"
                />
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-6 mb-8">
                <button
                  onClick={() => goToLinks("https://www.linkedin.com/in/tejasvisjain/")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 hover:scale-105"
                >
                  <img className="w-5 h-5" src={linkedinLogo} alt="LinkedIn" />
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={() => goToLinks("https://leetcode.com/TEJASVISJAIN/")}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-orange-600 hover:bg-orange-700 transition-colors duration-300 hover:scale-105"
                >
                  <img className="w-5 h-5" src={leetcodeLogo} alt="Leetcode" />
                  <span>Leetcode</span>
                </button>
              </div>
            </div>

            {/* Visitor Badge */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FTEJASVISJAIN%2FTEJASVISJAIN&labelColor=%232ccce4&countColor=%23697689"
                alt="Visitor Badge"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - Information Cards */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">🔬</span>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-300">
                Bachelor's degree in Computer Engineering from TIET, Patiala
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💻</span>
                <h3 className="text-xl font-semibold">Passion</h3>
              </div>
              <p className="text-gray-300">
                I love writing code and learning anything about it. Always exploring new technologies and building innovative solutions.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">💬</span>
                <h3 className="text-xl font-semibold">Let's Connect</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-300">
                  Ask me anything from{" "}
                  <button
                    onClick={() => goToLinks("https://github.com/TEJASVISJAIN/TEJASVISJAIN/issues")}
                    className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
                  >
                    GitHub Issues
                  </button>
                </p>
                <p className="text-gray-300">
                  📫 Email:{" "}
                  <button
                    onClick={() => goToLinks("mailto:tejasvisjain0214@gmail.com")}
                    className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
                  >
                    tejasvisjain0214@gmail.com
                  </button>
                </p>
                <p className="text-gray-300">
                  ✍️ Check out my blogs on{" "}
                  <button
                    onClick={() => goToLinks("https://tejasvisjain.hashnode.dev/")}
                    className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
                  >
                    Hashnode
                  </button>{" "}
                  (blog site launching soon 🤫)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
