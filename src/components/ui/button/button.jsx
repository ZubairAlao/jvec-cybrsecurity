import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      className={`bg-gradient-to-b from-[#4168E2] via-[#4168E2] to-[#FFAB20] rounded-md
        text-sm lg:px-8 lg:py-2 px-4 py-2
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-100
        active:translate-y-[2px] active:shadow-none`}
    >
      {children}
    </button>
  );
};

export default Button;
