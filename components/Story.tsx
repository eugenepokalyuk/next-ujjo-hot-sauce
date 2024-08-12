const Story = () => (
  <section>
    <div>
      <div className="border-x border-black flex flex-col md:flex-row">
        <div className="md:w-1/2 flex flex-col md:border-r border-black">
          <h2 className="mb-auto py-[50px] md:px-[80px] font-[400] text-[58px] leading-[65px] tracking-[0.5px] text-center uppercase text-black">
            the story behind the souce
          </h2>
          
          <img src="/images/story-image.gif" alt="" aria-hidden="true" className="h-auto max-w-full object-cover" />
        </div>
        
        <div className="md:w-1/2">
          <div className="py-[135px] md:aspect-square" style={{
            backgroundImage: "url('/images/frame-image-2.svg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}>
            <p className="m-auto max-w-[390px] font-[400] text-[16px] leading-[24px] tracking-[0.5px] text-center uppercase text-black mb-6">
              HELLO, I’M LAUREN AND AS A LIFELONG ADVENTUROUS EATER, I’VE TRIED A LOT OF CRAZY THINGS, BUT I NEVER THOUGHT
              HOT SAUCE IN COFFEE WAS A SANE OPTION UNTIL A FRIEND DARED ME TO TRY IT.
            </p>
        
            <p className="m-auto max-w-[390px] font-[400] text-[16px] leading-[24px] tracking-[0.5px] text-center uppercase text-black mb-6">
              AND IT SUCKED.
            </p>
            
            <p className="m-auto max-w-[390px] font-[400] text-[16px] leading-[24px] tracking-[0.5px] text-center uppercase text-black mb-6">
              BUT I WONDERED IF THERE WAS A WAY TO ADD SPICE TO MY COFFEE. WHEN THERE WAS NO EASY SOLUTION, UJJO WAS BORN.
            </p>
            
            <p className="m-auto max-w-[390px] font-[400] text-[16px] leading-[24px] tracking-[0.5px] text-center uppercase text-black">
              UJJO (OOO-JOE): THE WORD FOR “FIRE” IN KONKANI, SPOKEN ON THE WEST COAST OF INDIA, IS AN HOMAGE AND A LOVE
              LETTER TO MY DAD, AN INDIAN IMMIGRANT WHO INSTILLED A FIRE IN MY PALATE – AND MY HEART – FROM THE VERY
              BEGINNING.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Story;
