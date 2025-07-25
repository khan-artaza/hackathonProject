import React, { useState } from "react";
import MobileBar from "../sections/MobileBar";
import { Link, NavLink } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger, useGSAP);


const Navbar = () => {
  const navbarRef = useRef()
  const logoRef = useRef()
  const textRef = useRef()

  useGSAP(()=>{
   const tl1 =  gsap.timeline({
      scrollTrigger : {
        scroller : "body",
        trigger : "body",
        start : "bottom 90%",
        scrub : true
      }
    })
tl1.from(navbarRef.current,{
  backgroundColor : "#00000040",
  borderRadius : "0px"
})

tl1.to(logoRef.current,{
  filter: "invert(1)"
})
tl1.to(textRef.current,{
  color: "black"
})
  })

  const [toggle, setToggle] = useState(false)

  const mobileHandler = () =>{
    setToggle(true)
  }

  return (
    <>
    <nav ref={navbarRef} className="px-4 text-white  py-2 flex justify-between bg-white rounded-full mx-auto w-[90%] mt-2 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 items-center">
     <Link to={"/"}><img
     ref={logoRef}
        className=" w-25"
        src="https://www.layers.shop/cdn/shop/files/logo-2.0.svg?v=1723535977&width=240"
        alt=""
      /></Link> 
      <div className="hidden md:block">
      <div ref={textRef} className="text-white font-semibold lg:font-thin gap-6 flex items-center">
      <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "px-4 text-[#ed4c22] py-1 rounded-3xl" : ""} to={"/"}>Home</NavLink>
        <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "px-4 text-[#ed4c22] py-1 rounded-3xl" : ""} to={"/anarc-watch"}>Anarc Watch</NavLink>
        <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "px-4 text-[#ed4c22] py-1 rounded-3xl" : ""} to={"/anarcSkin"}>Anarc Skin</NavLink>
        <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "px-4 text-[#ed4c22] py-1 rounded-3xl" : ""} to={"/our-story"}>Our Story</NavLink>
        <NavLink onClick={()=>setToggle(false)} className={(e)=>e.isActive? "px-4 text-[#ed4c22] py-1 rounded-3xl" : ""} to={"/login"}>Login</NavLink>
      </div>
      </div>
      

      <div className="flex items-center gap-2">
        <Link to={"/anarc-watch"}><button className="font-semibold bg-[#ED4C22] text-white px-3 py-1 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105">Buy Now</button></Link>
        
        <i onClick={mobileHandler} className="ri-menu-4-line text-2xl font-medium bg-[#ED4C22] text-white px-2 rounded-full py-1 md:hidden"></i>
      </div>

   

    {toggle && <MobileBar setToggle={setToggle}/>}
    </nav>
    </>
  );
};

export default Navbar;
