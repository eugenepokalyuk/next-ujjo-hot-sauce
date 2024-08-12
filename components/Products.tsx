import { FC } from 'react';
import Image from 'next/image';

import Marquee from "./Marquee";

type Product = {
  title: string;
  description: string;
  imageUrl: string;
}

type ProductProps = {
  product: Product;
}

const ProductItem: FC<ProductProps> = ({ product }) => {
  return (
    <li>
      <article className="flex flex-col justify-end p-[22px] pt-[100px] md:min-h-[658px]" style={{
        backgroundImage: "url('/images/frame-image.svg')",
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>
        <div className="mb-[14px] font-[400] text-[18px] leading-[28px] tracking-[0.5px] text-center uppercase text-black">{product.description}</div>
        
        <h3 className="mb-[14px] font-[400] text-[32px] leading-[38px]  tracking-[0.5px] text-center uppercase text-black">{product.title}</h3>
        
        <img src={product.imageUrl} alt="LIGHT ROAST BLEND" className="h-auto max-w-full object-cover" loading="lazy" />
      </article>
    </li>
  )
}

const Products = () => {
  const products = [
    {
      title: "LIGHT ROAST BLEND",
      description: "Tangy and tingly",
      imageUrl: "/images/product1.png",
    },
    {
      title: "UJJO SAMPLER PACK",
      description: "Light & dark roast",
      imageUrl: "/images/product2.png",
    },
    {
      title: "DARK ROAST BLEND",
      description: "Tangy and tingly",
      imageUrl: "/images/product3.png",
    }
  ];
  
  return (
    <section>
      <div className='border border-black'>
        <div className="border-b border-black px-[30px] py-[60px] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          <div className='w-[225px] h-[156px]' style={{ backgroundImage: "url('/images/scorpion-left.svg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
  
          <h2 className="mx-auto md:max-w-[785px] font-[400] text-[65px] leading-[73px] tracking-[0.5px] text-center uppercase text-black">
            THROW SOME LAVA IN YOUR JAVA
            <div />
          </h2>
          
          <div className='w-[225px] h-[156px]' style={{ backgroundImage: "url('/images/scorpion-right.svg')", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} />
        </div>

        <div className="relative pt-5">
          <div className={`max-md:hidden absolute left-[50%] top-[20px] flex items-start justify-between w-[100%] -translate-x-1/2 p-5`}>
            <Image src="/images/flame-icon-small.svg" width="58" height="58" alt='flame icon' />
            
            <Image src="/images/flame-icon.svg" width="58" height="88" alt='flame icon' />
            
            <Image src="/images/flame-icon.svg" width="58" height="88" alt='flame icon' />
            
            <Image src="/images/flame-icon-small.svg" width="58" height="58" alt='flame icon' />
          </div>

          <ul className="flex justify-between flex-wrap px-5 pb-5 gap-[26px]">
            {products.map((product: Product, index) => (
              <ProductItem key={index} product={product} />
            ))}
          </ul>

          <Marquee />

          <div className="p-5">
            <img loading="lazy" src="/images/poster-image.jpg" alt="" aria-hidden="true" className="h-auto max-w-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products;
