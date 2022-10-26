import React from 'react'
import Logo from './img/logo.png'
import {MdShoppingBasket} from 'react-icons/md'
import Avatar from './img/avatar.png'

function Header() {
  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
        {/* Tablet and Desktop */}
        <div className='hidden md:flex w-full h-full items-center justify-between '>
                <div className='flex items-center  gap-2'>
                    <img src={Logo} alt='logo' className='w-8 object-cover'/>
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
                <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8 ml-auto'>
                    <li className='text-base text-textColor motion-safe:hover:scale-110 hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor motion-safe:hover:scale-110 hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor motion-safe:hover:scale-110 hover:text-headingColor    duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                    <li className='text-base text-textColor  motion-safe:hover:scale-110 hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </ul>
                <div className='relative flex items-center justify-center'>
                    <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer'/>
                    <div className='w-4 h-4 bg-cartNumBg flex absolute -top-2 -right-2 rounded-full items-center justify-center' >
                        <p className='text-xs font-semibold text-white '>2</p>
                    </div>
                </div>
                <img src={Avatar} className='w-10 min-w-[40] h-10 min-h-[40] shadow-xl rounded-full cursor-pointer' alt='userprofile'/>

                </div>
        </div>
        {/* Mobile */}
        <div className='flex md:hidden w-full h-full'>

        </div>
    </header>
  )
}

export default Header