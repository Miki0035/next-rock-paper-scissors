import React from "react";
import Image from "next/image";
import { IconType } from "@/types";

const SignButton = ({
  img,
  btnType,
  setBtn,
  index,
  gameMode,
}: {
  img: string;
  btnType: IconType;
  setBtn: (value: string) => void;
  index: number;
  gameMode: number;
}) => {
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
    case "L":
      startColor = "261,73%,60%";
      endColor = "261,72%,63%";
      break;
    case "SP":
      startColor = "189,59%,53%";
      endColor = "189,58%,57%";
      break;
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, hsl(${startColor}) , hsl(${endColor}))`,
        }}
        className={` ${
          gameMode === 1
            ? `pentagon-item-${index + 1} w-20 h-20 md:w-28 md:h-28`
            : "w-28 h-28  md:w-32 md:h-32 md:mx-8"
        }   cursor-pointer rounded-full flex justify-center items-center mx-5 my-1`}
        onClick={() => setBtn(btnType)}
      >
        <div
          className={` ${
            gameMode === 1
              ? `w-14 h-14 md:w-20 md:h-20`
              : "w-20 h-20 md:w-24 md:h-24"
          } flex justify-center items-center bg-[#fff] rounded-full`}
        >
          <Image src={img} alt="img" width={40} height={40} />
        </div>
      </div>
    </>
  );
};

export default SignButton;
