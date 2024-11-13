import React from 'react'
import { Head } from '@/components/seo/Head'
import IndustryHero from '@/components/industry/IndustryHero'
import IndustryInfo from '@/components/industry/IndustryInfo'
import LegacyLeadership from '@/components/LegacyLeadership'
import ComplianceCertifications from '@/components/home/ComplianceCertifications'
import IndustryCTA from '@/components/industry/IndustryCTA'
import IndustryOffer from '@/components/industry/IndustryOffer'
import IndustryJvecAdvantages from '@/components/consulting-advisory/IndustryJvecAdvantages'


const IndustryPage = () => {
  return (
    <>
        <Head title='Industry' description='Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
        <IndustryHero />
        <IndustryInfo />
        <IndustryOffer/>
        <IndustryJvecAdvantages />
        <LegacyLeadership/>
        <ComplianceCertifications/>
        <IndustryCTA />
    </>
  )
} 

export default IndustryPage