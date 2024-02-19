import React from "react";

const Card = ({ data }) => {
  // (data);
  return (
    <div className="px-3">
      <div className="border p-4  rounded-sm group hover:border-primary-soft transition-all duration-300  overflow-hidden">
        <img
          src={data.photo}
          alt="Category Image"
          className="w-full  h-[100px] md:h-[200px] object-contain group-hover:scale-110 transition-all duration-100   mr-6"
        />
        <div className="">
          <h2 className="text-sm md:text-xl font-semibold md:mb-2 text-center">
            {data.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
