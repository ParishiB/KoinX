import React, { useEffect, useRef } from "react";

const Slide = ({ children }) => {
  return <div className="inline-flex">{children}</div>;
};

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("wheel", handleWheel);
      return () => {
        slider.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = Math.sign(e.deltaY);
    if (sliderRef.current) {
      if (delta > 0) {
        sliderRef.current.next();
      } else {
        sliderRef.current.prev();
      }
    }
  };

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px", // Adjust as needed
  };

  return (
    <div className="mt-10">
      <div className="carousel">
        <div className="carousel-inner" ref={sliderRef}>
          {[1, 2, 3].map((index) => (
            <Slide key={index}>
              <div className="w-64 h-56 bg-green-500 text-white flex items-center justify-center text-3xl rounded-md">
                {index}
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
