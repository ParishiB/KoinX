import React, { useState, useEffect } from "react";

const Login = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={
        isMobile
          ? "bg-[#0152FE] text-white rounded-md h-[500px] mx-6  text-center -mt-20 mb-10"
          : "bg-[#0152FE] text-white rounded-md h-[500px] w-[350px] mr-10 mt-10"
      }
    >
      <div className="font-bold text-center text-[22px] m-5 pt-10">
        <h1>Get Started with KoinX</h1>
        <h1>for FREE</h1>
      </div>
      <p className="text-xs text-center m-7 mt-2 mb-0 ">
        With our range of features that you can equip for free Koinx allows you
        to be more educated and aware of your tax reports
      </p>
      <div class="flex justify-center items-center h-[200px]">
        <img src="/images/women.png" alt="" className="h-[200px] mt-0" />
      </div>
      <div className="flex justify-center font-semibold">
        <button className="bg-white text-black mt-1 px-8 py-3 rounded-md">
          Get Started for Free &rarr;
        </button>
      </div>
    </div>
  );
};

export default Login;
