import Image from 'next/image'
import React from 'react'
import Rules from "../assets/images/image-rules.svg"  
import { IoClose } from 'react-icons/io5'

const RulesModal = ({ close } : { close : () => void }) => {
  return (
    <div className='absolute z-30  bg-[#f0f0f0] w-full h-screen top-0 left-0 flex flex-col items-center justify-evenly'>
      <h1 className='uppercase text-2xl text-headerOutline font-semibold'>Rules</h1>
      <div className='w-4/5 flex justify-center'>
        <Image 
          src={Rules}
          width={350}
          height={350}
          alt='image rules'
        />
      </div>
      <button className='w-full flex justify-center mt-10' onClick={close}>
        <IoClose size={32}/>
      </button>
    </div>
  )
}

export default RulesModal