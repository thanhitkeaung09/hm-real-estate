import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPageByIdMutation } from "../../api/pageApi";
import { Skeleton } from "@mui/material";

const Page = ({ selectedLanguage }) => {
  const { id } = useParams();

  const [detail, { data, isSuccess, isError, isLoading }] =
    useGetPageByIdMutation();

  useEffect(() => {
    const fetchData = async () => {
      await detail({ lang: selectedLanguage, id });
    };
    fetchData();
  }, [id, selectedLanguage]);
  // console.log(data);
  let content = null;
  if (isError) {
    content = <div className="">Error Loading Dynamic</div>;
  }

  if (isLoading) {
    content = (
      <>
        <div className="hidden md:block">
          <div className="flex gap-2">
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
          <div className="mt-2 flex flex-col items-start">
            <Skeleton variant="rectangular" animation="wave" width={1220} />
            <Skeleton variant="rectangular" animation="wave" width={1220} />
            <Skeleton variant="rectangular" animation="wave" width={1220} />
            <Skeleton variant="rectangular" animation="wave" width={1220} />
          </div>
        </div>

        <div className="">
          <div className="block md:hidden">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={200}
            />
          </div>
          <div className="block md:hidden mt-3">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={500}
            />
          </div>
        </div>
      </>
    );
  }

  if (isSuccess) {
    content = (
      <div className="">
        <div className="py-6"></div>

        <div className="grid grid-cols-12 gap-3">
          {data?.data.images.map((el, index) => {
            return (
              <div key={index} className="col-span-12 md:col-span-4">
                <div className="border w-auto h-52 hover:border-yellow-400 hover:shadow-2xl hover:translate-y-3 duration-700">
                  <img src={el} className="w-full h-full object-cover" alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <p
          className="my-5 text-sm"
          dangerouslySetInnerHTML={{ __html: data?.data.description }}
        ></p>
      </div>
    );
  }

  return (
    <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
      {content}

      <div className="py-6"></div>
    </div>
  );
};

export default Page;
