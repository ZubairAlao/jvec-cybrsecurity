import React from 'react'
import CertifiedImage from "@/assets/icons/dun-bradstreet.svg"

const CertifiedDunBradstreet = () => {
  return (
    <div className='pages-vertical-padding'>
        <div className='container space-y-8 max-w-[760px]'>
            <h1 className='text-[1.5rem] md:text-[2.8rem] lg:text-[3.75rem] leading-[1.2] font-semibold text-center'>Certified by dun & bradstreet - USA</h1>

            <div className='bg-white rounded-md w-full mx-auto p-4'>
                <img
                    src={CertifiedImage}
                    alt="dun and bradstreet"
                    loading="lazy"
                    className='mx-auto'
                />
            </div>
        </div>
    </div>
  )
}

export default CertifiedDunBradstreet