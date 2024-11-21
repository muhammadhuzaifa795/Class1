import { Button } from "@/components/ui/button"
import React from 'react'

const Hero = () => {
  return (
    <>
    <div  style={{backgroundImage:'url(/image/abcd.jpg)'}} className='relative flex items-center justify-center bg-cover h-[550px] bg-center opacity-80'>
      <div className='bg-black opacity-70 z-1 inset-0 absolute'></div>
      <div className='z-30 relative text-center px-40 space-y-6' >
        <h1 className='text-6xl text-white font-bold  ' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">Minerva Study Abroad Experts</h1>
     <p className='text-white mx-28'>if there was a page dedicated to cars, this is what you want and if there was a page dedicated to cars, this is what you want and if there was a page dedicated to cars, this is what you want ands if there was a page dedicated to cars, this is what you want</p>
     <Button className="my-8 shadow-xl font-semibold bg-blue-900 hover:bg-blue-500 hover:text-black " >Get Stated</Button>

      </div>
      </div>

    </>
  )
}

export default Hero
