import React from 'react'
import Button from './ui/button/button';
import HeroBg from "@/assets/images/hero-bg.png"
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='mt-[81px] min-h-[428px] lg:min-h-screen relative overflow-hidden flex items-center justify-center'>
      <div className='max-w-[1117px]'>
        <div 
          className="absolute z-10 top-0 left-0
            w-full h-full
            bg-cover bg-center"
          style={{ backgroundImage: `url(${HeroBg})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' }}
        ></div>
      
        <div 
          className='space-y-[56px] md:space-y-9 text-center container relative z-20 w-full'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='space-y-6'
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="font-bold text-[2rem] leading-normal lg:text-7xl mb-2"
            >
              Protect Your Business with Expert-Led Penetration Testing.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base md:text-2xl lg:text-3xl"
            >
              Elevating your Business through cutting-edge ICT solutions
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button children="Get A Free Consultation" />
          </motion.div>
        </div>

        <div className='absolute top-0 left-0 z-10 h-full bg-opacity-90 bg-[#000000] w-full'>
        </div>
      </div>
    </section>
  )
}

export default Hero