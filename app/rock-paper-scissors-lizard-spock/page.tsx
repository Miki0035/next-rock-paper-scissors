"use client"
import { GameBoard, RulesModal, ScoreBoard } from "@/components";
import React, { useState } from "react";
import { gameTwoIcons } from "@/constants";
import RulesRockPaperScissorsLizardSpock from "../../assets/images/image-rules-bonus.svg";
import RockPaperScissorsLizardSpockLogo from "../../assets/images/logo-bonus.svg";
import pentagon from "../../assets/images/bg-pentagon.svg";

const RockPaperScissorsLizardSpockPage = () => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <main className="flex flex-col justify-between items-center pb-10 bg-gradient-to-b from-[color:hsl(214,47%,23%)] to-[color:hsl(237,49%,15%)] h-screen ">
      <ScoreBoard imageUrl={RockPaperScissorsLizardSpockLogo} />
      <GameBoard imageUrl={pentagon} gameIcons={gameTwoIcons} />

      <button
        type="button"
        className="text-center py-2 px-8 rounded-md  border border-1 text-slate-50 uppercase hover:bg-[hsl(214,47%,10%)]"
        onClick={() => setIsShowing(!isShowing)}
      >
        rules
      </button>
      {isShowing ? (
        <RulesModal
          imageUrl={RulesRockPaperScissorsLizardSpock}
          close={() => setIsShowing(!isShowing)}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default RockPaperScissorsLizardSpockPage;
