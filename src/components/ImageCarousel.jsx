import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const nextSlide = () => setCurrent((current + 1) % total);
  const prevSlide = () => setCurrent((current - 1 + total) % total);

  return (
    <div className="relative w-full  max-w-xl mx-auto overflow-hidden rounded-xl shadow-md">
      {/* Images */}
      <div className="w-full h-94 md:h-125 md:mt-8">
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-[#ed4c22] p-2 rounded-full md:text-4xl "
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-[#ed4c22] p-2 rounded-full md:text-4xl"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full ${
              current === idx ? "bg-[#ed4c22]" : "bg-[#ed4c22]/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
