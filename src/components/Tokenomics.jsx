import React from "react";

const Tokenomics = () => {
  const Lorem40 =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nemo magni natus rem earum cupiditate sapiente distinctio totam at explicabo  consequuntur vel placeat maxime blanditiis accusantium eveniet dicta soluta ea, nisi quibusdam illum excepturi aperiam aut? Voluptatibus nonsimilique provident Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero nemo magni natus rem earum cupiditate sapiente distinctio totam at explicabo  consequuntur vel placeat maxime blanditiis accusantium eveniet dicta soluta ea, nisi quibusdam illum excepturi aperiam aut? Voluptatibus nonsimilique provident";

  return (
    <div className="bg-white shadow-sm m-10 px-5 rounded-md">
      <h1 className="font-bold text-left pt-5 text-[23px]">Tokenomics</h1>
      <h2 className="font-bold text-left my-2 text-[18px]">
        Intial Distribution
      </h2>
      <img src="images/tokenomics.png" alt="" className="h-[200px]" />
      <p className="text-justify text-sm text-gray-700 my-5 pb-10">{Lorem40}</p>
    </div>
  );
};

export default Tokenomics;
