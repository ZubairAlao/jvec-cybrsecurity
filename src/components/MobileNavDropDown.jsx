import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";


export function MobileNavDropDown({ subMenuLinks, link, isOpen, onToggle, handleToggleButton }) {
  return (
    <div>
      <div
        className="flex items-center gap-2 px-4 py-2 text-sm cursor-pointer"
      >
        <Link to={link.link} className="text-base hover:text-[#FFA000] h-fit" onClick={handleToggleButton}>{link.label}</Link>
        <div className="flex-1" onClick={onToggle}>
          {isOpen ? (
            <ChevronDown className="ml-auto h-4 w-4" />
          ) : (
            <ChevronRight className="ml-auto h-4 w-4" />
          )}
        </div>
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div className={cn("min-w-[8rem] rounded-md")}>
          {subMenuLinks.map((subLink) => (
            <div key={subLink.label} className="px-5 py-1 text-xs">
              <Link to={subLink.link} onClick={() => {
                onToggle();
                handleToggleButton();
              }}
              className="hover:text-[#FFA000]"
              >{subLink.label}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileNavDropDown;
