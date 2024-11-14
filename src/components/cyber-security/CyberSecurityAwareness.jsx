import CyberSecurityAwarenessImg from "@/assets/images/cyber-security-awareness-training.jpg"

const trainingModules = [
    {
      title: "Expertise You Can Trust",
      description: "With JVEC Solutions, you’re backed by cybersecurity professionals with decades of experience in training organizations worldwide. Our training goes beyond generic content, tailoring each program to meet the unique security needs and challenges of your industry."
    },
    {
      title: "Practical, Engaging Learning",
      description: "Our training isn’t just theoretical—it’s interactive and practical. Through real-world simulations, engaging workshops, and dynamic sessions, we teach your employees how to recognize phishing, prevent data breaches, and respond effectively to suspicious activity, ensuring the knowledge sticks."
    },
    {
      title: "Customized to Align with Your Security Goals",
      description: "Each business faces distinct threats, and we build training modules that align with your specific security policies and compliance requirements. Whether you’re aiming to meet PCI DSS, GDPR, or SOC2 standards, our program addresses regulatory needs while enhancing your organization’s resilience."
    },
    {
      title: "Reduced Risk, Increased Resilience",
      description: "Strengthen your weakest link - your employees, to decrease the likelihood of costly breaches. With JVEC Solutions, your staff gains the awareness and confidence to keep your organization’s data, assets, and reputation secure, effectively reducing the overall risk landscape."
    },
    {
      title: "On-Demand and Scalable for All Levels",
      description: "From front-line employees to C-level executives, our training modules are available on-demand, scalable to fit your organization’s size and structure. Whether your team is remote, in-office, or hybrid, JVEC Solutions delivers accessible, high-impact cybersecurity awareness that suits every learning style and need."
    }
  ];


const CyberSecurityAwareness = () => {
    return (
        <section className="flex justify-center items-center pages-vertical-padding">
            <div className="container lg:flex gap-24 lg:space-y-0 space-y-20">
                <div className='w-full md:h-[500px] md:-mr-4 lg:rounded-lg rounded-tl-lg rounded-bl-lg lg:w-1/2'>
                    <picture>
                        <img src={CyberSecurityAwarenessImg} alt="Testing Image" className='h-full w-full object-cover bg-right rounded-3xl' loading="lazy"/>
                    </picture>
                </div>

                <div className="relative overflow-hidden space-y-12 max-h-[80vh] overflow-y-scroll lg:w-1/2">
                    {trainingModules.map((module, index) => (
                        <div key={index} className="space-y-6">
                            <h1 className='font-bold text-[1.5rem] md:text-[2.3rem] lg:text-[2.5rem] leading-[1.3]'>
                                {module.title}
                            </h1>
                            <p>
                                {module.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CyberSecurityAwareness;
