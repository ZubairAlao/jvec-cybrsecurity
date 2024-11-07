import React, { useState, useEffect } from 'react';
import { MenuIcon } from 'lucide-react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';


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
                    <DesktopNav />

                    {/* Mobile Navigation */}
                    <MobileNav toggle={toggle} handleToggleButton={handleToggleButton} />

                    <button
                        aria-label="Toggle navigation menu"
                        onClick={handleToggleButton}
                        className='md:hidden'
                    >
                        <MenuIcon className='h-fit w-[30px]' />
                    </button>

                    <button 
                        className="text-[#ffffff] py-1 px-8 text-sm hidden md:block
                        transition-all duration-300 ease-in-out
                        hover:shadow-lg hover:scale-100
                        active:translate-y-[2px] active:shadow-none cursor-pointer
                        bg-gradient-to-b from-[#4168E2] via-[#4168E2] to-[#FFAB20] rounded-md"
                    >
                        CONTACT US
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
