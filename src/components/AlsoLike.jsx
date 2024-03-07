import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AlsoLike() {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [slidedWidth, setSlidedWidth] = useState(0);
  const containerRef = React.useRef(null);
  const cardWidth = 220; // Adjust this value based on the width of your coin card

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = response.data.coins.slice(0, 10); // Get top 10 trending coins
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

  const handleLeftClick = () => {
    const newScrollLeft = Math.max(slidedWidth - cardWidth, 0);
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
    setSlidedWidth(newScrollLeft);
  };

  const handleRightClick = () => {
    const containerWidth = containerRef.current.offsetWidth;
    const maxScrollLeft = containerRef.current.scrollWidth - containerWidth;
    const newScrollLeft = Math.min(slidedWidth + cardWidth, maxScrollLeft);
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
    setSlidedWidth(newScrollLeft);
  };

  return (
    <>
      <div className="h-[300px] m-5 ">
        <h1 className="text-lg font-semibold mb-4">You May Also Like</h1>
        {/* Carousel */}
        <div className="flex">
          <div
            className="self-center w-[10px] cursor-pointer"
            onClick={handleLeftClick}
          >
            {"<"}
          </div>
          <div className="flex overflow-x-auto scrollhidden">
            <div
              className="flex overflow-x-auto scrollhidden"
              ref={containerRef}
            >
              {trendingCoins.map((coin, index) => (
                <div
                  key={index}
                  className="border rounded-md p-4 mr-4 flex-shrink-0"
                  style={{ width: cardWidth }}
                >
                  <div className="flex items-center mb-2 w-[200px]">
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
                        parseFloat(
                          coin.item.data.price_change_percentage_24h.usd
                        )
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
          <div
            className="self-center cursor-pointer"
            onClick={handleRightClick}
          >
            {">"}
          </div>
        </div>
      </div>
    </>
  );
}
