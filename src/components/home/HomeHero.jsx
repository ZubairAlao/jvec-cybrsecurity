import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/button/button';
import { TypeAnimation } from 'react-type-animation';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { TestmonialBrandLogos } from '@/constants';



const HomeHero = () => {
  const subheadings = [
    "Fortifying Businesses with Unmatched Cybersecurity Expertise.", 1000,
    "Industry-Leading Cybersecurity Solutions.", 1000,
    "Empowering Your Business with Cutting-Edge Software.", 1000,
    "Driving Digital Transformation, One Solution at a Time.", 1000,
  ];

  return (
    <section 
      className='mt-[81px] min-h-screen relative overflow-hidden flex justify-center'
    >
      <div className='pt-40 lg:pt-24'>      
        <div className='space-y-9 text-center container relative z-20 max-w-[1100px]'>
          <div className='space-y-6'>
            <h1 className="font-bold text-3xl md:text-5xl lg:text-5xl mb-2">
              Software & Cybersecurity Solutions for Forward-thinking Businesses.
            </h1>

            <div className="text-base md:text-2xl lg:text-3xl min-h-[60px] font-semibold" >
              <TypeAnimation
                sequence={subheadings}
                speed={75}
                repeat={Infinity}
                wrapper="h2"
                cursor= {false}
              />
            </div>
          </div>
          
          <div>
            <Button children="Get Started" />
          </div>
        </div>

        <div className='absolute top-0 left-0 z-10 h-full bg-opacity-85 bg-[#000000] w-full'>
        </div>

        <div className='absolute left-0 bottom-20 lg:-bottom-10 w-full z-30 py-16 flex items-center px-8 curved-inward'>
        <Splide
        options={{
          resetProgress: false,
          rewind: true,
          perMove: 1,
          rewindSpeed: 3000,
          arrows: false,
          pagination: false,
          drag: 'free',
          type: 'loop',
          autoplay: true,
          interval: 700,
          perPage: 4,
          gap: '1rem',
          breakpoints: {
            768: {
              perPage: 2,
              gap: '0.5rem',
            },
            1024: {
              perPage: 3,
              gap: '1.5rem',
            }
          }
        }}
        aria-label="Testimonials"
      >
        {TestmonialBrandLogos.map((brand, index) => (
          <SplideSlide key={index}>
            <img 
              src={brand.image} 
              alt={brand.alt} 
              className="w-fit h-[60px] md:h-[79px] lg:h-[79px] object-contain mx-auto" 
              loading="lazy"
            />
          </SplideSlide>
        ))}
      </Splide>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
