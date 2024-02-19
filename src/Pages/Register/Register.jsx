import React from "react";
import Footer from "../../component/Footer/Footer";
import RegisterForm from "../../component/NavBar/Register";
import BgImage from "../../assets/img/register-bg-image.svg";

const Register = ({ selectedLanguage }) => {
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
        <RegisterForm selectedLanguage={selectedLanguage} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Register;
