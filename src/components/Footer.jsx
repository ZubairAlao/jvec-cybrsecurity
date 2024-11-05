import { JvecTrainingFooter, JvecServicesFooter } from "@/constants"
import Logo from "./Logo"
import { Link } from "react-router-dom"

const Footer = () => {

  return (
    <footer className='relative pb-20 pt-20 bg-[#0e0e0e]'>
        <div className="container flex flex-col items-start justify-between lg:flex-row">
          <div>
            <Logo />
            <p>© 2024 JVEC Solutions.All right reserved.</p>
          </div>

          <div>
            <h3>SERVICES</h3>
            <div>
              {JvecServicesFooter.map((service) => (
                <p key={service.name}>{service.name}</p>
              ))}
            </div>
          </div>

          <div>
            <h3>TRAINING</h3>
            <div>
            {JvecTrainingFooter.map((training) => (
              <p key={training.name}>{training.name}</p>
            ))}
            </div>
          </div>

          <div>
            <div>
              <h3>ABOUT</h3>
                <div>
                  <Link>About Us</Link>
                  <Link>Internship</Link>
                  <Link>Training</Link>
                </div>
            </div>

            <div>
              <h3>More</h3>
                <div>
                  <Link>Blog</Link>
                  <Link>Portfolio</Link>
                  <Link>Testmonial</Link>
                </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer