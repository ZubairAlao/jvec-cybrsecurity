import Button from "../ui/button/button"

const IndustryCTA = () => {
  return (
    <section className='relative pages-vertical-padding overflow-hidden space-y-8 md:space-y-14'>

        <div className='md:container'>
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

export default IndustryCTA