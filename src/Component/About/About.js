import React from 'react'
import Title from '../Home/Title'
import Self from './Self'
import MyServices from './MyServices'

export default function About() {
  return (
   <section id='about' className='w-full'>
   <Title Title="About" subTitle="Me" />
   <Self/>
   <Title Title="My" subTitle="Service"/>
   <MyServices/>
    
   </section>
  )
}
