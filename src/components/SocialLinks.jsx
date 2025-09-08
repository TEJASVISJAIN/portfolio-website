import React from "react";
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/tejasvisjain/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
      borderColor: "hover:border-blue-400/50",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub size={20} />,
      href: "https://www.github.com/TEJASVISJAIN/",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-500/20",
      borderColor: "hover:border-gray-400/50",
    },
    {
      id: 3,
      name: "Email",
      icon: <FaEnvelope size={20} />,
      href: "mailto:tejasvisjain0214@gmail.com",
      color: "hover:text-cyan-400",
      bgColor: "hover:bg-cyan-500/20",
      borderColor: "hover:border-cyan-400/50",
    },
    {
      id: 4,
      name: "Resume",
      icon: <FaFileDownload size={20} />,
      href: "/Tejasvi S Jain Resume.pdf",
      download: true,
      color: "hover:text-purple-400",
      bgColor: "hover:bg-purple-500/20",
      borderColor: "hover:border-purple-400/50",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate or have a project in mind? Let's make something amazing together!
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              download={link.download}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 ${link.bgColor} ${link.borderColor}`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 ${link.color}`}>
                  {link.icon}
                </div>
                <h3 className={`font-semibold text-white transition-colors duration-300 ${link.color}`}>
                  {link.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Get In Touch</h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities, exciting projects, and meaningful collaborations. 
              Whether you have a question, want to discuss a project, or just want to say hi, I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:tejasvisjain0214@gmail.com"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
              >
                <FaEnvelope size={18} />
                <span>Send Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tejasvisjain/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <FaLinkedin size={18} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tejasvi S Jain. Built with React and lots of ☕
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed and developed with passion for creating amazing digital experiences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialLinks;
