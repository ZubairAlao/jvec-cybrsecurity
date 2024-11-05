import React from 'react'
import { ComplianceCertificates } from '@/constants'

const ComplianceCertifications = () => {
  return (
    <section className='lg:py-[164px] py-[69px]'>
        <div className='container space-y-24 flex items-center flex-col'>
            <div className='lg:space-y-7 space-y-3 max-w-[54rem] text-center'>
                <h1 className='lg:text-5xl text-[1.87rem] font-bold'>Compliance Certifications/Standards We Specialize In
                </h1>
                <p className="text-lg">Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services.</p>
            </div>

            <div className='w-full bg-white rounded-lg shadow-md grid grid-cols-3 lg:grid-cols-6 justify-center lg:gap-5 lg:p-8'>
              {ComplianceCertificates.map((certifications, index) => (
              <div key={certifications.alt} className=''>
                <img src={certifications.image} alt={certifications.alt} />
            </div>
          ))}
            </div>
        </div>

    </section>
  )
}

export default ComplianceCertifications