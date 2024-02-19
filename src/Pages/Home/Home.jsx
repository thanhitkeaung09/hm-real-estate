import React from "react";
import BannerCarousel from "../../component/BannerCarousel/BannerCarousel";
import Category from "../../component/Category/Category";
import Feature from "../../component/Feature/Feature";

const Home = ({selectedLanguage}) => {
  // console.log(selectedLanguage);
  return (
    <div>
      <BannerCarousel />
      <Category selectedLanguage={selectedLanguage} />
      <Feature selectedLanguage={selectedLanguage} />
     
    </div>
  );
};

export default Home;
