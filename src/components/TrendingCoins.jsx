import React, { useState, useEffect } from "react";
import axios from "axios";

const AlsoLike = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = response.data.coins.slice(0, 10); // Get top 3 trending coins
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
    <>
      <div className="h-[300px] mx-10 ">
        <h1 className="text-lg font-semibold mb-4">Trending Coins</h1>
        {/* Carousel */}
        <div className="relative flex overflow-x-auto space-x-4 pb-4">
          {trendingCoins.map((coin, index) => (
            <div key={index} className="border rounded-md p-4 ">
              <div className="flex items-center mb-2 w-[200px] ">
                <img
                  src={coin.item.large}
                  alt={coin.item.name}
                  className="w-5 h-5"
                />
                <span className="text-xs ml-1">
                  {coin.item.symbol.toUpperCase()}
                </span>
                <p
                  className={`text-[8px] ${getBackgroundColor(
                    parseFloat(coin.item.data.price_change_percentage_24h.usd)
                  )} ml-2`}
                >
                  {parseFloat(
                    coin.item.data.price_change_percentage_24h.usd
                  ).toFixed(3)}
                  %
                </p>
              </div>
              <div>
                <p className="font-bold">{coin.item.data.market_cap}</p>

                {/* Display price graph */}
                <img
                  src={coin.item.data.sparkline}
                  alt="Price Graph"
                  className="w-full mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AlsoLike;
