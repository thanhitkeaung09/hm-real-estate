import React, { useState } from "react";
import Card from "../Category/Card";
import Slider from "react-slick";
import { useGetCategoriesQuery } from "../../api/categoryApi";
import { Skeleton } from "@mui/material";
const Category = ({ selectedLanguage }) => {
  const slider = React.useRef(null);

  const [settings, setSetting] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
  const { data, isSuccess, isLoading, isError } =
    useGetCategoriesQuery(selectedLanguage);
  let content = null;
  if (isError) {
    content = (
      <>
        <div className="">Category Fetch Error</div>
      </>
    );
  }

  if (isLoading) {
    content = (
      <>
        <div className="ml-1 hidden md:flex justify-center gap-2">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={300}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={300}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={300}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={300}
          />
        </div>

        <div className="ml-1 flex justify-center md:hidden gap-2">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={170}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={170}
          />
        </div>
      </>
    );
  }

  if (isSuccess) {
    const categoryData = data.data;
    content = (
      <>
        <Slider ref={slider} {...settings}>
          {categoryData.map((el, index) => {
            return (
              <div key={index} className="">
                <Card data={el} />
              </div>
            );
          })}
        </Slider>
      </>
    );
  }

  return (
    <div className="w-[95%] md:w-[85%] mx-auto pb-16 pt-5">
      <div className="relative flex items-center pb-10 md:pb-16">
        <div className="w-14 md:w-80 border border-primary-dark"></div>
        <h1 className="pl-1 w-[300px] md:w-[350px] text-lg  md:text-3xl font-bold text-gray-800">
          {selectedLanguage === "en" ? "Our Categories" : "အမျိုးအစားများ"}
        </h1>
        <div className="w-full border border-primary-dark me-3"></div>
        {/* Card Section */}
      </div>
      {content}
    </div>
  );
};

export default Category;
