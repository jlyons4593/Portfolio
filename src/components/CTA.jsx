import React from 'react'
import CV from '../assets/CV.pdf'
import '../index.css'
const CTA = () => {
  return (
      <div class="mt-2 flex gap-1 justify-center pb-4">
        <a href={CV} download class='xl:text-md lg:text-md md:text-sm sm:text-sm bg-blue-400  hover:underline hover:bg-blue-500 text-black font-bold py-2 px-4 rounded-full'>Download CV!</a>
        <a href="#contact" class='xl:text-md lg:text-md md:text-sm sm:text-sm bg-blue-400  hover:underline hover:bg-blue-500 text-black font-bold py-2 px-4 rounded-full'>Message me!</a>
    </div>
  )
}

export default CTA