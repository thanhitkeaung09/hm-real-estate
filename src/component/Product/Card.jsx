import React from "react";

const Product = ({ data }) => {
  return (
    <div className="border mx-3">
      <div className="">
        <img
          src={data.imageSrc}
          alt="Category Image"
          className="w-full h-full object-contain  mr-6"
        />
      </div>
      <div className="  bg-gray-100 rounded-sm  ">
        <div className="p-3">
          {/* model */}
          <h2 className=" mb-2">{data.name}</h2>
          {/* plate number */}
          <p className="text-gray-700 mb-4">{data.plate_number}</p>
          {/* price */}
          <div className="">
            <span className="text-gray-700 mb-4 line-through mr-2">
              {data.price}
            </span>
            <span>{data.discount_price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
