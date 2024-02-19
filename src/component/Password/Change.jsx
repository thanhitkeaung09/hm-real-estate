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
import {
  FetchCodeResend,
  FetchForgetPassword,
  FetchLogin,
} from "../../api/datas";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Change = ({ handleShowLogin, selectedLanguage }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    code: "",
  });
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
    // setDisplayCodeForm(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await FetchForgetPassword(formData);
    if (response.data === "Invalid Code") {
      toast.error("Confirmation Code is expired");
    } else {
      toast.success("Password is successfully changed");
      navigate("/");
    }
    // if (response.status === 200) {
    //   localStorage.setItem("Encrypted Key", response.data.data.token);
    //   localStorage.setItem("auth-info", JSON.stringify(response.data));

    //   toast.success("Login Successfully");
    //   navigate("/");
    // } else {
    //   toast.error("Email or Password is incorrect");
    // }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className={`bg-white p-8 border shadow-sm rounded-sm w-96 relative ${
            showLoginForm ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          <div className="mb-3">
            <h4 className="text-gray-500 mb-[1px]"> {selectedLanguage === 'en' ? 'PASSWORD CHANGE' : 'စကား၀ှက်ပြောင်းလဲပါ'}</h4>
          </div>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label= {selectedLanguage === 'en' ? 'Email' : 'အီးမေလ်'}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />

            <TextField
              label= {selectedLanguage === 'en' ? 'Pasword' : 'စကား၀ှက်'}
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

            <TextField
              label= {selectedLanguage === 'en' ? 'Code' : 'ကုဒ်'}
              type="text"
              name="code"
              value={formData.code}
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
               {selectedLanguage === 'en' ? 'Change' : 'စကား၀ှက်ပြောင်းလဲမည်'}
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Change;
