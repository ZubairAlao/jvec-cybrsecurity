import React from 'react'
import Accordion from './ui/accordion/accordion'
import { BrandLogo, JvecApproachPenetrationAccordion } from '../constants'
import ApproachBg from "@/assets/images/approach-bg.jpg"

const JvecApproach = () => {
  return (
    <section className=''>
        <div className='overflow-hidden'>
            <h3 className='text-6xl container mb-6'>The JVEC Approach to Penetration Testing</h3>
            <div className='flex justify-start gap-8 container'>
              <div className='space-y-[74px]'>
                <p className='text-lg'>
                    As a trusted leader in penetration testing, JVEC Solutions combines decades of cybersecurity expertise with a client-centric, consultative approach to deliver unparalleled security assessments. Our commitment to proactive, customized penetration testing ensures your organization is safeguarded against evolving cyber threats while minimizing business disruption.
                </p>
                <Accordion accordionData={JvecApproachPenetrationAccordion} />
              </div>
              <div className='w-full max-w-[856px] h-auto -mr-20'>
                  <img src={ApproachBg} alt="approach img" className='object-cover w-full h-full' />
              </div>
            </div>

            <h3 className='text-6xl text-center mt-56 container'>They Trust Us, and so can You</h3>

            <div className='flex justify-center flex-wrap lg:flex-nowrap gap-8 lg:gap-32 bg-gradient-to-r from-[#1e1c1c] via-[#222222] to-[#080808] p-8 mt-36 '>
              {BrandLogo.map((brand, index) => (
                <img src={brand} alt="brand" key={index}  className='w-12 lg:w-full'/>
              ))}
            </div>
        </div>
    </section>
  )
}

export default JvecApproach