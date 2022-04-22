import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='flex text-center justify-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl gap-3 '>
      <a href="https://www.linkedin.com/in/joseph-lyons-325a6a215/" target="_blank" className='hover:text-gray-700'><BsLinkedin/></a>
      <a href="https://github.com" className='hover:text-gray-700'><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials