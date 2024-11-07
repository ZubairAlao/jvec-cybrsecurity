import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { navHeaders } from '@/constants';
import { ChevronDown, ChevronUp } from "lucide-react";

const DesktopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  let closeTimeout = null; // To track the timeout for closing the dropdown


  const handleMouseEnter = (index) => {
    clearTimeout(closeTimeout); // Cancel any close action when hovering
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay
  };

  return (
    <nav aria-label="Main Navigation" className="hidden md:flex justify-center items-center gap-4 text-base">
      <ul className="flex justify-center items-center space-x-[12px] lg:space-x-[20px] text-sm relative">
        {navHeaders.map((link, index) => (
          <li
            key={link.label}
            className="text-base relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {link.subMenu ? (
              <>
                <span className="desktop-nav-link cursor-pointer flex items-center">
                  {link.label}
                  {activeDropdown === index ? (
                    <ChevronUp className="ml-1" />
                  ) : (
                    <ChevronDown className="ml-1" />
                  )}
                </span>
                {activeDropdown === index && (
                  <div 
                    className="absolute top-full mt-2 w-[400px] rounded-lg border border-neutral-600 bg-[#000] p-4 grid grid-cols-2 gap-2"
                    onMouseEnter={() => handleMouseEnter(index)} // Keep dropdown open when hovering inside
                    onMouseLeave={handleMouseLeave} // Delayed close on leaving
                  >
                    {link.subMenu.map((submenu) => (
                      <Link
                        key={submenu.label}
                        to={submenu.link}
                        className="block py-1 text-sm text-neutral-400 hover:text-neutral-50"
                      >
                        {submenu.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "desktop-nav-link-active" : "desktop-nav-link"
                }
                to={link.link}
              >
                {link.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNav;
