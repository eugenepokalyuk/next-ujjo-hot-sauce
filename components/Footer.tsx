import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <div>
      <div className="border border-black flex flex-col md:flex-row items-center justify-between py-5 px-[93px] bg-[#cdfd3b] gap-5 md:gap-0">
        <Link href="#" target="_blank" className="font-[400] text-[15px] leading-[24px] tracking-[0.5px] text-center uppercase text-black hover:text-black/60">Privacy</Link>
        
        <span className="font-[400] text-[15px] leading-[24px] tracking-[0.5px] text-center uppercase text-black">ujjo llc, columbus oh, 43219</span>
        
        <Link href="https://t.me/wazzupjohnny" target="_blank" className="font-[400] text-[15px] leading-[24px] tracking-[0.5px] text-center uppercase text-black hover:text-black/60">Telegram</Link>
        
        <Link href="https://github.com/eugenepokalyuk" target="_blank" className="font-[400] text-[15px] leading-[24px] tracking-[0.5px] text-center uppercase text-black hover:text-black/60">GitHub</Link>
        
        <Link href="https://eugenepokalyuk.github.io/react-about/" target="_blank" className="font-[400] text-[15px] leading-[24px] tracking-[0.5px] text-center uppercase text-black hover:text-black/60">General</Link>
      </div>
    </div>
  </footer>
)
export default Footer;
