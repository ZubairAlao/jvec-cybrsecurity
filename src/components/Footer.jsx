import Logo from "./Logo"
import { Link } from "./ui/link/link"
import { 
  SocialIcons,
  JvecAboutLinks,
  JvecMoreLinks,
  JvecTrainingLinks,
  JvecServicesLinks, 
  contactInfo} from "@/constants"


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='relative py-[56px] bg-[#0e0e0e]'>
        <div className="container space-y-[56px] md:space-y-0 flex flex-col md:flex-row items-start justify-between">
          {/* logo and social icons */}
          <div className="space-y-4">
            <Logo />
            <div className='flex items-center gap-4 justify-center'>
              {SocialIcons.map((icon) => (
                <a key={icon.link} href={icon.link} target="_blank" rel="noopener noreferrer">
                  <img src={icon.image} key={icon.link} alt={icon.alt} className="social-icon cursor-pointer" />
                </a>
              ))}
            </div>
          </div>

          {/* main links */}
          <div className="flex gap-4">
            <div className="space-y-5">
              <h3 className="text-lg">SERVICES</h3>
              <div className="flex flex-col gap-4 text-xs">
                {JvecServicesLinks.map((service) => (
                  <Link to={service.link} key={service.label} className="footer-link">{service.label}</Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg">TRAINING</h3>
              <div className="flex flex-col gap-4 text-xs">
              {JvecTrainingLinks.map((training) => (
                <Link to={training.link} key={training.label} className="footer-link">{training.label}</Link>
              ))}
              </div>
            </div>
          </div>

          {/* about and contact us */}
          <div className="flex gap-12 w-full">
            <div className="flex flex-col gap-12">
              <div className="space-y-5">
                <h3 className="text-lg">ABOUT</h3>
                  <div className="text-xs flex flex-col gap-4">
                    {JvecAboutLinks.map((link) => (
                      <Link to={link.link} key={link.label} className="footer-link">{link.label}</Link>
                    ))}
                  </div>
              </div>

              <div className="space-y-5">
                <h3 className="text-lg">MORE</h3>
                  <div className="text-xs flex flex-col gap-4">
                  {JvecMoreLinks.map((link) => (
                    <Link to={link.link} key={link.label} className="footer-link">{link.label}</Link>
                  ))}
                  </div>
              </div>
            </div>
            
            <div className="space-y-5">
              <h3 className="text-lg">CONTACT US</h3>
                <div className="text-xs flex flex-col gap-4">
                {contactInfo.map((contact) => (
                  <div className="flex gap-2">
                    <img src={contact.image} alt={contact.label} />
                    <p>{contact.label}</p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
          <p className="text-center mx-auto mt-7">©{currentYear} JVEC Solutions.All right reserved.</p>
    </footer>
  )
}

export default Footer

{/* <div className='space-y-6'>
                  {goldenContactInfo.map((info) => (
                      <div key={info.label} className='flex items-center justify-center flex-col md:flex-row md:justify-start gap-2'>
                          <img src={info.image} alt={info.label} />
                          <p>{info.label}</p>
                      </div>
                  ))}
                </div> */}