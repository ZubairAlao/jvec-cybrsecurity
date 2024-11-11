import React from 'react'

export const offeringServices = [
    "Technology Audit and Assurance",
    "Compliance Consulting",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Corporate Cybersecurity Awareness Training",
    "Cybersecurity Advisory and Consulting",
    "Mobile Application Development",
    "Enterprise Application Software Development",
    "Custom Software Development",
    "Website Development",
    "E-Commerce Solutions",
    "Corporate Training"
  ];

const JvecOffering = () => {
  return (
    <section className='pages-vertical-padding overflow-hidden'>
        <div className="container space-y-12 text-center">
            <div className="space-y-12 max-w-[1024px] mx-auto">
                <h1 className='font-bold heading-font-sizes'>Our Offerings</h1>
                <p>
                    We turn business ideas into Realities for our clients thus helping them grow and stay profitable  throughout their business cycle providing excellence, Quality and exceptional Customer relationship;  simply put, we do More for less.
                </p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
                {offeringServices.map((sevice, index) => (
                    <div key={index} className='bg-[#726E6E] min-h-[90px] max-w-96 flex items-center justify-center text-center p-4'>
                        <p>{sevice}</p>
                    </div>
                ))}
            </div>

            <div className='relative'>

            </div>
        </div>
    </section>
  )
}

export default JvecOffering