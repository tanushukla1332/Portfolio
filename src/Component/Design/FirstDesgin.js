import React from 'react'
export default function FirstDesgin() {
  return (
    <div className='w-96 h-96 absolute top-0 -left-10 animate-spin-slow overflow-hidden'>
      <div className='w-32 h-32 rounded-full bg-designColor absolute top-0 blur-xl'> </div>
      <div className='w-32 h-32 rounded-full bg-green-600 absolute -bottom-10 left-16 blur-xl'></div>
      <div className='w-28 h-28 rounded-full bg-gray-600 absolute top-32 -right-10 blur-2xl'></div>
   </div>
  )
}


