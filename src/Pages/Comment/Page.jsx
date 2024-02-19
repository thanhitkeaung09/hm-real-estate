import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../api/productApi";

const Page = ({ selectedLanguage }) => {
  const { id } = useParams();

  const { data, isSuccess, isError, isLoading } = useGetProductByIdQuery({
    lang: selectedLanguage,
    id,
  });

  let content = null;
  if (isError) {
    content = <div>Error Loading All Comments</div>;
  }

  if (isLoading) {
    content = <div>Loading All Comments</div>;
  }

  if (isSuccess) {
    const { data: comments } = data;
    content = (
      <>
        <div className="">
          {comments.comment.map((el, index) => {
            return (
              <div key={index} className="mb-3 pb-3 border-b">
                <div className="grid grid-cols-12 ">
                  <div className="col-span-1">
                    <div className="">
                      <img
                        className="rounded-full w-[50px] h-[50px] object-cover"
                        src={el.avatar}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-span-11">
                    <p className="text-primary-dark">{el.name}</p>
                    <p className="text-gray-500 text-sm">{el.comment}</p>

                    {el.replies &&
                      el.replies.map((el, index) => {
                        return (
                          <ul
                            className="text-gray-400 text-sm list-disc ml-10 my-2"
                            key={index}
                          >
                            <li>{el.comment}</li>
                          </ul>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">{content}</div>;
};

export default Page;
