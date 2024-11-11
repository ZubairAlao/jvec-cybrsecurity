import { WhyTrustUsData } from "@/constants";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from "../ui/button/button";

const WhyTrustedICTConsultant = () => {
    const options = {
        resetProgress: false,
        rewind: true,
        width: "100%",
        perMove: 1,
        rewindSpeed: 3000,
        arrows: false,
        pagination: false,
        drag: 'free',
        type: 'loop',
        autoplay: true,
        interval: 2000,
        perPage: 2,
        gap: '1rem',
        height: '430px',
        direction: "ttb",
    };

    return (
        <section className="flex justify-center items-center pages-vertical-padding">
            <div className="container lg:flex gap-24 lg:space-y-0 space-y-20">
                <div className="text-center lg:text-left space-y-12 lg:mx-auto lg:w-1/2">
                    <h1 className='font-bold heading-font-sizes'>
                        Why We Are Your Trusted ICT Consultant
                    </h1>
                    <p>
                        We unleash the potential of technology for your business
                    </p>

                    <Button children={"Learn More"} />
                </div>

                <div className="relative overflow-hidden rounded-lg shadow-lg text-gray-800 trusted-ict-slider min-h-full lg:w-1/2">
                    <Splide options={options}>
                        {WhyTrustUsData.map((data, index) => (
                            <SplideSlide key={index} className="rounded-md shadow-md">
                                <div className="flex gap-4 items-start p-4">
                                    <img 
                                        src={data.image} 
                                        alt={data.title} 
                                        className="w-10 h-fit" 
                                    />
                                    <div className="flex flex-col justify-center">
                                        <h2 className="font-semibold">
                                            {data.title}
                                        </h2>
                                        <p className="mt-1">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    );
};

export default WhyTrustedICTConsultant;
