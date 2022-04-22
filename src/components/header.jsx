import React from 'react'
import '../index.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    
     <div class=' flex text-center justify-center p-7 h-full overflow-hidden relative' >
       <div>
        <h5 className=' xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl p-3'>Hello I am</h5>
        <h1 className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl p-3'>Joseph Lyons</h1>
        <h5 className='xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl p-3 mb-3'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        </div>
        <div>
          
        </div>
    </div>

  )
}

export default Header