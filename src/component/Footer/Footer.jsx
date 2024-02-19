import Img from "../../assets/img/logo.png";
import { useGetFooterSocialQuery } from "../../api/footerApi";
import { Skeleton } from "@mui/material";

const Footer = ({ selectedLanguage }) => {
  const { data, isError, isLoading, isSuccess } = useGetFooterSocialQuery();

  let content = null;

  if (isError) {
    content = (
      <>
        <div className="">Social Loading Error</div>
      </>
    );
  }

  if (isLoading) {
    content = (
      <>
        <div className="flex gap-2">
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        </div>
      </>
    );
  }

  if (isSuccess) {
    const { data: footerData } = data;
    content = (
      <>
        {footerData.map((el, index) => {
          return (
            <div key={index} className="w-7 h-7 me-2">
              <a href={el.link} className="hover:text-gray-300">
                <img className="" src={el.logo} alt="" />
              </a>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <footer className="bg-[#333] text-white py-8 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold flex items-center text-gray-400 mb-5">
            <img src={Img} alt="" className="me-2" />{" "}
            <span className="me-2 text-sm md:text-sm">HeavenMall </span>{" "}
            <span className="text-text-sm md:text-sm">Myanmar</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-sm mb-3">
            <span>{selectedLanguage === "en" ? "Address" : "လိပ်စာ"}</span> :
            ဘုရားလမ်းမှတ်တိုင် , Werloop Center (ယခင် AKK Shoping Mall ) , 2nd
            floor , သင်္ဃကျွန်းမြို့နယ် , ရန်ကုန်မြို့{" "}
          </p>
          <p className="text-gray-400 text-sm md:text-sm mb-3">
            <span>
              {selectedLanguage === "en" ? "Phone no" : "ဖုန်းနံပါတ်"}
            </span>{" "}
            : 09753288730{" "}
          </p>
          <p className="text-gray-400 text-sm md:text-sm mb-3">
            <span>{selectedLanguage === "en" ? "Email" : "အီးမေလ်"}</span>{" "}
            :heavenmelody88@gmail.com{" "}
          </p>
        </div>
        <div className="flex flex-wrap">{content}</div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm md:text-sm">
          &copy; 2023 Heaven Mall. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
