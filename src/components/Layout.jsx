import Header from './Header'
import Footer from './Footer'
import ContactUs from './ContactUs'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default Layout