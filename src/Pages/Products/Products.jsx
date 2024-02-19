import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { FetchProducts, FetchParentCategory } from "../../api/datas";
import Carousel from "./Carousel/Carousel";
import { useGetCategoriesQuery } from "../../api/categoryApi";
import { Skeleton } from "@mui/material";

import {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
} from "../../api/productApi";

const Products = ({ selectedLanguage }) => {
  const { data, isError, isLoading, isSuccess } = useGetCategoriesQuery();
  const [categoryId, setCategoryId] = useState(null);

  const {
    data: productData,
    isError: productError,
    isLoading: productLoading,
    isSuccess: productSuccess,
    refetch: productRefresh,
  } = useGetProductsQuery({ lang: selectedLanguage, id: categoryId });

  const { data: onchangeData, isSuccess: onChangeSuccess } =
    useGetProductsByCategoryQuery(categoryId, selectedLanguage);

  let content = null;
  if (isError) {
    content = (
      <>
        <div className=""> Category Fetch Error</div>
      </>
    );
  }

  if (isLoading) {
    content = (
      <>
        <div className="">Loading...</div>
      </>
    );
  }

  if (isSuccess) {
    const category = data.data;
    content = (
      <>
        <select
          className="w-full outline-none bg-[#f7df99a3]"
          name=""
          id=""
          // onChange={(e) => handleCategoryChange(e.target.value)}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option key={0} value={"all"} selected>
            {selectedLanguage === "en" ? "All" : "အားလုံး"}
          </option>
          {category.map((el) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>
      </>
    );
  }

  let productContent = null;
  if (productError) {
    productContent = (
      <>
        <div className="">Product Fetching Error</div>
      </>
    );
  }

  if (productLoading) {
    productContent = (
      <>
        <div className="">
          <div className="flex items-center gap-5">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={1035}
              height={300}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={1035}
              height={300}
            />
          </div>
          <div className="flex items-center gap-5 mt-5">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={1035}
              height={300}
            />
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={1035}
              height={300}
            />
          </div>
        </div>
      </>
    );
  }

  if (categoryId === null) {
    if (productSuccess) {
      const { data } = productData;
      productContent = (
        <>
          <div className="grid grid-cols-2">
            {data.map((el, index) => {
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
  } else {
    if (onChangeSuccess) {
      const { data } = onchangeData;
      productContent = (
        <>
          <div className="grid grid-cols-2">
            {data.map((el, index) => {
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
  }

  const handleCategoryChange = async (id) => {
    // console.log(id);
    try {
      if (id === "all") {
        await productRefresh();
        setCategoryId(null);
      } else {
        setCategoryId(id);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="w-[95%] md:w-[85%] mx-auto pt-5 md:py-16">
      <div className="">
        <Carousel />
        <div className="flex items-center justify-end mb-4">
          <p className="me-2 text-sm md:text-lg">
            {" "}
            {selectedLanguage === "en"
              ? "Filtered By Category :"
              : "အမျိုးအစာဖြင့်ရှာရန် :"}{" "}
          </p>
          <div className="md:w-[200px] px-2 py-1 bg-[#f7df99a3] rounded-xl">
            {content}
          </div>
        </div>
        {productContent}
      </div>
    </div>
  );
};

export default Products;
