import React from 'react'
import Accordion from '../ui/accordion/accordion'
import SmallJvecAdvantageImg from "@/assets/images/jvec-advantage.jpg"
import MediumJvecAdvantageImg from "@/assets/images/jvec-advantage.jpg"
import LargeJvecAdvantageImg from "@/assets/images/jvec-advantage.jpg"

const securityFeatures = [
    {
      title: "Expert-Driven Resilience",
      description: "Build a security strategy backed by JVEC’s decades of experience to withstand complex threats."
    },
    {
      title: "Operational Confidence",
      description: "Empower your organization to operate securely and confidently with a robust, transparent security framework."
    },
    {
      title: "Compliance Assurance",
      description: "Stay aligned with regulatory requirements effortlessly through JVEC’s compliance expertise."
    },
    {
      title: "Tailored, ROI-Focused Solutions",
      description: "See immediate value and long-term savings through cybersecurity strategies specifically designed to meet your business goals."
    }
  ];
  

const JvecAdvantages = () => {
  return (
    <section>
        <div className='overflow-hidden lg:container'>
            <h1 className='heading-font-sizes font-semibold container lg:p-0 mb-8 text-center md:text-left lg:max-w-[700px] ml-0'>Our Vulnerability Assessment Services</h1>

            <div className='md:flex justify-start gap-3 mb-[56px]'>
              <div className='space-y-8 lg:space-y-14 container lg:p-0'>
                <p className='text-center md:text-left'>
                    As a trusted leader in penetration testing, JVEC Solutions combines decades of cybersecurity expertise with a client-centric, consultative approach to deliver unparalleled security assessments. Our commitment to proactive, customized penetration testing ensures your organization is safeguarded against evolving cyber threats while minimizing business disruption.
                </p>
                <Accordion accordionData={securityFeatures} />
              </div>
              <div className='w-full mt-[40px] md:mt-0 max-w-[800px] h-[550px] '>
                <picture>
                    <source srcSet={SmallJvecAdvantageImg} media="(max-width: 767x)" />
                    <source srcSet={MediumJvecAdvantageImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={LargeJvecAdvantageImg} media="(min-width: 1024px)" />
                    <img src={SmallJvecAdvantageImg} alt="Testing Image" className='h-full w-full object-cover md:rounded-md' loading="lazy" />
                </picture>
              </div>
            </div>
        </div>
    </section>
  )
}

export default JvecAdvantages