import React from 'react'
import SmallPenetrationTestingImg from "@/assets/images/home/small-penetration-testing-img.jpg"
import MediumPenetrationTestingImg from "@/assets/images/home/medium-penetration-testing-img.jpg"
import LargePenetrationTestingImg from "@/assets/images/home/large-penetration-testing-img.jpg"
import WhyChooseJvec from './WhyChooseJvec'

const PenetrationTestingInfo = () => {
  return (
    <section className='pages-vertical-padding overflow-hidden'>
        <div className='flex justify-center flex-col md:flex-row items-center gap-10 md:gap-8 text-center md:text-left lg:container lg:items-start'>
            <div className='space-y-6 max-w-[560px] container md:pr-0 lg:pl-0'>
                <h1 className='heading-font-sizes font-semibold'>What is Penetration Testing?</h1>
                <div className='space-y-6'>
                    <p>
                        Penetration testing, or ethical hacking, is a proactive security measure where authorized experts simulate real-world cyberattacks on an organization’s systems, mimicking the methods and behaviors of malicious attackers. These simulated attacks reveal vulnerabilities in your network, applications, and data protection, providing critical insights that help you fortify your defenses.
                    </p>
                    <p>
                        With JVEC Solutions’ Penetration Testing Services, you gain the advantage of over <span className='font-bold'>45 years</span> of cybersecurity expertise, industry-leading strategies, and a commitment to security excellence.
                    </p>
                </div>
            </div>

            <div className='w-full md:h-[500px] lg:rounded-lg rounded-tl-lg rounded-bl-lg'>
                <picture>
                    <source srcSet={SmallPenetrationTestingImg} media="(max-width: 767px)" />
                    <source srcSet={MediumPenetrationTestingImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={SmallPenetrationTestingImg} media="(min-width: 1024px)" />
                    <img src={LargePenetrationTestingImg} alt="Testing Image" className='h-full w-full object-cover bg-right rounded-xl' loading="lazy"/>
                </picture>
            </div>

        </div>

        <WhyChooseJvec />
    </section>
  )
}

export default PenetrationTestingInfo