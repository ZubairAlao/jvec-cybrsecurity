import HeroBgOptimized from "@/assets/images/hero-bg.webp"
import HeroBg from "@/assets/images/hero-bg.jpg"

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
        <div className="container space-y-12 md:space-y-16 text-center">
            <div className="space-y-12 max-w-[1024px] mx-auto">
                <h1 className='font-bold heading-font-sizes'>Our Offerings</h1>
                <p>
                    We turn business ideas into Realities for our clients thus helping them grow and stay profitable  throughout their business cycle providing excellence, Quality and exceptional Customer relationship;  simply put, we do More for less.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {offeringServices.map((sevice, index) => (
                    <div key={index} className='bg-[#726E6E] min-h-[90px] max-w-96 flex items-center justify-center text-center p-4'>
                        <p>{sevice}</p>
                    </div>
                ))}
            </div>

            <div className='relative'>
                <div
                    className="absolute z-10 top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${HeroBgOptimized})`,
                        backgroundPosition: 'top center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
                <div className="relative z-20 bg-black bg-opacity-90 w-full min-h-[400px] lg:min-h-[550px] flex items-center flex-col justify-center">
                        <div className="max-w-[860px] space-y-6 p-4">
                            <h1 className='font-bold heading-font-sizes leading-6'>A Legacy of Security Leadership</h1>
                            <p>Our Cyber Executive team brings over 45 years of combined experience across key industries, including Financial Services, Information Technology, and Healthcare, with a global footprint spanning Africa, North America, Europe, and the Middle East.</p>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default JvecOffering