import React from "react";
import logo from "../assets/images/logo.svg";
import Image from "next/image";

const ScoreBoard = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-4/5 py-2 px-2 items-center flex justify-between rounded-md border border-2 border-headerOutline">
        <Image src={logo} width={90} height={90} alt="logo" />
        <div className="flex flex-col items-center justify-center my-2 bg-headerOutline py-1 px-3 ">
          <p className="capitalize text-xs">SCORE</p>
          <p className="text-3xl">12</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
