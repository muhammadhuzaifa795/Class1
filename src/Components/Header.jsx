import { MenuIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {motion } from 'framer-motion'

const Header = () => {
  const [header, setHeader] = useState(false);
  const [hover, setHover] = useState('');
    
    useEffect(() => {
        const scrollYPos = window.addEventListener("scroll", () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return () => window.removeEventListener("scroll", scrollYPos);
    }, []);

    const handleHover = (link) => {
      setHover(link)
    }
  return (
    <div  className={`flex items-center px-16  bg-blue-100 z-50  text-black sticky top-0 font-bold transition-all duration-300 ${header ? 'shadow-lg py-6' : 'py-4 bg-white'}`}>
        <img src="./image/img1.png" alt=""  className='h-[4rem]'/>
        <ul className='space-x-6 ml-auto items-center hidden md:flex '>
            <li ><a onMouseEnter={() => handleHover('home')}  onMouseLeave={() => handleHover('')} href="#home" className='relative text-blue-600 font-bold  hover:text-blue-800 transition-colors duration-300 '>
            {hover === 'home' && 
            <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            layoutId="underline"
            className='absolute left-0 top-[4rem] h-[3px] bg-primary w-full'
          />
          }

               Home</a></li>
            
               <li ><a onMouseEnter={() => handleHover('about')}  onMouseLeave={() => handleHover('')} href="#about" className='relative text-black font-bold  hover:text-blue-600 transition-colors duration-300 '>
            {hover === 'about' && 
            <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            layoutId="underline"
            className='absolute left-0 top-[4rem] h-[3px] bg-primary w-full'
          />
          }

               About Us</a></li>

               <li ><a onMouseEnter={() => handleHover('services')}  onMouseLeave={() => handleHover('')} href="#services" className='relative text-black font-bold  hover:text-blue-600 transition-colors duration-300 '>
            {hover === 'services' && 
            <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            layoutId="underline"
            className='absolute left-0 top-[4rem] h-[3px] bg-primary w-full'
          />
          }

               Seervices</a></li>
               <li ><a onMouseEnter={() => handleHover('portfolio')}  onMouseLeave={() => handleHover('')} href="#portfolio" className='relative text-black font-bold  hover:text-blue-600 transition-colors duration-300 '>
            {hover === 'portfolio' && 
            <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            layoutId="underline"
            className='absolute left-0 top-[4rem] h-[3px] bg-primary w-full'
          />
          }

               Portfolio</a></li>
               <li ><a onMouseEnter={() => handleHover('card')}  onMouseLeave={() => handleHover('')} href="#card" className='relative text-black font-bold  hover:text-blue-600 transition-colors duration-300 '>
            {hover === 'card' && 
            <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            layoutId="underline"
            className='absolute left-0 top-[4rem] h-[3px] bg-primary w-full'
          />
          }

              Product Cards</a></li>
               <li ><a onMouseEnter={() => handleHover('contact')}  onMouseLeave={() => handleHover('')} href="#contact" className='relative text-black font-bold  hover:text-blue-600 transition-colors duration-300 '>
            {hover === 'contact' && 
            <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
            layoutId="underline"
            className='absolute left-0 top-[4rem] h-[3px] bg-primary w-full'
          />
          }

               Contact Us</a></li>

           
        </ul>
        <div className='flex items-center ml-auto md:hidden'>
            <MenuIcon className='' />
        </div>
    </div>
  )
}

export default Header