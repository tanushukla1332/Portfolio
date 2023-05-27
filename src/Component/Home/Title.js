import React from 'react'

export default function Title({Title,subTitle}) {
  return (
    <h1 className='front-titleFont font-bold text-xl capitalize
     text-textColor relative z-10 px-6 py-3 borderBottom group '> 
     <span className=' text-base text-designColor font-titleFont'>{Title}</span> {subTitle} 
    <span className='w-8 h-8 bg-gradient-to-t from- text-base text-designColor to-gray-600 inline-block
     rounded-full absolute left-2 top-3 opacity-10 -z-10 translate-x-0 group-hover:translate-x-24
     transition-transform duration-500 '></span></h1>
  )
}
