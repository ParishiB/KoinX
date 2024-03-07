import React, { useState, useEffect } from "react";
import HBitcoin from "./HoldingBitcoinImg";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const loremIpsum =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta repellat quam hic. Asperiores, facere! Quasi voluptatum animi cumque quibusdam placeat totam nulla officia! Quos molestias excepturi reprehenderit accusamus quam itaque dignissimos, eius voluptas,tempore rem totam inventore optio error rerum! Perspiciatis nesciunt similique tenetur rerum autem? Commodi, architecto quam!";

  const loremIpsum20 =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet soluta repellat quam hic. Asperiores, facere! Quasi voluptatum animi cumque quibusdam placeat totam nulla officia! Quos molestias excepturi reprehenderit accusamus quam itaque dignissimos, eius voluptas,tempore rem totam inventore optio error rerum!";

  return (
    <div
      className={
        isMobile
          ? "bg-white m-1 mx-5 p-5 rounded-lg text-sm"
          : "shadow-lg rounded-lg p-5 m-10 bg-white"
      }
    >
      <h1 className="text-left font-semibold text-[23px] my-3  text-[23px]">
        About Bitcoin
      </h1>

      <h2 className="text-left font-bold  text-[20px]">What is Bitcoin?</h2>
      <p className="text-justify text-gray-700 my-3 text-sm">{loremIpsum}</p>
      <div className="w-full h-[1px] bg-gray-300 my-2"></div>

      <h2 className="text-left font-bold my-1  text-[23px]">
        Lorem ipsum dolor sit amet
      </h2>
      <div className="text-justify text-gray-700 text-sm">
        <p className="my-5">{loremIpsum}</p>
        <p className="my-5">{loremIpsum}</p>
        <p className="my-5">{loremIpsum}</p>
      </div>

      <div className="w-full h-[1px] bg-gray-300"></div>

      <h1 className="text-left font-bold my-2  text-[23px]">
        Already Holding Bitcoin?
      </h1>
      <div className="">
        <HBitcoin />
      </div>
      <div className="w-full h-[1px] bg-gray-300"></div>
      <p className="text-justify text-gray-700 my-2 text-sm">{loremIpsum20}</p>
    </div>
  );
};

export default About;
