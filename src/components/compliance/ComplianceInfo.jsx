import React from 'react'
import SmallComplianceInfoImg from "@/assets/images/compliance-info.jpg"
import MediumComplianceInfoImg from "@/assets/images/compliance-info.jpg"
import LargeComplianceInfoImg from "@/assets/images/compliance-info.jpg"
import WhyChooseJvecCompliance from './WhyChooseJvecCompliance'


const ComplianceInfo = () => {
  return (
    <section className='pages-vertical-padding overflow-hidden'>
        <div className='flex justify-center flex-col md:flex-row items-center gap-8 text-center md:text-left lg:container lg:items-start'>
            <div className='space-y-8 md:space-y-5 max-w-[560px] container md:pr-0 lg:pl-0'>
                <h1 className='heading-font-sizes font-semibold'>What is Cybersecurity Compliance?
                </h1>
                <div className='space-y-6'>
                    <p>
                    Cybersecurity compliance refers to the process of adhering to specific security standards and regulations to protect sensitive information and systems. It involves implementing security measures, policies, and procedures to mitigate risks and ensure the confidentiality, integrity, and availability of data.
                    </p>
                    <p>Cybersecurity compliance is no longer a luxury; it's a necessity. With ever-evolving threats and stringent regulations, it's crucial to safeguard your organization's sensitive data and reputation.</p>
                </div>
            </div>

            <div className='w-full md:h-[500px] md:-mr-4 lg:rounded-lg rounded-tl-lg rounded-bl-lg'>
                <picture>
                    <source srcSet={SmallComplianceInfoImg} media="(max-width: 767px)" />
                    <source srcSet={MediumComplianceInfoImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={SmallComplianceInfoImg} media="(min-width: 1024px)" />
                    <img src={LargeComplianceInfoImg} alt="Testing Image" className='h-full w-full object-cover bg-right rounded-3xl' loading="lazy"/>
                </picture>
            </div>

        </div>

        <WhyChooseJvecCompliance />
    </section>
  )
}

export default ComplianceInfo