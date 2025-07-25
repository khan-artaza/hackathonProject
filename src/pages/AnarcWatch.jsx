import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asynGetAnarcWatch } from "../store/actions/AnarcWatchAction";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import FeatCard from "../components/featCard";
import AutoCaraousel from "../components/AutoCaraousel";
import MoreFor from "../components/MoreFor";
import SplitText from "../reactbits/SplitText/SplitText"



const AnarcWatch = () => {

  const [z, setZ] = useState(0)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynGetAnarcWatch());
  }, []);
  
  const anarcWatch = useSelector((state) => state.anarcWatch.data.product);
  console.log(anarcWatch);
  
  const [variants, setVariants] = useState(anarcWatch? anarcWatch.variants[0]  : "")
console.log(variants);

  function variantsHandler(){
    if(z==0){
      anarcWatch && setVariants(anarcWatch.variants[0])
    }
    else if(z==4){
      anarcWatch && setVariants(anarcWatch.variants[1])
    }
    else if(z==8){
      anarcWatch && setVariants(anarcWatch.variants[2])
    }
    else{
      console.log("error");
    }
  }

  useEffect(()=>{
    variantsHandler()
  },[z])

  let images = [];

  for (let i = z ; i <= z+3; i++) {
    anarcWatch && images.push(anarcWatch.images[i].src);
  }

  console.log(images);

  return (
    <div className="hii">
      {
        (anarcWatch) ? <>
        <SplitText
            text={anarcWatch.title}
            className="text-5xl md:text-6xl mt-35 px-4 md:pl-12 md:w-1/2 text-[#ed4c22] font-extrabold"
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
        
      <div className="w-full">
        <ImageCarousel images={images} />
      </div>

      <div className="colourOption p-6 md:p-10">
        
        <h2 className="text-black text-sm font-semibold"><span className="opacity-85 md:text-lg ">Choose colour option : </span><span className=" opacity-100 md:text-xl">{variants.title}</span></h2>
        <div className="flex items-center gap-4">

        <div onClick={()=>setZ(0)} className="w-1/6 lg:w-1/10 rounded aspect-square border-2 active:border-[#ed4c22]">
          <img className="w-full h-full object-cover object-center bg-zinc-200" src={anarcWatch.images[0].src} alt="" />
        </div>
        <div onClick={()=>setZ(4)} className="w-1/6 lg:w-1/10 rounded aspect-square border-2 active:border-[#ed4c22]">
          <img className="w-full h-full object-cover object-center bg-zinc-200" src={anarcWatch.images[4].src} alt="" />
        </div>
        <div onClick={()=>setZ(8)} className="w-1/6 lg:w-1/10 rounded aspect-square border-2 active:border-[#ed4c22]">
          <img className="w-full h-full object-cover object-center bg-zinc-200" src={anarcWatch.images[8].src} alt="" />
        </div>
        </div>
      </div>

      <div className="price px-6 md:px-10">
        
      <h3 className="text-black text-3xl opacity-75 font-bold">
            ₹ {Math.floor(variants.price)}
            </h3>
            <p className="text-black text-sm opacity-60 font-semibold">MRP (inclusive of all taxes)</p>

            <button className="bg-[#ed4c22] px-4 py-2 rounded-3xl mt-2 text-lg font-semibold md:text-xl md:mt-4">Buy Now</button>

      </div>

      <div className="pros grid grid-cols-3 mx-auto p-6 w-[80%] gap-4">
       
        <FeatCard imgURL="images/verified.png" text="1 Year warranty"/>
        <FeatCard imgURL="images/exchange.png" text="7-day Replacement"/>
        <FeatCard imgURL="images/free-delivery.png" text="Free Delivery"/>
        <FeatCard imgURL="images/coin.png" text="COD Available"/>
        <FeatCard imgURL="images/credit-card.png" text="No cost EMI"/>
        <FeatCard imgURL="images/headphones-with-mic.png" text="Customer Support (Mon-Sun)"/>
      </div>

      <div className="keyHighlights w-full border-b-1 border-zinc-300 pb-6">

      <SplitText
            text="Key Highlights"
            className="text-4xl text-black font-[roman] tracking-tighter px-6 md:text-6xl md:px-8"
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
        
        <img className="w-[80%] mx-auto mt-4 md:w-[60%]" src="/images/keyHighlights.webp" alt="" />
      </div>
      
      <div className="feature py-6 flex items-center flex-col gap-4 border-b-1 border-zinc-300">
      <SplitText
            text="Designed"
            className="text-black leading-none text-center text-4xl md:text-6xl"
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
            text=" to be"
            className="text-black leading-none text-center text-4xl md:text-6xl"
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
            text="different"
            className="text-black leading-none text-center italic font-[roma] text-5xl md:text-7xl"
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
      

        <img src="/images/desdiff.webp" alt="" />
        <div className="lg:w-1/4 w-1/2">
        <SplitText
            text={`Octagonal Stainless Steel dial Diamond-cut Crown with haptics Breathable Liquid Silicone strap`}
            className="text-[#ed4c22] font-semibold text-xl md:p-10"
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
      <div className="feature py-8 md:py-12 flex items-center flex-col gap-4 border-b-1 border-zinc-300">

        <SplitText
            text="Powered"
            className="text-black leading-none text-center text-4xl md:text-6xl"
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
            text="by"
            className="text-black leading-none text-center text-4xl md:text-6xl"
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
            text="HiSilicon"
            className="text-black leading-none text-center text-4xl md:text-6xl"
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
       

    
        <img className="w-1/2 md:w-1/3 md:mt-8" src="/images/hisilicon.webp" alt="" />
        <div className="lg:w-1/4 w-1/2">
        <SplitText
            text="Lag-Free Navigation Reliable Tracking Power-Efficient Speed"
            className="text-[#ed4c22] font-semibold text-xl md:p-10"
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

      <div className="feature py-8 flex items-center flex-col gap-4 border-b-1 border-zinc-300">
      <SplitText
            text="Never"
            className="text-black leading-none text-center text-4xl md:text-6xl"
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
            text="a"
            className="text-black leading-none text-center text-4xl md:text-6xl"
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
            text="Dull moment"
            className="text-black leading-none text-center italic font-[roma] text-5xl md:text-7xl"
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
       
        <img className="w-full" src="/images/watchtr.webp" alt="" />

        <div className="cont flex flex-col gap-4">

       <div>
        <h2 className="text-[#ed4c22] font-bold text-xl md:text-2xl">700 nits</h2>
        <p className="text-black font-bold text-lg opacity-75">Peak brightness</p>
       </div>
       <div>
        <h2 className="text-[#ed4c22] font-bold text-xl md:text-2xl">60 Hz</h2>
        <p className="text-black font-bold text-lg opacity-75">Refresh rate</p>
       </div>
       <div>
        <h2 className="text-[#ed4c22] font-bold text-xl md:text-2xl">1.85" AMOLED</h2>
        <p className="text-black font-bold text-lg opacity-75">Always-On-Display</p>
       </div>

        </div>

          

      </div>
      <div className="feature py-8 flex items-center flex-col gap-4 border-b-1 border-zinc-300">
        <h2 className="text-black leading-none text-center text-4xl md:text-6xl">
          For Mind,  <br /> Body and <br /> <span className="italic font-[roma] text-5xl md:text-7xl">Bold Moves</span>
        </h2>
        
        <div className="px-10">
          <AutoCaraousel image={["/images/cr1.webp","/images/cr2.webp","/images/cr3.webp","/images/cr4.webp" ]}/>
        </div>

      </div>

      <div className="feature py-8 flex items-center flex-col gap-4 border-b-1 border-zinc-300">
        <h2 className="text-black leading-none text-center text-4xl md:text-6xl">
          Make every <br /> move <br /> <span className="italic font-[roma] text-5xl md:text-7xl">count</span>
        </h2>
        
        <div className="px-10">
          <AutoCaraousel image={["/images/cs1.webp","/images/cs2.webp","/images/cs3.webp","/images/cs4.webp" ]}/>
        </div>

      </div>

      <div className="feature py-8 flex items-center flex-col gap-4 border-b-1 border-zinc-300">
        <h2 className="text-black leading-none text-center text-4xl md:text-6xl">
          In the <br /> <span className="italic font-[roma] text-5xl md:text-7xl">Box</span>
        </h2>
        
        <div className="px-10 md:px-12">
         <img className="md:w-[70%] mx-auto" src="/images/itb.webp" alt="" />
        </div>

        <p className="text-xl font-semibold text-[#ed4c22] md:text-2xl md:p-10">Anarc smartwatch<br/>Charging cable<br/>USB to type C converter <br /> Welcome card</p>
      </div>

      <div className="feature py-8 flex items-center flex-col gap-4">
        <h2 className="text-black leading-none text-center text-4xl md:text-6xl">
          More for<br /> <span className="italic font-[roma] text-5xl md:text-7xl">You</span>

        </h2>
        
        <div className="px-10 py-6 w-[80%] lg:w-[50%] md:w-[60%] rounded-3xl bg-[#EDF0F6] grid grid-cols-2 gap-8"> 
          
          <MoreFor imgURL="/images/mf1.webp" text="Weather"/>
          <MoreFor imgURL="/images/mf2.webp" text="Music Control"/>
          <MoreFor imgURL="/images/mf3.webp" text="Stopwatch"/>
          <MoreFor imgURL="/images/mf4.webp" text="Camera Control"/>
          <MoreFor imgURL="/images/mf5.webp" text="Alarm"/>
          <MoreFor imgURL="/images/mf6.webp" text="Themes"/>
          <MoreFor imgURL="/images/mf7.webp" text="Always on Display"/>
          <MoreFor imgURL="/images/mf8.webp" text="Pin Lock"/>
          <MoreFor imgURL="/images/mf9.webp" text="Find my Phone"/>
          <MoreFor imgURL="/images/mf10.webp" text="Timer"/>
        </div>
         
      </div>
      
      </> : <h2>Loading...</h2>
      }
     
      <Footer />
    </div>
  );
};

export default AnarcWatch;
