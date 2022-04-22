import React from 'react'
import '../index.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {AiFillMessage} from 'react-icons/ai'
import {FaBook} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const[activeNav, setActiveNav]= useState('#')
  return (
    <nav className=' text-gray-300 bg-green-700 border-2 border-r-2 border-black p-4 -translate-x-2/4 justify-center fixed bottom-5 z-10 rounded-full border-1 backdrop-blur flex gap-3 xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl w-max left-2/4'>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav=== '#' ? 'bg-green-800 rounded-full p-3':'p-3'}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav=== '#about' ? 'bg-green-800 rounded-full p-3':'p-3'}><FaUserAlt/></a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav=== '#portfolio' ? 'bg-green-800 rounded-full p-3':'p-3'}><FaBook/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav=== '#contact' ? 'bg-green-800 rounded-full p-3':'p-3'}><AiFillMessage/></a>
    </nav>
  )
}

export default Nav