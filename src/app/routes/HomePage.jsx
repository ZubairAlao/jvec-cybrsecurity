import React from 'react'
import HomeHero from '@/components/home/HomeHero'
import { Head } from '@/components/seo/Head'


const HomePage = () => {
  return (
    <>
      <Head title='Leading Cybersecurity & ICT Services' description='JVEC Solutions offers expert-led cybersecurity and ICT solutions. Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
      <HomeHero />
    </>
  )
} 

export default HomePage