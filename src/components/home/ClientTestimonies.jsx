import SphereIcon from "@/assets/icons/sphere.svg"
import { Link } from "../ui/link/link"
import { ArrowRight } from "lucide-react"
import BuildingTrust from "./BuildingTrust"

const ClientTestimonies = () => {
  return (
    <section className="pages-vertical-padding">
        <div className="container text-center lg:text-left space-y-8">
            <div className="lg:flex gap-6 lg:space-y-0 items-center">
                <div className="space-y-6">
                    <h1 className="text-[1.5rem] md:text-[2.8rem] lg:text-[3.75rem] leading-[1.2] font-semibold">Premium Solutions</h1>
                    <p>
                        In today's dynamic digital landscape, where technology is the cornerstone of success, our ICT Consulting firm emerges as a beacon of innovation, empowering businesses to transcend the boundaries of the ordinary and embrace the extraordinary. With our unwavering commitment to premium quality, we seamlessly integrate cutting-edge ICT solutions into your business fabric, propelling you towards a future of limitless possibilities, where efficiency, productivity, and growth know no bounds.
                    </p>
                </div>
                <img src={SphereIcon} alt="sphere" loading="lazy" className="mx-auto max-w-[600px] w-full" />
            </div>

            <div className="lg:flex flex-row-reverse gap-6 lg:space-y-0 items-center">
                <div className="space-y-6">
                    <h1 className="text-[1.5rem] md:text-[2.8rem] lg:text-[3.75rem] leading-[1.2] font-semibold">We are Preferred</h1>
                    <p>
                        Brands choose us for the unparalleled fusion of innovation and reliability. We stand as a beacon of trust, translating visions into exceptional digital experiences. Our adept team of experts craft tailor-made solutions, ensuring every brand journey is unique and impactful.
                    </p>
                    <div className="flex justify-center lg:justify-start items-center gap-4 text-[#FFAB20]">
                        <Link children={"Read More"} />
                        <ArrowRight />
                    </div>
                </div>
                <img src={SphereIcon} alt="sphere" loading="lazy" className="mx-auto w-full max-w-[600px]" />
            </div>

            <div>
                <BuildingTrust />
            </div>
        </div>
    </section>
  )
}

export default ClientTestimonies