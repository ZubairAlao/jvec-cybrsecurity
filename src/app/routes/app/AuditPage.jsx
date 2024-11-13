import React from 'react'
import { Head } from '@/components/seo/Head'
import AuditHero from '@/components/audit-assurance/AuditHero'
import AuditInfo from '@/components/audit-assurance/AuditInfo'
import JvecAuditServices from '@/components/audit-assurance/JvecAuditServices'
import LegacyLeadership from '@/components/LegacyLeadership'
import ComplianceCertifications from '@/components/home/ComplianceCertifications'
import AuditCTA from '@/components/audit-assurance/AuditCTA'

const AuditPage = () => {
  return (
    <>
      <Head title='Technology Audit and Assurance' description='Protect your business with our penetration testing services, compliance consulting, and custom technology solutions designed to elevate security and business resilience.'/>
      <AuditHero />
      <AuditInfo />
      <JvecAuditServices />
      <LegacyLeadership />
      <ComplianceCertifications />
      <AuditCTA />
    </>
  )
} 

export default AuditPage