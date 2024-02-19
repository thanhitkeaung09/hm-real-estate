import React from "react";
import Footer from "../../component/Footer/Footer";
import ForgetPasswordForm from "../../component/Password/Forget";
import BgImage from "../../assets/img/register-bg-image.svg";

const Login = ({selectedLanguage}) => {
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
        <ForgetPasswordForm selectedLanguage={selectedLanguage} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
