import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Img from "../../assets/img/logo.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useVerifyMutation } from "../../api/authApi";

const Confirmation = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });
  const [verify] = useVerifyMutation();



  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await verify(formData);
    // console.log(response);
    if (response.error) {
      toast.error("Invalid Code");
    } else {
      localStorage.setItem("Encrypted Key", response.data.data.token);
      localStorage.setItem("auth-info", JSON.stringify(response.data));
      toast.success("Registration is successful.");
      navigate("/");
    }
   
  };
 
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 md:border md:shadow-md rounded-md w-96 relative"
        >
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          <div className="mb-3">
            <h4 className="text-gray-500 mb-[1px]">VERIFY YOU ACCOUNT</h4>
          </div>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              required
            />

            <TextField
              label="Code"
              type="text"
              name="code"
              value={formData.password}
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
              Verify Account
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Confirmation;
