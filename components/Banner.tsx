import Logo from "./Logo";

const Banner = () => (
  <div>
    <div>
      <div className="border-x border-black relative">
        <div className="relative">
          <img src="/images/frame-image-3.svg" alt="Ujjo Banner" className="w-full max-w-full h-auto object-cover md:mt-[-190px]" />

          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:mt-[50px] md:scale-125">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Banner;