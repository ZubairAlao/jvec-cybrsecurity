import React from 'react'
import Accordion from './ui/accordion/accordion'
import { BrandLogo, JvecApproachPenetrationAccordion } from '../constants'
import ApproachBg from "@/assets/images/approach-bg.jpg"
import SmallPenetrationTestingImg from "@/assets/images/home/small-penetration-testing-img.jpg"
import MediumPenetrationTestingImg from "@/assets/images/home/medium-penetration-testing-img.jpg"
import LargePenetrationTestingImg from "@/assets/images/home/large-penetration-testing-img.jpg"

const JvecApproach = () => {
  return (
    <section className=''>
        <div className='overflow-hidden'>
            <h1 className='heading-font-sizes font-semibold container mb-4 text-center'>The JVEC Approach to Penetration Testing</h1>

            <div className='flex justify-start gap-8 container mb-[56px]'>
              <div className='space-y-[56px] lg:space-y-[74px]'>
                <p className='text-lg'>
                    As a trusted leader in penetration testing, JVEC Solutions combines decades of cybersecurity expertise with a client-centric, consultative approach to deliver unparalleled security assessments. Our commitment to proactive, customized penetration testing ensures your organization is safeguarded against evolving cyber threats while minimizing business disruption.
                </p>
                <Accordion accordionData={JvecApproachPenetrationAccordion} />
              </div>
              <div className='w-full max-w-[856px] h-auto -mr-20'>
                  <img src={ApproachBg} alt="approach img" className='object-cover w-full h-full' />
              </div>
            </div>

            <div className='w-full md:-mr-32'>
                <picture>
                    <source srcSet={SmallPenetrationTestingImg} media="(max-width: 767x)" />
                    <source srcSet={MediumPenetrationTestingImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={LargePenetrationTestingImg} media="(min-width: 1024px)" />
                    <img src={SmallPenetrationTestingImg} alt="Testing Image" className='h-full w-full object-cover md:rounded-md' />
                </picture>
            </div>

            <h3 className='heading-font-sizes text-center mt-[72px] container'>They Trust Us, and so can You</h3>

            <div className='flex justify-center flex-wrap lg:flex-nowrap gap-8 lg:gap-32 bg-gradient-to-r from-[#1e1c1c] via-[#222222] to-[#080808] p-8 mt-[32px] '>
              {BrandLogo.map((brand, index) => (
                <img src={brand} alt="brand" key={index}  className='w-12 lg:w-full'/>
              ))}
            </div>
        </div>
    </section>
  )
}

export default JvecApproach