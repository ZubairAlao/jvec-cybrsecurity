import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      className={`rounded-md btn-grad
        text-sm lg:px-11 lg:py-4 px-6 py-2
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-100
        active:translate-y-[2px] active:shadow-none`}
    >
      {children}
    </button>
  );
};

export default Button;
