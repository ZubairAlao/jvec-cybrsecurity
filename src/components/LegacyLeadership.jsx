import React from 'react'
import OfferingImg from "@/assets/images/our-offering-img.jpg"

const LegacyLeadership = () => {
  return (
    <section className='pages-vertical-padding'>
        <div className='relative container'>
                <div
                    className="absolute z-10 top-0 left-0 w-full h-full bg-cover bg-center rounded-md"
                    style={{
                        backgroundImage: `url(${OfferingImg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
                <div className="relative z-20 w-full min-h-[400px] lg:min-h-[550px] flex items-center flex-col justify-center text-center">
                        <div className="max-w-[860px] space-y-6 p-4">
                            <h1 className='font-bold heading-font-sizes leading-6'>A Legacy of Security Leadership</h1>
                            <p>Our Cyber Executive team brings over 45 years of combined experience across key industries, including Financial Services, Information Technology, and Healthcare, with a global footprint spanning Africa, North America, Europe, and the Middle East.</p>
                        </div>
                </div>
            </div>
    </section>
  )
}

export default LegacyLeadership