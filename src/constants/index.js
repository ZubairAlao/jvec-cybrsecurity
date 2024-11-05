import AppleLogo from "@/assets/icons/apple_logo.svg"
import FigmaLogo from "@/assets/icons/figma_logo.svg"
import OvisionsLogo from "@/assets/icons/ovisions_logo.svg"
import SlackLogo from "@/assets/icons/slack_logo.svg"

import PCIDSSComplaintIcon from "@/assets/icons/compliance-certifications/pci-dss-complaint.svg"
import ISO27001Icon from "@/assets/icons/compliance-certifications/iso-27001.svg"
import CybersecurityIcon from "@/assets/icons/compliance-certifications/cyber-security-1-1.svg"
import GDPRIcon from "@/assets/icons/compliance-certifications/gdpr.svg"
import NDPCIcon from "@/assets/icons/compliance-certifications/ndpc.svg"
import ISO22301Icon from "@/assets/icons/compliance-certifications/iso-22301.svg"
import SarbanesOxleyIcon from "@/assets/icons/compliance-certifications/sabarnes-oxley-complaint.svg"
import TOGAFCIcon from "@/assets/icons/compliance-certifications/togaf.svg"
import ISO20000Icon from "@/assets/icons/compliance-certifications/iso-20000.svg"
import AICPASmallIcon from "@/assets/icons/compliance-certifications/aicpa-soc-small.svg"
import AICPALargeIcon from "@/assets/icons/compliance-certifications/aicpa-soc-large.svg"
import COBIT2019Icon from "@/assets/icons/compliance-certifications/cobit-2019.svg"
import SSAE18Icon from "@/assets/icons/compliance-certifications/ssae18-soc-complaint.svg"
import PCAOBIcon from "@/assets/icons/compliance-certifications/pcaob.svg"
import COSOIcon from "@/assets/icons/compliance-certifications/coso.svg"
import SSAE16Icon from "@/assets/icons/compliance-certifications/ssae16-type-ii.svg"
import IAASBIcon from "@/assets/icons/compliance-certifications/iaasb.svg"
import ISAE304Icon from "@/assets/icons/compliance-certifications/isae-304.svg"

const images = import.meta.glob('@/assets/icons/testmonial-brands/*.svg', { eager: true });

export const navHeaders = [
    {
        label: "Home",
        link: "/",
    },
    {
        label: "Service",
        link: "/services",
        children: [

        ]
    },
    {
        label: "About",
        link: "/about",
        children: [
            
        ]
    },
    {
        label: "Trainng",
        link: "/training",
    },
    {
        label: "Pentest",
        link: "/pentest",
    },
    {
        label: "More",
        link: "/more",
        children: [
            
        ]
    }
]

export const WhyChooseJvecListOne = [
    {
        title: "1.",
        text: "Unparalleled Benefits for Robust Cybersecurity:"
    },
    {
        title: "Preemptive Defense Against Cyber Threats",
        text: "Protect your most valuable data and systems by identifying and eliminating weaknesses before hackers exploit them. Our penetration tests expose potential entry points across your network, applications, and cloud infrastructure, keeping you one step ahead of attackers."
    },
    {
        title: "Comprehensive Compliance Support",
        text: " JVEC’s testing protocols align with industry compliance standards like GDPR, PCI DSS, and ISO 27001, ensuring you meet regulatory requirements while safeguarding data integrity and confidentiality."
    },
    {
        title: "Actionable, Insightful Reporting",
        text: " Beyond uncovering vulnerabilities, our detailed, accessible reports prioritize risks and outline specific, actionable remediation steps, empowering your team to strengthen security with clarity and confidence."
    },
]

export const WhyChooseJvecListTwo = [
    {
        title: "A Legacy of Security Leadership",
        text: "Our Cyber Executive team brings over 44 years of combined experience across key industries, including Financial Services, Information Technology, and Healthcare, with a global footprint spanning Africa, North America, Europe, and the Middle East"
    },
    {
        title: "2. Our Core Values:",
        text: "Trusted Expertise and Client Commitment"
    },
    {
        title: "Tailored, Client-Centric Approach",
        text: "Recognizing that each organization’s security landscape is unique, JVEC customizes testing strategies to address specific threats relevant to your industry, business model, and technological environment. We see our clients as partners in security, working closely with you at every step to enhance resilience."
    },
    {
        title: "Transparent Collaboration and Continuous Support",
        text: "Security doesn’t end with a test. We offer ongoing guidance and hands-on support, ensuring vulnerabilities are effectively mitigated and that your security infrastructure evolves to meet emerging threats."
    },
]

export const ComplianceCertificates =[
    {
        image: PCIDSSComplaintIcon,
        alt: "PCI DSS Complaint"
    },
    {
        image: ISO27001Icon,
        alt: "Information Security Management 27001"
    },
    {
        image: CybersecurityIcon,
        alt: "Cyber Security Framework"
    },
    {
        image: GDPRIcon,
        alt: "General Data Protection Regulation"
    },
    {
        image: NDPCIcon,
        alt: "Nigeria Data Protection Commission"
    },
    {
        image: ISO22301Icon,
        alt: "Information Security for Standardization 22301"
    },
    {
        image: SarbanesOxleyIcon,
        alt: "Sarbanes oxley Complaint"
    },
    {
        image: TOGAFCIcon,
        alt: "TOGAF"
    },
    {
        image: ISO20000Icon,
        alt: "Information Security for Standardization 20000"
    },
    {
        image: AICPASmallIcon,
        alt: "AICPA SOC Small"
    },
    {
        image: AICPALargeIcon,
        alt: "AICPA SOC Large"
    },
    {
        image: COBIT2019Icon,
        alt: "COBIT 2019"
    },
    {
        image: SSAE18Icon,
        alt: "SSAE 18 Complaint"
    },
    {
        image: PCAOBIcon,
        alt: "Public Company Accounting Oversight Board"
    },
    {
        image: COSOIcon,
        alt: "COSO"
    },
    {
        image: SSAE16Icon,
        alt: "SSAE 16 Type II"
    },
    {
        image: IAASBIcon,
        alt: "IAASB"
    },
    {
        image: ISAE304Icon,
        alt: "Internation Standard on Assurance Engagement"
    }
]

export const JvecApproachPenetrationAccordion = [
    {
        title: "Alignment with Business Goal",
        text: "JVEC ensures every technical recommendation aligns seamlessly with your business objectives, maximizing return on investment by focusing on solutions that drive value and support growth."
    },
    {
        title: "Proactive Defense",
        text: "We prioritize Planning, Preparation, and Prevention, moving beyond reactionary troubleshooting to provide continuous, proactive security that strengthens your defense before an incident can occur."
    },
    {
        title: "No-Surprise, Transparent Process",
        text: "Our “No Surprise” policy ensures clarity and transparency from planning through execution, giving you confidence and control over your security strategy at every stage."
    },
    {
        title: "Operational Continuity",
        text: "With efficient and thorough penetration tests, we help you maintain essential operations, minimizing any interruptions to your day-to-day activities while protecting your critical assets."
    },
    {
        title: "Personalized Consultative Experience",
        text: "We value personalized service, working closely with your team to ensure you’re never “lost in the shuffle.” Our dedicated experts guide you through each step of the process, making complex security strategies accessible and actionable."
    },
]

export const TestmonialBrandLogos = Object.keys(images).map((path) => ({
    image: images[path].default || images[path],  // Use `.default` if you are using SVGs or other assets needing it
    alt: path.split('/').pop().replace(/.svg$/, ''),  // Generate alt text from filename (optional)
  }));

export const BrandLogo = [
    OvisionsLogo, FigmaLogo, AppleLogo, SlackLogo
]

export const JvecServicesFooter = [
    { id: 1, name: "Website Development" },
    { id: 2, name: "Mobile App Development" },
    { id: 3, name: "Software Development" },
    { id: 4, name: "Digital Marketing" },
    { id: 5, name: "Product Design" },
    { id: 6, name: "Graphic Design" },
    { id: 7, name: "Motion Design / Video Editing" },
    { id: 8, name: "Consulting" },
    { id: 9, name: "Corporate Training" },
    { id: 10, name: "Data Consultancy" },
    { id: 11, name: "Product Management" },
    { id: 12, name: "Project Management" },
    { id: 13, name: "Predictive Analysis" }
  ]

  export const JvecTrainingFooter = [
    { id: 1, name: "Data Analytics" },
    { id: 2, name: "Data Science" },
    { id: 3, name: "WordPress" },
    { id: 4, name: "Product Design" },
    { id: 5, name: "Project Management" },
    { id: 6, name: "Product Management" },
    { id: 7, name: "Graphic Design" },
    { id: 8, name: "Motion Graphics / Video Editing" },
    { id: 9, name: "Software Development" },
    { id: 10, name: "Mobile App Development" },
    { id: 11, name: "Cyber Security" },
    { id: 12, name: "Digital Literacy" },
    { id: 13, name: "Digital Marketing" },
    { id: 14, name: "Business Development Management" }
  ];
