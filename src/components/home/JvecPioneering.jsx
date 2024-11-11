import JvecPioneeringImg from "@/assets/images/jvec-pioneering.jpg"
import JvecPioneeringImgOptimized from "@/assets/images/jvec-pioneering.webp"
import RadianGrid from "@/assets/icons/blue-radian-grid.svg"
import Button from "../ui/button/button"


const JvecPioneering = () => {
  return (
    <section className="pages-vertical-padding relative overflow-hidden">
        <div
            className="absolute z-10 top-0 left-0 w-screen h-full"
            style={{
                backgroundImage: `url(${RadianGrid})`,
                backgroundPosition: '40% 55%',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
      ></div>
        <div className="container z-20 relative font-bold space-y-12 lg:space-y-0 text-center lg:text-right lg:flex flex-row-reverse gap-12 items-start">
            <div className="space-y-6 mx-auto lg:w-1/2">
                <h1 className="heading-font-sizes">JVEC - Pioneering Excellence in ICT Solution</h1>
                <p>
                    Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is the driving force behind our success. Excellence is our legacy, and we are proud to carry it forward. Watch the video to see how we are innovating to keep businesses on top of their games.
                </p>
                <Button children={"Get Started"} />
            </div>

            <div className="lg:max-w-[620px] lg:w-1/2 h-fit mx-auto">
            <picture>
                <source srcSet={JvecPioneeringImgOptimized} type="image/webp" />
                <img
                src={JvecPioneeringImg}
                alt="jvec pioneering Image"
                className="h-full object-cover md:rounded-md  w-full"
                loading="lazy"
                />
            </picture>
            </div>
        </div>
    </section>
  )
}

export default JvecPioneering