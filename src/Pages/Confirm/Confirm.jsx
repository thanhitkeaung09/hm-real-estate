import React from "react";
import Footer from "../../component/Footer/Footer";
import ConfirmForm from "../../component/NavBar/Confirmation";
import BgImage from "../../assets/img/register-bg-image.svg";

const Confirm = () => {
  const containerStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set minimum height to cover the whole viewport
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return (
    <>
      <div style={containerStyle}>
        <ConfirmForm />
      </div>
      <Footer />
    </>
  );
};

export default Confirm;
