import React from 'react'
import Accordion from './ui/accordion/accordion'
import { TestmonialBrandLogos, JvecApproachPenetrationAccordion } from '../constants'
import SmallPenetrationTestingImg from "@/assets/images/home/small-penetration-testing-img.jpg"
import MediumPenetrationTestingImg from "@/assets/images/home/medium-penetration-testing-img.jpg"
import LargePenetrationTestingImg from "@/assets/images/home/large-penetration-testing-img.jpg"

const JvecApproach = () => {
  return (
    <section className='md:pt-12'>
        <div className='overflow-hidden'>
            <h1 className='heading-font-sizes font-semibold container mb-[40px] md:mb-12 text-center md:text-left'>The JVEC Approach to Penetration Testing</h1>

            <div className='md:flex justify-start gap-8 mb-[56px]'>
              <div className='space-y-[24px] lg:space-y-[74px] container'>
                <p className='text-center md:text-left'>
                    As a trusted leader in penetration testing, JVEC Solutions combines decades of cybersecurity expertise with a client-centric, consultative approach to deliver unparalleled security assessments. Our commitment to proactive, customized penetration testing ensures your organization is safeguarded against evolving cyber threats while minimizing business disruption.
                </p>
                <Accordion accordionData={JvecApproachPenetrationAccordion} />
              </div>
              <div className='w-full mt-[40px] md:mt-0 max-w-[856px] '>
                <picture>
                    <source srcSet={SmallPenetrationTestingImg} media="(max-width: 767x)" />
                    <source srcSet={MediumPenetrationTestingImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={LargePenetrationTestingImg} media="(min-width: 1024px)" />
                    <img src={SmallPenetrationTestingImg} alt="Testing Image" className='h-full w-full object-cover md:rounded-md' loading="lazy" />
                </picture>
              </div>
            </div>

            <h3 className='heading-font-sizes text-center my-[40px] font-semibold container'>They Trust Us, and so can You</h3>

            <div className='grid justify-center h-fit grid-cols-2 md:grid-cols-4 gap-8 lg:gap-32 bg-gradient-to-r from-[#1e1c1c] via-[#222222] to-[#080808] p-8'>
              {TestmonialBrandLogos.map((brand, index) => (
                <img key={index} src={brand.image} alt={brand.alt} className="w-full h-[46px] md:h-[61px] lg:h-[80px]" loading="lazy" />
              ))}
            </div>
        </div>
    </section>
  )
}

export default JvecApproach