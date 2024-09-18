"use client";
import { GameContextProps } from "@/types";
import React, { ReactNode, useState, createContext, useContext } from "react";

const GameContext = createContext<GameContextProps>({
  score: 0,
  setScore: () => {},
  selectedBtn: "",
  setSelectedBtn: () => {},
  result: "",
  setResult: () => {},
  gameReset: () => {}
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [selectedBtn, setSelectedBtn] = useState("");
  const [result, setResult] = useState("");

  const gameReset = () => {
    setSelectedBtn("");
    setResult("");
  };

  return (
    <GameContext.Provider
      value={{
        score,
        setScore,
        selectedBtn,
        setSelectedBtn,
        result,
        setResult,
        gameReset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
