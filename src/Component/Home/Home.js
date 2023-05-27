import React from 'react'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import {IoIosPaper} from 'react-icons/io';
import {MdWork} from 'react-icons/md'

import Left from '../Left/Left'
import About from '../About/About';

export default function Home() {
  return (
    <div className='w-[85%] h-[85%] bg-transparent text-white z-50 flex items-start justify-between'>
        <div className='w-16 h-86 bg-transparent flex flex-col  gap-4 '>
            <div className='w-full h-20 bg-bodyColor rounded-3xl flex justify-center items-center cursor-pointer group '> 
                {/* home icons */}
                <div className=' flex flex-col gap-1.5 overflow-hidden'>
                    <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-2 
                    group-hover:translate-x-0 transition-transform duration-300 group-hover:bg-yellow-200'></span>
                    <span className='w-8 h-[2px] bg-textColor inline-block duration-300 group-hover:bg-yellow-200 '></span>
                    <span className='w-8 h-[2px] bg-textColor inline-block -translate-x-3.5 
                    group-hover:translate-x-0 transition-transform duration-300  group-hover:bg-yellow-200'></span>
                </div>
            </div>
            {/* other icons */}
            <div className='w-full h-80 bg-bodyColor rounded-3xl py-6  flex flex-col items-center justify-between'>
                <span className='w-full h-6 text-textColor text-xl flex items-center justify-center
                 hover:text-designColor duration-300 cursor-pointer relative group '><FaUser /> <span 
                 className='absolute text-black font-medium text-xs  uppercase bg-designColor px-4 py-[1px] 
                 rounded-xl left-0 translate-x-8 group-hover:translate-x-12
                  transition-all duration-300 z-200 opacity-0 group-hover:opacity-100'  
                 >About</span></span>
                 <span className='w-full h-6 text-textColor text-xl flex items-center justify-center
                 hover:text- duration-300 cursor-pointer relative group '><IoIosPaper />
                  <span className='absolute text-black font-medium text-xs uppercase bg-designColor px-4 py-[1px] 
                 rounded-xl left-0 translate-x-8 group-hover:translate-x-12
                  transition-all duration-300 z-200 opacity-0 group-hover:opacity-100'  
                 >Resume</span></span>
                 <span className='w-full h-6 text-textColor text-xl flex items-center justify-center
                 hover:text-designColor duration-300 cursor-pointer relative group '><MdWork /> <span 
                 className='absolute text-black font-medium text-xs  uppercase bg-designColor px-4 py-[1px] 
                 rounded-xl left-0 translate-x-8 group-hover:translate-x-12
                  transition-all duration-300 z-200 opacity-0 group-hover:opacity-100'  
                 >Project</span></span>
                 <span className='w-full h-6 text-textColor text-xl flex items-center justify-center
                 hover:text-designColor duration-300 cursor-pointer relative group '><FaEnvelope /> <span 
                 className='absolute text-black font-medium text-xs  uppercase bg-designColor px-4 py-[1px] 
                 rounded-xl left-0 translate-x-8 group-hover:translate-x-12
                  transition-all duration-300 z-200 opacity-0 group-hover:opacity-100'  
                 >Contact</span></span>

            </div>
        </div>
        <div className='w-[94%] h-full bg-transparent flex items-center '>
            {/* Left part */}
            <Left/>
            {/* Right part */}
            <div className='w-8/12 h-[95%] bg-bodyColor'>
                <About/>
            </div>


        </div>
    </div>
  )
}
