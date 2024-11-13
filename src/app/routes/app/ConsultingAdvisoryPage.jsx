import React from 'react'
import ConsultingHero from '@/components/consulting-advisory/ConsultingHero'
import { Head } from '@/components/seo/Head'
import ConsultingInfo from '@/components/consulting-advisory/ConsultingInfo'
import JvecAdvantages from '@/components/consulting-advisory/IndustryJvecAdvantages'
import LegacyLeadership from '@/components/LegacyLeadership'
import ComplianceCertifications from '@/components/home/ComplianceCertifications'
import ConsultatingCTA from '@/components/consulting-advisory/ConsultingCTA'

const ConsultingAdvisoryPage = () => {
  return (
    <>
      <Head title='Consulting and Advisory' description='Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
      <ConsultingHero />
      <ConsultingInfo />
      <JvecAdvantages />
      <LegacyLeadership />
      <ComplianceCertifications />
      <ConsultatingCTA />
    </>
  )
} 

export default ConsultingAdvisoryPage