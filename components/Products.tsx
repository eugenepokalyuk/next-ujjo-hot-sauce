import Image from 'next/image';
import Marquee from "./Marquee";

const Products = () => (
  <section>
    <div className='border border-black'>
      <div className="border-b border-black px-[30px] py-[60px] flex items-center justify-between">
        <div className='w-[225px] h-[156px]' style={{ backgroundImage: "url('/images/scorpion-left.svg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
        <h2 className="mx-auto max-w-[785px] font-[400] text-[65px] leading-[73px] tracking-[0.5px] text-center uppercase text-black">
          THROW SOME LAVA IN YOUR JAVA
          <div />
        </h2>
        <div className='w-[225px] h-[156px]' style={{ backgroundImage: "url('/images/scorpion-right.svg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
      </div>

      <div className="relative pt-5">
        <div className={`absolute left-[50%] top-[20px] flex items-start justify-between w-[100%] -translate-x-1/2 p-5`}>
          <Image src="/images/flame-icon-small.svg" width="58" height="58" alt='flame icon' />
          <Image src="/images/flame-icon.svg" width="58" height="88" alt='flame icon' />
          <Image src="/images/flame-icon.svg" width="58" height="88" alt='flame icon' />
          <Image src="/images/flame-icon-small.svg" width="58" height="58" alt='flame icon' />
        </div>

        <ul className="flex justify-between flex-wrap px-5 pb-5 gap-[26px]">
          <li>
            <article className="flex flex-col justify-end p-[22px] pt-[100px] min-h-[658px]" style={{
              backgroundImage: "url('/images/frame-image.svg')",
              backgroundPosition: "bottom center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="mb-[14px] font-[400] text-[18px] leading-[28px] tracking-[0.5px] text-center uppercase text-black">tangy and tingly</div>
              <h3 className="mb-[14px] font-[400] text-[32px] leading-[38px]  tracking-[0.5px] text-center uppercase text-black">LIGHT ROAST BLEND</h3>
              <img loading="lazy" src="/images/product1.png" alt="LIGHT ROAST BLEND" className="h-auto max-w-full object-cover" />
            </article>
          </li>

          <li>
            <article className="flex flex-col justify-end p-[22px] pt-[100px] min-h-[658px]" style={{
              backgroundImage: "url('/images/frame-image.svg')",
              backgroundPosition: "bottom center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="mb-[14px] font-[400] text-[18px] leading-[28px] tracking-[0.5px] text-center uppercase text-black">light & dark roast</div>
              <h3 className="mb-[14px] font-[400] text-[32px] leading-[38px]  tracking-[0.5px] text-center uppercase text-black">UJJO SAMPLER PACK</h3>
              <img loading="lazy" src="/images/product2.png" alt="UJJO SAMPLER PACK" className="h-auto max-w-full object-cover" />
            </article>
          </li>

          <li>
            <article className="flex flex-col justify-end p-[22px] pt-[100px] min-h-[658px]" style={{
              backgroundImage: "url('/images/frame-image.svg')",
              backgroundPosition: "bottom center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
              <div className="mb-[14px] font-[400] text-[18px] leading-[28px] tracking-[0.5px] text-center uppercase text-black">tangy and tingly</div>
              <h3 className="mb-[14px] font-[400] text-[32px] leading-[38px]  tracking-[0.5px] text-center uppercase text-black">DARK ROAST BLEND</h3>
              <img loading="lazy" src="/images/product3.png" alt="DARK ROAST BLEND" className="h-auto max-w-full object-cover" />
            </article>
          </li>
        </ul>

        <Marquee />

        <div className="p-5">
          <img loading="lazy" src="/images/poster-image.jpg" alt="" aria-hidden="true" className="h-auto max-w-full w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
)
export default Products;