import { JvecTrainingFooter, JvecServicesFooter } from "@/constants"
import Logo from "./Logo"
import { Link } from "./ui/link/link"
import { SocialIcons } from "@/constants"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='relative pb-20 pt-20 bg-[#0e0e0e]'>
        <div className="container space-y-[56px] flex flex-col items-start justify-between lg:flex-row">
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
              <div className="flex flex-col gap-4">
                {JvecServicesFooter.map((service) => (
                  <Link to="#" key={service.name} className="footer-link">{service.name}</Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg">TRAINING</h3>
              <div className="flex flex-col gap-4">
              {JvecTrainingFooter.map((training) => (
                <Link to="#" key={training.name} className="footer-link">{training.name}</Link>
              ))}
              </div>
            </div>

          </div>

          {/* about and contact us */}
          <div className="flex justify-between">
            <div className="space-y-5">
              <h3 className="text-lg">ABOUT</h3>
                <div className="text-sm flex flex-col gap-4">
                  <Link to="#" className="footer-link">About Us</Link>
                  <Link to="#" className="footer-link">Internship</Link>
                  <Link to="#" className="footer-link">Training</Link>
                </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-lg">More</h3>
                <div className="text-sm flex flex-col gap-4">
                  <Link to="#" className="footer-link">Blog</Link>
                  <Link to="#" className="footer-link">Portfolio</Link>
                  <Link to="#" className="footer-link">Testmonial</Link>
                </div>
            </div>
          </div>
          <p>© {currentYear} JVEC Solutions.All right reserved.</p>
        </div>
    </footer>
  )
}

export default Footer