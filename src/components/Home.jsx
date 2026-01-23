import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div name="home" className="min-h-screen w-full bg-comic-paper relative overflow-hidden pt-24 pb-12">
      {/* Comic Action Words Background */}
      <div className="absolute top-20 left-10 transform -rotate-12 opacity-20">
        <span className="font-comic text-6xl md:text-8xl text-comic-red">POW!</span>
      </div>
      <div className="absolute bottom-20 right-10 transform rotate-12 opacity-20">
        <span className="font-comic text-6xl md:text-8xl text-comic-blue">BOOM!</span>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
        <span className="font-comic text-9xl text-comic-yellow">ZAP!</span>
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row relative z-10">
        {/* Left Side - Hero Content */}
        <div className="flex flex-col justify-center md:w-1/2 mb-12 md:mb-0">
          <div className="comic-panel-yellow p-8 mb-6 animate-zoom-in">
            <div className="space-y-6">
              {/* Main Title */}
              <div>
                <h1 className="font-comic text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mb-4">
                  <span className="text-comic-red">FULL STACK</span>
                  <br />
                  <span className="text-comic-blue">DEVELOPER!</span>
                </h1>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-4 py-2 bg-comic-red text-white font-comic text-lg border-3 border-black rounded-lg shadow-comic">
                    GenAI 🤖
                  </span>
                  <span className="px-4 py-2 bg-comic-blue text-white font-comic text-lg border-3 border-black rounded-lg shadow-comic">
                    React ⚛️
                  </span>
                  <span className="px-4 py-2 bg-comic-green text-black font-comic text-lg border-3 border-black rounded-lg shadow-comic">
                    Node.js 🚀
                  </span>
                </div>
              </div>

              {/* Description in Speech Bubble */}
              <div className="speech-bubble bg-white mt-6">
                <p className="font-speech text-lg text-black leading-relaxed">
                  Building <strong className="text-comic-red">Scalable Apps</strong> 🚀 | 
                  <strong className="text-comic-blue"> GenAI Explorer</strong> 🤖 | 
                  Turning <strong className="text-comic-green">Complex Problems</strong> into 
                  <strong className="text-comic-purple"> Simple Solutions</strong>!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/portfolio" className="comic-button comic-button-red hover:scale-110 transform transition-all duration-200 flex items-center justify-center gap-2">
                  <span>VIEW PORTFOLIO</span>
                  <MdOutlineKeyboardArrowRight size={24} />
                </Link>
                
                <Link to="/contact" className="comic-button comic-button-blue hover:scale-110 transform transition-all duration-200">
                  GET IN TOUCH!
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Info Panel */}
          <div className="comic-panel-blue p-6 animate-slide-in-left">
            <div className="flex items-center gap-4">
              <span className="text-4xl">💡</span>
              <div>
                <h3 className="font-comic text-xl text-black mb-1">FUN FACT!</h3>
                <p className="font-speech text-black">
                  Coding is like creating superpowers... but in digital form!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image in Comic Panel */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="comic-panel p-4 bg-white transform hover:rotate-2 transition-all duration-300 animate-zoom-out">
            <div className="relative">
              {/* Explosion effects around image */}
              <div className="absolute -top-8 -right-8 font-comic text-4xl text-comic-red animate-bounce-comic">
                💥
              </div>
              <div className="absolute -bottom-8 -left-8 font-comic text-4xl text-comic-blue animate-bounce-comic" style={{animationDelay: '0.3s'}}>
                ⚡
              </div>
              
              <img
                src={HeroImage}
                alt="Tejasvi S Jain - Full Stack Developer"
                className="w-80 h-80 md:w-96 md:h-96 object-cover border-4 border-black"
              />
              
              {/* Caption */}
              <div className="mt-4 bg-comic-yellow border-4 border-black p-3 shadow-comic">
                <p className="font-comic text-center text-black text-xl">
                  TEJASVI S JAIN
                </p>
                <p className="font-speech text-center text-black text-sm">
                  Your Friendly Neighborhood Developer! 🦸
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-comic">
        <div className="flex flex-col items-center">
          <span className="font-handwriting text-black text-lg mb-2">Scroll Down!</span>
          <span className="text-2xl">👇</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
