import React from "react";
import Image from "next/image";
import { useGameContext } from "@/providers/ContextProvider";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const ScoreBoard = ({ imageUrl }: { imageUrl: string }) => {
  const { score, gameReset } = useGameContext();
  return (
    <div className="w-full flex items-center justify-evenly mt-10">
      <div className="w-full max-w-[500px] py-2 px-2 items-center flex justify-between rounded-md border border-2 border-headerOutline">
        <div className="flex flex-col items-start justify-center py-3">
          <Image src={imageUrl} width={90} height={90} alt="logo" />
          <Link href={"/"} onClick={gameReset}>
            <IoArrowBackCircleSharp
              size={32}
              color="#ffffff"
              className="mt-2 hover:scale-125 transition"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center my-2 bg-slate-50 rounded-sm py-1 px-3 w-24 ">
          <p className="capitalize text-xs font-semibold text-scoreText">
            SCORE
          </p>
          <p className="text-5xl text-headerOutline font-bold">{score}</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
