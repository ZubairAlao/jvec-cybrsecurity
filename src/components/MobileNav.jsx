import React, { useState } from 'react';
import CancelClose from "@/assets/icons/close.svg";
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { navHeaders } from '@/constants';
import DropdownLinks from './DropdownLinks';

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
      } flex flex-col md:hidden bg-[#080808] absolute top-0 right-0 p-6 h-screen transition-all duration-500 ease-in-out transform w-[70%]`}
    >
      <div className='flex justify-between items-center mb-10'>
        <Logo />
        <button
          aria-label="Toggle navigation menu"
          className="object-contain md:hidden cursor-pointer z-30 relative"
          onClick={handleToggleButton}
        >
          <img src={CancelClose} alt="menu" className='h-fit w-[30px]' />
        </button>
      </div>
      <ul>
        {navHeaders.map((link, index) => (
          <li 
            key={link.label}
            className={`mb-2 text-base ${toggle ? 'animate-fadeInUp' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {link.subMenu ? (
              <DropdownLinks
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
          className="text-[#ffffff] py-1 px-4 text-sm md:hidden w-full
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
  );
};

export default MobileNav;
