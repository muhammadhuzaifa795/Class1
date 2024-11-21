import { MenuIcon } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center py-6 px-16  bg-white  text-black h-[6rem]  top-0 shadow-md font-bold'>
        <img src="./image/img1.png" alt=""  className='h-[4rem]'/>
        <ul className='space-x-6 ml-auto items-center hidden md:flex '>
            <li ><a href="#home" className='text-blue-600 font-bold  hover:text-blue-900 transition-colors duration-300'>Home</a></li>
            <li ><a href="#about" className='text-black font-bold cursor-pointer hover:text-blue-600 transition-colors duration-300'>About Us</a></li>
            <li ><a href="#Services" className='text-black font-bold cursor-pointer hover:text-blue-600 transition-colors duration-300'>Services</a></li>
            <li ><a href="#carousel" className='text-black font-bold cursor-pointer hover:text-blue-600 transition-colors duration-300'>Portfolio</a></li>
            <li ><a href="#contactus" className='text-black font-bold cursor-pointer hover:text-blue-600 transition-colors duration-300'>Contact Us</a></li>
           
        </ul>
        <div className='flex items-center ml-auto md:hidden'>
            <MenuIcon className='' />
        </div>
    </div>
  )
}

export default Header