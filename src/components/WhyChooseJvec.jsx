import React from 'react';
import { WhyChooseJvecListOne, WhyChooseJvecListTwo } from '../constants';

const WhyChooseJvec = () => {
  return (
    <div className='mt-[56px] md:mt[72px] lg:mt-[150px]'>
      <div className='container'>
        <h1 className='heading-font-sizes font-semibold text-center md:max-w-[660px] mx-auto lg:max-w-[964px]'>
          Why Choose JVEC Solutions for Penetration Testing?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-6 mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {WhyChooseJvecListOne.map((reason, index) => (
            <div className='text-lg' key={reason.title}>
              {index === 0 ? (
                <div className='flex flex-1 justify-center text-2xl md:text-3xl lg:text-5xl text-center md:text-left'>
                  <h3><span className='mr-1'>1.</span>{reason.text}</h3>
                </div>
              ) : (
                <div className='bg-gradient-to-b flex-1 from-[#514D4D] to-[#080808] p-4 space-y-4 lg:space-y-7'>
                  <h2 className='text-sm font-semibold'>{reason.title}</h2>
                  <p className='text-sm leading-relaxed'>{reason.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-6 md:mt-[60px] mt-[40px]">
          {WhyChooseJvecListTwo.map((reason, index) => (
            <div 
              className={`text-lg ${index === 1 ? 'order-0 md:order-1' : 'order-1 md:order-0'}`} 
              key={reason.title}
            >
              {index === 1 ? (
                <div className='flex flex-1 text-2xl md:text-3xl lg:text-5xl text-center md:text-left'>
                  <p>2. {reason.text}</p>
                </div>
              ) : (
                <div className='bg-gradient-to-b flex-1 from-[#514D4D] to-[#080808] p-4 space-y-4 lg:space-y-7'>
                  <h2 className='text-sm font-semibold'>{reason.title}</h2>
                  <p className='text-sm leading-relaxed'>{reason.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default WhyChooseJvec;
