import React from 'react'
import Hero from '@/components/Hero'
import { Head } from '@/components/seo/Head'
import PenetrationTestingServices from '@/components/PenetrationTestingServices'
import ComplianceCertifications from '@/components/ComplianceCertifications'
import ConsultationCTA from '@/components/ConsultationCTA'
import ContactUs from '@/components/ContactUs'
import PenetrationTestingInfo from '@/components/PenetrationTestingInfo'
import JvecApproach from '@/components/JvecApproach'

const HomePage = () => {
  return (
    <>
      <Head title='Leading Cybersecurity & ICT Services' description='JVEC Solutions offers expert-led cybersecurity and ICT solutions. Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
      <Hero />
      <PenetrationTestingInfo />
      <PenetrationTestingServices />
      <ComplianceCertifications />
      <JvecApproach />
      <ConsultationCTA />
      <ContactUs />
    </>
  )
} 

export default HomePage