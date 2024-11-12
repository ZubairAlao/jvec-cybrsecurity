import React, { useRef, useState, useEffect } from 'react';
import ClientOneImg from "@/assets/images/trusted-testimonials/client-one.jpg";
import ClientTwoImg from "@/assets/images/trusted-testimonials/client-two.jpg";
import ClientThreeImg from "@/assets/images/trusted-testimonials/client-three.jpg";
import ClientFourImg from "@/assets/images/trusted-testimonials/client-four.jpg";
import ClientFiveImg from "@/assets/images/trusted-testimonials/client-five.jpg";
import ClientSixImg from "@/assets/images/trusted-testimonials/client-six.jpg";
import ClientSevenImg from "@/assets/images/trusted-testimonials/client-seven.jpg";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const buildingTrust = [
    {
        clientImage: ClientOneImg,
        clientName: "Felix",
        clientRole: "Founder, Pent Agency (USA)",
        clientFeedback: "JVEC Solutions is the real deal; I had a seamless work with them throughout the building of our website from conceptualization to delivery. The feedback was amazing as they made sure it suited what we wanted, keeping in touch with us all the way. I'll surely recommend them any day anytime."
    },
    {
        clientImage: ClientTwoImg,
        clientName: "Praise (United Kingdom)",
        clientRole: "Data Analytics Track",
        clientFeedback: "The classes are very easy to follow and the facilitators have been very supportive; the fact that I can engage the facilitators one-on-one and they are always ready to answer my questions no matter how silly they sound is something I don’t think I would have been able to find anywhere else. I have started our industry-based project with the support of my facilitator and I am sure after this I will be more than confident to handle the next one myself."
    },
    {
        clientImage: ClientThreeImg,
        clientName: "Emmanuel",
        clientRole: "CEO/Founder, Careers Verified (Nigeria)",
        clientFeedback: "Compared to other companies, JVEC Solutions has been far and above the best in every area. While building our website, the customer service has been prompt and straightforward and the actual services are well documented and logical to our needs. We are very excited working with JVEC Solutions. I will gladly recommend them to anyone."
    },
    {
        clientImage: ClientFourImg,
        clientName: "Olumide (Nigeria)",
        clientRole: "Data Analytics Track",
        clientFeedback: "Few months ago, I saw an advert on Data Analytics Training posted by Social media influencer - Inneh Joseph on LinkedIn. The training paved way for me in my new job - the first task given to me as Head of HR was in Excel; when I opened the Excel file, I saw the first topic (filter) treated in my first class. I recommend JVEC to all HR and Admin personnel, you need proficiency in Excel to report to management."
    },
    {
        clientImage: ClientFiveImg,
        clientName: "Peace (Nigeria)",
        clientRole: "Data Analytics Track",
        clientFeedback: "The Customer Support and relations at JVEC are second to none; they give premium support to customers’ challenges and go the extra mile to check on customer’s well-being."
    },
    {
        clientImage: ClientSixImg,
        clientName: "Shadrack (Germany)",
        clientRole: "Project Management Track",
        clientFeedback: "I recently completed a project management course with JVEC, and the experience was outstanding. The training was comprehensive, well-structured, and provided valuable insights that have significantly enhanced my skills. JVEC’s professionalism and dedication to excellence is truly commendable. I highly recommend their services to anyone looking to advance their project management capabilities."
    },
    {
        clientImage: ClientSevenImg,
        clientName: "Bisola (Nigeria)",
        clientRole: "Software Engineering Track",
        clientFeedback: "Finding a platform that helps secure an internship after learning is challenging. Enrolling in the backend development program at JVEC not only solved this issue but also offered invaluable one-on-one mentor sessions. The practical classes are suitable for programmers at any level. The project-based training and internship opportunities provide essential real-world experience. Plus, the flexible payment options make it financially accessible."
    },
]

const BuildingTrust = () => {

    const mainSplideRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to move to specific slide on thumbnail click
    const handleThumbnailClick = (index) => {
        if (mainSplideRef.current) {
        mainSplideRef.current.splide.go(index);  // Move main slider to the specific index
        }
    };

    // Update active index when the main Splide changes
    useEffect(() => {
        const mainSplide = mainSplideRef.current?.splide;

        const updateActiveIndex = () => {
        setActiveIndex(mainSplide.index);
        };

        // Listen for the move event on Splide
        mainSplide.on('move', updateActiveIndex);

        // Set initial active index
        setActiveIndex(mainSplide.index);

        // Clean up event listener on component unmount
        return () => mainSplide.off('move', updateActiveIndex);
    }, []);

  return (
    <div className='mt-[56px] space-y-8'>
      <div className='space-y-4 text-center'>
          <h1 className='text-[1.5rem] md:text-[2.8rem] lg:text-[3.75rem] leading-[1.2] font-semibold '>Building Trust</h1>
          <p>Trust earned and preserved</p>
      </div>

      <div className='flex flex-col lg:flex-row gap-8 justify-center items-center lg:items-center'>
          {/* Main Carousel */}
          <Splide
              ref={mainSplideRef}  // Reference to Splide instance
              options={{
                  rewind: true,
                  perMove: 1,
                  drag: 'free',
                  type: 'fade',
                  autoplay: true,
                  interval: 3000,
                  arrows: false,
                  perPage: 1,
                  width: "100%",
                  pagination: false,
              }}
              aria-label="Main Image Slider"
              id="main-slider"
              className="w-full lg:w-[60%]"
          >
              {buildingTrust.map((client) => (
                  <SplideSlide key={client.clientName} className='flex justify-center'>
                      <div className="space-y-8 text-center">
                          <img src={client.clientImage} alt={`${client.clientName} Image`} loading='lazy' className='rounded-full w-40 h-40 mx-auto' />
                          <p className="text-sm md:text-base lg:text-lg">{client.clientFeedback}</p>
                          <div>
                              <p className="font-semibold">{client.clientName}</p>
                              <p className="text-sm">{client.clientRole}</p>
                          </div>
                      </div>
                  </SplideSlide>
              ))}
          </Splide>

          {/* Thumbnail Grid */}
          <div className="w-full lg:w-[40%] grid grid-cols-4 gap-4 place-items-center">
              {buildingTrust.map((client, index) => (
                  <div
                      key={client.clientName}
                      className={`rounded-full cursor-pointer ${
                          activeIndex === index ? 'ring-4 ring-blue-500' : ''
                      }`} // Apply active class conditionally
                      onClick={() => handleThumbnailClick(index)}  // Trigger slide change on click
                  >
                      <img src={client.clientImage} alt={`${client.clientName} Thumbnail`} className='rounded-full w-20 h-20' />
                  </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default BuildingTrust;
