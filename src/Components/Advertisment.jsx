import React from "react";
import Ad from "../images/ad.png";

function Advertisment() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between p-2 md:p-4 ">
      <div className=" w-full md:max-w-[60%] mt-4 md:mt-16 flex flex-col items-start px-2 md:px-10">
        <h1 className="font-bold text-5xl text-start w-[200px] pb-2  border-b-4 border-green-300">
          Zin<span className="text-green-500">o</span>bi{" "}
          <span className=" md:text-5xl font-bold">.</span>
        </h1>
        <h1 className="font-bold text-2xl md:text-4xl text-start my-3 font-serif">
          Start work with your project-mates using effectively and seamlesly
        </h1>
        <p className="text-start font-normal text-gray-500 mt-5">
          Zinobi is a platform where you can work with your project-mates and
          collaborate with them to make your project more effective and easy to
          work with.
        </p>
        <button className="bg-green-500 text-white rounded-3xl px-4 py-3 text-xl mt-5 font-semibold">
          {" "}
          Explore Features
        </button>
      </div>
      <div>
        <img src={Ad} alt="add" className=" w-[260px] md:w-[390px] md:mr-10" />
      </div>
    </div>
  );
}

export default Advertisment;
