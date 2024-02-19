import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FetchCodeResend } from "../../api/datas";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLoginMutation } from "../../api/authApi";

const Login = ({ handleShowLogin, selectedLanguage }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [login] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [displaycodeForm, setDisplayCodeForm] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleClose = () => {
    handleShowLogin();
  };

  const handleForgetPassword = () => {
    navigate("/forget");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(formData);
    if (response.error) {
      toast.error("Email or Password is incorrect");
    } else {
      localStorage.setItem("Encrypted Key", response.data.data.token);
      localStorage.setItem("auth-info", JSON.stringify(response.data));

      toast.success("Login Successfully");
      navigate("/");
    }
  };

  const handleSubmitCodeSend = async () => {
    // alert(formData.email);
    const response = await FetchCodeResend(formData.email);
  };

  return (
    <>
      {displaycodeForm ? (
        // Code Send Form
        <form
          onSubmit={handleSubmitCodeSend}
          className={`bg-white p-8 border shadow-sm rounded-sm w-96 relative  ${
            showLoginForm ? "block" : "hidden"
          }`}
        >
          <div className="absolute top-3 right-3">
            <HiOutlineX
              className="cursor-pointer text-black z-20 "
              onClick={handleClose}
            />
          </div>
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          <div className="mb-3">
            <h4 className="text-gray-500 mb-[1px]">
              {selectedLanguage === "en" ? `SEND CODE` : "ကုဒ်ပို့ရန်"}
            </h4>
          </div>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label={selectedLanguage === "en" ? `Email` : "အီးမေလ်"}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />

            <Button
              type="submit"
              className="bg-primary-soft"
              sx={{
                backgroundColor: "#fecc39",
                "&:hover": { backgroundColor: "#333" },
                color: "white",
              }}
            >
              Send Code
            </Button>
          </Box>
        </form>
      ) : (
        // Login Form
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className={`bg-white p-8 md:border md:shadow-sm rounded-sm w-96 relative ${
              showLoginForm ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center">
              <img src={Img} alt="" />
              <h1 className="text-gray-500">
                H E A V E N &nbsp;&nbsp; M A L L
              </h1>
            </div>
            <div className="mb-3">
              <h4 className="text-gray-500 mb-[1px]">
                {" "}
                {selectedLanguage === "en" ? "LOGIN" : "အကောင့်၀င်ရန်"}
              </h4>
            </div>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label={selectedLanguage === "en" ? "Email" : "အီးမေလ်"}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
              />

              <TextField
                label={selectedLanguage === "en" ? "Password" : "စကား၀ှက်"}
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <div className="flex justify-between">
                <Link
                  href="#"
                  onClick={() => navigate("/register")}
                  sx={{ textAlign: "end" }}
                >
                  {selectedLanguage === "en"
                    ? `Don't have an account?`
                    : "အကောင့်မရှိလျှင်ဖန်တီးပါ"}
                </Link>

                <Link
                  href="#"
                  onClick={() => handleForgetPassword()}
                  sx={{ textAlign: "end" }}
                >
                  {selectedLanguage === "en"
                    ? `Forget Password`
                    : "စကား၀ှက်မေ့သွားသလား"}
                </Link>
              </div>

              <Button
                type="submit"
                className="bg-primary-soft"
                sx={{
                  backgroundColor: "#fecc39",
                  "&:hover": { backgroundColor: "#333" },
                  color: "white",
                }}
              >
                {selectedLanguage === "en" ? `Login` : "အကောင့်၀င်ပါ"}
              </Button>
            </Box>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
