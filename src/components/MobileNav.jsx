import React, { useState } from 'react';
import CancelClose from "@/assets/icons/close.svg";
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { navHeaders } from '@/constants';
import MobileNavDropDown from './MobileNavDropDown';

const MobileNav = ({ toggle, handleToggleButton }) => {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

  const handleDropdownToggle = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const handleMainLinkClick = () => {
    setActiveDropdown(null); // Reset active dropdown on main link click
    handleToggleButton();    // Close the mobile nav if necessary
  };

  return (
    <nav
      aria-label="Mobile Navigation"
      className={`${
        toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-50"
      } flex flex-col lg:hidden bg-[#080808] absolute top-0 right-0 p-6 h-screen transition-all duration-500 ease-in-out transform w-[70%] z-30`}
    >
      <div className='flex justify-between items-center mb-10'>
        <Logo />
        <button
          aria-label="Toggle navigation menu"
          className="object-contain cursor-pointer z-30 relative"
          onClick={handleToggleButton}
        >
          <img src={CancelClose} alt="menu" className='h-fit w-[20px]' />
        </button>
      </div>
      <ul className='overflow-y-auto'>
        {navHeaders.map((link, index) => (
          <li 
            key={link.label}
            className={`mb-2 text-base ${toggle ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {link.subMenu ? (
              <MobileNavDropDown
                subMenuLinks={link.subMenu}
                link={link}
                isOpen={activeDropdown === link.label}
                onToggle={() => handleDropdownToggle(link.label)}
                handleToggleButton={handleToggleButton}
              />
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "mobile-nav-link-active" : "mobile-nav-link"
                }
                to={link.link}
                onClick={handleMainLinkClick} // Close dropdowns and nav
              >
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
      <div
        className={`${toggle ? 'animate-fadeInUp' : ''}`}
        style={{ animationDelay: `${navHeaders.length * 0.1}s` }}
      >
        <button
          className="text-[#ffffff] btn-grad lg:px-11 lg:py-4 px-6 py-2 text-sm w-full
            transition-all duration-300 ease-in-out
            active:translate-y-[2px] active:shadow-none cursor-pointer
            rounded-md"
          onClick={handleToggleButton}
        >
          CONTACT US
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
