import Footer from "../components/Footer";
import ScrollVelocity from "../reactbits/ScrollVelocity/ScrollVelocity";
import SplitText from "../reactbits/SplitText/SplitText"
import FadeContent from "../reactbits/FadeContent/FadeContent";
const OurStory = () => {
  return (
    <div className="text-black mt-20 md:mt-35">
      <SplitText
            text="Chaos"
            className="text-center text-7xl md:text-9xl md:leading-21 leading-14 font-[rome] tracking-tighter"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
      <SplitText
            text="is"
            className="text-center text-7xl md:text-9xl md:leading-21 leading-14 font-[rome] tracking-tighter"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
      <SplitText
            text="Creativity"
            className="text-center text-7xl md:text-9xl md:leading-21 leading-14 font-[rome] tracking-tighter italic text-[#ed4c22]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
     
      <div className="mt-15 px-8 lg:px-14">
        <div className="sm:w-[60%] mx-auto">

      <SplitText
            text="They've told us the rules. Fall in line. Play it safe.
          There's a place for everything. And everyone has a place."
            className="text-start text-[40px] md:text-[45px] lg:text-4xl lg:font-semibold lg:font-[garnet] lg:leading-14  leading-10 font-[roma] tracking-tighter opacity-70 lg:text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
       
        </div>
      </div>

      <img
        className="mt-8 w-full lg:w-1/2 lg:mx-auto lg:rounded-4xl h-[60vh] lg:h-[80vh] lg:object-center object-cover"
        src="/images/sitt.webp"
        alt=""
      />
      <div className="textanim mt-8 md:mt-10">
        <ScrollVelocity
          texts={["Agents of Agents Of"]}
          velocity={50}
          className="custom-scroll-text text-black md:text-5xl font-[garnet] opacity-80"
        />
        <ScrollVelocity
          texts={["Chaos Chaos"]}
          velocity={-50}
          className="custom-scroll-text md:text-5xl text-[#ed4c22] font-[garnet]"
        />
      </div>
      
      <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0}>
      <div className="w-fit mx-auto mt-8 md:mt-14 bg-[#ed4c22] text-white font-semibold px-4 py-2 text-3xl">
        <h2>#lowkeychaotic</h2>
      </div>
</FadeContent>

<div className="mx-auto w-fit">
<SplitText
            text=" Chaos challenges us to find new inspiration. And rejects the user manual
        of this-is-how-it-has-always-been-done. Do your own thing, it says. Find
        your own place. Chaos has its own mess and methods, The source of
        light-bulbs and bright Ideas. Crazy experiments and accidental genius.
        The world will always demand order, But creativity craves chaos."
            className="text-4xl text-center mt-8 opacity-70 italic font-[rome] tracking-tighter  leading-none px-6 md:px-14 text-black lg:px-14 lg:w-[70vw] lg:mx-auto"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
     
</div>
      
      <div className="six p-8 mt-16">
        <div className="mx-auto w-fit">
        <SplitText
            text=" At Layers, we believe Chaos is a superpower. It helps you break out
            of moulds, do your own thing, find your own place."
            className="text-lg text-center mt-6 font-semibold opacity-75 md:text-xl lg:w-[70vw] lg:mx-auto lg:text-xl"
            delay={100}
            duration={0.1}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
        </div>
      
          
        </div>

        <div className="quotes relative p-8 flex flex-col md:items-center gap-4">
          <img className="w-30 " src="/images/quote.png" alt="" />
          <div className="mx-auto w-fit">
        <SplitText
            text=" Without chaos there would be no innovation. Without chaos there
            would be no new ideas of greatness."
            className="text-[40px] leading-none opacity-85 font-[roman] tracking-tighter italic md:text-center lg:text-[45px] lg:w-[70vw]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
        </div>
        <div className="mx-auto w-fit">
        <SplitText
            text=" Chaos unsettles those who can’t deal with it. We chase it."
            className="text-[40px] leading-none opacity-85 font-[roman] tracking-tighter italic md:text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
        </div>
        <div className="mx-auto w-fit">
        <SplitText
            text=" Neel & Shlok, Co-founders of Layers"
            className="text-[22px] font-semibold mt- text-[#ED4C22] md:text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
        </div>
         
        </div>
      <Footer />
    </div>
  );
};

export default OurStory;
