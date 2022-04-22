import Header from'./components/header'
// import Contact from'./components/contact'
import Nav from'./components/nav'
// import Portfolio from'./components/portfolio'
// import Footer from './components/footer'
import About from './components/about'
import React from 'react'
import './index.css'

const app = () => {
  return (
    <>
    <div className=' bg-green'>
    <Header/>
    <Nav/>
    <About/>
    {/* <Portfolio/> */}
    {/* <Contact/> */}
    {/* <Footer/>  */}
    </div>
    </>
  )
}



export default app