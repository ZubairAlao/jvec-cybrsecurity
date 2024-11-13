import React from 'react';
const WhyChooseJvectList = [
    {
      title: "Mitigate Risk",
      description: "Identify and address vulnerabilities to protect your organization from cyber threats."
    },
    {
      title: "Enhance Security Posture:",
      description: "Implement robust security controls and best practices."
    },
    {
      title: "Ensure Regulatory Compliance",
      description: "Stay ahead of evolving regulations and industry standards."
    },
    {
      title: "Protect Your Reputation",
      description: "Safeguard your brand and customer trust."
    },
    {
        title: "Optimize Business Operations:",
        description: "Streamline compliance processes and reduce operational costs."
      },
  ];


const WhyChooseJvecCompliance = () => {
  return (
    <div className='mt-[56px] md:mt[80px] lg:mt-[120px]'>
      <div className='container'>
        <div className="space-y-8 md:max-w-[660px] mx-auto lg:max-w-[964px] text-center">
            <h1 className='heading-font-sizes font-semibold'>
                Why Choose JVEC Solutions?
            </h1>
            <p>With over 45 years of industry experience, JVEC Solutions is your trusted partner in achieving and maintaining cybersecurity compliance. Our comprehensive compliance services are designed to help you:
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-8 mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {WhyChooseJvectList.map((reason, index) => (
            <div className='bg-gradient-to-b flex-1 from-[#514D4D] to-[#080808] p-4 space-y-4 min-h-48 md:min-h-64 lg:min-h-48' key={reason.title} >
              <h2 className='text-sm md:text-base font-semibold'>{reason.title}</h2>
              <p className='text-sm md:text-base leading-relaxed'>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseJvecCompliance;
