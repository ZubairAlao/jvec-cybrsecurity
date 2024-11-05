import React, { useState } from 'react';

const Accordion = ({ accordionData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[628px]">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`pl-8 space-y-2 ${index !== accordionData.length - 1 ? 'pb-3' : ''} cursor-pointer relative transition-all duration-300 ease-in-out 
            before:content-[""] before:w-1 before:h-full before:bg-gray-600 before:absolute before:left-0 
            ${activeIndex === index ? 'before:bg-[#839EF8]' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <p
            className={`text-lg lg:text-2xl text-[#626060] font-semibold transition-colors 
              ${activeIndex === index ? 'text-[#fff]' : ''}`}
          >
            {item.title}
          </p>
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-sm pt-2">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
