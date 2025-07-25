import Footer from "../components/Footer";
import ScrollVelocity from "../reactbits/ScrollVelocity/ScrollVelocity";

const OurStory = () => {
  return (
    <div className="text-black mt-20 md:mt-35">
      <h1 className="text-center text-7xl md:text-9xl md:leading-21 leading-14 font-[rome] tracking-tighter">
        Chos <br /> is <br />{" "}
        <span className="italic text-[#ed4c22]">Creativity</span>
      </h1>

      <div className="mt-15 px-8 lg:px-14">
        <p className="text-start text-[40px] md:text-[45px] lg:text-4xl lg:font-semibold lg:font-[garnet] lg:leading-14  leading-10 font-[roma] tracking-tighter opacity-70 lg:text-center">
          They've told us the rules. <br /> Fall in line. Play it safe. <br />{" "}
          There's a place for everything. <br /> And everyone has a place.
        </p>
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

      <div className="w-fit mx-auto mt-8 md:mt-14 bg-[#ed4c22] text-white font-semibold px-4 py-2 text-3xl">
        <h2>#lowkeychaotic</h2>
      </div>

      <p className="text-4xl text-center mt-8 opacity-70 italic font-[rome] tracking-tighter  leading-none px-6 md:px-14 text-black lg:px-14 lg:w-[70vw] lg:mx-auto">
        Chaos challenges us to find new inspiration. And rejects the user manual
        of this-is-how-it-has-always-been-done. Do your own thing, it says. Find
        your own place. Chaos has its own mess and methods, The source of
        light-bulbs and bright Ideas. Crazy experiments and accidental genius.
        The world will always demand order, But creativity craves chaos.
      </p>

      <div className="six p-8 mt-16">
          <h3 className="text-lg text-center mt-6 font-semibold opacity-75 md:text-xl lg:w-[70vw] lg:mx-auto lg:text-xl">
            At Layers, we believe Chaos is a superpower. It helps you break out
            of moulds, do your own thing, find your own place.
          </h3>
        </div>

        <div className="quotes relative p-8 flex flex-col md:items-center gap-4">
          <img className="w-30 " src="/images/quote.png" alt="" />
          <p className="text-[40px] leading-none opacity-85 font-[roman] tracking-tighter italic md:text-center lg:text-[45px] lg:w-[70vw]">
            Without chaos there would be no innovation. Without chaos there
            would be no new ideas of greatness.
          </p>
          <p className="text-[40px] leading-none opacity-85 font-[roman] tracking-tighter italic md:text-center">
            Chaos unsettles those who can’t deal with it. We chase it.
          </p>
          <p className="text-[22px] font-semibold mt- text-[#ED4C22] md:text-center">
            Neel & Shlok, <span>Co-founders of Layers</span>
          </p>
        </div>
      <Footer />
    </div>
  );
};

export default OurStory;
