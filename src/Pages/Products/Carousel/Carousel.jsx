import React, { useState, useEffect } from "react";
import Card from "./Card";
import Slider from "react-slick";
import { FetchFeatureProduct } from "../../../api/datas";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import { useGetfeatureProductQuery } from "../../../api/productApi";
import { Skeleton } from "@mui/material";
const Carousel = () => {
  const [settings, setSetting] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  const slider = React.useRef(null);
  const { data, isLoading, isError, isSuccess } = useGetfeatureProductQuery();

  let content = null;

  if (isLoading) {
    content = (
      <>
        <div className="">
          <div className="flex gap-3">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={700}
              height={200}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={700}
              height={200}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={700}
              height={200}
            />
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    content = (
      <>
        <div className="">Error Fetching Feature Products</div>
      </>
    );
  }

  if (isSuccess) {
    const { data: products } = data;
    console.log(products);
    content = (
      <>
        <div className="">
          <Slider ref={slider} {...settings}>
            {products.map((el, index) => {
              return (
                <div key={index} className="">
                  <Card data={el} />
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }

  return <div className=" mx-auto py-10 md:py-16">{content}</div>;
};

export default Carousel;
