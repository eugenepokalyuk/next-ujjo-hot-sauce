import Marquee from "./Marquee";

const Hero = () => (
  <section>
    <div>
      <div className="flex">

        <div className="w-1/2 border-x border-t border-black">
          <div>
            <img src="/images/label.svg" alt="Ujjo" className="h-auto w-full object-cover" />
          </div>

          <Marquee />

          <div className="p-5 max-w-full">
            <img src="/images/main-image-2.jpg" alt="Ujjo Pepper" className="h-auto w-full object-cover" />
          </div>
        </div>

        <div className="w-1/2">
          <h1 className="border-y border-r border-black px-[100px] py-[20px] font-[400] text-[58px] leading-[65px] tracking-[0.5px] text-center uppercase text-black">
            THE FIRST HOT SAUCE MADE FOR COFFEE
          </h1>
          <div className="p-5 border-r border-black max-w-full">
            <img src="/images/main-image.jpg" alt="Ujjo Pepper in hand" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Hero;