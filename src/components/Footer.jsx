import Logo from "./Logo"
import { Link } from "./ui/link/link"
import { 
  SocialIcons,
  JvecAboutLinks,
  JvecMoreLinks,
  JvecTrainingLinks,
  JvecServicesLinks, 
  contactInfo
} from "@/constants"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-[56px] bg-[#0e0e0e]">
      <div className="container px-9 space-y-[56px] lg:space-y-0 lg:flex justify-center lg:gap-12">
        {/* logo and social icons */}
        <div className="space-y-4">
          <Logo />
          <div className="flex items-center gap-4 justify-start">
            {SocialIcons.map((icon) => (
              <a key={icon.link} href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.image} key={icon.link} alt={icon.alt} className="social-icon cursor-pointer" />
              </a>
            ))}
          </div>
          <p className="text-sm lg:block hidden lg:w-[200px]">&copy; {currentYear} JVEC Solutions. All rights reserved.</p>
        </div>
        
        {/* second undersection in tablet */}
        <div className=" grid grid-cols-2 md:grid-cols-4 gap-y-[56px]">
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

          {/* about, more, and contact us */}
          <div className="space-y-12">
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
                <div className="flex gap-2 items-start w-48" key={contact.label}>
                  <img src={contact.image} alt={contact.label} />
                  <p>{contact.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mx-auto mt-7 lg:hidden text-sm">&copy; {currentYear} JVEC Solutions. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
