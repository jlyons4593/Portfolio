import React from 'react'
import '../index.css'
import CTA from './CTA'
import HeaderSocials from './headerSocials'
const Header = () => {
  return (
    
     <div class=' flex-col text-center p-5 ' >
       <div>
        <h5 className=' text-2xl'>Hello I'm</h5>
        <h1 className='text-4xl'>Joseph Lyons</h1>
        <h5 className='text-2xl mb-3'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        </div>
        <div>
          
        </div>
    </div>

  )
}

export default Header