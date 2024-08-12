import Logo from "./Logo";
import Marquee from "./Marquee";

const Hero = () => {
  return (
    <section>
      <div>
        <div className="flex flex-col md:flex-row">

          <div className="md:w-1/2 border-x border-t border-black">
            <div className="relative p-5">
              <Logo />
            </div>

            <Marquee />

            <div className="p-5 max-w-full">
              <img src="/images/main-image-2.jpg" alt="Ujjo Pepper" className="h-auto w-full object-cover" />
            </div>
          </div>

          <div className="md:w-1/2">
            <h1 className="border md:border-l-0 border-black px-[100px] py-[20px] font-[400] text-[58px] leading-[65px] tracking-[0.5px] text-center uppercase text-black">
              THE FIRST HOT SAUCE MADE FOR COFFEE
            </h1>
            
            <div className="p-5 border-x md:border-0 md:border-r border-black max-w-full">
              <img src="/images/main-image.jpg" alt="Ujjo Pepper in hand" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
