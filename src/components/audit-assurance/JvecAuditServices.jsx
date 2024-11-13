import React from 'react'
import Accordion from '../ui/accordion/accordion'
import { TestmonialBrandLogos, JvecApproachPenetrationAccordion } from '../../constants'
import SmallAuditImg from "@/assets/images/audit-services.jpg"
import MediumAuditImg from "@/assets/images/audit-services.jpg"
import LargeAuditImg from "@/assets/images/audit-services.jpg"

const AuditSteps = [
    {
      title: "IT General Controls (ITGC) Assessment:",
      description: "Evaluate the effectiveness of your organization's foundational IT controls."
    },
    {
      title: "Application Controls Review:",
      description: "Assess the security and accuracy of your business applications."
    },
    {
      title: "Security Controls Assessment:",
      description: "TIdentify and mitigate security vulnerabilities in your systems and networks."
    },
    {
      title: "Compliance Audits:",
      description: "Ensure adherence to industry regulations and standards."
    },
    {
      title: "Penetration Testing:",
      description: "Simulate real-world attacks to uncover vulnerabilities."
    },
    {
      title: "Vulnerability Scanning:",
      description: "Identify and prioritize potential security weaknesses."
    },
    {
      title: "Risk Assessments:",
      description: "Evaluate the potential impact of security threats and incidents."
    },
    {
      title: "Incident Response Planning:",
      description: "Develop and test incident response plans."
    }
  ];
  

const JvecAuditServices = () => {
  return (
    <section>
        <div className='overflow-hidden lg:container'>
            <h1 className='heading-font-sizes font-semibold container lg:p-0 mb-8 text-center md:text-left lg:max-w-[700px] ml-0'>Our Technology Audit and Assurance Services:</h1>

            <div className='md:flex justify-start gap-3 mb-[56px]'>
              <div className='space-y-8 lg:space-y-14 container lg:p-0'>
                <p className='text-center md:text-left'>
                    As a trusted leader in penetration testing, JVEC Solutions combines decades of cybersecurity expertise with a client-centric, consultative approach to deliver unparalleled security assessments. Our commitment to proactive, customized penetration testing ensures your organization is safeguarded against evolving cyber threats while minimizing business disruption.
                </p>
                <Accordion accordionData={AuditSteps} />
              </div>
              <div className='w-full mt-[40px] md:mt-0 max-w-[800px] h-[550px] '>
                <picture>
                    <source srcSet={SmallAuditImg} media="(max-width: 767x)" />
                    <source srcSet={MediumAuditImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={LargeAuditImg} media="(min-width: 1024px)" />
                    <img src={SmallAuditImg} alt="Testing Image" className='h-full w-full object-cover md:rounded-md' loading="lazy" />
                </picture>
              </div>
            </div>
        </div>
    </section>
  )
}

export default JvecAuditServices