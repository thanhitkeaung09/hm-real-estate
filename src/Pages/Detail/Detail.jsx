import {
  Backdrop,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuFuel } from "react-icons/lu";
import { TbEngine } from "react-icons/tb";
import { MdHealthAndSafety } from "react-icons/md";
import { BsFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import Card from "../../component/InQuery/Card";
import BookingCard from "../../component/Booking/Card";
import { FetchProductDetail } from "../../api/datas";

const Detail = () => {
  const [i, setI] = useState(0);

  const [detail, setDetail] = useState([]);
  const handleFetch = async () => {
    const response = await FetchProductDetail();
    setDetail(response.data.data);
  };
 useEffect(() => {
   handleFetch();
 }, []);
  const [navIndex, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [navItems, setNavItems] = useState([
    {
      name: "OVERVIEW",
      link: "overview",
    },
    {
      name: "VARIANTS",
      link: "variants",
    },
    {
      name: "CAR SPECS",
      link: "car",
    },
    // {
    //   name: "SIMILAR CARS",
    //   link: "similar",
    // },
    // {
    //   name: "COLORS",
    //   link: "color",
    // },
  ]);
  const [openBooking, setOpenBooking] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleBookingClose = () => {
    setOpenBooking(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenBooking = () => {
    setOpenBooking(true);
  };

  return (
    <>
      <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-500">{detail.name}</h1>
          <div className="flex items-center">
            <div className="ml-5 flex items-center">
              <a href="#" className="text-sm text-gray-500">
                157 Ratings
              </a>
              <p className="text-sm text-gray-500 px-4">|</p>
              <a href="#" className="text-sm text-gray-500">
                Write Review
              </a>
            </div>
          </div>
        </div>
        {/* Choose for Detail Page */}
        <div className="flex mb-7">
          {navItems.map((el, index) => {
            return (
              <div
                key={index}
                className="mx-10"
                onClick={() => setIndex(index)}
              >
                <a
                  href={`#${el.link}`}
                  className={`text-gray-500  ${
                    navIndex === index ? "underline" : ""
                  }`}
                >
                  {el.name}
                </a>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-12 gap-5 " id="overview">
          <div className="col-span-6 flex justify-center items-center">
            <div className="">
              <img src={detail.images[i]} alt="" />
              <div className="">
                <div className="flex items-center justify-around">
                  {detail.images.map((el, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => setI(index)}
                        className={`border p-4 hover:border-primary-soft hover:shadow-md ${
                          index === i ? "border-primary-soft" : ""
                        } `}
                      >
                        <img className="w-20" src={el} alt="" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6 flex items-center justify-center">
            <div className="w-96">
              <h1 className="text-2xl ">{detail.name}</h1>
              <p className="text-gray-400">{detail.description}</p>
              <p className="text-gray-400 py-2">
                <span className="text-black">Number :</span>{" "}
                {detail.plate_number}
              </p>
              <p className="text-gray-400 py-2">
                <span className="text-black">Condition :</span>{" "}
                {detail.product_condition}
              </p>
              <p className="text-gray-400 py-2">
                <span className="text-black">Category :</span>
                {detail.vehicle_category}
              </p>

              <div className="py-2">
                <span className="mr-2">Region : </span>
                <span className="text-gray-400 pr-5 text-sm underline">
                  {detail.license_region}
                </span>
                <span className="mr-2">Model : </span>

                <span className="text-gray-400 text-sm underline">
                  {detail.model}
                </span>
              </div>

              <div className="py-2">
                <span className="mr-2">Discount Price : </span>

                <span className="text-gray-400 pr-5 text-sm  line-through">
                  {detail.price}
                </span>
                <span className="text-gray-400 text-sm underline">
                  {detail.discount_price}
                </span>
              </div>
              <div className="flex items-center mt-3">
                {/* Inquery Card UI */}
                <div className="mr-5">
                  <Button
                    onClick={handleOpen}
                    // variant="outlined"
                    style={{
                      color: "#ffffff",
                      borderColor: "#fecc39",
                      border: "1px solid #fecc39",
                      backgroundColor: "#fecc39"
                    }}
                  >
                    Inquery about sale
                  </Button>
                  {/* Card for InQuery */}
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                    open={open}
                    // onClick={}
                  >
                    <Card handleClose={handleClose} />
                  </Backdrop>{" "}
                </div>
                {/* Booking UI */}
                <div className="">
                  <Button
                    onClick={handleOpenBooking}
                    sx={{
                      borderColor: "#fecc39",
                      color: "#000000",
                      border: "1px solid #fecc39",
                      "&:hover": {
                        color: "#ffffff",
                        backgroundColor: "#fecc39"
                      }
                    }}
                  >
                    Booking
                  </Button>

                  {/* Card for Booking */}
                  <Backdrop
                    sx={{
                      color: "#fff",
                      zIndex: (theme) => theme.zIndex.drawer + 1
                    }}
                    open={openBooking}
                    // onClick={() => setOpenBooking(false)}
                  >
                    {/* <Card handleClose={handleClose} /> */}
                    <BookingCard handleBookingClose={handleBookingClose} id={detail?.id} />
                  </Backdrop>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-96 my-20" id="variants">
          <div className="mb-5">
            <h1 className="text-xl font-semibold ">{detail.name} price</h1>
          </div>
          <div className="">
            <p className="text-gray-500 mb-3">
              {detail.name} price for the base model starts at Rs. 10.96 Lakh
              and the top model price goes upto Rs. 17.38 Lakh (Avg.
              ex-showroom). Verna price for 14 variants is listed below.
            </p>
            <div className="">
              <TableContainer>
                <Table
                  sx={{ width: 600, backgroundColor: "#f7fafc" }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong className="text-black">Variants</strong>
                      </TableCell>
                      <TableCell align="right">
                        <strong className="text-black">
                          Ex Showroom price
                        </strong>
                      </TableCell>
                      {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell align="right">
                        Verna EX 1.5 Petrol MT 1497 cc, Petrol, Manual, 18.6
                        kmpl,{" "}
                      </TableCell>
                      <TableCell align="right">Rs. 10.96 Lakh</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="right">
                        Verna EX 1.5 Petrol MT 1497 cc, Petrol, Manual, 18.6
                        kmpl,{" "}
                      </TableCell>
                      <TableCell align="right">Rs. 10.96 Lakh</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="right">
                        Verna EX 1.5 Petrol MT 1497 cc, Petrol, Manual, 18.6
                        kmpl,{" "}
                      </TableCell>
                      <TableCell align="right">Rs. 10.96 Lakh</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="right">
                        Verna EX 1.5 Petrol MT 1497 cc, Petrol, Manual, 18.6
                        kmpl,{" "}
                      </TableCell>
                      <TableCell align="right">Rs. 10.96 Lakh</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="right">
                        Verna EX 1.5 Petrol MT 1497 cc, Petrol, Manual, 18.6
                        kmpl,{" "}
                      </TableCell>
                      <TableCell align="right">Rs. 10.96 Lakh</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
        <div className="h-96 my-24" id="car">
          <div className="mb-5">
            <h1 className="text-xl font-semibold ">
              {detail.name} Car Specifications
            </h1>
          </div>
          <div className="">
            <div className="">
              <TableContainer>
                <Table
                  sx={{ width: 600, backgroundColor: "#f7fafc" }}
                  aria-label="simple table"
                >
                  <TableHead></TableHead>
                  <TableBody>
                    <TableRow hover>
                      <TableCell align="" className="">
                        <div className="flex items-center">
                          <FaHandHoldingDollar className="mr-5" />
                          <p>Price</p>
                        </div>
                      </TableCell>
                      <TableCell align="">Rs. 10.96 Lakh onwards</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="" className="">
                        <div className="flex items-center">
                          <LuFuel className="mr-5" />
                          <p>MileAge</p>
                        </div>
                      </TableCell>{" "}
                      <TableCell align="">18.6 to 20.6 kmpl</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="" className="">
                        <div className="flex items-center">
                          <TbEngine className="mr-5" />
                          <p>Engine</p>
                        </div>
                      </TableCell>{" "}
                      <TableCell align="">1482 to 1497 cc</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="" className="">
                        <div className="flex items-center">
                          <MdHealthAndSafety className="mr-5" />
                          <p>Safety</p>
                        </div>
                      </TableCell>{" "}
                      <TableCell align="">5 Star (Global NCAP)</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="" className="">
                        <div className="flex items-center">
                          <BsFuelPumpFill className="mr-5" />
                          <p>Fuel Type</p>
                        </div>
                      </TableCell>{" "}
                      <TableCell align="">Petrol</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="" className="">
                        <div className="flex items-center">
                          <GiGearStickPattern className="mr-5" />
                          <p>Transmission</p>
                        </div>
                      </TableCell>{" "}
                      <TableCell align="">Manual & Automatic</TableCell>
                    </TableRow>

                    <TableRow hover>
                      <TableCell align="" className="">
                        <div className="flex items-center">
                          <MdOutlineAirlineSeatReclineExtra className="mr-5" />
                          <p>Seating Capaticity</p>
                        </div>
                      </TableCell>{" "}
                      <TableCell align="">5 Seater</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
