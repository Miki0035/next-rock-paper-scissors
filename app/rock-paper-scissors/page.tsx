"use client";
import { RulesModal, ScoreBoard, GameBoard } from "@/components";
import React, { useState } from "react";
import RulesRockPaperScissors from "../../assets/images/image-rules.svg";
import RockPaperScissorsLogo from "../../assets/images/logo.svg";
import { gameOneIcons } from "@/constants";

import triangle from "../../assets/images/bg-triangle.svg";

const RockPaperScissorsPage = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center pb-10 bg-gradient-to-b from-[color:hsl(214,47%,23%)] to-[color:hsl(237,49%,15%)] h-screen ">
      <ScoreBoard imageUrl={RockPaperScissorsLogo} />
      <GameBoard imageUrl={triangle} gameIcons={gameOneIcons} />

      <button
        type="button"
        className="text-center py-2 px-8 rounded-md  border border-1 text-slate-50 uppercase hover:bg-[hsl(214,47%,10%)]"
        onClick={() => setIsShowing(!isShowing)}
      >
        rules
      </button>
      {isShowing ? (
        <RulesModal
          imageUrl={RulesRockPaperScissors}
          close={() => setIsShowing(!isShowing)}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default RockPaperScissorsPage;
