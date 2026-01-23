import React from "react";
import linkedinLogo from "../assets/images/linkedin.svg";
import leetcodeLogo from "../assets/images/leetcode.png";

const About = () => {
  const goToLinks = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div name="about" className="bg-comic-paper text-black py-20 min-h-screen relative overflow-hidden">
      {/* Background Comic Words */}
      <div className="absolute top-10 right-10 font-comic text-7xl text-comic-blue opacity-10 transform rotate-12">
        LEARN!
      </div>
      <div className="absolute bottom-10 left-10 font-comic text-7xl text-comic-red opacity-10 transform -rotate-12">
        CODE!
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section Header - Comic Style */}
        <div className="text-center mb-16">
          <h2 className="font-comic text-6xl md:text-7xl text-comic-blue mb-4" style={{
            textShadow: '6px 6px 0px #000, -3px -3px 0px #FFE135'
          }}>
            ABOUT ME!
          </h2>
          <div className="h-2 bg-black max-w-md mx-auto mb-6"></div>
          
          <div className="inline-block">
            <div className="speech-bubble bg-white">
              <p className="font-handwriting text-2xl text-black">
                Hi there! Let me tell you my story... 🦸‍♂️
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Comic Strip Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left Side - Intro Panel */}
          <div className="space-y-8">
            {/* Greeting Panel */}
            <div className="comic-panel-yellow p-6 animate-slide-in-left">
              <div className="text-center mb-4">
                <img
                  src="https://readme-typing-svg.herokuapp.com?font=Bangers&weight=600&size=32&pause=500&color=FF0040&center=true&vCenter=true&width=400&lines=Hello%2C+There!+%F0%9F%91%8B;This+is+Tejasvi!;Nice+to+meet+you!"
                  alt="Typing Animation"
                  className="mx-auto"
                />
              </div>

              {/* Social Links - Comic Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                <button
                  onClick={() => goToLinks("https://www.linkedin.com/in/tejasvisjain/")}
                  className="comic-button comic-button-blue flex items-center space-x-2 hover:scale-110"
                >
                  <img className="w-5 h-5" src={linkedinLogo} alt="LinkedIn" />
                  <span>LINKEDIN</span>
                </button>
                <button
                  onClick={() => goToLinks("https://leetcode.com/TEJASVISJAIN/")}
                  className="comic-button bg-comic-orange text-white flex items-center space-x-2 hover:scale-110"
                >
                  <img className="w-5 h-5" src={leetcodeLogo} alt="Leetcode" />
                  <span>LEETCODE</span>
                </button>
              </div>
            </div>

            {/* Visitor Badge Panel */}
            <div className="comic-panel-red p-6 text-center">
              <h3 className="font-comic text-2xl text-white mb-4">VISITOR COUNT!</h3>
              <img
                src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FTEJASVISJAIN%2FTEJASVISJAIN&labelColor=%23FF0040&countColor=%23FFE135"
                alt="Visitor Badge"
                className="mx-auto rounded-lg shadow-comic-lg"
              />
            </div>

            {/* Fun Fact */}
            <div className="thought-bubble bg-white p-6">
              <p className="font-handwriting text-xl text-black text-center">
                💭 I believe every bug is just a puzzle waiting to be solved!
              </p>
            </div>
          </div>

          {/* Right Side - Info Cards as Comic Panels */}
          <div className="space-y-6">
            {/* Education Panel */}
            <div className="comic-panel bg-white p-6 hover:rotate-2 transition-all duration-300 animate-slide-in-right">
              <div className="flex items-start gap-4">
                <span className="text-5xl">🎓</span>
                <div>
                  <h3 className="font-comic text-2xl text-comic-red mb-2">EDUCATION!</h3>
                  <p className="font-speech text-lg text-black">
                    Bachelor's degree in <strong>Computer Engineering</strong> from TIET, Patiala
                  </p>
                  <div className="mt-3 p-3 bg-comic-yellow border-2 border-black rounded">
                    <p className="font-comic text-sm text-black">LEARNED: Algorithms, Data Structures, AI & More!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Passion Panel */}
            <div className="comic-panel bg-white p-6 hover:rotate-2 transition-all duration-300 animate-slide-in-right" style={{animationDelay: '0.1s'}}>
              <div className="flex items-start gap-4">
                <span className="text-5xl">💻</span>
                <div>
                  <h3 className="font-comic text-2xl text-comic-blue mb-2">MY PASSION!</h3>
                  <p className="font-speech text-lg text-black">
                    I <strong className="text-comic-red">LOVE</strong> writing code and learning anything about it!
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-comic-green text-black font-comic text-sm border-2 border-black rounded-full">
                      React ⚛️
                    </span>
                    <span className="px-3 py-1 bg-comic-blue text-white font-comic text-sm border-2 border-black rounded-full">
                      Node.js 🚀
                    </span>
                    <span className="px-3 py-1 bg-comic-red text-white font-comic text-sm border-2 border-black rounded-full">
                      GenAI 🤖
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Panel */}
            <div className="comic-panel bg-white p-6 hover:rotate-2 transition-all duration-300 animate-slide-in-right" style={{animationDelay: '0.2s'}}>
              <div className="flex items-start gap-4">
                <span className="text-5xl">⚡</span>
                <div className="flex-1">
                  <h3 className="font-comic text-2xl text-comic-purple mb-2">SUPERPOWERS!</h3>
                  <div className="space-y-2">
                    <div className="bg-comic-yellow border-2 border-black p-2 rounded">
                      <p className="font-speech text-black">
                        <strong>Frontend:</strong> React, JavaScript, Tailwind CSS
                      </p>
                    </div>
                    <div className="bg-comic-blue border-2 border-black p-2 rounded">
                      <p className="font-speech text-white">
                        <strong>Backend:</strong> Node.js, Express, MongoDB
                      </p>
                    </div>
                    <div className="bg-comic-red border-2 border-black p-2 rounded">
                      <p className="font-speech text-white">
                        <strong>AI/ML:</strong> GenAI, Python, TensorFlow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Connect Panel */}
            <div className="comic-panel-blue p-6 animate-slide-in-right" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-4">
                <span className="text-5xl">💬</span>
                <div>
                  <h3 className="font-comic text-2xl text-white mb-2">LET'S CONNECT!</h3>
                  <p className="font-speech text-white">
                    Got a question? Ask me anything on{" "}
                    <button
                      onClick={() => goToLinks("https://github.com/TEJASVISJAIN/TEJASVISJAIN/issues")}
                      className="underline hover:text-comic-yellow transition-colors font-bold"
                    >
                      GitHub Issues
                    </button>
                  </p>
                  <p className="font-speech text-white mt-2">
                    Or reach me via{" "}
                    <button
                      onClick={() => goToLinks("https://www.linkedin.com/in/tejasvisjain/")}
                      className="underline hover:text-comic-yellow transition-colors font-bold"
                    >
                      LinkedIn
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-block comic-panel-yellow p-8">
            <h3 className="font-comic text-3xl text-black mb-4">READY TO BUILD SOMETHING AMAZING?</h3>
            <p className="font-speech text-xl text-black mb-6">
              Let's team up and create the <strong className="text-comic-red">NEXT BIG THING!</strong> 🚀
            </p>
            <button
              onClick={() => goToLinks("mailto:tejasvisjain0214@gmail.com")}
              className="comic-button comic-button-red text-xl hover:scale-110"
            >
              CONTACT ME NOW! 📧
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-5 opacity-20 pointer-events-none font-comic text-6xl text-comic-green transform -rotate-45 animate-bounce-comic">
        💪
      </div>
      <div className="absolute bottom-1/3 right-5 opacity-20 pointer-events-none font-comic text-6xl text-comic-red transform rotate-45 animate-bounce-comic" style={{animationDelay: '0.5s'}}>
        🔥
      </div>
    </div>
  );
};

export default About;
