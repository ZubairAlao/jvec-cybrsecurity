import React, { useState, useEffect, useRef } from 'react';
import { MenuIcon } from 'lucide-react';
import Logo from './Logo';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);

    const handleToggleButton = () => {
        setToggle(!toggle);
    };

    // Manage scroll lock on toggle
    useEffect(() => {
        if (toggle) {
            disableBodyScroll(document.body);
        } else {
            enableBodyScroll(document.body);
        }
    }, [toggle]);

    // Handle screen resizing to reset scroll on desktop view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && toggle) {
                // If on desktop view, reset toggle and remove scroll lock
                setToggle(false);
                enableBodyScroll(document.body);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [toggle]);

    // close the menu if click outside the box
  const closeMenu = () => {
    setToggle(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add event listener to detect outside clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
        <header className='flex justify-center items-center'>
            <div className="fixed top-0 z-50 w-full bg-[#080808] shadow-lg border-b border-[#333333]">
                <div className="py-6 bg-[#080808] flex justify-between items-center container">
                    <Logo />

                    {/* Desktop Navigation */}
                    <DesktopNav />

                    {/* Mobile Navigation */}
                    <div ref={menuRef} className='lg:hidden'>
                        <MobileNav toggle={toggle} handleToggleButton={handleToggleButton} />
                    </div>

                    <button
                        aria-label="Toggle navigation menu"
                        onClick={handleToggleButton}
                        className='lg:hidden'
                    >
                        <MenuIcon className='h-fit w-[30px]' />
                    </button>

                    <button 
                        className="text-[#ffffff] lg:px-8 lg:py-3 px-6 py-2 text-sm hidden lg:block
                        transition-all duration-300 ease-in-out
                        active:translate-y-[2px] active:shadow-none cursor-pointer
                        btn-grad rounded-md"
                    >
                        CONTACT US
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
