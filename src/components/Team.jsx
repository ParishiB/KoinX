import React, { useState, useEffect } from "react";

const Team = () => {
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
      img: "profile1",
      name: "John Smith",
      text: "Designation here",
    },
    {
      img: "profile2",
      name: "Elina Williams",
      text: "Designation here",
    },
    {
      img: "profile1",
      name: "John Smith",
      text: "Designation here",
    },
  ];

  const loremIpsum20 =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, excepturi ducimus veniam maiores sed autem suscipit aliquid fugiat qui quod Eos, excepturi ducimus veniam maiores sed autem suscipit aliquid fu.";
  const loremIpsum30 =
    " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,omnis nisique dolorem consectetur eumquidem facilis, officiis nam itaque ut vitae, veniam iusto nobislabore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,omnis nisi. Beatae eaque nulla quis atque dolorem consectetur eumquidem facilis, officiis nam itaque ut vitae, veniam iusto nobislabore? Illum,omnis nisi. Beatae eaque nulla quis atque dolorem consectetur eumquidem ";

  const loremIpsum10 =
    "Lorem ipsum dolor, sit amet consectetur adipisicid fugiat qui quod Eos, excepturi ducimus veniam maiores";

  return (
    <div
      className={
        isMobile
          ? "bg-white m-10 mx-5 p-5 rounded-lg text-[10px]"
          : "bg-white m-10 p-5 rounded-md"
      }
    >
      <h1 className="text-left font-bold my-5 text-[23px] ">Team</h1>
      <p className="text-justify text-gray-700 text-sm">
        {isMobile ? loremIpsum10 : loremIpsum20}
      </p>
      <div className="">
        {data.map((index, key) => (
          <div
            className={
              isMobile
                ? "bg-[#E8F4FD] my-5 p-2 rounded-lg"
                : "flex bg-[#E8F4FD] my-5 p-2 rounded-lg"
            }
          >
            <div
              className={
                isMobile ? "bg-[#E8F4FD] my-5 p-2 rounded-lg" : " ml-5 my-2"
              }
            >
              <img
                src={`/images/${index.img}.png`}
                alt=""
                className={`mx-auto ${isMobile ? "h-[120px]" : ""} rounded-lg`}
              />
              <h2 className="font-bold  mt-1 text-center">{index.name}</h2>
              <h2 className="text-gray-700  text-center whitespace-nowrap">
                {index.text}
              </h2>
            </div>
            <p className="text-justify text-gray-700 text-sm p-2 mt-2 m-3">
              {isMobile ? loremIpsum20 : loremIpsum30}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
