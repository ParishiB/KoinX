import React, { useState, useEffect } from "react";

const data = [
  {
    text: "Overview",
  },
  {
    text: "Fundamentals",
  },
  {
    text: "News Insight",
  },
  {
    text: "Sentiment",
  },
  {
    text: "Technical",
  },
  {
    text: "Tokenomics",
  },
];

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={
          isMobile
            ? "flex overflow-hidden my-5 font-bold"
            : "flex ml-5 font-medium"
        }
      >
        {data.map((item, index) => (
          <div
            className={
              isMobile
                ? `text-[15px] -my-1 whitespace-nowrap mx-5 ${
                    index === 0 ? "text-[#0152FE]" : ""
                  }`
                : `px-7 mt-5 ${index === 0 ? "text-[#0152FE]" : ""}`
            }
            key={index}
          >
            {item.text}
          </div>
        ))}
      </div>
      <div className="m-10 h-[1px] bg-gray-300 my-2"></div>
    </>
  );
};

export default Navbar;
