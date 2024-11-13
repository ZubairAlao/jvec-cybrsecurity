import React from 'react'
import SmallConsultingInfoImg from "@/assets/images/consulting-info.jpg"
import MediumConsultingInfoImg from "@/assets/images/consulting-info.jpg"
import LargeConsultingInfoImg from "@/assets/images/consulting-info.jpg"
import WhyChooseConsulting from './WhyChooseConsulting'

const ConsultingInfo = () => {
  return (
    <section className='pages-vertical-padding overflow-hidden'>
        <div className='flex justify-center flex-col md:flex-row items-center gap-8 text-center md:text-left lg:container lg:items-start'>
            <div className='space-y-8 md:space-y-5 max-w-[560px] container md:pr-0 lg:pl-0'>
                <h1 className='heading-font-sizes font-semibold'>Protect Your Business with JVEC’s Cybersecurity Advisory Services</h1>
                <div>
                    <p>
                        In today’s ever-evolving threat landscape, organizations face constant challenges in protecting sensitive data, ensuring regulatory compliance, and building operational resilience. With over 45 years of industry leadership, JVEC Solutions stands as a trusted cybersecurity partner, committed to delivering tailored, strategic guidance that empowers organizations to stay ahead of threats
                    </p>
                </div>
            </div>

            <div className='w-full md:h-[500px] md:-mr-4 lg:rounded-lg rounded-tl-lg rounded-bl-lg'>
                <picture>
                    <source srcSet={SmallConsultingInfoImg} media="(max-width: 767px)" />
                    <source srcSet={MediumConsultingInfoImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={SmallConsultingInfoImg} media="(min-width: 1024px)" />
                    <img src={LargeConsultingInfoImg} alt="Testing Image" className='h-full w-full object-cover bg-right rounded-xl' loading="lazy"/>
                </picture>
            </div>

        </div>

        <WhyChooseConsulting />
    </section>
  )
}

export default ConsultingInfo