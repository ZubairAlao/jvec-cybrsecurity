import Button from "./ui/button/button"
import SmallPenetrationTestingImg from "@/assets/images/home/small-penetration-testing-img.jpg"
import MediumPenetrationTestingImg from "@/assets/images/home/medium-penetration-testing-img.jpg"
import LargePenetrationTestingImg from "@/assets/images/home/large-penetration-testing-img.jpg"

const ConsultationCTA = () => {
  return (
    <section className='relative pages-vertical-padding overflow-hidden space-y-14'>
        <div className='flex md:flex-row-reverse flex-col justify-center lg:gap-32 gap-8'>
            <div className='container space-y-7 text-center md:text-right'>
                <h1 className='heading-font-sizes font-semibold leading-9'>Take Action with JVEC Solutions’ Penetration Testing Services</h1>
                <p>Defend your organization with cybersecurity solutions forged by 45 years of expertise. With JVEC Solutions, you’re not just identifying risks; you’re building a proactive, resilient defense against the evolving cyber threat landscape</p>
            </div>
            <div className='w-full md:h-[494px]  md:-ml-32'>
                <picture>
                    <source srcSet={SmallPenetrationTestingImg} media="(max-width: 767x)" />
                    <source srcSet={MediumPenetrationTestingImg} media="(min-width: 768px) and (max-width: 1023px)" />
                    <source srcSet={LargePenetrationTestingImg} media="(min-width: 1024px)" />
                    <img src={SmallPenetrationTestingImg} alt="Testing Image" className='h-full w-full object-cover md:rounded-md' />
                </picture>
            </div>
        </div>

        <div className='container'>
            <div className='flex justify-center items-center mx-auto'>
                <div className='bg-[#111111] w-full flex justify-center items-center py-12 px-4'>
                    <div className='bg-[#282828] w-full flex flex-col justify-center items-center'>
                        <div className='text-center space-y-7 flex flex-col justify-center items-center px-4 py-8'>
                            <h3 className='text-2xl md:text-4xl lg:text-5xl font-semibold'>Ready to Fortify Your Security? Schedule Your Free Consultation</h3>
                            <p className="text-base lg:text-lg">Let JVEC Solutions give you the peace of mind that comes with world-class cybersecurity.</p>
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