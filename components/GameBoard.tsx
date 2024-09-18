"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import SignButton from "./SignButton";
import { useGameContext } from "@/providers/ContextProvider";
import { gameIconType } from "@/types";

// Component
const GameBoard = ({
  imageUrl,
  gameIcons,
}: {
  imageUrl: string;
  gameIcons: gameIconType[];
}) => {
  const {
    selectedBtn,
    setSelectedBtn,
    setScore,
    setResult,
    result,
    gameReset,
  } = useGameContext();
  const [houseSelected, setHouseSelected] = useState<gameIconType>({
    img: "",
    btnType: "",
  });
  // colors result
  const [resultTextColor, setResultTextColor] = useState("");
  // determines which game your playing
  const [gameMode] = useState(gameIcons.length > 3 ? 1 : 0);

  //gets the user selected icon
  const gameOneIcon = gameIcons.filter((icon) => icon.btnType === selectedBtn);

  const changeUserSelection = (btnType: string) => {
    setSelectedBtn(btnType);

    if (gameMode === 0) {
      const randomIndex = Math.floor(Math.random() * 3);
      setHouseSelected(gameIcons[randomIndex]);
    } else {
      const randomIndex = Math.floor(Math.random() * 5);
      setHouseSelected(gameIcons[randomIndex]);
    }
    gameResult();
  };

  // sets house selection
  // determine win or loose
  // set results
  const gameResult = useCallback(() => {
    if (selectedBtn) {
      switch (selectedBtn) {
        case "R":
          if (houseSelected.btnType === "P") setResult("you lose");
          if (houseSelected.btnType === "S") setResult("you win");
          if (houseSelected.btnType === "R") setResult("draw");
          if (houseSelected.btnType === "L") setResult("you win");
          if (houseSelected.btnType === "SP") setResult("you lose");
          break;
        case "P":
          if (houseSelected.btnType === "P") setResult("draw");
          if (houseSelected.btnType === "S") setResult("you lose");
          if (houseSelected.btnType === "R") setResult("you win");
          if (houseSelected.btnType === "L") setResult("you lose");
          if (houseSelected.btnType === "SP") setResult("you win");
          break;
        case "S":
          if (houseSelected.btnType === "P") setResult("you win");
          if (houseSelected.btnType === "S") setResult("draw");
          if (houseSelected.btnType === "R") setResult("you lose");
          if (houseSelected.btnType === "L") setResult("you win");
          if (houseSelected.btnType === "SP") setResult("you lose");
          break;
        case "L":
          if (houseSelected.btnType === "P") setResult("you win");
          if (houseSelected.btnType === "S") setResult("you lose");
          if (houseSelected.btnType === "R") setResult("you lose");
          if (houseSelected.btnType === "SP") setResult("you win");
          if (houseSelected.btnType === "L") setResult("draw");
          break;

        case "SP":
          if (houseSelected.btnType === "P") setResult("you lose");
          if (houseSelected.btnType === "S") setResult("you win");
          if (houseSelected.btnType === "R") setResult("you win");
          if (houseSelected.btnType === "SP") setResult("draw");
          if (houseSelected.btnType === "L") setResult("you lose");
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
    setResult,
    setResultTextColor,
  ]);

  useEffect(() => {
    gameResult();
  }, [gameResult]);

  return (
    <div className="w-full flex justify-center items-center">
      {!selectedBtn ? (
        <div className="relative w-full h-96 flex justify-center">
          <div className="absolute w-full top-20 left-0 z-10 flex justify-center gameboard-image">
            <Image src={imageUrl} width={200} height={100} alt="triangle" />
          </div>
          <div className="absolute w-full flex justify-center top-5 left-0 z-20">
            <div className="w-80 md:w-96 flex-wrap flex  justify-center ">
              {gameIcons.map((icon, index) => (
                <SignButton
                  index={index}
                  gameMode={gameMode}
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
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-center">
          <div className="flex gap-10 items-center">
            <div className={`flex flex-col items-center gap-5 lg:flex-col-reverse `}>
              <div className=" flex justify-center rounded-full">
                <SignButton
                  index={0}
                  gameMode={gameMode}
                  img={gameOneIcon[0].img}
                  btnType={gameOneIcon[0].btnType}
                  setBtn={(btnType) => setSelectedBtn(btnType)}
                />
              </div>
              <h5 className="uppercase font-semibold text-slate-50">
                you picked
              </h5>
            </div>
            <div className="hidden lg:flex w-full flex-col items-center">
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
            <div className="relative lg:w-72 flex flex-col items-center gap-5  lg:flex-col-reverse">
              <SignButton
                index={0}
                gameMode={gameMode}
                img={houseSelected.img}
                btnType={houseSelected.btnType}
                setBtn={() => {}}
              />
              <h5 className="uppercase font-semibold text-slate-50">
                the house picked
              </h5>
            </div>
          </div>
          <div className="lg:hidden mb-8 w-full flex flex-col items-center">
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
