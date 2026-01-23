import React from "react";

const Experience = () => {
  const skills = [
    { category: "FRONTEND", items: ["React", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"], color: "comic-blue" },
    { category: "BACKEND", items: ["Node.js", "Express", "FastAPI", "MongoDB", "PostgreSQL", "Redis"], color: "comic-red" },
    { category: "AI/ML", items: ["GenAI", "Python", "TensorFlow", "OpenAI", "LangChain", "Hugging Face"], color: "comic-green" },
    { category: "TOOLS", items: ["Git", "Docker", "Postman", "VS Code", "GitHub", "GCP", "AWS"], color: "comic-purple" },
  ];

  return (
    <div name="experience" className="bg-comic-paper w-full min-h-screen py-20 relative overflow-hidden">
      <div className="absolute top-10 left-10 font-comic text-8xl text-comic-red opacity-10 transform -rotate-12">
        CODE!
      </div>
      <div className="absolute bottom-10 right-10 font-comic text-8xl text-comic-blue opacity-10 transform rotate-12">
        BUILD!
      </div>

      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-comic text-6xl md:text-7xl text-comic-purple mb-4" style={{
            textShadow: '6px 6px 0px #000, -3px -3px 0px #FFE135'
          }}>
            MY SUPERPOWERS!
          </h2>
          <div className="h-2 bg-black max-w-md mx-auto mb-6"></div>
          
          <div className="speech-bubble bg-white max-w-2xl mx-auto">
            <p className="font-speech text-xl text-black">
              These are the <strong className="text-comic-red">AMAZING</strong> technologies I use to 
              build <strong className="text-comic-blue">INCREDIBLE</strong> things! 💪
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map(({ category, items, color }, index) => (
            <div
              key={category}
              className={`comic-panel bg-white p-8 hover:rotate-2 transition-all duration-300 animate-zoom-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <h3 className={`font-comic text-3xl text-${color} mb-2`} style={{
                  textShadow: '3px 3px 0px #000'
                }}>
                  {category}!
                </h3>
                <div className={`h-1 bg-${color} w-20`}></div>
              </div>

              <div className="flex flex-wrap gap-3">
                {items.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 bg-${color} text-white font-comic border-3 border-black rounded-lg shadow-comic hover:scale-110 transition-transform duration-200 cursor-pointer`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="comic-panel-yellow p-6 text-center animate-slide-up">
            <div className="text-5xl mb-3">🎯</div>
            <h4 className="font-comic text-2xl text-black mb-2">PROBLEM SOLVER!</h4>
            <p className="font-speech text-black">
              I love tackling complex challenges and finding creative solutions!
            </p>
          </div>

          <div className="comic-panel-blue p-6 text-center animate-slide-up" style={{animationDelay: '0.1s'}}>
            <div className="text-5xl mb-3">🚀</div>
            <h4 className="font-comic text-2xl text-white mb-2">FAST LEARNER!</h4>
            <p className="font-speech text-white">
              Always exploring new technologies and staying up-to-date!
            </p>
          </div>

          <div className="comic-panel-red p-6 text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-5xl mb-3">🤝</div>
            <h4 className="font-comic text-2xl text-white mb-2">TEAM PLAYER!</h4>
            <p className="font-speech text-white">
              Collaboration and communication are my secret weapons!
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="thought-bubble bg-white inline-block p-8">
            <p className="font-handwriting text-2xl text-black">
              💭 The best way to predict the future is to code it!
            </p>
          </div>
        </div>
      </div>

      <div className="fixed top-1/2 left-5 opacity-10 pointer-events-none font-comic text-7xl text-comic-blue transform -rotate-45 animate-bounce-comic">
        ⚡
      </div>
      <div className="fixed top-1/2 right-5 opacity-10 pointer-events-none font-comic text-7xl text-comic-red transform rotate-45 animate-bounce-comic" style={{animationDelay: '0.5s'}}>
        💻
      </div>
    </div>
  );
};

export default Experience;
