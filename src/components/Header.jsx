import React, { useState, useEffect } from 'react';
import Menubar from "@/assets/icons/menubar.svg";
import { MenuIcon } from 'lucide-react';
import CancelClose from "@/assets/icons/close.svg";
import { NavLink } from 'react-router-dom';
import { navHeaders } from '@/constants';
import Logo from './Logo';


const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggleButton = () => {
        setToggle(!toggle);
    };

    return (
        <header className='flex justify-center items-center'>
            <div className="fixed top-0 z-50 w-full bg-[#080808] shadow-md">
                <div className="py-6 bg-[#080808] flex justify-between items-center container">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav aria-label="Main Navigation" className="hidden md:flex justify-center items-center gap-4 text-base">
                        <ul className="flex justify-center items-center space-x-[18px] lg:space-x-[38px] text-sm">
                            {navHeaders.map((link) => (
                                <li className='text-base'
                                key={link.label}
                                >
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                              ? "desktop-nav-link-active"
                                              : "desktop-nav-link"
                                          }
                                        to={link.link}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <button 
                        className="text-[#ffffff] py-1 px-8 text-sm hidden md:block
                        transition-all duration-300 ease-in-out
                        hover:shadow-lg hover:scale-100
                        active:translate-y-[2px] active:shadow-none cursor-pointer
                        bg-gradient-to-b from-[#4168E2] via-[#4168E2] to-[#FFAB20] rounded-md"
                    >
                        CONTACT US
                    </button>

                    <button
                        aria-label="Toggle navigation menu"
                        className="object-contain md:hidden cursor-pointer z-30 relative"
                        onClick={handleToggleButton}
                    >
                        {toggle ? <img src={CancelClose} alt="menu" className='h-fit w-[30px]' /> : <MenuIcon className='h-fit w-[30px]' />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <nav
                aria-label="Mobile Navigation"
                className={`md:hidden fixed top-[89px] right-0 left-0 transition-all duration-500 ease-in-out transform ${
                    toggle ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
                } bg-[#080808] text-center w-full py-11 z-30`}
            >
                <ul className="space-y-9 w-[32%] max-w-[106px] mx-auto text-sm">
                    {navHeaders.map((link, index) => (
                        <li 
                          key={link.label}
                          className={`pb-3 w-full ${toggle ? 'animate-fadeInUp' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                      ? "mobile-nav-link-active"
                                      : "mobile-nav-link"
                                  }
                                to={link.link}
                                onClick={handleToggleButton}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className={`mt-[2.25rem] ${toggle ? 'animate-fadeInUp' : ''}`}
                        style={{ animationDelay: `${navHeaders.length * 0.1}s` }}
                        >
                    <button className="text-[#ffffff] py-1 px-4 text-sm md:hidden
                        transition-all duration-300 ease-in-out
                        hover:shadow-lg hover:scale-100
                        active:translate-y-[2px] active:shadow-none cursor-pointer
                        bg-gradient-to-b from-[#4168E2] via-[#4168E2] to-[#FFAB20] rounded-md"
                        onClick={handleToggleButton}
                    >
                        CONTACT US
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
