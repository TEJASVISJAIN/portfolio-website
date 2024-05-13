import React from "react";

import linkedinLogo from "../assets/images/linkedin.svg";
import leetcodeLogo from "../assets/images/leetcode.png";
const About = () => {

  const goToLinks = (link) =>{
    window.open(link, "_blank")
  }
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto py-16 px-4">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* <p className="text-xl mt-8">
          I am currently pursuing my BE in Computer Engineering from Thapar
          Institute of Engineering and Technology, Patiala, where I was also the
          General Secretary of the Linux User Group. I am passionate and
          motivated about learning new technologies and developing innovative
          solutions. I am confident that I can use my skills and experience to
          contribute to your team and goals.
        </p> */}

        <div className="mt-8" style={{ fontSize: "22px" }}>
          <img
            className="float-right"
            src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2FTEJASVISJAIN%2FTEJASVISJAIN&labelColor=%232ccce4&countColor=%23697689"
            alt="Visitor Badge"

          />

          <h1 className="text-center text-3xl font-bold mb-4">
            <a>
              <img
                src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&weight=600&size=30&pause=500&center=true&vCenter=true&width=435&lines=Hello%2C+There!+%F0%9F%91%8B;This+is+Tejasvi+S+Jain..;Nice+to+meet+you!"
                alt="Typing SVG"
              />
            </a>
          </h1>

          <div className="flex justify-center mb-4">
            <a
            onClick={e=>goToLinks("https://www.linkedin.com/in/tejasvisjain/")}
              title="LinkedIn Profile"
              className="mr-4 flex items-center"
              style={{cursor: "pointer"}}
            >
              <img className="w-5 h-5 mr-2" src={linkedinLogo} alt="LinkedIn" />
              LinkedIn
            </a>
            <a
            onClick={e=>goToLinks("https://leetcode.com/TEJASVISJAIN/")}
              title="Leetcode Profile"
              className="flex items-center"
              style={{cursor: "pointer"}}
            >
              <img className="w-5 h-5 mr-2" src={leetcodeLogo} alt="Leetcode" />
              Leetcode
            </a>
          </div>

          <p className="text-center mb-8">
            Hi, I'm Tejasvi S Jain, Senior Student at Thapar Institute of
            Engineering and Technology, India
            <br />
            <br />
            🔬 I'm currently studying for bachelor's degree in Computer
            Engineering
            <br />
            💻 I love writing code and learn anything about it
            <br />
            🧑‍💻 Currently an SDE Intern at Awiros, Gurugram
            <br />
            💬 Ask me anything from{" "}
            <a
            onClick={e=>goToLinks("https://github.com/TEJASVISJAIN/TEJASVISJAIN/issues")}
              title="Issues"
              className="text-blue-500 hover:text-blue-700"
              style={{cursor: "pointer"}}
            >
              Here
            </a>
            <br />
            📫 How to reach me:{" "}
            <a
            onClick={e=>goToLinks("mailto: tejasvisjain0214@gmail.com")}
              className="text-blue-500 hover:text-blue-700"
              style={{cursor: "pointer"}}
            >
              tejasvisjain0214@gmail.com
            </a>
            <br />
            ✍️ 🧑‍💻Check out my blogs on{" "}
            <a
            onClick={e=>goToLinks("https://tejasvisjain.hashnode.dev/")}
              className="text-blue-500 hover:text-blue-700"
              style={{cursor: "pointer"}}
            >
              Hashnode ( blog site launching soon 🤫)
            </a>
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
