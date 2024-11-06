import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";


export function DropdownLinks({ subMenuLinks, link, isOpen, onToggle, handleToggleButton }) {
  return (
    <div>
      <div
        className="flex items-center gap-2 px-4 py-2 text-base cursor-pointer"
        onClick={onToggle}
      >
        <p className="text-base">{link.label}</p>
        {isOpen ? (
          <ChevronDown className="ml-auto h-4 w-4" />
        ) : (
          <ChevronRight className="ml-auto h-4 w-4" />
        )}
      </div>

      {/* Dropdown content */}
      {isOpen && (
        <div className={cn("min-w-[8rem] rounded-md")}>
          {subMenuLinks.map((subLink) => (
            <div key={subLink.label} className="px-5 py-1 text-sm">
              <Link to={subLink.link} onClick={() => {
                onToggle();
                handleToggleButton();
              }}>{subLink.label}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownLinks;
