import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import Footer from "../components/Footer";
import Specs from "../components/Specs";

const AnarcSkinDetails = () => {
    const navigate = useNavigate()
  const params = useParams();
  const product = useSelector((state) => state.product.data);
  console.log(product);

  console.log(params.title);
  const title = params.title;
  const targetProduct = product.find((prod) => prod.title == title);
  console.log(targetProduct);
  const images = targetProduct.images.map((imgObj) => imgObj.src);
  console.log(images);

  return (
    <div>
        <i onClick={()=>navigate(-1)} className="ri-arrow-left-s-line bg-[#ed4c22] font-extrabold text-2xl text-white py-2 px-3 left-4  rounded-full absolute top-20 md:left-12"></i>
      <h2 className="text-5xl mt-35 md:px-12 md:py-2 px-4 md:text-6xl md:w-[70%] text-[#ed4c22] font-extrabold">
        {targetProduct.title}
      </h2>
      <div className="imgcrs w-full ">
        <ImageCarousel images={images} />
      </div>
      <div className="note px-6 mt-2 w-fit mx-auto">
        <p className="text-black text-center w-fit text-sm opacity-40 leading-4 font-semibold md:px-24">Note: The above mockup is provided solely as a visual reference for how the skin will appear on the device.</p>
      </div>
      <div className="details mt-8 px-6">
        <div className="price md:px-12">
            <h3 className="text-black text-3xl opacity-75 font-bold md:text-4xl">
            ₹ {Math.floor(targetProduct.variants[0].price)}
            </h3>
            <p className="text-black text-sm opacity-60 font-semibold">MRP (inclusive of all taxes)</p>

            <button className="bg-[#ed4c22] px-4 py-2 rounded-3xl mt-2 text-lg font-semibold md:mt-4 md:text-xl">Buy Now</button>

            <h2 className="text-black font-[rome] text-4xl tracking-tighter mt-4 md:text-5xl md:mt-8">Product Specification</h2>

            <div className="feature mt-4 flex flex-wrap gap-6 justify-start items-center md:gap-x-16">
                <Specs title="Colours" dets={targetProduct.title} />
                <Specs title="Material" dets="3M Vinyl" />
                <Specs title="Net Quantity" dets="1 Unit" />
                <Specs title="Box Contents" dets="2 x Anarc Skin" />
                <Specs title="Address" dets="16th, Office No 1617, Logix City Centre, Sector 32, Noida, Gautam Buddha Nagar, Uttar Pradesh, 201301"/>
                <Specs title="Email" dets="suport@layers.shop" />
            </div>
        </div>

      </div>

      <Footer/>
    </div>
  );
};

export default AnarcSkinDetails;
