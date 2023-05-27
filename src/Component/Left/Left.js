import React from 'react'
import {BsCloudLightningFill} from 'react-icons/bs'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import {FaFacebook, FaGithub,FaLinkedin} from 'react-icons/fa';
import{FiInstagram,FiMail,FiSend} from 'react-icons/fi';
import resume from './km Shivani Shukla (2).pdf';

export default function Left() {
    const [text]=useTypewriter({
        words:["FrontEnd Devloper","UI designer","I am a React devloper"],
        loop:true,
        typeSpeed:30,
        deleteSpeed:20,
        delaySpeed:2000
    });
  return (
    <div className=' w-5/12 h-full bg-bodyColor' >
        <div className='w-full h-3/5'>
        <img  className='w-full h-full object-cover rounded-2xl' 
        src="https://cdn.pixabay.com/photo/2017/01/31/16/45/portrait-2025447_1280.jpg"
         alt="profile img"  
         loading='priority'/>
        </div>
        <div className='w-full h-2/5'>
            {/* conatine intr0 */}
            <div className='flex flex-col items-center gap-2 py-10'>
                <h1 className=' text-textColor text-4xl font-semibold'>Shivani Shukla</h1>
                <p className=' text-designColor tracking-wide font-mono '>{text} <Cursor cursorBlinking="false" cursorStyle="()"/></p>
                <div  className=' flex justify-center gap-2 mt-2'>
                <span className='hover:text-yellow-200 duration-300 cursor-pointer text-xl' ><FaGithub/></span>
                <span className='hover:text-yellow-200 duration-300 cursor-pointer text-xl' ><FaLinkedin/></span>
                <span className='hover:text-yellow-200 duration-300 cursor-pointer text-xl' ><FiInstagram/></span>
                <span className='hover:text-yellow-200 duration-300 cursor-pointer text-xl' ><FaFacebook/></span>
                <span className='hover:text-yellow-200 duration-300 cursor-pointer text-xl' ><FiMail/></span>
                </div>
            </div>
            {/* buttons */}
            <div className='flex h-14'>
                <a 
                className='w-1/2  border-t-[1px] borderRight  items-center gap-2 border-t-zinc-800
                 text-sm tracking-wide uppercase hover:text-yellow-200  durration-300s' 
                 href={resume}
                  target='_blank'
                   rel="noreferrer">
                <button className=' w-full h-full flex justify-center items-center gap-2'>Download CV
                  <BsCloudLightningFill/></button>
                </a>
                <button  className='w-1/2 h-full  flex justify-center items-center gap-2
                border-t-[1px] border-t-zinc-800
                 text-sm -tracking-wide uppercase hover:text-yellow-200  durration-300s'>Contact me <FiSend/></button>
            </div>

        </div>
    </div>
  )
}
