"use client"
import { RulesModal, ScoreBoard, GameBoard } from '@/components'
import React, { useState } from 'react'

const RockPaperScissorsPage = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className='flex flex-col justify-between items-center pb-10 bg-gradient-to-b from-[color:hsl(214,47%,23%)] to-[color:hsl(237,49%,15%)] h-screen '>
      <ScoreBoard />
      <GameBoard />

      <button type="button" className='text-center py-2 px-8 rounded-md capitalize border border-1' onClick={() => setIsShowing(!isShowing)}>rules</button>
      {
        isShowing ? (<RulesModal close={() => setIsShowing(!isShowing)}/>) : <></>
      }
    </div>
  )
}

export default RockPaperScissorsPage