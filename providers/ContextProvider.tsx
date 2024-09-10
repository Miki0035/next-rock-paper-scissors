"use client"
import { GameContextProps } from '@/types';
import React, { ReactNode, useState, createContext } from 'react'

const GameContext  = createContext<GameContextProps>({
    score: 0,
    setScore: () => {},
    selectedBtn: "",
    setSelectedBtn: () => {}
});

const ContextProvider = ({ children }: {children : ReactNode }) => {
    const [score, setScore] = useState(0)  
    const [selectedBtn, setSelectedBtn] = useState("")
  return (
    <GameContext.Provider value={{
        score,
        setScore,
        selectedBtn,
        setSelectedBtn
    }} >
        {children}
    </GameContext.Provider>
  )
}

export { ContextProvider ,  GameContext }