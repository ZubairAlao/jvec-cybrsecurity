import Button from "./ui/button/button"
import SmallPenetrationTestingImg from "@/assets/images/home/small-penetration-testing-img.jpg"
import MediumPenetrationTestingImg from "@/assets/images/home/medium-penetration-testing-img.jpg"
import LargePenetrationTestingImg from "@/assets/images/home/large-penetration-testing-img.jpg"

const ConsultationCTA = () => {
  return (
    <section className='relative pages-vertical-padding overflow-hidden space-y-10 md:space-y-[60px]'>
        <div className='flex md:flex-row-reverse flex-col justify-center lg:gap-12 gap-10 lg:container'>
            <div className='container space-y-10 text-center md:text-right'>
                <h1 className='heading-font-sizes font-semibold'><span className="md:leading-[1.2]">Take Action with JVEC Solutions’ Penetration Testing Services</span></h1>
                <p>Defend your organization with cybersecurity solutions forged by 45 years of expertise. With JVEC Solutions, you’re not just identifying risks; you’re building a proactive, resilient defense against the evolving cyber threat landscape</p>
            </div>
            <div className='w-full md:h-[494px]  md:-ml-32 lg:-ml-0'>
                <picture>
                    <source srcSet={SmallPenetrationTestingImg} media="(max-width: 767px)" />
                    <source srcSet={MediumPenetrationTestingImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={LargePenetrationTestingImg} media="(min-width: 1024px)" />
                    <img src={SmallPenetrationTestingImg} alt="Testing Image" className='h-full w-full object-cover md:rounded-md' loading="lazy" />
                </picture>
            </div>
        </div>

        <div className='md:container md:pt-32'>
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

export default ConsultationCTA