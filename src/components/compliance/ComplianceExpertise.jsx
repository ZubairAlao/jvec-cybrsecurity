import React from 'react';
const securityTasks = [
  {
    title: "Gap Analysis",
    description: "Identifying and analyzing gaps in current security policies and compliance."
  },
  {
    title: "Policy and Procedure Development",
    description: "Creating and implementing comprehensive security policies and procedures."
  },
  {
    title: "Risk Assessments",
    description: "Assessing and prioritizing security risks."
  },
  {
    title: "Security Audits and Testing",
    description: "Conducting regular security assessments and penetration testing."
  },
  {
    title: "Incident Response Planning",
    description: "Developing and testing incident response plans."
  },
  {
    title: "Employee Training and Awareness",
    description: "Educating employees about security best practices."
  },
  {
    title: "Third-Party Risk Management",
    description: "Assessing the security practices of third-party vendors and suppliers."
  }
];



const ComplianceExpertise = () => {
  return (
    <div className='mt-[56px] md:mt[80px] lg:mt-[120px]'>
      <div className='container'>
        <h1 className='heading-font-sizes font-semibold text-center md:max-w-[660px] mx-auto lg:max-w-[964px]'>
        Our Expertise Includes
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-8 mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {securityTasks.map((reason, index) => (
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

export default ComplianceExpertise;
