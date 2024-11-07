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
    <nav aria-label="Main Navigation" className="hidden md:flex justify-center items-center gap-4">
      <ul className="flex justify-center items-center space-x-[12px] lg:space-x-[20px] relative">
        {navHeaders.map((link, index) => (
          <li
            key={link.label}
            className="lg:text-base text-sm relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {link.subMenu ? (
              <>
                <NavLink to={link.link} 
                  // className={`desktop-nav-link cursor-pointer flex items-center lg:text-base text-sm`}
                  className={({ isActive }) =>
                    isActive ? "desktop-nav-link-active flex items-center lg:text-base text-sm" : "desktop-nav-link flex items-center lg:text-base text-sm"
                  }
                >
                  {link.label}
                  {activeDropdown === index ? (
                    <ChevronUp className="ml-1" />
                  ) : (
                    <ChevronDown className="ml-1" />
                  )}
                </NavLink>
                {activeDropdown === index && (
                  <div 
                    className="absolute top-full mt-2"
                    onMouseEnter={() => handleMouseEnter(index)} // Keep dropdown open when hovering inside
                    onMouseLeave={handleMouseLeave} // Delayed close on leaving
                  >
                    <div className="min-w-max max-h-[400px] inline-flex flex-col flex-wrap gap-2 bg-[#080808] rounded-lg border border-neutral-600 p-4">
                        {link.subMenu.map((submenu) => (
                        <Link
                            key={submenu.label}
                            to={submenu.link}
                            className="block max-w-[170px] py-1 lg:text-sm text-xs text-neutral-400 hover:text-[#FFA000]"
                        >
                            {submenu.label}
                        </Link>
                        ))}
                    </div>
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
