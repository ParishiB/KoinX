import React, { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = response.data.coins.slice(0, 3); // Get top 3 trending coins
        setTrendingCoins(data);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const getBackgroundColor = (number) => {
    return number >= 0
      ? "bg-green-200 text-green-700"
      : "bg-red-200 text-red-700";
  };

  return (
    <div
      className={
        isMobile
          ? "bg-white rounded-md  mx-2 m-5"
          : "rounded-md p-5 mt-7 pt-2 bg-white mr-10"
      }
    >
      <h2
        className={
          isMobile
            ? "text-lg font-semibold m-2 py-2 text-[23px]"
            : "text-lg font-semibold my-2 py-2 text-[23px]"
        }
      >
        Trending Coins (24h)
      </h2>
      <ul>
        {trendingCoins.map((coin, index) => (
          <li key={index}>
            <div className="flex items-center justify-between my-3">
              <div className="flex my-2 mx-2">
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="w-6 h-6 mr-2"
                />
                <span className="text-sm font-medium">
                  {coin.item.name} ({coin.item.symbol.toUpperCase()})
                </span>
              </div>

              <div
                className={`flex items-center text-[8px] ${getBackgroundColor(
                  parseFloat(coin.item.data.price_change_percentage_24h.usd)
                )} ml-2`}
              >
                {parseFloat(coin.item.data.price_change_percentage_24h.usd) >=
                0 ? (
                  <span>&uarr;</span> // Upwards arrow
                ) : (
                  <span>&darr;</span> // Downwards arrow
                )}
                {parseFloat(
                  coin.item.data.price_change_percentage_24h.usd
                ).toFixed(3)}
                %
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;
