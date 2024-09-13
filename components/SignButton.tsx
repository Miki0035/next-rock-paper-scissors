"use client";
import React from "react";
import Image from "next/image";
import { IconType } from "@/types";
import { useGameContext } from "@/providers/ContextProvider";

const SignButton = ({ img, btnType, setBtn }: { img: string; btnType: IconType; setBtn: (value: string) => void }) => {
  const { setSelectedBtn } = useGameContext();
  let startColor = "";
  let endColor = "";
  switch (btnType) {
    case "P":
      startColor = "230,89%,62%";
      endColor = "230,89%,65%";
      break;
    case "S":
      startColor = "39,89%,49%";
      endColor = "40,84%,53%";
      break;
    case "R":
      startColor = "349,71%,52%";
      endColor = "349,70%,56%";
      break;
  }

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, hsl(${startColor}) , hsl(${endColor}))`,
      }}
      className={` w-28 h-28 cursor-pointer md:w-32 md:h-32 rounded-full flex justify-center items-center mx-3 my-1 md:mx-8`}
      onClick={() => setBtn(btnType)}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 flex justify-center items-center bg-[#fff] rounded-full">
        <Image src={img} alt="img" width={40} height={40} />
      </div>
    </div>
  );
};

export default SignButton;
