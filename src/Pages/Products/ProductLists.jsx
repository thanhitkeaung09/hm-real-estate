import React from "react";
import EVBgCar from "../../assets/img/ev-car.jpg";
import { useState } from "react";
import Slider from "react-slick";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import FAQ from "../../component/Product/FAQ";

import Card from "../../component/Product/Card";
import { NavLink } from "react-router-dom";

const ProductLists = () => {
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  const [electric_cars, setElectricCars] = useState([
    {
      id: 1,
      name: "Rosina Casper Jr.",
      content:
        "Explore our collection of stylish and comfortable sedans. Perfect for city driving.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/121943/verna-exterior-right-front-three-quarter-101.jpeg?isig=0&q=80",
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true
    },

    {
      id: 2,
      name: "SUVs",
      content:
        "Discover our range of powerful and spacious SUVs. Ideal for family adventures.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144999/slavia-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true
    },

    {
      id: 3,
      name: "Electric Cars",
      content:
        "Experience the future with our eco-friendly electric cars. Go green with style.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true
    },
    {
      id: 4,
      name: "Sports Cars",
      content:
        "Feel the thrill of speed with our high-performance sports cars. Unleash your inner racer.",
      imageSrc:
        "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true
    }
  ]);

  const [hybird_cars, setHybridCars] = useState([
    {
      id: 1,
      name: "Rosina Casper Jr.",
      content:
        "Explore our collection of stylish and comfortable sedans. Perfect for city driving.",
      imageSrc:
        "https://imgd.aeplcdn.com/310x174/n/cw/ec/123185/grand-vitara-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true
    },

    {
      id: 2,
      name: "SUVs",
      content:
        "Discover our range of powerful and spacious SUVs. Ideal for family adventures.",
      imageSrc:
        "https://imgd.aeplcdn.com/310x174/n/cw/ec/124027/urban-cruiser-hyryder-exterior-right-front-three-quarter-72.jpeg?isig=0&q=80",
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true
    },

    {
      id: 3,
      name: "Electric Cars",
      content:
        "Experience the future with our eco-friendly electric cars. Go green with style.",
      imageSrc:
        "https://imgd.aeplcdn.com/310x174/n/cw/ec/115025/innova-hycross-exterior-right-front-three-quarter-73.jpeg?isig=0&q=80",
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true
    },
    {
      id: 4,
      name: "Sports Cars",
      content:
        "Feel the thrill of speed with our high-performance sports cars. Unleash your inner racer.",
      imageSrc:
        "https://imgd.aeplcdn.com/310x174/n/cw/ec/147201/invicto-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80",
      product_condition: "brand new",
      vehicle_category: "private",
      plate_number: "9E - 56614",
      model: "FIT",
      license_region: "MON",
      price: "1838",
      discount_price: "4746",
      is_usd: true
    }
  ]);

  const slider = React.useRef(null);

  return (
    <>
      <div className="w-full h-72 overflow-hidden">
        <img className="w-full h-full object-cover" src={EVBgCar} alt="" />
      </div>
      {/* Electric Cars */}
      <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
        <div className="my-20">
          <h1 className="text-3xl font-semibold text-gray-800 mb-5">
            Electric Cars in Myanamr
          </h1>
          <p className="text-gray-600">
            While the journey towards a fully electric Myanmar is still long,
            the initial steps taken are significant. With continued government
            support, infrastructure development, and rising public awareness,
            Myanmar's EV market has the potential to blossom in the coming
            years. This shift towards sustainable transportation promises
            cleaner air, reduced carbon emissions, and a brighter future for the
            country's environment and economy. As Myanmar takes charge in the EV
            race, it's exciting to imagine a future where electric vehicles hum
            along scenic roads, winding through ancient temples and vibrant
            cities, leaving behind a trail of clean air and hope for a greener
            tomorrow.
          </p>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <h1 className="text-2xl">Electric Cars</h1>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-20 mb-5 flex items-center justify-between">
                <button
                  onClick={() => slider?.current?.slickPrev()}
                  className="rounded-full p-2 bg-gray-200 hover:bg-gray-300"
                >
                  <HiOutlineArrowLeft />
                </button>
                <button
                  onClick={() => slider?.current?.slickNext()}
                  className="rounded-full p-2 bg-gray-200 hover:bg-gray-300"
                >
                  <HiOutlineArrowRight />
                </button>
              </div>
            </div>

            <Slider ref={slider} {...settings}>
              {electric_cars.map((el, index) => {
                return (
                  <div key={index} className="col-span-6">
                    <Card data={el} />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* Hybrid Cars */}
      <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
        <div className="">
          <div className="mb-10">
            <div className="my-10">
              <h1 className="text-2xl">Hybrid Cars</h1>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-20 mb-5 flex items-center justify-between">
                <button
                  onClick={() => slider?.current?.slickPrev()}
                  className="rounded-full p-2 bg-gray-200 hover:bg-gray-300"
                >
                  <HiOutlineArrowLeft />
                </button>
                <button
                  onClick={() => slider?.current?.slickNext()}
                  className="rounded-full p-2 bg-gray-200 hover:bg-gray-300"
                >
                  <HiOutlineArrowRight />
                </button>
              </div>
            </div>

            <Slider ref={slider} {...settings}>
              {hybird_cars.map((el, index) => {
                return (
                  <div key={index} className="col-span-6">
                    <Card data={el} />
                  </div>
                );
              })}
            </Slider>
            <div className="p-3">
              <NavLink
                className={"underline text-blue-500 cursor-pointer"}
                to=""
              >
                View All Hybrid Cars
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
        <div className="">
          <h1 className="text-2xl">FAQs on Electric Cars</h1>
        </div>
        <div className="flex justify-center">
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default ProductLists;
