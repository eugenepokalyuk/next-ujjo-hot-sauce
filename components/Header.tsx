import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header>
    <div>
      <div className="border-x border-t border-black flex flex-col md:flex-row items-center justify-between px-[20px] py-5 md:py-0 gap-5 md:gap-0">

        <button className="font-[400] text-[14px] leading-[22px] tracing-[0.5px] uppercase px-[44px] py-[15px] bg-[#fb4b4d] text-white hover:brightness-90">Go Back</button>

        <nav>
          <ul className="flex flex-col md:flex-row items-center gap-[30px]">
            <li>
              <Link href="#" className="font-[400] px-[44px] py-[15px] text-[14px] leading-[22px] tracking-[0.5px] uppercase text-black hover:outline outline-black">Story</Link>
            </li>
            
            <li>
              <Link href="#" className="font-[400] px-[44px] py-[15px] text-[14px] leading-[22px] tracking-[0.5px] uppercase text-black hover:outline outline-black">Shop</Link>
            </li>
            
            <li>
              <Link href="#" className="font-[400] px-[44px] py-[15px] text-[14px] leading-[22px] tracking-[0.5px] uppercase text-black flex items-center gap-[30px]">
                <div className='w-[17px] h-[17px] border border-black rounded-full bg-[#FB4B4D]' />
            
                <Image
                  src="/images/logo.svg"
                  alt="Ujjo Logo"
                  width={61}
                  height={70}
                />
                
                <div className='w-[17px] h-[17px] border border-black rounded-full bg-[#8B83F6]' />
              </Link>
            </li>
            
            <li>
              <Link href="#" className="font-[400] px-[44px] py-[15px] text-[14px] leading-[22px] tracking-[0.5px] uppercase text-black hover:outline outline-black">Contact</Link>
            </li>
            
            <li>
              <Link href="#" className="font-[400] px-[44px] py-[15px] text-[14px] leading-[22px] tracking-[0.5px] uppercase text-black hover:outline outline-black">Wholesale</Link>
            </li>
          </ul>
        </nav>

        <button className="font-[400] text-[14px] leading-[22px] tracing-[0.5px] uppercase px-[44px] py-[15px] bg-[#fb4b4d] text-white hover:brightness-90">Clone</button>
      </div>
    </div>
  </header>
)

export default Header;
