import React, { useState, useEffect } from "react";
import Main from "../components/mobile/Main";
import Header from "../components/Header";
import Login from "../components/Login";
import Bit from "../components/Bit";
import About from "../components/About";
import Team from "../components/Team";
import Tokenomics from "../components/Tokenomics";
import TrendingCoins from "../components/TrendingCoins";
import Trending from "../components/Trending";
import AlsoLike from "../components/AlsoLike";
import Navbar from "../components/Navbar";
import Performance from "../components/Performance";
import Sentiment from "../components/Sentiment";
import Slider from "../components/Slider";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

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
        <Main />
      ) : (
        <div>
          <Header />
          <div className="flex bg-[#EEF2F5]">
            <div className="bg-[#EEF2F5]">
              <div className="mt-1 py-2 -mb-10">
                <span className="text-sm text-gray-700 ml-10 ">
                  Cryptocurrencies {">>"}{" "}
                </span>
                <span className="text-sm text-gray-900"> Bitcoin</span>
              </div>

              <div className="h-[700px] mr-5 m-10 rounded-md">
                <Bit />
              </div>
              <Navbar />
              <Performance />
              <About />
              <Sentiment />
              <Tokenomics />
              <Team />
            </div>
            <div className="bg-[#EEF2F5]">
              <Login />
              <Trending />
            </div>
          </div>
          <Slider />
          <AlsoLike />
        </div>
      )}
    </>
  );
};

export default Home;
