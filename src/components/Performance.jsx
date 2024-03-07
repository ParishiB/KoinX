import React, { useState, useEffect } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import axios from "axios";
import Slider from "./Slider";

const Performance = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        setBitcoinData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Bitcoin data:", error);
        setLoading(false);
      }
    };

    fetchBitcoinData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bitcoinData) {
    return <div>Error fetching Bitcoin data</div>;
  }

  const infoData = [
    {
      label: "Bitcoin Price",
      value: `$${bitcoinData.market_data.current_price.usd}`,
    },
    {
      label: "24h Low / 24h High",
      value: `$${bitcoinData.market_data.low_24h.usd} / $${bitcoinData.market_data.high_24h.usd}`,
    },
    {
      label: "7d Low / 7d High",
      value: `${bitcoinData.market_data.price_change_percentage_7d.usd}%`,
    },
    {
      label: "Trading Volume",
      value: `$${bitcoinData.market_data.total_volume.usd}`,
    },
    { label: "Market Cap Rank", value: bitcoinData.market_cap_rank },
    {
      label: "Market Cap",
      value: `$${bitcoinData.market_data.market_cap.usd}`,
    },
    {
      label: "Market Cap Dominance",
      value: `#1`,
    },
    {
      label: "Volume / Market Cap",
      value: `${
        bitcoinData.market_data.total_volume.usd /
        bitcoinData.market_data.market_cap.usd
      }`,
    },
    { label: "All-Time High", value: `$${bitcoinData.market_data.ath.usd}` },
    { label: "All-Time Low", value: `$${bitcoinData.market_data.atl.usd}` },
  ];

  return (
    <div
      className={
        isMobile
          ? "bg-white  mx-5 p-5 rounded-lg"
          : "bg-white m-10 p-5 rounded-lg md-custom:bg-white m-10 p-5 rounded-lg"
      }
    >
      <h1 className="font-bold my-5 text-[23px]">Performance</h1>
      <div className={isMobile ? "text-[13px] -mx-5 p-2" : ""}>
        <div>
          <div className="flex justify-between text-gray-700  text-[13px] text-center">
            <div className="">
              <div>Today's Low </div>
              {bitcoinData.market_data.low_24h.usd}
            </div>
            <img
              src="/images/slider.png"
              alt=""
              className={
                isMobile ? "w-[150px] h-[10px] my-2" : "w-3/4 h-[10px] my-5"
              }
            />
            <div className="">
              <div>Today's High </div>
              {bitcoinData.market_data.high_24h.usd}
            </div>
          </div>
        </div>

        <div className="flex justify-between text-gray-700  text-[13px]">
          <div className="">
            <div>Yearly Low </div>
            {(
              parseFloat(bitcoinData.market_data.current_price.usd) *
              (1 -
                parseFloat(bitcoinData.market_data.price_change_percentage_1y) /
                  100)
            )
              .toString()
              .substring(0, 10)}
          </div>
          <img
            src="/images/slider.png"
            alt=""
            className={
              isMobile ? "w-[150px] h-[10px] my-2" : "w-3/4 h-[10px] my-5"
            }
          />
          <div className="">
            <div>Yearly High </div>

            {(
              parseFloat(bitcoinData.market_data.current_price.usd) *
              (1 +
                parseFloat(bitcoinData.market_data.price_change_percentage_1y) /
                  100)
            )
              .toString()
              .substring(0, 10)}
          </div>
        </div>
      </div>

      <div className="flex my-5">
        <h1 className="text-gray-800">Fundamentals</h1>
        <IoMdInformationCircle className="text-gray-600 m-1" />
      </div>

      {/* non slider value */}
      {isMobile ? (
        <div>
          {infoData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-sm border-b border-gray-300 py-2"
            >
              <div className="text-gray-500">{item.label}: </div>
              <div className="">{item.value.toString().substring(0, 5)}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {infoData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between text-sm border-b border-gray-300 py-2"
            >
              <div className="text-gray-500">{item.label}: </div>
              <div className="">{item.value.toString().substring(0, 5)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Performance;
