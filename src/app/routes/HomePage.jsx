import React from 'react'
import HomeHero from '@/components/home/HomeHero'
import { Head } from '@/components/seo/Head'
import WhyTrustedICTConsultant from '@/components/home/WhyTrustedICTConsultant'
import JvecPioneering from '@/components/home/JvecPioneering'
import JvecOffering from '@/components/home/JvecOffering'


const HomePage = () => {
  return (
    <>
      <Head title='Leading Cybersecurity & ICT Services' description='JVEC Solutions offers expert-led cybersecurity and ICT solutions. Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
      <HomeHero />
      <WhyTrustedICTConsultant/>
      <JvecPioneering />
      <JvecOffering />
    </>
  )
} 

export default HomePage