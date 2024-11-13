import Button from "../ui/button/button"
import SmallCTAImg from "@/assets/images/cta-img.jpg"
import MediumCTAImg from "@/assets/images/cta-img.jpg"
import LargeCTAImg from "@/assets/images/cta-img.jpg"

const ConsultatingCTA = () => {
  return (
    <section className='relative pages-vertical-padding overflow-hidden c'>
        <div className='flex md:flex-row-reverse flex-col justify-center lg:gap-12 gap-8 lg:container'>
            <div className='container space-y-8 text-center md:text-right'>
                <h1 className='heading-font-sizes font-semibold'><span className="md:leading-[1.2]">Strengthen Your Organization with JVEC’s Advisory and Consulting Services</span></h1>
                <p>Backed by over 45 years of expertise, JVEC Solutions offers advisory and consulting services that do more than protect—they build a proactive, resilient defense tailored to your compliance requirements. Stay ahead of evolving cyber threats with solutions that fortify your organization’s security posture and secure its future</p>
            </div>
            <div className='w-full md:h-[494px]  md:-ml-32 lg:-ml-0'>
                <picture>
                    <source srcSet={SmallCTAImg} media="(max-width: 767px)" />
                    <source srcSet={MediumCTAImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={LargeCTAImg} media="(min-width: 1024px)" />
                    <img src={SmallCTAImg} alt="Testing Image" className='h-full w-full object-cover md:rounded-md' loading="lazy" />
                </picture>
            </div>
        </div>

        <div className='md:container md:pt-20'>
            <div className='flex justify-center items-center mx-auto'>
                <div className='bg-[#111111] w-full flex justify-center items-center py-12 px-6 md:p-12'>
                    <div className='bg-[#282828] w-full flex flex-col justify-center items-center'>
                        <div className='text-center space-y-4 md:space-y-12 flex flex-col justify-center items-center p-6 lg:p-12'>
                            <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold md:leading-[1.3]'>Ready to Fortify Your Security? Schedule Your Free Consultation</h2>
                            <p>Let JVEC Solutions give you the peace of mind that comes with world-class cybersecurity.</p>
                            <Button children={"Get a Free Consultation"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ConsultatingCTA