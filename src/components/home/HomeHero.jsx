import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/button/button';
import { TypeAnimation } from 'react-type-animation';
import HomeHeroBg from "@/assets/images/home-hero-bg.webp";
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
      className='pt-[81px] min-h-screen relative overflow-hidden flex justify-center items-center'
    >
      <div
        className="absolute z-10 top-0 left-0 w-screen h-full"
        style={{
          backgroundImage: `url(${HomeHeroBg})`,
          backgroundPosition: '40% 55%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className='pt-40 lg:pt-24'>      
        <div className='space-y-9 text-center container relative z-20 max-w-[1100px]'>
          <div className='space-y-6'>
            <h1 className="font-bold text-[1.875rem] md:text-[3rem] lg:text-[3.2rem] mb-2 leading-[1.2]">
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

        <div className='absolute top-0 left-0 z-10 h-full bg-opacity-5 bg-[#333ba5] w-full'>
        </div>

        <div className='lg:bottom-4 w-full relative z-30 py-16 flex items-center px-8 curved-inward'>
        <Splide
        options={{
          resetProgress: false,
          rewind: true,
          width: "100%",
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
              className="w-fit h-[48px] md:h-[72px] lg:h-[79px] object-contain mx-auto" 
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
