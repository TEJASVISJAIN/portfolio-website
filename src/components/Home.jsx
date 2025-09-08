import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative z-10 pt-20 md:pt-0">
        <div className="flex flex-col justify-center h-full md:w-1/2">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Full Stack
                </span>
                <br />
                <span className="text-white">Gen AI Developer</span>
              </h1>
            </div>
            
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
              Building Scalable Apps 🚀 | GenAI Explorer 🤖 | Turning Complex Problems into Simple Solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/portfolio"
                className="group text-white w-fit px-6 py-3 sm:px-8 sm:py-4 flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 cursor-pointer shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
              >
                <span className="font-semibold text-base sm:text-lg">View Portfolio</span>
                <span className="group-hover:translate-x-1 duration-300 ml-2">
                  <MdOutlineKeyboardArrowRight size={20} className="sm:w-6 sm:h-6" />
                </span>
              </Link>
              
              <Link
                to="/contact"
                className="text-white w-fit px-6 py-3 sm:px-8 sm:py-4 flex items-center rounded-full border-2 border-cyan-400 cursor-pointer hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                <span className="font-semibold text-base sm:text-lg">Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
            <img
              src={HeroImage}
              alt="Tejasvi S Jain - Full Stack Developer"
              className="relative rounded-3xl mx-auto w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
