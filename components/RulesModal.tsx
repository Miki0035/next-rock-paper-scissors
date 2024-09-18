import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";

const RulesModal = ({ close , imageUrl }: { close: () => void; imageUrl: string }) => {
  return (
    <div className="absolute w-full h-screen top-0 left-0 flex justify-center items-center ">
      <div className=" absolute z-10 w-screen h-screen bg-[#000] opacity-50"></div>
      <div className="absolute w-screen h-screen z-40 bg-[#f0f0f0] opacity-100 w-full flex flex-col items-center justify-evenly lg:gap-10 lg:w-96 lg:h-96 lg:rounded-md lg:justify-center">
        <div className="w-full flex justify-center items-center lg:justify-between  lg:px-5">
          <h1 className="uppercase text-2xl text-headerOutline font-semibold">
            Rules
          </h1>
          <button
            className="w-24 hidden lg:flex justify-end mt-10 lg:mt-0"
            onClick={close}
          >
            <IoClose size={32} className="fill-grey-500" />
          </button>
        </div>
        <div className="w-4/5 flex justify-center">
          <Image src={imageUrl} width={350} height={350} alt="image rules" />
        </div>
        <button
          className="w-full lg:hidden flex justify-center mt-10"
          onClick={close}
        >
          <IoClose size={32} />
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
