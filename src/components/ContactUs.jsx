import React from 'react'
import Button from './ui/button/button'
import { motion } from 'framer-motion'


const ContactUs = () => {
  return (
    <section className='py-[56px] md:py-[80px] lg:py-[120px] bg-[#060709]'>
        <div className="container flex items-center flex-col lg:flex-row justify-between">
            <div className='lg:max-w-[406px] space-y-mobile-large md:space-y-tablet-medium mb-[56px]'>
                <h2>READY TO GET STARTED</h2>
                <p className='font-semibold text-2xl md:text-3xl lg:text-4xl'>Send us an Email</p>
                <div className='space-y-4 md:space-y-7'>
                    <p>Join numerous corporations, organizations and businesses as they scale their teams, tap into new market opportunities and build innovative products with Jvec solutions.
                    </p>
                    <p>Join thousands of students who are ready to learn new skills or take their career to the next level by enrolling in one of our training programs today.</p>
                </div>
            </div>

            <form action="" className='space-y-4 text-[10px] contact-form w-full lg:max-w-[611px]'>
                <div>
                    <label htmlFor="fullName">FULL NAME</label>
                    <input type="text" id="fullName" className="contact-input" placeholder="John Doe"  autoComplete="name" />
                </div>

                <div>
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" id="email" className="contact-input" placeholder="Johndoe@email.com" autoComplete="email" />
                </div>

                <div>
                    <label htmlFor="phone">PHONE NUMBER</label>
                    <input type="tel" id="phone" className="contact-input" placeholder="08012344321" autoComplete="tel" />
                </div>

                <div>
                    <label htmlFor="referral">HOW DID YOU HEAR ABOUT US</label>
                    <input type="text" id="referral" className="contact-input" placeholder="Referral Source" autoComplete="off"  />
                </div>

                <div>
                    <label htmlFor="message">MESSAGE</label>
                    <textarea id="message" className="contact-input min-h-[180px] lg:min-h-[176px]" placeholder="Type in your message" autoComplete="off" /> 
                </div>

                <Button children="Send Message" />
            </form>
        </div>

    </section>
  )
}

export default ContactUs