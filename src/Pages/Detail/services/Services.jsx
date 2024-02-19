import React, { useEffect, useState, useRef } from "react";
import { FetchServices } from "../../../api/datas";
import Slider from "react-slick";
import ReactDOM from "react-dom";
import { IoCloseCircleSharp } from "react-icons/io5";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Services = ({ show }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef(null);
  const [services, setServices] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount((prevCount) => prevCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };
  const handleServiceFetch = async () => {
    const response = await FetchServices();
    setServices(response.data.data);
  };
  useEffect(() => {
    handleServiceFetch();
  }, []);
  // console.log(services);
  return (
    <div className="bg-white">
      <div className="text-center py-3">
        <button className="mx-auto" onClick={() => show(false)}>
          <IoCloseCircleSharp className="text-3xl text-primary-dark" />
        </button>
      </div>

      <Carousel autoPlay={true} swipeable>
        {services.map((el, index) => {
          return (
            <div key={index}>
              <div className="relative">
                <p
                  className="text-black absolute bottom-32 left-8"
                  dangerouslySetInnerHTML={{ __html: el.description }}
                ></p>
                <img src={el.photo} />
              </div>
              <a href={el.link} className="legend">
                {el.name}
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Services;
