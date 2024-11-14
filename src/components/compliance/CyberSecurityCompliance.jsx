import CyberSecurityComplianceImg from "@/assets/images/cyber-security-compliance.jpg"

const CyberSecurityCompliance = () => {
    return (
        <section className="flex justify-center items-center pages-vertical-padding">
            <div className="container lg:flex gap-24 lg:space-y-0 space-y-20">
                <div className='w-full md:h-[500px] md:-mr-4 lg:rounded-lg rounded-tl-lg rounded-bl-lg lg:w-1/2'>
                    <picture>
                        <img src={CyberSecurityComplianceImg} alt="Testing Image" className='h-full w-full object-cover bg-right rounded-3xl' loading="lazy"/>
                    </picture>
                </div>

                <div className="relative overflow-hidden space-y-12 max-h-[80vh] overflow-y-scroll lg:w-1/2">
                    <div className="space-y-6">
                        <h1 className='font-bold text-[1.5rem] md:text-[2.3rem] lg:text-[2.5rem] leading-[1.3]'>
                            How to ensure Cybersecurity Compliance
                        </h1>
                        <p>
                            In today’s high-stakes digital environment, implementing a robust cybersecurity framework aligned with official standards is essential for safeguarding your organization and ensuring compliance. Industry frameworks such as PCI DSS, NDPR, and ISO 27001 provide proven structures to secure critical assets and build resilience.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h1 className='font-bold text-[1.5rem] md:text-[2.3rem] lg:text-[2.5rem] leading-[1.3]'>
                            Compliance Assessment in Cybersecurity
                        </h1>
                        <p>
                            A compliance assessment is a vital process for certifying that your organization’s policies, controls, and security solutions align with required cybersecurity standards. JVEC Solutions streamlines this journey, guiding you through every step to ensure your security program not only meets but exceeds compliance expectations
                        </p>

                        <p>
                            At JVEC Solutions, we understand the critical importance of cybersecurity compliance/standards. Our expert consultants help organizations navigate the complex regulatory landscape and implement robust security measures to protect sensitive data and minimize risk.
                        </p>
                        <p>
                            Our Compliance/Standards Consulting Services cover a wide range of Standards, Including
                        </p>
                    </div>

                    <div className="space-y-6">
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">PCI DSS:</span> Payment Card Industry Data Security Standard</li>
                            <li><span className="font-semibold">ISO 27001:</span> Information Security Management System (ISMS)</li>
                            <li><span className="font-semibold">ISO 27701:</span> Privacy Information Management System (PIMS), extension of ISO 27001</li>
                            <li><span className="font-semibold">NIST Cybersecurity Framework:</span> National Institute of Standards and Technology Cybersecurity Framework</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Data Privacy and Protection Regulations</h2>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">GDPR:</span> General Data Protection Regulation</li>
                            <li><span className="font-semibold">NDPR:</span> Nigeria Data Protection Regulation</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Business Continuity and Service Management Standards</h2>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">ISO 22301:</span> Business Continuity Management System (BCMS)</li>
                            <li><span className="font-semibold">ISO 20000:</span> IT Service Management (ITSM)</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">System and Organization Controls (SOC) Reports</h2>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">SOC 1:</span> Focus on internal controls over financial reporting</li>
                            <li><span className="font-semibold">SOC 2:</span> Focus on controls related to security, availability, processing integrity, confidentiality, and privacy</li>
                            <li><span className="font-semibold">SOC 3:</span> General use report, similar to SOC 2 but less detailed</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">IT Governance Frameworks</h2>
                        <ul className="list-disc list-inside">
                            <li><span className="font-semibold">COBIT:</span> Control Objectives for Information and Related Technologies</li>
                            <li><span className="font-semibold">TOGAF:</span> The Open Group Architecture Framework</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Regulatory Compliance Standards</h2>
                        <ul className="list-disc list-inside">
                        <li><span className="font-semibold">SOX 404:</span> Sarbanes-Oxley Act, Section 404 - Mandates internal controls for financial reporting for public companies</li>
                        <li><span className="font-semibold">PCAOB:</span> Public Company Accounting Oversight Board - Regulates audits of public companies to ensure compliance with SOX</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Risk Management and Control Frameworks</h2>
                        <ul className="list-disc list-inside">
                        <li><span className="font-semibold">COSO:</span> Framework for enterprise risk management and internal control</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">International Assurance Standards</h2>
                        <ul className="list-disc list-inside">
                        <li><span className="font-semibold">SSAE 16:</span> Previously used U.S. standard for attestation engagements (replaced by SSAE 18)</li>
                        <li><span className="font-semibold">SSAE 18:</span> Current U.S. standard for attestation engagements, primarily used for SOC reports</li>
                        <li><span className="font-semibold">ISAE 3402:</span> International standard for reporting on controls at service organizations</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">Audit and Risk Assessment Standards</h2>
                        <ul className="list-disc list-inside">
                        <li><span className="font-semibold">ISA 315:</span> Identifying and Assessing Risks of Material Misstatement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CyberSecurityCompliance;
