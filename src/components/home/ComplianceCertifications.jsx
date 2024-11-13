import React from 'react'
import { ComplianceCertificates, TestmonialBrandLogos } from '@/constants'

const ComplianceCertifications = () => {
  return (
    <section className='pages-vertical-padding'>
        <div className='container space-y-8 md:space-y-12 flex items-center flex-col'>
          <div className='space-y-8 w-full md:max-w-[660px] mx-auto lg:max-w-[964px] text-center'>
              <h1 className='text-[1.5rem] md:text-[2.8rem] lg:text-[3.75rem] leading-[1.2] font-semibold'>Compliance Certifications And Standards We Specialize In
              </h1>
              <p>Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services.
              </p>
          </div>

          <div className='w-full bg-white rounded-lg shadow-md grid grid-cols-3 md:grid-cols-6 justify-center items-center gap-4 p-8'>
            {ComplianceCertificates.map((certifications, index) => (
                <div key={certifications.alt} className='flex justify-center items-center'>
                  <img src={certifications.image} alt={certifications.alt} loading="lazy"/>
              </div>
            ))}
          </div>
      </div>

      <h3 className='heading-font-sizes text-center my-8 md:my-14font-semibold container'>They Trust Us, and so can You</h3>

      <div className='grid justify-center h-fit  grid-cols-2 md:grid-cols-4  lg:grid-cols-6 gap-8 bg-gradient-to-r from-[#1e1c1c] via-[#222222] to-[#080808] p-8'>
        {TestmonialBrandLogos.map((brand, index) => (
          <img key={index} src={brand.image} alt={brand.alt} className="w-full h-[60px] md:h-[79px] lg:h-[79px] flex justify-center items-center" loading="lazy" />
        ))}
      </div>
    </section>
  )
}

export default ComplianceCertifications