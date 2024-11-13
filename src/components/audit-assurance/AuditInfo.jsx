import React from 'react'
import SmallAuditInforImg from "@/assets/images/audit-Info.jpg"
import MediumAuditInforImg from "@/assets/images/audit-Info.jpg"
import LargeAuditInforImg from "@/assets/images/audit-Info.jpg"
import WhyChooseJvecAudit from './WhyChooseJvecAudit'

const AuditInfo = () => {
  return (
    <section className='pages-vertical-padding overflow-hidden'>
        <div className='flex justify-center flex-col md:flex-row items-center gap-8 text-center md:text-left lg:container lg:items-start'>
            <div className='space-y-8 md:space-y-5 max-w-[560px] container md:pr-0 lg:pl-0'>
                <h1 className='heading-font-sizes font-semibold'>What is Technology Audit and Assurance?</h1>
                <div>
                    <p>
                    Technology Audit and Assurance is a specialized field that involves assessing the effectiveness and security of an organization's information technology systems and processes. It's designed to identify weaknesses, vulnerabilities, and compliance risks, and to provide recommendations for improvement.
                    </p>
                </div>
                <h1 className='font-semibold'>Strengthen Your Digital Resilience with JVEC’s Technology Audit and Assurance Services</h1>
                <p>
                    As a trusted leader in cybersecurity, JVEC Solutions is here to empower your organization with expert technology audit and assurance services. Our deep expertise and rigorous, compliance-driven approach are designed to secure, optimize, and align your technology with your business goals. With JVEC Solutions, you’re not just protecting assets—you’re elevating your operational efficiency, regulatory confidence, and stakeholder trust.
                </p>
            </div>

            <div className='w-full md:h-[500px] md:-mr-4 lg:rounded-lg rounded-tl-lg rounded-bl-lg'>
                <picture>
                    <source srcSet={SmallAuditInforImg} media="(max-width: 767px)" />
                    <source srcSet={MediumAuditInforImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={SmallAuditInforImg} media="(min-width: 1024px)" />
                    <img src={LargeAuditInforImg} alt="Testing Image" className='h-full w-full object-cover bg-right rounded-xl' loading="lazy"/>
                </picture>
            </div>

        </div>

        <WhyChooseJvecAudit />
    </section>
  )
}

export default AuditInfo