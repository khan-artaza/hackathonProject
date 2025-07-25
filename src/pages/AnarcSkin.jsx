import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { asyncGetProduct } from '../store/actions/ProductAction'
import FadeContent from '../reactbits/FadeContent/FadeContent'

const AnarcSkin = () => {
 const dispatch = useDispatch()
 const product = useSelector((state)=>state.product.data)
  console.log(product);
  useEffect(()=>{
    dispatch(asyncGetProduct())
  },[])

  const render = product.map((product)=> {
    return (
      <FadeContent blur={true} duration={300} easing="ease-out" initialOpacity={0}>
   <Link to={`/anarcskindetail/${product.title}`}>
      <div className="skinCard shadow-md rounded border-zinc-200 rounded-b-3xl w-full">
          <img src={product.images[0].src} alt="" />
          <div className='px-4 bg-zinc-100 py-1 '>
          <h2 className="title font-semibold text-[#ED4C22] text-xl">{product.title}</h2>
          <h3 className='price text-xl font-semibold opacity-70'>₹ {Math.floor(product.variants[0].price)}</h3>
          </div>
      </div>
      </Link>
</FadeContent>
     
    )
  })

  
  return (
    <>
      <section className="text-white w-full h-screen fixed block z-0">
       <img className='w-full h-screen object-cover object-top' src="/images/skintop.jpg" alt="" />
        <div className="blackoverlay w-full h-full bg-gradient-to-t from-black to-transparent absolute bottom-0"></div>

        
      </section>
      <section className="w-full z-20 bg-white text-black absolute rounded-3xl top-[400px] md:top-[600px] pt-12">

      <div className="skinProductsCardsContainer w-full grid grid-cols-2 lg:grid-cols-3 gap-4 md:px-14 md:gap-8">
        {(product && product.length > 0) ?  render : <h2>Loading...</h2>}
        
      </div>

        <Footer/>
      </section>
    </>
  )
}

export default AnarcSkin
