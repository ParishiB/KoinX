import React, { useState, useEffect } from "react";

const HBitcoin = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    {
      text: "Calculate your Profits",
      image: "bit1",
      color: "bg-grad",
    },
    {
      text: "Calculate your tax liability",
      image: "bi2",
      color: "bg-grad2",
    },
  ];

  return (
    <div
      className={
        isMobile ? "mt-1 w-full " : "grid grid-cols-2 mt-1 mb-5 w-full"
      }
    >
      {data.map((item, index) => (
        <div key={index} className={isMobile ? "my-5" : "col-span-1"}>
          <div
            className={`flex items-center ${item.color} p-2 rounded-md  ${
              isMobile ? "" : "flex mr-5"
            }`}
          >
            <img
              src={`images/${item.image}.png`}
              alt=""
              className="w-[100px] h-[120px] rounded-md mr-2"
            />
            <div className="">
              <div className="text-white font-bold text-[18px] ml-1 p-2">
                {item.text}
              </div>

              <button className="text-black bg-white rounded-md w-[140px] p-1 m-2 font-semibold">
                Check now &rarr;
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HBitcoin;
