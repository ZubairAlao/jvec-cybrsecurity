import React from 'react'
import { ComplianceCertificates } from '@/constants'

const ComplianceCertifications = () => {
  return (
    <section className='pages-vertical-padding'>
        <div className='container space-y-10 md:space-y-12 lg:space-y-24 flex items-center flex-col'>
          <div className='lg:space-y-7 space-y-10 w-full md:max-w-[660px] mx-auto lg:max-w-[964px] text-center'>
              <h1 className='text-[1.5rem] md:text-[2.8rem] lg:text-[3.75rem] leading-[1.2] font-semibold'>Compliance Certifications And Standards We Specialize In
              </h1>
              <p>Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services.
              </p>
          </div>

          <div className='w-full bg-white rounded-lg shadow-md grid grid-cols-3 md:grid-cols-6 justify-center items-center gap-5 p-8'>
            {ComplianceCertificates.map((certifications, index) => (
                <div key={certifications.alt} className='flex justify-center items-center'>
                  <img src={certifications.image} alt={certifications.alt} loading="lazy"/>
              </div>
            ))}
          </div>
      </div>
    </section>
  )
}

export default ComplianceCertifications