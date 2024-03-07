import React, { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";

const headers_data = [
  {
    text: "Crypto Taxes",
  },
  {
    text: "Free Tools",
  },
  {
    text: "Resources Center",
  },
];

const Header = () => {
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
      {isMobile ? (
        <div className="flex justify-between items-center">
          <img src="images/KoinX-logo.png" alt="" className="h-10 m-2 ml-8" />
          <div className="">
            <LuMenu className="h-7 w-8 mr-5" />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="">
            <div className="">
              <img
                src="images/KoinX-logo.png"
                alt=""
                className="h-10 m-2 ml-10"
              />
            </div>
          </div>
          <div className="text-right flex">
            {headers_data.map((item, index) => (
              <div className="font-medium m-2 md:text-sm" key={index}>
                {item.text}
              </div>
            ))}
            <button className="bg-blue-600 text-white mx-10 p-2 w-[150px] rounded-md font-bold mr-10 md:font-small text-sm">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
