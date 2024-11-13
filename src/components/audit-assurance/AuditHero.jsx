import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/button/button';
import HeroBg from "@/assets/images/second-hero-bg.jpg";
import { motion } from 'framer-motion';

const AuditHero = () => {
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    // Start observing the element
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

  
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className='mt-[81px] min-h-[428px] lg:min-h-screen relative overflow-hidden flex items-center justify-center'
    >
      <div className=''>
        <div
          className="absolute z-10 top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: isInView ? `url(${HeroBg})` : 'none',
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      
        <div className='space-y-[56px] md:space-y-9 text-center container relative z-20 max-w-[1100px]'>
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
              className="font-bold text-3xl md:text-6xl lg:text-7xl mb-2"
            >
              Proactive Cybersecurity, Proven Results.
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base md:text-2xl lg:text-3xl"
            >
              Empower Your Organization with Advanced Technology Audit and Assurance.
            </motion.h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button children="Get A Free Consultation" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuditHero;
