import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLogo from "@/assets/icons/jvec-logo.svg";

const Logo = () => {
  return (
    <Link 
        to="/"
        className='cursor-pointer relative z-30'
        aria-label="Home">
        <img src={HeaderLogo} alt="Website Logo" className="w-[63px] md:w-[50px] lg:w-[90px] h-fit" />
    </Link>
  )
}

export default Logo