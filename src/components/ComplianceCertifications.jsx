import React from 'react'
import { ComplianceCertificates } from '@/constants'

const ComplianceCertifications = () => {
  return (
    <section className='lg:py-[164px] py-[69px]'>
        <div className='container md:space-y-12 lg:space-y-24 flex items-center flex-col'>
            <div className='lg:space-y-7 space-y-3 md:max-w-[660px] mx-auto lg:max-w-[964px] text-center'>
                <h1 className='lg:text-5xl text-[1.87rem] font-bold'>Compliance Certifications/Standards We Specialize In
                </h1>
                <p className="text-lg">Compliance Certifications/Standards We Specialize In
                    Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services.
                </p>
            </div>

            <div className='w-full bg-white rounded-lg shadow-md grid grid-cols-3 md:grid-cols-6 justify-center items-center gap-5 p-8'>
              {ComplianceCertificates.map((certifications, index) => (
              <div key={certifications.alt} className=''>
                <img src={certifications.image} alt={certifications.alt} loading="lazy"/>
            </div>
          ))}
            </div>
        </div>

    </section>
  )
}

export default ComplianceCertifications