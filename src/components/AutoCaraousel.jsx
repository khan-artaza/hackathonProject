import React, { useEffect, useState } from "react";



const AutoCaraousel = ({image}) => {
    console.log(image);
    
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = image;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg md:w-[60%]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} className="w-full flex-shrink-0" alt={`Slide ${i + 1}`} />
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full bg-white ${
              currentIndex === i ? "opacity-100" : "opacity-50"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AutoCaraousel;
