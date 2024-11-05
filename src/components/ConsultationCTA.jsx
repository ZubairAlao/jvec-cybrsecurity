import Button from "./ui/button/button"
import HeroBg from "@/assets/images/hero-bg.png"

const ConsultationCTA = () => {
  return (
    <section className='relative pages-vertical-padding overflow-hidden pt-[139px] pb-[179px]'>
        <div className='container flex lg:flex-row-reverse flex-col justify-center lg:gap-32 gap-8'>
            <div className='text-left space-y-7'>
                <h1 className='heading-font-sizes'>Take Action with JVEC Solutions’ Penetration Testing Services</h1>
                <p className='text-lg'>Defend your organization with cybersecurity solutions forged by 45 years of expertise. With JVEC Solutions, you’re not just identifying risks; you’re building a proactive, resilient defense against the evolving cyber threat landscape</p>
            </div>
            <div className='max-w-[856px] lg:-ml-60'>
                  <img src={HeroBg} alt="approach img" className='object-cover w-full h-full' />
            </div>
        </div>

        <section className='min-h-screen container'>
            <div className='flex justify-center items-center'>
                <div className='bg-[#111111] w-full flex justify-center items-center m-50'>
                    <div className='bg-[#282828] w-full flex flex-col justify-center items-center'>
                        <div className='text-center space-y-7 flex flex-col justify-center items-center'>
                            <h3 className='text-5xl'>Ready to Fortify Your Security? Schedule Your Free Consultation</h3>
                            <p>Let JVEC Solutions give you the peace of mind that comes with world-class cybersecurity.</p>
                            <Button text={"Get a Free COnsultation"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default ConsultationCTA