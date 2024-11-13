import React from 'react'
import SmallCyberSecurityImg from "@/assets/images/cyber-security-info.jpg"
import MediumCyberSecurityImg from "@/assets/images/cyber-security-info.jpg"
import LargeCyberSecurityImg from "@/assets/images/cyber-security-info.jpg"
import CyberSecurityTraining from './CyberSecurityTraining'

const CyberSecurityInfo = () => {
  return (
    <section className='pages-vertical-padding overflow-hidden'>
        <div className='flex justify-center flex-col md:flex-row items-center gap-8 text-center md:text-left lg:container lg:items-start'>
            <div className='space-y-8 md:space-y-5 max-w-[560px] container md:pr-0 lg:pl-0'>
                <h1 className='heading-font-sizes font-semibold'>Protect Your Organization from Insider Threats and Cyber Attacks</h1>
                <div>
                    <p>
                    In today's digital landscape, cyber threats are constantly evolving. Cybersecurity isn’t just a technical issue - it’s a people issue. A strong cybersecurity culture is essential to safeguarding your organization's sensitive information. JVEC Solutions offers an elite Corporate Cybersecurity Awareness Training program designed to transform your workforce into a proactive, vigilant line of defense against cyberattacks.
                    </p>
                </div>
            </div>

            <div className='w-full md:h-[500px] md:-mr-4 lg:rounded-lg rounded-tl-lg rounded-bl-lg'>
                <picture>
                    <source srcSet={SmallCyberSecurityImg} media="(max-width: 767px)" />
                    <source srcSet={MediumCyberSecurityImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={SmallCyberSecurityImg} media="(min-width: 1024px)" />
                    <img src={LargeCyberSecurityImg} alt="Testing Image" className='h-full w-full object-cover bg-right rounded-xl' loading="lazy"/>
                </picture>
            </div>

        </div>

        <CyberSecurityTraining />
    </section>
  )
}

export default CyberSecurityInfo