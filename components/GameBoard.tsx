"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import triangle from "../assets/images/bg-triangle.svg";
import SignButton from "./SignButton";
import { gameOneIcons } from "@/constants";
import { useGameContext } from "@/providers/ContextProvider";
import { gameOneIconType } from "@/types";
const GameBoard = () => {
  const { selectedBtn, setSelectedBtn, setScore } = useGameContext();
  const [houseSelected, setHouseSelected] = useState<gameOneIconType>({
    img: "",
    btnType: "",
  });
  const [result, setResult] = useState("");
  const [resultTextColor, setResultTextColor] = useState("");
  const gameOneIcon = gameOneIcons.filter(
    (icon) => icon.btnType === selectedBtn
  );

  const gameReset = () => {
    setSelectedBtn("");
    setResult("");
  };

  const changeUserSelection = (btnType: string) => {
    setSelectedBtn(btnType);
    const randomIndex = Math.floor(Math.random() * 3);
    setHouseSelected(gameOneIcons[randomIndex]);
    gameResult();
  };

  const gameResult = useCallback(() => {
    if (selectedBtn) {
      switch (selectedBtn) {
        case "R":
          if (houseSelected.btnType === "P") setResult("you lose");
          if (houseSelected.btnType === "S") setResult("you win");
          if (houseSelected.btnType === "R") setResult("draw");
          break;
        case "P":
          if (houseSelected.btnType === "P") setResult("draw");
          if (houseSelected.btnType === "S") setResult("you lose");
          if (houseSelected.btnType === "R") setResult("you win");
          break;
        case "S":
          if (houseSelected.btnType === "P") setResult("you win");
          if (houseSelected.btnType === "S") setResult("draw");
          if (houseSelected.btnType === "R") setResult("you lose");
          break;
      }

      if (result.trim() === "you win".trim()) {
        setScore((prevScore) => prevScore + 1);
        setResultTextColor("hsl(119,99%,41%)");
      }
      if (result.trim() === "you lose".trim()) {
        setScore((prevScore) => prevScore - 1);
        setResultTextColor("hsl(349,71%,52%)");
      }
      if (result.trim() === "draw".trim()) {
        setScore((prevScore) => prevScore);
        setResultTextColor("hsl(39,89%,49%)");
      }
    }
  }, [
    selectedBtn,
    result,
    houseSelected.btnType,
    setScore,
    setResultTextColor,
  ]);
  useEffect(() => {
    gameResult();
  }, [gameResult]);

  return (
    <div className="w-full flex justify-center items-center">
      {!selectedBtn ? (
        <div className="relative w-full h-64 flex justify-center">
          <div className="absolute w-full top-20 left-0 z-10 flex justify-center">
            <Image src={triangle} width={150} height={100} alt="triangle" />
          </div>
          <div className="absolute w-full flex justify-center top-5 left-0 z-20">
            <div className="w-80 md:w-96 flex-wrap flex justify-center ">
              {gameOneIcons.map((icon) => (
                <SignButton
                  key={icon.img}
                  img={icon.img}
                  btnType={icon.btnType}
                  setBtn={(btnType) => {
                    changeUserSelection(btnType);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-20">
          <div className="flex gap-10 items-center">
            <div className={`flex flex-col  items-center gap-5 `}>
              <div className=" flex justify-center rounded-full">
                <SignButton
                  img={gameOneIcon[0].img}
                  btnType={gameOneIcon[0].btnType}
                  setBtn={(btnType) => setSelectedBtn(btnType)}
                />
              </div>
              <h5 className="uppercase font-semibold text-slate-50">
                you picked
              </h5>
            </div>
            <div className="flex flex-col items-center gap-5">
              <SignButton
                img={houseSelected.img}
                btnType={houseSelected.btnType}
                setBtn={() => {}}
              />
              <h5 className="uppercase font-semibold text-slate-50">
                the house picked
              </h5>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <h5
              style={{ color: resultTextColor }}
              className={`uppercase text-5xl font-bold text-slate-50 mb-5`}
            >
              {result}
            </h5>
            <button
              className="uppercase bg-slate-50 text-center text-sm py-3 w-48 rounded-md"
              onClick={gameReset}
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
