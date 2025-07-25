import React from 'react'

const MoreFor = ({imgURL, text}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
            <img className="w-12" src={imgURL} alt="" />
            <h3 className="text-black opacity-75 font-bold text-center">{text}</h3>
    </div>
  )
}

export default MoreFor
