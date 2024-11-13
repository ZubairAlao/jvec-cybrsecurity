import { WhyTrustUsData } from "@/constants";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Button from "../ui/button/button";

const cybersecurityCompliance = [
    {
        title: "How to ensure Cybersecurity Compliance",
        description: "In today’s high-stakes digital environment, implementing a robust cybersecurity framework aligned with official standards is essential for safeguarding your organization and ensuring compliance. Industry frameworks such as PCI DSS, NDPR, and ISO 27001 provide proven structures to secure critical assets and build resilience."
    },
    {
        title: "Compliance Assessment in Cybersecurity",
        description: "A compliance assessment is a vital process for certifying that your organization’s policies, controls, and security solutions align with required cybersecurity standards. JVEC Solutions streamlines this journey, guiding you through every step to ensure your security program not only meets but exceeds compliance expectations"
    },
    {
        title: "At JVEC Solutions, we understand the critical importance of cybersecurity compliance/standards. Our expert consultants help organizations navigate the complex regulatory landscape and implement robust security measures to protect sensitive data and minimize risk.",
        description: "Our Compliance/Standards Consulting Services cover a wide range of Standards, Including"
    },
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
    {
        title: "",
        description: ""
    },
]

const ComplianceSlides = () => {
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

export default ComplianceSlides;
