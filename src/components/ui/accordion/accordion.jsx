import React, { useState } from 'react';

const Accordion = ({accordionData}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full max-w-[628px]">
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`pl-8 space-y-1.5 cursor-pointer relative font-bold before:content-[""] before:w-1 before:h-full before:bg-gray-600 before:absolute before:left-0 before:block  ${activeIndex === index ? 'before:bg-[#839EF8]' : ''}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className={`text-2xl text-[#626060] py-4 ${activeIndex === index ? 'text-[#fff]' : ''}`}>{item.title}</div>
          {activeIndex === index && (
            <div>
              <p className='pt-1.5 leading-10'>{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
