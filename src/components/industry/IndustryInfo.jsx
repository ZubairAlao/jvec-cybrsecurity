import React from 'react'
import SmallAssessmentImg from "@/assets/images/assessment-info.jpg"
import MediumAssessmentImg from "@/assets/images/assessment-info.jpg"
import LargeAssessmentImg from "@/assets/images/assessment-info.jpg"

const IndustryInfo = () => {
  return (
    <section className='pages-vertical-padding overflow-hidden'>
        <div className='flex justify-center flex-col md:flex-row items-center gap-8 text-center md:text-left lg:container lg:items-start'>
            <div className='space-y-6 md:space-y-5 max-w-[560px] container md:pr-0 lg:pl-0'>
                <h1 className='heading-font-sizes font-semibold'>Helping You Overcome Business Challenges with Industry-Driven Insights</h1>
                <div className='space-y-4'>
                    <p>
                        At JVEC Solutions, we believe that effectively addressing your business challenges begins with understanding the intricacies of your industry. With over 45 years of proven expertise in cybersecurity, our team is structured to bring sector-specific insights that help you anticipate and tackle critical issues unique to your industry.
                    </p>
                    
                    <p>
                    We empower businesses to transform, adapt, and thrive in an evolving digital landscape. Our services span comprehensive cybersecurity advisory, risk management, and compliance solutions, enabling you to operate securely, adapt to market demands, and safeguard critical assets.
                    </p>

                </div>
            </div>

            <div className='w-full md:h-[500px] md:-mr-4 lg:rounded-lg rounded-tl-lg rounded-bl-lg'>
                <picture>
                    <source srcSet={SmallAssessmentImg} media="(max-width: 767px)" />
                    <source srcSet={MediumAssessmentImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={SmallAssessmentImg} media="(min-width: 1024px)" />
                    <img src={LargeAssessmentImg} alt="Testing Image" className='h-full w-full object-cover bg-right rounded-xl' loading="lazy"/>
                </picture>
            </div>

        </div>
    </section>
  )
}

export default IndustryInfo