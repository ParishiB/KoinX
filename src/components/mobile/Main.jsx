import React from "react";
import Navbar from "../Navbar";
import Performance from "../Performance";
import Sentiment from "../Sentiment";
import About from "../About";
import Team from "../Team";
import AlsoLike from "../AlsoLike";
import Login from "../Login";
import Slider from "../Slider";
import Header from "../Header";
import Bit from "../Bit";

const Main = () => {
  return (
    <>
      <Header />
      <div className="bg-[#EEF2F5]">
        <div className="bg-[#EEF2F5] mb-2">
          <div className="">
            <span className="text-[10px] text-gray-700 ml-10 ">
              Cryptocurrencies {">>"}{" "}
            </span>
            <span className="text-[10px] text-gray-900"> Bitcoin</span>
          </div>
        </div>
        <div className="mb-8">
          <Bit />
        </div>
        <Navbar />
        <div className="mb-8">
          <Performance />
        </div>
        <Sentiment />
        <About />
        <Team />
        <div className="bg-white my-28 rounded-md mx-6">
          <Slider />
          <AlsoLike />
        </div>
        <Login />
      </div>
    </>
  );
};

export default Main;
