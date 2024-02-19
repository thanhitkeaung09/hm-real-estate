import React, { useState, useEffect } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import { useGetfeatureproductsQuery } from "../../api/featureProductApi";
import { Skeleton } from "@mui/material";

const Feature = ({ selectedLanguage }) => {
  const { data, isError, isLoading, isSuccess } =
    useGetfeatureproductsQuery(selectedLanguage);

  let content = null;
  if (isError) {
    content = (
      <>
        <div className="">Product Fetch Error</div>
      </>
    );
  }

  if (isLoading) {
    content = (
      <>
        <div className="hidden md:block">
          <div className="hidden md:flex justify-center gap-2 mb-2">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={900}
              height={300}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={900}
              height={300}
            />
          </div>
          <div className="hidden md:flex justify-center gap-2">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={900}
              height={300}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={900}
              height={300}
            />
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex justify-center">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={900}
              height={500}
            />
          </div>
        </div>
      </>
    );
  }

  if (isSuccess) {
    const products = data.data;
    content = (
      <>
        <div className="grid grid-cols-2">
          {products.map((el, index) => {
            return (
              <div key={index} className="col-span-2 md:col-span-1">
                <Card data={el} />
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <div className="w-[95%] md:w-[85%] mx-auto pb-16">
      <div className="flex justify-between items-center pb-12 md:pb-16">
        <div className="relative flex items-center  ">
          <div className=" w-6 md:w-52 border border-primary-dark"></div>
          <h1 className="pl-1 w-[158px] md:w-[261px] text-lg md:text-3xl font-bold text-gray-800 me-3">
            {selectedLanguage === "en"
              ? "Feature Products"
              : "ထုတ်ကုန်ပစ္စည်းများ"}
          </h1>
        </div>
        <div className=" w-full border border-primary-dark me-3"></div>

        <NavLink
          to="/products"
          className="text-gray-600 text-sm hover:text-primary-dark w-[435px] md:w-[200px]"
        >
          {selectedLanguage === "en" ? "See All" : "ပိုမိုကြည့်ရှုရန်"}
        </NavLink>
      </div>

      <div className="">
        <div className="flex justify-between">
          <div className=""></div>
          <div className=""></div>
        </div>
        {content}
      </div>
    </div>
  );
};

export default Feature;
