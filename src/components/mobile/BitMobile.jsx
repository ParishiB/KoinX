import React, { useState, useEffect } from "react";
import axios from "axios";
import Bitcoin from "../Bitcoin";
const BitMobile = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!bitcoinData) {
    return <div>Error fetching Bitcoin data</div>;
  }

  const getBackgroundColor = (number) => {
    return number >= 0
      ? "bg-green-200 text-green-700"
      : "bg-red-200 text-red-700";
  };

  return (
    <div className="">
      <div className="bg-white rounded-md pt-5 mx-5">
        <div className="flex ml-8 text-[23px]">
          <img
            src={bitcoinData.image.small}
            alt="Bitcoin Logo"
            className="h-[30px]"
          />
          <h1 className="font-bold ml-2">Bitcoin</h1>
          <p className="ml-2 text-[12px] mt-2">BTC</p>
          <h3 className="bg-gray-400 text-white rounded-md mt-0 p-2 ml-6 text-[10px]">
            Rank #1
          </h3>
        </div>
        <div className="flex">
          <div className="font-bold ml-10 my-3">
            ${bitcoinData.market_data.ath.usd}
          </div>
          <div
            className={`flex items-center text-[8px] w-[35px] h-[10px] mt-[20px] ${getBackgroundColor(
              parseFloat(
                bitcoinData.market_data.price_change_percentage_24h.usd
              )
            )} ml-2`}
          >
            {parseFloat(
              bitcoinData.market_data.price_change_percentage_24h.usd
            ) >= 0 ? (
              <span>&uarr;</span> // Upwards arrow
            ) : (
              <span>&darr;</span> // Downwards arrow
            )}
            {parseFloat(
              bitcoinData.market_data.price_change_percentage_24h.usd
            ).toFixed(3)}
            %
          </div>
          <p className="text-gray-700 text-[10px] mt-[16px] ml-2">(24H)</p>
        </div>
        <div className="ml-10  font-semibold text-[12px] text-gray-500">
          INR {bitcoinData.market_data.ath.inr}
        </div>
        <div className=" m-10 h-[1px] bg-gray-300 my-3"></div>
        <div className=" mx-10 my-5">
          <h1 className="font-bold ">Bitcoin Price Chart</h1>
          <div className="text-gray-700 flex">
            <div className="text-gray-600 flex text-[10px]">
              <p className="mr-4">1H</p>
              <p className="mr-4">24H</p>
              <p className="mr-4 bg-blue-300 rounded-md h-[20px] w-[20px] flex items-center justify-center">
                7D
              </p>
              <p className="mr-4">1M</p>
              <p className="mr-4">3M</p>
              <p className="mr-4">6M</p>
              <p className="mr-4">1Y</p>
              <p>ALL</p>
            </div>
          </div>
        </div>
        <div className="mx-10 h-[300px]">
          <Bitcoin />
        </div>
      </div>
    </div>
  );
};

export default BitMobile;
