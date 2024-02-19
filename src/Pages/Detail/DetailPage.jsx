import {
  Avatar,
  Backdrop,
  Button,
  Chip,
  Dialog,
  Divider,
  Rating,
  TextField,
} from "@mui/material";
import { useRef } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IoHome } from "react-icons/io5";
import { useEffect, useState } from "react";
import Card from "../../component/InQuery/Card";
import ReviewCard from "../../component/Review/Card";
import BookingCard from "../../component/Booking/Card";
import { FetchServices } from "../../api/datas";
import { FetchProductDetail, FetchSentComment } from "../../api/datas";
import { Link, useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useGetRatingQuery } from "../../api/ratingApi";
import "react-photo-view/dist/react-photo-view.css";
import Services from "./services/Services";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: "#e9b92b",
  },
}));

const Detail = ({ selectedLanguage }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imageIndex, setImageIndex] = useState(1);
  const [auth, setAuth] = useState();
  const [comment, setComment] = useState(null);
  const [showServiceModel, setShowServiceModel] = useState(true);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [hasReview, setHasReview] = useState(false);
  const [filterColor, setFilterColor] = useState([]);
  const [openColorImage, setOpenColorImage] = useState(false);
  const token = localStorage.getItem("Encrypted Key");
  const { data, isError, isLoading, isSuccess, refetch } = useGetRatingQuery({
    lang: selectedLanguage,
    id,
    token,
  });

  // console.log(data.data);
  useEffect(() => {
    const existingReviews = JSON.parse(localStorage.getItem("reviewIds")) || [];
    // console.log(typeof id);
    // console.log(existingReviews.includes(Number(id)));
    if (existingReviews.includes(Number(id))) {
      setHasReview(true);
    } else {
      setHasReview(false);
    }
  }, [hasReview]);

  let content = null;
  if (isError) {
    content = (
      <>
        <div className="">Rate Fetch Error</div>
      </>
    );
  }

  if (isLoading) {
    content = (
      <>
        <div className="">Loading</div>
      </>
    );
  }

  if (isSuccess) {
    const { data: ratingData } = data;
    const fiveElement = ratingData.ratingLists.slice(0, 4);
    // console.log(fiveElement);
    // console.log(ratingData);
    content = (
      <>
        {fiveElement.map((el, index) => {
          return (
            <div className="flex my-5" key={index}>
              <div className="mr-5 mt-3">
                <Avatar alt="Remy Sharp" src={`${el.customer.avatarMod}`} />
              </div>
              <div className="">
                <p className="font-bold text-sm md:text-sm">
                  {el.customer.name}
                </p>
                <div className="flex my-3">
                  <Rating
                    name="read-only"
                    defaultValue={el?.rating}
                    precision={el?.rating}
                    readOnly
                  />
                  <div className="text-gray-400 text-sm md:text-sm">
                    ( {el.rating})
                  </div>
                </div>
                <div className="flex">
                  <p className="text-gray-400 mr-3 text-sm md:text-sm">
                    {el.date}
                  </p>
                  {/* <span className="text-gray-400">01:11pm</span> */}
                </div>
                <p className="text-gray-400 text-sm md:text-sm">{el.review}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
  useEffect(() => {
    const authInfo = JSON.parse(localStorage.getItem("auth-info"));
    setAuth(authInfo);
  }, []);

  const [detail, setDetail] = useState([]);
  const handleFetch = async () => {
    if (selectedLanguage === "en") {
      const response = await FetchProductDetail(id, "en");
      setDetail(response.data.data);
    } else {
      const response = await FetchProductDetail(id, "mm");
      setDetail(response.data.data);
    }
  };
  // const defaultColor =
  //   detail.color_images && detail.color_images.length > 0
  //     ? detail.color_images[0].color_value
  //     : "";

  useEffect(() => {}, [selectedLanguage]);

  useEffect(() => {
    handleFetch();
    // handleFilterColorImage(defaultColor);
  }, [selectedLanguage]);

  const handleComment = async () => {
    if (!token) {
      toast.error("You need to login first");
      navigate("/login");
    }
    const formData = new FormData();
    formData.append("automobile_id", detail.id);
    formData.append("comment", comment);

    try {
      const response = await FetchSentComment(
        { automobile_id: detail.id, comment },
        token
      );
      //need to change comment response data
      // console.log(response.data);
      // Update local state with the new comment
      setDetail((prevDetail) => ({
        ...prevDetail,
        comment: [...prevDetail.comment, response.data.meta],
      }));

      // Clear the comment input
      setComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
      // Handle error (e.g., show an error message)
    }
  };
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  const sliderRef = useRef(null);
  const [services, setServices] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount((prevCount) => prevCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };
  const handleServiceFetch = async () => {
    const response = await FetchServices();
    setServices(response.data.data);
  };
  useEffect(() => {
    handleServiceFetch();
  }, []);
  // const [navIndex, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [openBooking, setOpenBooking] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setReviewOpen(false);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleReviewForm = () => {
    setReviewOpen(true);
  };

  const onReviewSubmitSuccess = () => {
    // alert("hello refetching");
    setHasReview(true);
    refetch();
  };

  const handleFilterColorImage = (color_value) => {
    // console.log(color_value);
    const filteredImages = detail.color_images
      .filter((el) => {
        return el.color_value === color_value;
      })
      .map((el) => el.photos || []);
    const joinedImages = [].concat(...filteredImages);
    setFilterColor(joinedImages);
    // console.log(joinedImages);
  };

  const handleColorImageChange = (value, name) => {
    // alert(`>>${value} >>> ${name}`);
    setOpenColorImage(true);
    const filteredImages = detail.color_images
      .filter((el) => {
        return el.color_value === value && el.color_name === name;
      })
      .map((el) => el.photos || []);
    const joinedImages = [].concat(...filteredImages);
    setFilterColor(joinedImages);
  };

  return (
    <div className="w-[95%] md:w-[85%] mx-auto pt-[20px] relative ">
      <div className="mb-5 flex items-center px-2 py-1 bg-gray-100 rounded-lg">
        <Link to={"/"}>
          <IoHome className=" text-gray-500 me-2" />
        </Link>
        <div className="text-lg text-gray-500">|</div>
        <h1 className="text-sm md:text-2xl font-bold text-gray-500 ms-2">
          {detail.name}
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-5 " id="overview">
        {/* Car Image Preview and Data Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <div className="border md:px-4">
            {detail.images && detail.images.length > 0 && (
              <div className=" md:h-[450px] flex items-center">
                <img
                  src={detail.images[imageIndex]}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 flex items-center justify-center ">
          <div className="w-96">
            <div className="pb-3 border-b">
              <div className="mb-5">
                <Chip
                  label={detail.category?.name}
                  size="small"
                  color="warning"
                  sx={{ marginRight: "10px" }}
                />
                <Chip
                  label={detail.parent_category?.name}
                  size="small"
                  color="warning"
                />
              </div>
              <h1 className="text-sm md:text-2xl ">{detail.name}</h1>
            </div>
            <div className="pb-4 border-b pt-4 flex items-center">
              <a href="#comment" className="text-sm text-gray-500">
                <span className="me-2">
                  {detail.comment ? detail.comment.length : 0}
                </span>
                Comments
              </a>
              <p className="text-sm text-gray-500 px-5">|</p>
              <a href="#comment" className="text-sm text-gray-500">
                Write Comment
              </a>
            </div>
            <p className="text-gray-400 mb-2 text-sm md:text-sm">
              <span className="text-black">Brand :</span>
              <span className="text-sm md:text-sm">{" " + detail.brand}</span>
            </p>

            <p className="text-gray-400 mb-2">
              <span className="text-black text-sm md:text-sm">Category :</span>
              <span className="text-sm md:text-sm">
                {detail.vehicle_category}
              </span>
            </p>
            <p className="text-gray-400 mb-2">
              <span className="text-black text-sm md:text-sm">
                Plate Number :
              </span>{" "}
              <span className="text-sm md:text-sm">{detail.plate_number}</span>
            </p>
            <p className="text-gray-400 mb-2">
              <span className="text-black text-sm md:text-sm">Condition :</span>{" "}
              <span className="text-sm md:text-sm">
                {detail.product_condition}
              </span>
            </p>
            <p className="text-gray-400 mb-2">
              <span className="text-black text-sm md:text-sm">
                Vehicle Type :
              </span>
              <span className="text-sm md:text-sm">{detail.vehicle_type}</span>
            </p>

            <div className="mb-2">
              <span className="mr-2 text-sm md:text-sm">Region : </span>
              <span className="text-gray-400 pr-5 text-sm underline">
                {detail.license_region}
              </span>
              <span className="mr-2 text-sm md:text-sm">Model : </span>

              <span className="text-gray-400 text-sm underline">
                {detail.model}
              </span>
            </div>

            {detail.discount_price ? (
              <>
                <div className="mb-2">
                  <span className="mr-2 text-sm md:text-sm">
                    Discount Price :{" "}
                  </span>

                  <span className="text-gray-400 pr-5 text-sm md:text-sm  line-through">
                    {detail.is_usd
                      ? `$ ${detail.discount_price}`
                      : `${detail.discount_price} lakh`}
                  </span>
                  <span className="text-gray-400 text-sm underline">
                    {detail.is_usd
                      ? `$ ${detail.price}`
                      : `${detail.price} lakh`}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="mb-2">
                  <span className="mr-2">Price : </span>

                  <span className="text-gray-400 pr-5 text-sm">
                    {detail.is_usd
                      ? `$ ${detail.price}`
                      : `${detail.price} lakh`}
                  </span>
                  <span className="text-gray-400 text-sm underline">
                    {/* {detail.discount_price} */}
                  </span>
                </div>
              </>
            )}

            <div className="flex items-center mt-3">
              <div className="mr-5 hidden md:block">
                <Button
                  onClick={handleOpen}
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#fecc39",
                    borderColor: "#fecc39",
                    border: "1px solid #fecc39",
                  }}
                >
                  Inquery about sale
                </Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  <Card handleClose={handleClose} id={detail.id} />
                </Backdrop>{" "}
              </div>

              <div className="mr-5 block md:hidden">
                <Button
                  size="small"
                  onClick={handleOpen}
                  sx={{
                    color: "#ffffff",
                    backgroundColor: "#fecc39",
                    borderColor: "#fecc39",
                    border: "1px solid #fecc39",
                  }}
                >
                  Inquery about sale
                </Button>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={open}
                >
                  <Card handleClose={handleClose} id={detail.id} />
                </Backdrop>{" "}
              </div>

              <div className="hidden md:block">
                <Button
                  onClick={handleOpenBooking}
                  sx={{
                    borderColor: "#fecc39",
                    color: "#000000",
                    border: "1px solid #fecc39",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#fecc39",
                    },
                  }}
                >
                  Booking
                </Button>

                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={openBooking}
                >
                  <BookingCard
                    handleBookingClose={handleBookingClose}
                    id={detail.id}
                  />
                </Backdrop>
              </div>

              <div className="block md:hidden">
                <Button
                  size="small"
                  onClick={handleOpenBooking}
                  sx={{
                    borderColor: "#fecc39",
                    color: "#000000",
                    border: "1px solid #fecc39",
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#fecc39",
                    },
                  }}
                >
                  Booking
                </Button>

                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={openBooking}
                >
                  <BookingCard
                    handleBookingClose={handleBookingClose}
                    id={detail.id}
                  />
                </Backdrop>
              </div>
            </div>
          </div>
        </div>

        {/* Car Carousel Section */}
        <div className="col-span-12 mb-4">
          {detail.images && detail.images.length > 0 && (
            <div className="flex items-center">
              {detail.images.map((el, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`border p-4 hover:border-primary-soft hover:shadow-md me-1 ${
                      index === imageIndex ? "border-primary-soft" : ""
                    } `}
                  >
                    <img className="w-20 h-12" src={el} alt="" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {/* {showServiceModel && <Services />} */}
      <div className="">
        <Dialog
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={showServiceModel}
          onClose={() => setShowServiceModel(false)}
        >
          <Services show={setShowServiceModel} />
        </Dialog>
      </div>

      {/* Car Color and Youtube */}

      <div className="grid grid-cols-12 my-10">
        <div
          className={` col-span-12 md:col-span-6  ${
            detail.youtube_link?.length > 1 ? "block" : "hidden"
          } flex justify-center`}
        >
          {/* for desktop */}
          <div className="w-full hidden  md:flex md:justify-center">
            <iframe
              width="600"
              height="350"
              src={detail.youtube_link}
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          {/* for responsive */}
          <div className="w-full block md:hidden">
            <iframe
              width="400"
              height="200"
              src={detail.youtube_link}
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div
          className={`${
            detail.youtube_link?.length > 1
              ? "col-span-12 md:col-span-6"
              : "col-span-12"
          } md:flex md:justify-center`}
        >
          <div className="mt-5 md:mt-0">
            <p className="text-3xl ml-3">Available Colors</p>
            {detail?.color_images?.length >= 1 ? (
              <div className="my-5">
                {Array.from(
                  new Set(detail?.color_images?.map((el) => el.color_value))
                ).map((uniqueColorValue, index) => {
                  const matchedColor = detail?.color_images?.find(
                    (el) => el.color_value === uniqueColorValue
                  );

                  return (
                    <Chip
                      key={index}
                      variant="outlined"
                      sx={{
                        margin: "0 0 10px 10px",
                        color: uniqueColorValue,
                        outlineColor: uniqueColorValue,
                      }}
                      label={matchedColor?.color_name}
                      onClick={() =>
                        handleColorImageChange(
                          uniqueColorValue,
                          matchedColor?.color_name
                        )
                      }
                    />
                  );
                })}
              </div>
            ) : (
              <div className="">
                <p className={`ml-3 text-gray-400`}>
                  There is no color options.
                </p>
              </div>
            )}

            <div className="">
              <Dialog
                open={openColorImage}
                onClose={() => setOpenColorImage(false)}
              >
                <Carousel className={`w-full h-48 md:h-96`}>
                  {filterColor?.map((el, index) => {
                    console.log(el);
                    return (
                      <>
                        <div key={index} className={`w-full h-48 md:h-96 `}>
                          <img
                            className={`w-full h-full object-cover md:object-cover`}
                            src={el}
                            alt=""
                          />
                        </div>
                      </>
                    );
                  })}
                </Carousel>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="" id="comment">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ fontSize: "13px" }}
                label={`${
                  selectedLanguage === "en" ? "Description" : "ဖော်ပြချက်များ"
                }`}
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontSize: "13px" }}
                label={`${
                  selectedLanguage === "en" ? "Specification" : "အမျိုးအစားများ"
                }`}
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontSize: "13px" }}
                label={`${
                  selectedLanguage === "en" ? "Comment" : "မှတ်ချက်များ"
                }`}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {/* <p className="text-gray-500 mb-2">{detail.description}</p> */}
            <div
              className="text-gray-500 mb-2 text-sm md:text-sm"
              dangerouslySetInnerHTML={{ __html: detail.description }}
            />
            <p className=" text-sm md:text-lg">features</p>
            <div
              className="text-gray-500 mb-2 text-sm md:text-sm"
              dangerouslySetInnerHTML={{ __html: detail.features }}
            />
            <p className="text-sm md:text-lg">package</p>
            <div
              className="text-gray-500 mb-2 text-sm md:text-sm"
              dangerouslySetInnerHTML={{ __html: detail.package }}
            />

            {/* <p className="text-gray-500 mb-2">{detail.package}</p> */}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-6 md:col-span-2">
                <p className="mb-2 flex justify-between">
                  <span>Manufacture Country</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>Origin</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>doors</span>
                  <span> :</span>
                </p>{" "}
                <p className="mb-2 flex justify-between">
                  <span>seats</span>
                  <span> :</span>
                </p>{" "}
                <p className="mb-2 flex justify-between">
                  <span>fuel</span>
                  <span> :</span>
                </p>{" "}
                <p className="mb-2 flex justify-between">
                  <span>kilometer</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>weight</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>drive_type</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>warranty</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>stock</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>grade</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>volume</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>USD</span>
                  <span> :</span>
                </p>
                <p className="mb-2 flex justify-between">
                  <span>Price Remarks</span>
                  <span> :</span>
                </p>
              </div>
              <div className="col-span-6 md:col-span-9">
                <p className="mb-2 text-gray-500">
                  {detail.manufactured_country}
                </p>
                <p className="mb-2 text-gray-500">
                  {detail.origin ? detail.origin : "---"}
                </p>
                <p className="mb-2 text-gray-500">
                  {detail.doors ? detail.doors : "---"}
                </p>
                <p className="mb-2 text-gray-500">
                  {detail.seats ? detail.seats : "---"}
                </p>
                <p className="mb-2 text-gray-500">
                  {detail.fuel ? detail.fuel : "---"}
                </p>
                <p className="mb-2 text-gray-500">
                  {detail.kilometer ? detail.kilometer : "---"}
                </p>
                <p className="mb-2 text-gray-500">
                  {detail.weight ? detail.weight : "---"}
                </p>
                <p className="mb-2 text-gray-500">
                  {detail.drive_type ? detail.drive_type : "---"}
                </p>
                <p className="mb-2 text-gray-500">
                  {detail.warranty ? detail.warranty : "---"}
                </p>
                <p className="mb-2 text-gray-500">{detail.stock}</p>
                <p className="mb-2 text-gray-500">{detail.grade}</p>
                <p className="mb-2 text-gray-500">{detail.volume}</p>
                <p className="mb-2 text-gray-500">
                  {detail.is_usd ? "Available" : "Unavailable"}
                </p>
                <p className="mb-2 text-gray-500">{detail.price_ramarks}</p>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="">
              <div className="grid grid-cols-12 gap-0 mb-4 py-4 border-b">
                <div className="col-span-3 md:col-span-1 text-center">
                  <div className="">
                    <img
                      className="rounded-full w-[50px] h-[50px] object-cover"
                      src={auth?.data.avatar}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-span-9 md:col-span-11">
                  <p className="text-primary-dark mb-3 text-sm md:text-sm">
                    {auth?.data.name}
                  </p>
                  <TextField
                    id="outlined-basic"
                    label={
                      selectedLanguage === "en"
                        ? "Your Comment"
                        : "သင့်၏မှတ်ချက်များထည့်ရန်"
                    }
                    variant="outlined"
                    className="w-full mb-3 text-sm md:text-sm"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <div className="mb-4 text-end mt-3">
                    <button
                      onClick={handleComment}
                      className="bg-primary-dark border text-white px-3 py-1  border-primary-dark hover:bg-white hover:text-primary-dark rounded"
                    >
                      {selectedLanguage === "en" ? "Sent" : "မှတ်ချက်ပေးသည်"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* {detail.comment.length} */}
            {detail.comment && detail.comment.length > 0 ? (
              <>
                <div>
                  {detail.comment.slice(0, 4).map((el) => (
                    <div key={el.id} className="mb-3 pb-3 border-b">
                      <div className="grid grid-cols-12 ">
                        <div className="col-span-3 md:col-span-1">
                          <div className="">
                            <img
                              className="rounded-full w-[50px] h-[50px] object-cover"
                              src={el.avatar}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-span-9 md:col-span-11">
                          <p className="text-primary-dark text-sm md:text-sm">
                            {el.name}
                          </p>
                          <p className="text-gray-500 text-sm md:text-sm">
                            {el.comment}
                          </p>

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
                  ))}
                </div>
                {detail.comment.length > 4 && (
                  <div className=" my-5">
                    <Link
                      to={`/all/comments/${id}`}
                      className=" underline text-sm md:text-sm"
                    >
                      See more comments
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div>
                <p className="my-5 text-sm md:text-sm">
                  There is no comment for this product
                </p>
              </div>
            )}

            <div className="">
              <Divider />
            </div>

            <div className="">
              <form action="">
                <input
                  type="text"
                  name="id"
                  value={detail.id}
                  className="hidden"
                />
              </form>
            </div>
          </CustomTabPanel>
        </Box>
        {/* Rating Show Section */}
        <div className="mb-5">
          <p className="font-bold text-sm md:text-sm">
            {selectedLanguage === "en"
              ? "Reviews"
              : "ဤကုန်ပစ္စည်းအကြောင်းသုံးသပ်ချက်များ"}
          </p>
          {hasReview ? (
            ""
          ) : (
            <div className="mt-5">
              {token ? (
                <>
                  <div className="hidden md:block">
                    <Button
                      size="small"
                      onClick={() => handleReviewForm()}
                      variant="contained"
                      className="bg-primary-soft"
                      sx={{
                        backgroundColor: "#fecc39",
                        "&:hover": { backgroundColor: "#333" },
                        color: "white",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      {selectedLanguage === "en"
                        ? "write customer review"
                        : "မှတ်ချက်ရေးသားပါ"}
                    </Button>
                  </div>

                  <div className="block md:hidden">
                    <Button
                      size="small"
                      onClick={() => handleReviewForm()}
                      variant="contained"
                      className="bg-primary-soft"
                      sx={{
                        backgroundColor: "#fecc39",
                        "&:hover": { backgroundColor: "#333" },
                        color: "white",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      {selectedLanguage === "en"
                        ? "write customer review"
                        : "မှတ်ချက်ရေးသားပါ"}
                    </Button>
                  </div>
                </>
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                  variant="contained"
                  className="bg-primary-soft"
                  sx={{
                    backgroundColor: "#fecc39",
                    "&:hover": { backgroundColor: "#333" },
                    color: "white",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  {selectedLanguage === "en"
                    ? "login to write customer review"
                    : "မှတ်ချက်ရေးသားရန် အကောင့်၀င်ပါ"}
                </Button>
              )}
            </div>
          )}
        </div>
        {/* Review Form */}
        <ReviewCard
          reviewOpen={reviewOpen}
          handleClose={handleClose}
          productId={detail.id}
          onReviewSubmitSuccess={onReviewSubmitSuccess}
        />
        {/* Card Review Section */}
        {content}
        <div className="flex w-80 my-5">
          {
            // console.log(data.data.ratingLists)
            data?.data.ratingLists.length > 2 ? (
              <Link
                to={`/all/reviews/${id}`}
                className=" underline text-sm md:text-sm"
              >
                See More Reviews
              </Link>
            ) : (
              <div className="">
                <p>There is no review for this products</p>
              </div>
            )
          }
        </div>
        <div className="mb-5">
          <Divider />
        </div>
        <div className="md:flex md:justify-between">
          {/* reviewers */}
          <div className="flex my-10">
            <div className="mr-5 mt-3">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div className="">
              <p className="font-bold text-sm md:text-sm">Read Posts & Earn</p>
              <div className="flex my-3">
                <Rating
                  name="read-only"
                  defaultValue={0.5}
                  precision={0.5}
                  readOnly
                />
                <div className="text-gray-400 text-sm md:text-sm">( 0. 5)</div>
              </div>
              <div className="flex">
                <p className="text-gray-400 mr-3 text-sm md:text-sm">
                  03/11/2023
                </p>
                <span className="text-gray-400 text-sm md:text-sm">
                  01:11pm
                </span>
              </div>
              <p className="text-gray-400 text-sm md:text-sm">review text</p>
            </div>
          </div>
          {/* review lists */}
          <div className="">
            <h1 className="text-sm md:text-sm">
              <span className=" font-bold text-sm md:text-3xl">o.5</span> out of
              5
            </h1>
            <div className="my-5">
              <div className="flex">
                <Rating
                  name="read-only"
                  defaultValue={
                    data?.data?.averageRating ? data?.data.averageRating : 1
                  }
                  precision={
                    data?.data?.averageRating ? data?.data.averageRating : 1
                  }
                  readOnly
                />
                <div className="text-gray-400">
                  ( {data?.data?.averageRating})
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-sm">
                1 customer ratings
              </p>
            </div>
            <div className="w-96">
              {/* 5 start */}
              <div className="flex items-center">
                <span className="mr-1 text-sm md:text-sm">5 star</span>
                <div className="flex items-center">
                  <div className="w-60">
                    <BorderLinearProgress
                      variant="determinate"
                      value={data?.data?.ratingFive}
                    />
                  </div>
                </div>
                <span className="ml-2 text-sm md:text-sm">
                  {data?.data?.ratingFive}%
                </span>
              </div>
              {/* 4 star */}
              <div className="flex items-center my-3">
                <span className="mr-1 text-sm md:text-sm">4 star</span>
                <div className="flex items-center">
                  <div className="w-60">
                    <BorderLinearProgress
                      variant="determinate"
                      value={data?.data?.ratingFour}
                    />
                  </div>
                </div>
                <span className="ml-2 text-sm md:text-sm">
                  {data?.data?.ratingFour}%
                </span>
              </div>
              {/* 3 star */}
              <div className="flex items-center">
                <span className="mr-1 text-sm md:text-sm">3 star</span>
                <div className="flex items-center">
                  <div className="w-60">
                    <BorderLinearProgress
                      variant="determinate"
                      value={data?.data?.ratingThree}
                    />
                  </div>
                </div>
                <span className="ml-2 text-sm md:text-sm">
                  {data?.data?.ratingThree}%
                </span>
              </div>
              {/* 2 star */}
              <div className="flex items-center my-3">
                <span className="mr-1 text-sm md:text-sm">2 star</span>
                <div className="flex items-center">
                  <div className="w-60">
                    <BorderLinearProgress
                      variant="determinate"
                      value={data?.data?.ratingTwo}
                    />
                  </div>
                </div>
                <span className="ml-2 text-sm md:text-sm">
                  {data?.data?.ratingTwo}%
                </span>
              </div>
              {/* 1 star */}
              <div className="flex items-center mb-5">
                <span className="mr-1 text-sm md:text-sm">1 star</span>
                <div className="flex items-center">
                  <div className="w-60">
                    <BorderLinearProgress
                      variant="determinate"
                      value={data?.data?.ratingOne}
                    />
                  </div>
                </div>
                <span className="ml-2 text-sm md:text-sm">
                  {data?.data?.ratingOne}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
