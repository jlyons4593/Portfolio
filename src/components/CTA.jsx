import React from 'react'
import CV from '../assets/CV.pdf'
import '../index.css'
const CTA = () => {
  return (
      
    <a href={CV} download class=' bg-blue hover:bg-blue text-white font-bold py-2 px-4 rounded-full'>Download CV</a>
   
  )
}

export default CTA