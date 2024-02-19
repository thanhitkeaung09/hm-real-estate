import { Skeleton } from "@mui/material";
import { useGetBannersQuery } from "../../api/bannerApi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const BannerCarousel = () => {
  const { data, isLoading, isError, isSuccess } = useGetBannersQuery();

  let content = null;
  if (isLoading) {
    content = (
      <>
        <div className="hidden md:block">
          <Skeleton variant="rectangular" animation="wave" height={730} />
        </div>
        <div className="block md:hidden">
          <Skeleton variant="rectangular" animation="wave" height={200} />
        </div>
      </>
    );
  }

  if (isError) {
    content = (
      <>
        <div className="">Error on Banner Fetch</div>
      </>
    );
  }

  if (isSuccess) {
    const { data: bannerData } = data;

    content = (
      <>
        <div className="">
          <Carousel
            className={`w-full h-[240px] md:h-[720px]`}
            autoPlay={true}
            dynamicHeight={false}
            // interval={100}
            infiniteLoop={true}
            showArrows={true}
          >
            {bannerData?.map((el, index) => {
              return (
                <>
                  <div key={index} className={`w-full h-[240px] md:h-[720px]`}>
                    <img
                      src={el.photo}
                      className={`w-full h-full object-cover`}
                    />
                  </div>
                </>
              );
            })}
          </Carousel>
        </div>
      </>
    );
  }

  return (
    <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
      <div className="my-5 md:my-10">{content}</div>
    </div>
  );
};

export default BannerCarousel;
