import React, { useRef, useEffect } from "react";
import Plx from "react-plx";
import LogoCSS from "../assets/css.png";

const Education = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 3000) {
        divRef.current.scrollIntoView({ behavior: "smooth" });
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={divRef}>
      <Plx
        parallaxData={[
          {
            start: 2400,
            end: 3000,
            properties: [
              {
                startValue: 0,
                endValue: 2,
                property: "scale",
              },
            ],
          },
        ]}
      >
        <img src={LogoCSS} alt="css" />
      </Plx>
    </div>
  );
};

export default Education;
