import React from "react";
import { useParams } from "react-router-dom";
import { useGetRatingQuery } from "../../api/ratingApi";
import { Avatar, Rating } from "@mui/material";

const Page = ({ selectedLanguage }) => {
  const { id } = useParams();
  const token = localStorage.getItem("Encrypted Key");
  // console.log(token);
  const { data, isError, isLoading, isSuccess } = useGetRatingQuery({
    lang: selectedLanguage,
    id,
    token,
  });

  let content = null;

  if (isError) {
    content = <div className="">Error on Getting Review</div>;
  }

  if (isLoading) {
    content = <div className="">Loading on Getting Reviews</div>;
  }

  if (isSuccess) {
    const { data: ratingData } = data;
    // console.log(ratingData.ratingLists);
    content = (
      <>
        {ratingData.ratingLists.map((el, index) => {
          return (
            <div className="flex" key={index}>
              <div className="mr-5 mt-3">
                <Avatar alt="Remy Sharp" src={`${el.customer.avatarMod}`} />
              </div>
              <div className="">
                <p className="font-bold">{el.customer.name}</p>
                <div className="flex my-3">
                  <Rating
                    name="read-only"
                    defaultValue={el?.rating}
                    precision={el?.rating}
                    readOnly
                  />
                  <div className="text-gray-400">( {el.rating})</div>
                </div>
                <div className="flex">
                  <p className="text-gray-400 mr-3">{el.date}</p>
                  {/* <span className="text-gray-400">01:11pm</span> */}
                </div>
                <p className="text-gray-400">{el.review}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  return <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">{content}</div>;
};

export default Page;
