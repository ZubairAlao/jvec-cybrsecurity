import React from 'react'
import { Head } from '@/components/seo/Head'
import ComplianceHero from '@/components/compliance/ComplianceHero'
import ComplianceInfo from '@/components/compliance/ComplianceInfo'
import LegacyLeadership from '@/components/LegacyLeadership'
import ComplianceExpertise from '@/components/compliance/ComplianceExpertise'
import ComplianceCertifications from '@/components/home/ComplianceCertifications'
import ConsultatingCTA from '@/components/consulting-advisory/ConsultingCTA'
import CyberSecurityCompliance from '@/components/compliance/CyberSecurityCompliance'


const CompliancePage = () => {
  return (
    <>
        <Head title='Compliance' description='Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
        <ComplianceHero />
        <ComplianceInfo />
        <CyberSecurityCompliance />
        <LegacyLeadership/>
        <ComplianceExpertise />
        <ComplianceCertifications />
        <ConsultatingCTA />
    </>
  )
} 

export default CompliancePage