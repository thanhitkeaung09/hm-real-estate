import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropright
      // className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropleft
      // className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const Card = ({ data }) => {
  const slider = React.useRef(null);
  // console.log(data)
  const [settings, setSetting] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  });
  const [i, setI] = useState(0);
  return (
    <div className="">
      <div className="border hover:border-primary-soft grid grid-cols-1 md:grid-cols-2 pr-3 py-3 rounded-sm mx-2 items-center mb-4 gap-3 ">
        <div className="ps-3">
          <div className="relative group">
            <img
              src={data?.images[i]}
              alt="Category Image"
              className="w-full h-[170px] object-cover mb-3"
            />
            <div className="bg-[#4a3f1e26]  items-center justify-center w-full h-full top-0 rounded border absolute hidden group-hover:flex transition-all duration-150">
              <Tooltip title="View Detail" arrow>
                <Button>
                  <NavLink to={`/products/detail/${data.id}`}>
                    <FaEye className="text-primary-soft text-sm" />
                  </NavLink>
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="container">
            <Slider ref={slider} {...settings}>
              {data?.images.map((el, index) => {
                return (
                  <div key={index} className=" p-1">
                    <div
                      className={`border hover:border-primary-soft ${
                        index == i && "border-primary-soft"
                      }`}
                    >
                      <img
                        src={el}
                        className="w-full h-[50px]"
                        onClick={() => setI(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="ps-3">
          <p className="mb-3 text-sm uppercase text-primary-dark transition-all duration-100">
            {data.product_condition}
          </p>
          <h2 className="text-sm md:text-sm font-semibold mb-2">{data.name}</h2>
          {/* <p className="text-gray-700 mb-3">{data.content}</p> */}
          <p className="text-gray-700 mb-3 text-sm md:text-sm">
            {" "}
            Category : {data.vehicle_category}
          </p>
          <p className="text-gray-700 mb-3 text-sm md:text-sm">
            Plate Number : {data.plate_number}
          </p>
          <p className="text-gray-700 mb-3 text-sm md:text-sm">Model : {data.model}</p>
          <p className="text-gray-700 mb-3 text-sm md:text-sm">Region : {data.license_region}</p>
          <p className="text-gray-700 mb-3 text-sm md:text-sm">
            {" "}
            Price :{" "}
            <span
              className={`${data.discount_price ? "line-through" : ""} text-sm md:text-sm me-2`}
            >
              {data.is_usd ? "$" + data.price : data.price + " lakh"}
            </span>
            <span className="text-red-400 text-sm md:text-sm">
              {data.is_usd ? "$" + data.discount_price : data.discount_price}
            </span>
          </p>
          <p className="text-gray-700 mb-3"></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
