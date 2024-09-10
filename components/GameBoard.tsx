import Image from "next/image";
import React, { useContext, useEffect } from "react";
import triangle from "../assets/images/bg-triangle.svg";
import SignButton from "./SignButton";
import { gameOneIcons } from "@/constants";
import { GameContext } from "@/providers/ContextProvider";
const GameBoard = () => {
  const { selectedBtn, setSelectedBtn } = useContext(GameContext);
  let gameOneIcon = gameOneIcons.filter((icon) => icon.btnType === selectedBtn);
  let houseSelected: any;
  let result: string = "";

  if (selectedBtn) {
    houseSelected = gameOneIcons[Math.floor(Math.random() * 3)];
    switch (selectedBtn) {
      case "R":
        if (houseSelected.btnType === "P") result = "you lose";
        if (houseSelected.btnType === "S") result = "you win";
        if (houseSelected.btnType === "R") result = "draw";
        break;
      case "P":
        if (houseSelected.btnType === "P") result = "draw";
        if (houseSelected.btnType === "S") result = "you lose";
        if (houseSelected.btnType === "R") result = "you win";
        break;
      case "S":
        if (houseSelected.btnType === "P") result = "you win";
        if (houseSelected.btnType === "S") result = "draw";
        if (houseSelected.btnType === "R") result = "you lose";
        break;
    }
  }
  return (
    <div className="w-full flex justify-center items-center">
      {!selectedBtn ? (
        <div className="relative w-full h-64 flex justify-center">
          <div className="absolute w-full top-20 left-0 z-10 flex justify-center">
            <Image src={triangle} width={120} height={100} alt="triangle" />
          </div>
          <div className="absolute top-5 left-0 z-20 w-80 flex-wrap flex justify-center ">
            {gameOneIcons.map((icon) => (
              <SignButton
                key={icon.img}
                img={icon.img}
                btnType={icon.btnType}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-20">
          <div className="flex gap-10 items-center">
            <div className="flex flex-col items-center gap-5">
              <SignButton
                img={gameOneIcon[0].img}
                btnType={gameOneIcon[0].btnType}
              />
              <h5 className="uppercase font-semibold text-slate-50">
                you picked
              </h5>
            </div>
            <div className="flex flex-col items-center gap-5">
              <SignButton
                img={houseSelected.img}
                btnType={houseSelected.btnType}
              />
              <h5 className="uppercase font-semibold text-slate-50">
                the house picked
              </h5>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <h5 className="uppercase text-5xl font-bold text-slate-50 mb-5">
              {result}
            </h5>
            <button
              className="uppercase bg-slate-50 text-center text-sm py-2 w-48 rounded-md"
              onClick={() => setSelectedBtn("")}
            >
              play again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
