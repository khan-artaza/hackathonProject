import React from 'react'

const Specs = ({title, dets}) => {
  return (
    <div className="featCard w-1/3">
    <h3 className="text-lg font-semibold text-[#ed4c22] md:text-xl">{title}</h3>
    <p className="text-black opacity-80 text-sm font-semibold md:text-lg md:opacity-70">{dets}</p>
</div>
  )
}

export default Specs
