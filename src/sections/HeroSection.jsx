import React from "react";
import Carousel from "../reactbits/Carousel/CarouselVid";
import ChaoticCards from "../components/ChaoticCards";
import Footer from "../components/Footer";
import SplitText from "../reactbits/SplitText/SplitText";
const HeroSection = () => {
  return (
    <>
      <section className="text-white w-full h-screen fixed block z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover relative"
          src="/videos/vid1.webm"
        ></video>
        <div className="blackoverlay w-full h-full bg-black opacity-50 absolute bottom-0"></div>

        <div className="text absolute bottom-40 w-full px-4 md:px-8">
          <SplitText
            text="Design in London"
            className="text-5xl tracking-tighter font-[roman] md:text-[120px]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="start"
          />
          <SplitText
            text="Made for India"
            className="text-5xl tracking-tighter font-[roman] md:text-[120px] italic"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="start"
          />

          <SplitText
            text="Beauty and geometry come together to create Anarc’s unique octagonal
            dial."
            className="text-lg md:text-xl md:w-[70%] mt-8"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="lines"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="start"
          />

          <button className="text-zinc-800 block font-semibold bg-white px-4 py-2 rounded-3xl mt-2 md:mt-4 md:text-xl">
            Buy Now
          </button>
        </div>
      </section>
      <section className="w-full z-20 bg-white text-black absolute rounded-3xl top-[800px] lg:top-[900px] pt-12">
        <div className="one border-b-1 border-zinc-400 pb-6 md:pb-14 lg:pb-16">
          <div className="headText w-fit mx-auto">
            <SplitText
              text="Illuminate"
              className="font-[roman] block text-5xl md:text-7xl text-center  tracking-tighter font-thin "
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
            <br />
            <SplitText
              text="Every"
              className="font-[roman] text-5xl md:text-7xl text-center tracking-tighter font-thin "
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
            <br />
            <SplitText
              text="Details"
              className="font-[roman] italic text-5xl md:text-7xl text-center tracking-tighter font-thin "
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

          <img
            className="lg:w-1/2 lg:mx-auto"
            src="/images/watchtr.webp"
            alt=""
          />
          <SplitText
            text="A 700 nits display and 60Hz refresh rate that shines through even in
            bright sunlight."
            className="font-semibold px-4 text-center md:text-xl opacity-75"
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

        <div className="two mt-8 md:mt-12 flex flex-col gap-4 border-b-1 border-zinc-400 pb-8 lg:pb-12 lg:gap-8">
          <SplitText
            text="Power through 7 days of everyday use."
            className="font-[roman] text-5xl text-start md:text-center tracking-tighter font-thin px-6 opacity-85 leading-none md:text-7xl"
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

          <img
            src="/images/sitt.webp"
            className="aspect-square object-cover w-[90%] mx-auto rounded-3xl md:rounded-4xl md:w-[80%] lg:w-1/2"
            alt=""
          />
        </div>

        <div className="three border-b-1 border-zinc-400 py-8 lg:pb-14">
          <SplitText
            text="Flagship chipset that’s high on performance."
            className="font-[roman] text-5xl text-start md:text-center tracking-tighter font-thin px-6 opacity-85 leading-none md:text-7xl"
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

          <div className="flex justify-center">
            <Carousel
              baseWidth={400}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
          <div className=" w-[70%] mt-6 mx-auto md:text-center">
            <SplitText
              text="Forged in"
              className="text-3xl md:text-4xl font-semibold opacity-85"
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
              text="stainless steel."
              className="text-3xl md:text-4xl font-semibold opacity-85"
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
              text=" Unmatched design and a functional crown with haptics that keeps up
              with you."
              className="font-semibold text-xl mt-2 opacity-60"
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

        <div className="four py-8 lg:pb-12 flex flex-col gap-4 lg:gap-8">
          <SplitText
            text="Fitness, on point."
            className="font-[roman] text-5xl lg:text-center text-start tracking-tighter font-thin px-6 opacity-85 leading-none md:text-7xl"
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
            text="A 6 axis motion sensor tracks all your movements to give you
            accurate data at all times."
            className="font-[roman] text-[40px] lg:text-center leading-none text-start tracking-tighter font-thin px-7 italic mt-2 opacity-85"
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

          <img
            src="/images/hand.webp"
            className="aspect-square object-cover object-bottom  lg:w-1/2 w-[90%] mx-auto rounded-3xl md:text-4xl md:w-[80%]"
            alt=""
          />
        </div>

        <div className="five squaresContainer w-full lg:w-1/2 lg:mx-auto relative h-[160px]">
          <div className="mx-auto w-fit">
            <SplitText
              text="Powerful"
              className="text-3xl font-semibold"
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
            <SplitText
              text="Accurate"
              className="text-3xl font-semibold"
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
            <SplitText
              text="Unique"
              className="text-3xl font-semibold"
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
          <div className="left bg-[#ED4C22] w-[18%] h-13 left-0"></div>
          <div className="centre bg-[#ED4C22] text-center flex justify-center items-center h-13 mx-auto w-[80%]">
            <p className="text-3xl w-full font-bold text-white tracking-[1rem]">
              ANARC
            </p>
          </div>
          <div className="right bg-[#ED4C22] w-[18%] h-13 absolute right-0"></div>
        </div>

        <div className="six p-8 mt-18 flex justify-center ">
          <SplitText
            text=" At Layers, we believe Chaos is a superpower. It helps you break out
            of moulds, do your own thing, find your own place."
            className="text-lg text-center mt-6 lg:w-[60%] mx-auto lg:mt-8  font-semibold opacity-75 md:text-xl w-full"
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

        <div className="quotes p-8 flex flex-col gap-4 lg:gap-8 lg:justify-center lg:items-center">
          <img className="w-30" src="/images/quote.png" alt="" />
          <SplitText
            text="Without chaos there would be no innovation. Without chaos there
            would be no new ideas of greatness."
            className="text-[40px] lg:text-5xl leading-none opacity-85 font-[roman] lg:w-[70%] tracking-tighter italic md:text-center"
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
          <SplitText
            text="Chaos unsettles those who can’t deal with it. We chase it."
            className="text-[40px] lg:text-5xl leading-none opacity-85 font-[roman] lg:w-[70%] tracking-tighter italic md:text-center"
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

          <SplitText
            text=" Neel & Shlok,"
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
          <SplitText
            text="Co-founders of Layers"
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

        <div className="seven mt-4 border-b border-1 border-gray-400 pt-8">
        <SplitText
            text="Chaotic Essentials"
            className="text-5xl tracking-tighter font-[roman] text-center md:text-7xl"
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

          <ChaoticCards
            title="Mobile skins"
            para="Because naked phones are boring."
            imgpath="/images/mob1.jpg"
          />

          <ChaoticCards
            title="Arc Straps"
            para="Straps that match your vibe."
            imgpath="/images/straps.webp"
          />

          <ChaoticCards
            title="Laptop/Tablet Skins"
            para="Style your laptop or tablet effortlessly."
            imgpath="/images/laptopskins.webp"
          />
        </div>

        <div className="eight mt-32">
          <h1 className="text-center font-bold text-xl opacity-75 tracking-tighter mb-4 md:text-2xl">
            Featured in
          </h1>
          <div className="featuredin flex flex-col justify-center items-center w-40 mx-auto">
            <img
              className="w-30 object-cover"
              src="/images/GQ_Logo.png"
              alt=""
            />
            <img
              className=" object-cover"
              src="/images/Vogue_Logo_1.png"
              alt=""
            />
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default HeroSection;
