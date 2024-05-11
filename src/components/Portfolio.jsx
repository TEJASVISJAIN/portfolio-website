import React from "react";
import digitalLaundri from "../assets/portfolio/digitalLaundri.png";
import fileSystem from "../assets/portfolio/fileSystem.png";
import itemList from "../assets/portfolio/itemList.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fileSystem,
      demo: "https://drive.google.com/file/d/1dI6a1Q8j7aUyxnP-y2R_3KZlzi52SUUu/view",
      code: "https://github.com/TEJASVISJAIN/FileOrganiser",
    },
    {
      id: 2,
      src: digitalLaundri,
      demo: "https://youtu.be/TDzTaSWn1sk",
      code: "https://github.com/TEJASVISJAIN/laundriApp",
    },
    {
      id: 2,
      src: itemList,
      demo: "",
      code: "https://github.com/TEJASVISJAIN/ItemListFilterApp",
    },
  ];

  const redirectToDemoCode = (link) => {
    window.open(link, "_blank");
    return;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={(e) => redirectToDemoCode(demo)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={(e) => redirectToDemoCode(code)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
