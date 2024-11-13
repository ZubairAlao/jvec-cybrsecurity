import React from 'react';

  const cybersecurityTrainingStep = [
    {
      title: "Phishing Simulations",
      description: "Test your employees' ability to identify and report phishing attacks."
    },
    {
      title: "Security Awareness Training",
      description: "Educate your employees on best practices for password security, data privacy, and social engineering."
    },
    {
      title: "Incident Response Training",
      description: "Prepare your employees to respond effectively to security incidents."
    },
    {
      title: "Tailored Training Programs",
      description: " Develop customized training programs to address your organization's specific needs."
    },
  ];


const CyberSecurityTraining = () => {
  return (
    <div className='mt-[56px] md:mt[80px] lg:mt-[120px]'>
      <div className='container'>
        <h1 className='heading-font-sizes font-semibold text-center md:max-w-[660px] mx-auto lg:max-w-[964px]'>
            Our Cybersecurity Awareness Training Services
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-max gap-8 mt-[40px] md:mt-[60px] lg:mt-[80px]">
          {cybersecurityTrainingStep.map((reason, index) => (
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

export default CyberSecurityTraining;
