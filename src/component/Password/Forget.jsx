import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import Img from "../../assets/img/logo.png";
import { FetchCodeResend } from "../../api/datas";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCodeResendMutation } from "../../api/authApi";

const Forget = ({ selectedLanguage }) => {
  const navigate = useNavigate();
  const [resend, { isSuccess, isLoading }] = useCodeResendMutation();
  const [email, setEmail] = useState("");
  isSuccess;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await resend(email);
    // console.log(response);
    if (response.error) {
      toast.error(response.error.data.message);
    } else {
      toast.success("Confirmation Code is resend again");
      navigate("/forget-password");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className={`bg-white p-8 md:border md:shadow-md rounded-md w-96 relative  `}
      >
        <div className="flex items-center">
          <img src={Img} alt="" />
          <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
        </div>
        <div className="mb-3">
          <h4 className="text-gray-500 mb-[1px]">
            {" "}
            {selectedLanguage === "en" ? "SEND CODE" : "ကုဒ်ပို့ခြင်း"}
          </h4>
        </div>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label={selectedLanguage === "en" ? "Email" : "အီးမေလ်"}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            required
          />

          <Button
            disabled={isLoading}
            type="submit"
            className="bg-primary-soft"
            sx={{
              backgroundColor: "#fecc39",
              "&:hover": { backgroundColor: "#333" },
              color: "white",
            }}
          >
            {isLoading
              ? `${selectedLanguage === "en" ? "Submitting" : "ခတ္တစောင့်ပါ"}`
              : `${selectedLanguage === "en" ? "SEND CODE" : "ကုဒ်ပို့သည်"}`}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Forget;
