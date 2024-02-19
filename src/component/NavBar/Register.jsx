import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";
import Img from "../../assets/img/logo.png";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../api/authApi";

const Register = ({ selectedLanguage }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const [register, { isLoading }] = useRegisterMutation();

  // console.log(selectedLanguage);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleTogglePasswordVisibilityConfirm = () => {
    setShowPasswordConfirm((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await register(formData);
    if (response.error) {
      const { error } = response;
      const { data } = error;
      if (data.status === false) {
        toast.error(data.message);
      }
    } else {
      toast.success("Confirmation code is successfully send");
      navigate("/confirm");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white px-8 py-3 md:border md:shadow-md rounded-lg w-96 relative"
        >
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          <div className="mb-3">
            <h4 className="text-gray-500 mb-[1px]">
              {selectedLanguage === "en" ? "SIGN UP" : "အကောင့်ဖွင်ရန်"}
            </h4>
          </div>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label={selectedLanguage === "en" ? "Name" : "အမည်"}
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              required
            />
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
              label={selectedLanguage === "en" ? "Phone" : "ဖုန်းနံပါတ်"}
              type="number"
              name="phone"
              value={formData.phone}
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
            <TextField
              label={
                selectedLanguage === "en"
                  ? "Confirm Password"
                  : "စကား၀ှက်အတည်ပြုပါ"
              }
              type={showPasswordConfirm ? "text" : "password"}
              name="password_confirmation"
              value={formData.confirmPassword}
              onChange={handleChange}
              variant="outlined"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibilityConfirm}>
                      {showPasswordConfirm ? <FaEyeSlash /> : <FaEye />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              className="bg-primary-soft"
              sx={{
                backgroundColor: "#fecc39",
                "&:hover": { backgroundColor: "#333" },
                color: "white",
              }}
              disabled={isLoading}
            >
              {isLoading
                ? `${selectedLanguage === "en" ? "Submitting" : "ခတ္တစောင့်ပါ"}`
                : `${
                    selectedLanguage === "en" ? "Register" : "အကောင့်ဖွင့်သည်"
                  }`}
            </Button>
            <Link
              sx={{ textAlign: "center" }}
              onClick={() => navigate("/login")}
            >
              <Typography sx={{ cursor: "pointer" }}>
                {selectedLanguage === "en"
                  ? "I already have an account"
                  : "အကောင့်ရှိပြီးသားနှင့်၀င်ရန်"}
              </Typography>
            </Link>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Register;
