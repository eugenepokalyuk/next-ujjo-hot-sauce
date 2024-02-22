const MarqueeItem = () => {
    return (
        <div className="flex items-center px-[15px] whitespace-nowrap shrink-0 marquee-animation">
            put some fire in your belly
            <img src="/images/pepper.svg" alt="" aria-hidden="true" className="h-auto max-w-full object-cover ml-[30px]" />
        </div>
    );
}

const Marquee = () => (
    <div className="py-[23px] font-[400] text-[17px] leading-[26px] tracking-[0.5px] uppercase relative overflow-hidden border-y border-black">
        <div className="flex">
            {Array(5).fill(null).map((_, index) => (
                <MarqueeItem key={index} />
            ))}
        </div>
    </div>
)
export default Marquee;