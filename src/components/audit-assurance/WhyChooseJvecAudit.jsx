import React from 'react';
const WhyChooseJvectList = [
    {
      title: "Proven Expertise in Comprehensive IT Governance",
      description: "With extensive experience across financial services, healthcare, government, and beyond, JVEC Solutions offers in-depth IT audits that strengthen your governance framework. Our specialists assess and align your IT strategy with regulatory standards, such as ISO, PCI DSS, and GDPR, to reduce risk and promote long-term compliance and business resilience"
    },
    {
      title: "Rigorous Security and Data Protection",
      description: "Data breaches and cyber threats pose a continual risk to businesses. JVEC Solutions provides thorough assessments of your data protection measures—from access controls and encryption to incident response protocols. By proactively identifying vulnerabilities, we protect your sensitive data, ensure regulatory alignment, and fortify your organization against external and internal threats."
    },
    {
      title: "Unmatched Commitment to Operational Efficiency",
      description: "Technology should support, not hinder, business success. JVEC’s audit and assurance services evaluate IT operations, maintenance routines, backup processes, and disaster recovery plans, ensuring that systems are not only secure but also efficient. We identify process gaps and areas for optimization, helping you enhance productivity, reduce costs, and strengthen your ability to respond to crises"
    },
    {
      title: "Tailored Compliance and Standards Alignment",
      description: "Regulatory compliance is more than a checkbox; it's the backbone of digital trust. JVEC Solutions ensures that your technology infrastructure and processes meet and exceed compliance requirements relevant to your industry. We provide step-by-step guidance to navigate complex regulatory landscapes with confidence and peace of mind."
    },
    {
        title: "System Development and Change Management You Can Trust",
        description: "In today’s fast-evolving digital landscape, seamless technology upgrades are critical. Our audit services extend to system development and change management, ensuring that every change—from system updates to new technology integrations—is meticulously planned and secure. We provide comprehensive support that minimizes disruptions and maintains control over every adjustment, big or small."
      },
      {
        title: "Mitigate Third-Party and Vendor Risks",
        description: "When it comes to outsourcing, knowing your vendors' security stance is essential. Our technology audit services encompass third-party and vendor risk assessments, evaluating the controls, reliability, and security practices of your service providers. JVEC helps you build trust and transparency in your supply chain, ensuring that external partnerships support, not endanger, your business."
      },
  ];


const WhyChooseJvecAudit = () => {
  return (
    <div className='mt-[56px] md:mt[80px] lg:mt-[120px]'>
      <div className='container'>
        <h1 className='heading-font-sizes font-semibold text-center md:max-w-[660px] mx-auto lg:max-w-[964px]'>
        Why Choose JVEC Solutions for Technology Audit and Assurance?
        </h1>
        
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

export default WhyChooseJvecAudit;
