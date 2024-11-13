import React from 'react';
const cybersecurityHighlights = [
    {
      title: "Proven Expertise Across Diverse Industries and Regions",
      description: "Our cybersecurity expertise spans industries including Financial Services, Healthcare, and IT, with a global footprint that includes Africa, North America, Europe, and the Middle East. This provides a comprehensive understanding of sector and region-specific challenges and best practices."
    },
    {
      title: "Customized, Compliance-Driven Solutions",
      description: "We align every recommendation with leading regulatory frameworks such as PCI DSS, ISO 27001, and GDPR, ensuring your organization not only meets compliance requirements but also builds a strong security foundation."
    },
    {
      title: "Strategic, Future-Focused Approach",
      description: "Our proactive, long-term strategies anticipate and adapt to emerging threats, ensuring your security remains resilient in a dynamic digital landscape."
    },
    {
      title: "Hands-On, Consultative Process",
      description: "With JVEC, you’re never just another client. We provide dedicated, one-on-one support, guiding you through each decision to ensure your cybersecurity aligns with your business objectives and maximizes ROI."
    }
  ];

  const ourCoreValues = [
    {
      title: "Risk Assessment and Vulnerability Management",
      description: "Identify and prioritize vulnerabilities within your systems to create a targeted, effective mitigation plan."
    },
    {
      title: "Compliance and Regulatory Guidance",
      description: "Simplify and achieve regulatory compliance with expert guidance that reduces risks and maintains audit readiness."
    },
    {
      title: "Incident Response Planning and Management",
      description: "Establish and refine response protocols, minimizing downtime and potential damage when threats arise."
    },
    {
      title: "Strategic Security Planning and Roadmapping",
      description: "Develop a customized, actionable roadmap to continually strengthen your organization’s cybersecurity posture."
    },
    {
      title: "Threat Intelligence and Monitoring ",
      description: "Gain real-time insights into emerging threats, ensuring proactive protection against evolving risks."
    },
  ];


const WhyChooseConsulting = () => {
  return (
    <div className='mt-[56px] md:mt[80px] lg:mt-[120px]'>
      <div className='container'>
        <h1 className='heading-font-sizes font-semibold text-center md:max-w-[660px] mx-auto lg:max-w-[964px]'>
        Why Choose JVEC Solutions?
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-8 mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {cybersecurityHighlights.map((reason, index) => (
            <div className='bg-gradient-to-b flex-1 from-[#514D4D] to-[#080808] p-4 space-y-4 min-h-48 md:min-h-64 lg:min-h-48' key={reason.title} >
              <h2 className='text-sm md:text-base font-semibold'>{reason.title}</h2>
              <p className='text-sm md:text-base leading-relaxed'>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-8 mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {ourCoreValues.map((reason, index) => (
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

export default WhyChooseConsulting;
