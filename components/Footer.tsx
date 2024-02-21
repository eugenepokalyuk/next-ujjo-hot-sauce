import Link from 'next/link';

const Footer = () => (
  <footer className="footer">
    <div>
      <div className="border border-black flex items-center justify-between py-5 px-[93px] bg-[#cdfd3b]">
        <Link href="#" target="_blank" className="font-[400] text-[15px] leading-[24px] tracking-[0.5px] text-center uppercase text-black">Privacy</Link>
        <span className="font-[400] text-[15px] leading-[24px] tracking-[0.5px] text-center uppercase text-black">ujjo llc, columbus oh, 43219</span>
        <Link href="#" target="_blank" className="font-[400] text-[15px] leading-[24px] tracking-[0.5px] text-center uppercase text-black">instagram</Link>
      </div>
    </div>
  </footer>
)
export default Footer;