import Header from './Header'
import Footer from './Footer'
import ContactUs from './ContactUs'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <ContactUs />
        <Footer />
    </>
  )
}

export default Layout