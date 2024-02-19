import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdMail, MdLocationPin } from "react-icons/md";

import GoogleMap from "../../component/GoogleMap/GoogleMap";
const Contact = () => {
  return (
    <>
      <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
        <div className="container rounded overflow-hidden mt-5 mb-8">
          <GoogleMap />
        </div>
        <div className="container mb-5">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3 md:col-span-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1">
                  <input
                    type="text"
                    placeholder="Name : "
                    className="border px-2 py-2 w-full text-p rounded-md focus:outline-none"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <input
                    type="email"
                    placeholder="Email : "
                    className="border px-2 py-2 w-full text-p rounded-md focus:outline-none"
                  />
                </div>
                <div className="col-span-2">
                  <textarea
                    placeholder="Message"
                    rows={"7"}
                    className="border px-2 py-2 w-full text-p rounded-md focus:outline-none"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button className="w-full my-2 py-2 bg-main-primary text-white">
                    Sent Message
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-3 md:col-span-1">
              <div className="grid grid-cols-2 ">
                <div className="col-span-2 md:col-span-1">
                  <div className="my-4">
                    <p className="text-sm mb-3 text-main-dark font-bold font-pyidaungsu">
                      Phone :
                    </p>
                    <p className="text-sm mb-3 ">
                      <FaPhone className="text-main-primary inline-block me-3" />{" "}
                      <span className="text-main-gray">09753288730</span>
                    </p>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="my-4">
                    <p className="text-sm mb-3 text-main-dark font-bold font-pyidaungsu">
                      Email :
                    </p>
                    <p className="text-sm mb-3 ">
                      <MdMail className="text-main-primary inline-block me-3" />
                      <span className="text-main-gray">
                        heavenmelody88@gmail.com
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="my-4">
                    <p className="text-sm mb-3 text-main-dark font-bold font-pyidaungsu">
                      Address :
                    </p>
                    <p className=" mb-3 flex">
                      <div className="grid grid-cols-12 items-center">
                        <div className="col-span-1">
                          <MdLocationPin className="text-main-primary text-lg me-3" />
                        </div>
                        <div className="col-span-11">
                          <span className="text-main-gray text-sm">
                            ဘုရားလမ်းမှတ်တိုင် , Werloop Center (ယခင် AKK
                            Shoping Mall ) , 2nd floor , သင်္ဃကျွန်းမြို့နယ် ,
                            ရန်ကုန်မြို့
                          </span>
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
