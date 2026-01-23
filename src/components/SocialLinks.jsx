import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/tejasvisjain/",
      color: "comic-blue",
      actionWord: "CONNECT!",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://www.github.com/TEJASVISJAIN/",
      color: "comic-purple",
      actionWord: "CODE!",
    },
    {
      id: 3,
      name: "Email",
      icon: <FaEnvelope size={30} />,
      href: "mailto:tejasvisjain0214@gmail.com",
      color: "comic-red",
      actionWord: "MESSAGE!",
    },
    {
      id: 4,
      name: "Resume",
      icon: <FaFileDownload size={30} />,
      href: "/Tejasvi S Jain Resume.pdf",
      download: true,
      color: "comic-green",
      actionWord: "DOWNLOAD!",
    },
  ];

  return (
    <div className="bg-comic-paper py-20 relative overflow-hidden">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone-bg opacity-20"></div>
      
      {/* Comic action words in background */}
      <div className="absolute top-10 left-10 font-comic text-8xl text-comic-blue opacity-10 transform -rotate-12">
        LINK!
      </div>
      <div className="absolute bottom-10 right-10 font-comic text-8xl text-comic-red opacity-10 transform rotate-12">
        CHAT!
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-comic text-6xl md:text-7xl text-comic-yellow mb-4" style={{
            textShadow: '6px 6px 0px #000, -3px -3px 0px #FF0040'
          }}>
            LET'S CONNECT!
          </h2>
          <div className="h-2 bg-black max-w-md mx-auto mb-8"></div>
          
          <div className="speech-bubble bg-white max-w-3xl mx-auto">
            <p className="font-speech text-xl text-black">
              Ready to <strong className="text-comic-blue">collaborate</strong> or have a project in mind? 
              Let's make something <strong className="text-comic-red">AMAZING</strong> together! 🚀
            </p>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              download={link.download}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`comic-panel bg-${link.color} p-8 text-center hover:rotate-2 hover:scale-105 transition-all duration-300 animate-zoom-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Action word on hover */}
                <div className="absolute -top-4 -right-4 font-comic text-2xl text-black bg-comic-yellow px-3 py-1 border-3 border-black rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-comic">
                  {link.actionWord}
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-white border-4 border-black rounded-full shadow-comic group-hover:animate-bounce-comic">
                    {link.icon}
                  </div>
                  <h3 className="font-comic text-xl text-white">
                    {link.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="comic-panel-yellow p-8 md:p-12 max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="font-comic text-4xl text-black mb-4" style={{
                textShadow: '3px 3px 0px rgba(0,0,0,0.2)'
              }}>
                GET IN TOUCH!
              </h3>
              <div className="h-1 bg-black max-w-xs mx-auto mb-6"></div>
            </div>

            <div className="speech-bubble bg-white mb-8">
              <p className="font-speech text-lg text-black">
                I'm always interested in <strong className="text-comic-blue">new opportunities</strong>, 
                exciting <strong className="text-comic-red">projects</strong>, and meaningful 
                <strong className="text-comic-green"> collaborations</strong>. 
                Whether you have a question, want to discuss a project, or just want to say hi, 
                I'd <strong className="text-comic-purple">LOVE</strong> to hear from you! 💬
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:tejasvisjain0214@gmail.com"
                className="comic-button-red inline-flex items-center space-x-2 text-lg group"
              >
                <FaEnvelope size={20} className="group-hover:animate-wiggle" />
                <span>SEND EMAIL!</span>
              </a>
              <div className="hidden sm:block font-comic text-3xl text-black">⚡</div>
              <a
                href="https://www.linkedin.com/in/tejasvisjain/"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-button-blue inline-flex items-center space-x-2 text-lg group"
              >
                <FaLinkedin size={20} className="group-hover:animate-wiggle" />
                <span>CONNECT ON LINKEDIN!</span>
              </a>
            </div>

            <div className="mt-8">
              <div className="thought-bubble bg-white inline-block p-6">
                <p className="font-handwriting text-xl text-black">
                  💭 Response time: Usually within 24 hours! ⚡
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-8">
          <div className="font-comic text-4xl text-comic-red animate-bounce-comic">💥</div>
          <div className="font-comic text-4xl text-comic-blue animate-bounce-comic" style={{animationDelay: '0.3s'}}>⭐</div>
          <div className="font-comic text-4xl text-comic-green animate-bounce-comic" style={{animationDelay: '0.6s'}}>⚡</div>
          <div className="font-comic text-4xl text-comic-purple animate-bounce-comic" style={{animationDelay: '0.9s'}}>💫</div>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
