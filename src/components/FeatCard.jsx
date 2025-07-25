import React from 'react'
import FadeContent from "../reactbits/FadeContent/FadeContent"
const FeatCard = ({imgURL, text}) => {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
   <div className="a flex gap-2 flex-col items-center w-full h-25 justify-center">
          <img className="w-7" src={imgURL} alt="" />
          <h2 className="text-black text-xs leading-4 text-center font-semibold opacity-75">{text}</h2>
        </div>
</FadeContent>
   
  )
}

export default FeatCard
