import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      className={`rounded-md btn-grad
        text-base md:text-base lg:text-lg lg:px-11 lg:py-4 px-6 py-2
        transition-all duration-300 ease-in-out
        active:translate-y-[2px] active:shadow-none semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
