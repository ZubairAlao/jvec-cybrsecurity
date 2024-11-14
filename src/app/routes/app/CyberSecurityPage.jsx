import React from 'react'
import { Head } from '@/components/seo/Head'
import CyberSecurityHero from '@/components/cyber-security/CyberSecurityHero'
import CyberSecurityInfo from '@/components/cyber-security/CyberSecurityInfo'
import LegacyLeadership from '@/components/LegacyLeadership'
import ComplianceCertifications from '@/components/home/ComplianceCertifications'
import CyberSecuirtyCTA from '@/components/cyber-security/CyberSecuirtyCTA'
import CyberSecurityAwareness from '@/components/cyber-security/CyberSecurityAwareness'


const CyberSecurityPage = () => {
  return (
    <>
      <Head title='Corporate Cyber-Security Awareness Training' description='Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
      <CyberSecurityHero />
      <CyberSecurityInfo />
      <CyberSecurityAwareness />
      <LegacyLeadership />
      <ComplianceCertifications />
      <CyberSecuirtyCTA />
    </>
  )
} 

export default CyberSecurityPage