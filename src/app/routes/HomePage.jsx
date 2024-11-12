import React from 'react'
import HomeHero from '@/components/home/HomeHero'
import { Head } from '@/components/seo/Head'
import WhyTrustedICTConsultant from '@/components/home/WhyTrustedICTConsultant'
import JvecPioneering from '@/components/home/JvecPioneering'
import JvecOffering from '@/components/home/JvecOffering'
import ComplianceCertifications from '@/components/home/ComplianceCertifications'
import ClientTestimonies from '@/components/home/ClientTestimonies'
import CertifiedDunBradstreet from '@/components/home/CertifiedDunBradstreet'


const HomePage = () => {
  return (
    <>
      <Head title='Leading Cybersecurity & ICT Services' description='JVEC Solutions offers expert-led cybersecurity and ICT solutions. Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
      <HomeHero />
      <WhyTrustedICTConsultant/>
      <JvecPioneering />
      <JvecOffering />
      <ComplianceCertifications />
      <ClientTestimonies />
      <CertifiedDunBradstreet />
    </>
  )
} 

export default HomePage