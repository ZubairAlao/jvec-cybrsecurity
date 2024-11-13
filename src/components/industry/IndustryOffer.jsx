import React from 'react'
import IndustryOfferImg from "@/assets/images/industry-offer.jpg"


const ourBusinessOffer = [
    "Financial Services",
    "Technology",
    "Healthcare",
    "Higher Education",
    "E-commerce",
    "Energy and Utilities",
    "Government",
    "Restaurant and Retail",
    "Media and Entertainment",
    "Manufacturing and Logistics",
   "Cloud Service Providers",
    "Professional Services",
  ];

const IndustryOffer = () => {
  return (
    <section className='bg-[#0c0c0c] pages-vertical-padding'>
        <div className='container'>
            <div className='space-y-8 text-center md:max-w-[660px] mx-auto lg:max-w-[964px]'>
                <h1 className='heading-font-sizes font-semibold text-center'>What we Offer</h1>
                <p>Our specialized client teams leverage the knowledge of cybersecurity professionals to deliver customized solutions that support digital transformation across all facets of your operations. Whether enhancing data protection, advancing AI-driven security measures, or ensuring regulatory compliance, JVEC Solutions delivers industry-specific expertise and unparalleled value, ensuring you are not only prepared for today’s challenges but well-positioned for the future.</p>

                <div>
                    <img src={IndustryOfferImg} alt="Looking at personal computer" className='rounded-2xl w-full' loading='lazy'/>
                </div>
            </div>

            <div className='mt-[40px] md:mt-[60px] lg:mt-[80px] space-y-8'>
                <h1 className='heading-font-sizes font-semibold text-center md:max-w-[660px] mx-auto lg:max-w-[964px]'>Industry We Cater For</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center auto-rows-max gap-8 ">
                    {ourBusinessOffer.map((reason, index) => (
                        <div className='bg-gradient-to-b flex-1 from-[#514D4D] to-[#080808] p-8 space-y-4' key={index} >
                        <p className='text-sm text-center md:text-base leading-relaxed font-semibold'>{reason}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default IndustryOffer