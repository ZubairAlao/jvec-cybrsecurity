import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/button/button';
import HeroBg from "@/assets/images/hero-bg.webp";
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
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
      className='mt-[81px] min-h-screen md:min-h-[428px] lg:min-h-screen relative overflow-hidden flex justify-center'
    >
      <div className='pt-40'>      
        <div className='space-y-[56px] md:space-y-9 text-center container relative z-20 max-w-[1100px]'>
          <div className='space-y-6'>
            <h1 className="font-bold text-3xl md:text-6xl lg:text-7xl mb-2">
              Software & Cybersecurity Solutions for Forward-thinking Businesses.
            </h1>

            <div className="text-base md:text-2xl lg:text-3xl" >
              <TypeAnimation
                sequence={subheadings}
                speed={75}
                repeat={Infinity}
                wrapper="h2"
                cursor= {false}
                style={{ height: '50px' }}
              />
            </div>
          </div>
          
          <div>
            <Button children="Get Started" />
          </div>
        </div>

        <div className='absolute top-0 left-0 z-10 h-full bg-opacity-85 bg-[#000000] w-full'>
        </div>

        <div className='absolute bottom-20 w-full z-30 py-16 bg-gradient-to-b from-[#000000] via-[#000000] to-transparent flex items-center px-8'>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 500,
              disableOnInteraction: false, // Continues autoplay after interactions
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }}
            modules={[Autoplay]}
          >
            {TestmonialBrandLogos.map((brand, index) => (
              <SwiperSlide key={index}>
                <img 
                  src={brand.image} 
                  alt={brand.alt} 
                  className="w-full h-[60px] md:h-[79px] lg:h-[79px] object-contain mx-auto" 
                  loading="lazy" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
