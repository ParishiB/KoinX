// // import React, { useState, useEffect } from "react";
// // import { IoMdInformationCircle } from "react-icons/io";
// // import MobileSentiment from "../components/mobile/MobileSentiment";
// // const data = [
// //   {
// //     img: "blue-info",
// //     bg: "#E8F4FD",
// //     title: "Lorem ipsum dolor , ipsum soluta numquam laboriosam aperiam error!",
// //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium soluta tenetur nostrum nihil repellendus odio officia, dolor accusamus corrupti laborum. Eveniet ullam dolorum impedit minus quisquam ab expedita ex, sed nulla consequuntur beatae distinctio! ",
// //   },
// //   {
// //     img: "green-info",
// //     bg: "#EBF9F3",
// //     title: "Lorem ipsum dolor  soluta numquam laboriosam aperiam error!",
// //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ia, dolor accusamus corrupti laborum. Eveniet ullam dolorum impedit minus quisquam ab expedita ex, sed nulla consequuntur beatae distinctio! ",
// //   },
// // ];

// // const Sentiment = () => {
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth < 900);
// //     };

// //     window.addEventListener("resize", handleResize);

// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   return isMobile ? (
// //     <MobileSentiment />
// //   ) : (
// //     <div>
// //       <div className="bg-white m-10 p-5 rounded-md">
// //         <h1 className="text-gray-800 font-bold ml-5 pt-3 text-[23px]">
// //           Sentiment
// //         </h1>
// //         <div className="font-medium flex ml-5 text-gray-700 mt-3 text-[18px]">
// //           Key Events
// //           <IoMdInformationCircle className="text-gray-600 m-1" />
// //         </div>
// //         <div className="flex">
// //           {data.map((item, index) => (
// //             <div
// //               className={`bg-[${item.bg}] flex m-3 p-2 rounded-lg`}
// //               key={index}
// //             >
// //               <img
// //                 src={`/images/${item.img}.png`}
// //                 alt=""
// //                 className="rounded-md h-[40px]"
// //               />
// //               <div className="m-2">
// //                 <div className="font-semibold text-xs">{item.title}</div>
// //                 <div className="font-small my-2 text-xs text-gray-700">
// //                   {item.text}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //         <div className="font-medium flex ml-5 mb-2 mt-4 text-[18px]">
// //           Analyst Estimates
// //           <IoMdInformationCircle className="text-gray-600 m-1" />
// //         </div>
// //         <div className="flex">{/* Content for analyst estimates */}</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sentiment;

// import React, { useState, useEffect } from "react";
// import { IoMdInformationCircle } from "react-icons/io";
// import MobileSentiment from "../components/mobile/MobileSentiment";

// const data = [
//   {
//     img: "blue-info",
//     bg: "#E8F4FD",
//     title: "Lorem ipsum dolor , ipsum soluta numquam laboriosam aperiam error!",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium soluta tenetur nostrum nihil repellendus odio officia, dolor accusamus corrupti laborum. Eveniet ullam dolorum impedit minus quisquam ab expedita ex, sed nulla consequuntur beatae distinctio! ",
//   },
//   {
//     img: "green-info",
//     bg: "#EBF9F3",
//     title: "Lorem ipsum dolor  soluta numquam laboriosam aperiam error!",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ia, dolor accusamus corrupti laborum. Eveniet ullam dolorum impedit minus quisquam ab expedita ex, sed nulla consequuntur beatae distinctio! ",
//   },
// ];

// const Sentiment = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 900);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return isMobile ? (
//     <MobileSentiment />
//   ) : (
//     <div>
//       <div className="bg-white m-10 p-5 rounded-md">
//         <h1 className="text-gray-800 font-bold ml-5 pt-3 text-[23px]">
//           Sentiment
//         </h1>
//         <div className="font-medium flex ml-5 text-gray-700 mt-3 text-[18px]">
//           Key Events
//           <IoMdInformationCircle className="text-gray-600 m-1" />
//         </div>
//         <div className="flex">
//           <div className={`bg-${data[0].bg} flex m-3 p-2 rounded-lg`} key={0}>
//             <img
//               src={`/images/${data[0].img}.png`}
//               alt=""
//               className="rounded-md h-[40px]"
//             />
//             <div className="m-2">
//               <div className="font-semibold text-xs">{data[0].title}</div>
//               <div className="font-small my-2 text-xs text-gray-700">
//                 {data[0].text}
//               </div>
//             </div>
//           </div>
//           <div className={`bg-${data[1].bg} flex m-3 p-2 rounded-lg`} key={1}>
//             <img
//               src={`/images/${data[1].img}.png`}
//               alt=""
//               className="rounded-md h-[40px]"
//             />
//             <div className="m-2">
//               <div className="font-semibold text-xs">{data[1].title}</div>
//               <div className="font-small my-2 text-xs text-gray-700">
//                 {data[1].text}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="font-medium flex ml-5 mb-2 mt-4 text-[18px]">
//           Analyst Estimates
//           <IoMdInformationCircle className="text-gray-600 m-1" />
//         </div>
//         <div className="flex">{/* Content for analyst estimates */}</div>
//       </div>
//     </div>
//   );
// };

// export default Sentiment;

import React, { useState, useEffect } from "react";
import { IoMdInformationCircle } from "react-icons/io";
import MobileSentiment from "../components/mobile/MobileSentiment";

const data = [
  {
    img: "blue-info",
    bg: "#E8F4FD",
    title: "Lorem ipsum dolor , ipsum soluta numquam laboriosam aperiam error!",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium soluta tenetur nostrum nihil repellendus odio officia, dolor accusamus corrupti laborum. Eveniet ullam dolorum impedit minus quisquam ab expedita ex, sed nulla consequuntur beatae distinctio! ",
  },
  {
    img: "green-info",
    bg: "#EBF9F3",
    title: "Lorem ipsum dolor  soluta numquam laboriosam aperiam error!",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod accusantium soluta tenetur nostrum nihil repellendus odio officia, dolor accusamus corrupti laborum. Eveniet ullam dolorum impedit minus quisquam ab expedita ex, sed nulla consequuntur beatae distinctio! ",
  },
];
const classnames = [`bg-[#E8F4FD]`, `bg-[#EBF9F3]`];

const Sentiment = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <MobileSentiment />
  ) : (
    <div>
      <div className="bg-white m-10 p-5 rounded-md">
        <h1 className="text-gray-800 font-bold ml-5 pt-3 text-[23px]">
          Sentiment
        </h1>
        <div className="font-medium flex ml-5 text-gray-700 mt-3 text-[18px]">
          Key Events
          <IoMdInformationCircle className="text-gray-600 m-1" />
        </div>
        <div className="flex">
          {data.map((item, index) => (
            <div
              // className={`bg-[${item.bg}] flex m-3 p-2 rounded-lg`}
              className={`bg-[${item.bg}] flex m-3 p-2 rounded-lg`}
              key={index}
            >
              <img
                src={`/images/${item.img}.png`}
                alt=""
                className="rounded-md h-[40px]"
              />
              <div className="m-2">
                <div className="font-semibold text-xs">{item.title}</div>
                <div className="font-small my-2 text-xs text-gray-700">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="font-medium flex ml-5 mb-2 mt-4 text-[18px]">
          Analyst Estimates
          <IoMdInformationCircle className="text-gray-600 m-1" />
        </div>
        <div className="flex text-gray-700 text-sm mb-5 ml-5">
          <img src="/images/green-no.png" alt="" className="h-[150px]" />
          <div className="mt-10 ml-2">
            <div className="flex text-gray-700 text-sm">
              Buy
              <div className="w-[400px] h-[10px] rounded-lg mx-2 bg-[#03B386] my-2"></div>
              76%
            </div>
            <div className="flex">
              Hold
              <div className="w-[80px] h-[10px] rounded-lg mx-2 bg-[#C7C8CE] my-2"></div>
              8%
            </div>
            <div className="flex">
              Sell
              <div className="w-[160px] h-[10px] rounded-lg mx-2 bg-[#F7334C] my-2"></div>
              16%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
