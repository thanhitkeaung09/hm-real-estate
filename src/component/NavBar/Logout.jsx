import { useState } from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useLogoutMutation } from "../../api/authApi";
import axios from "axios";
import { api_key } from "../../api/key";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Logout = ({ handleShowLogout, openlogoutbackdrop }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("Encrypted Key");
  const [logout] = useLogoutMutation();
  const handleClose = () => {
    handleShowLogout();
  };

  const handleLogout = async () => {
    const response = await logout(token);
    if (response) {
      localStorage.clear();
      navigate("/login");
      toast.success("Logout Successfully");
      // window.location.reload();
    }
    // const apiUrl = "https://portal.heavenmall.net/api/logout";
    // const apiKey = "your-api-key"; // Replace with your API key
    // const token = "your-token"; // Replace with your token

    // try {
    //   const response = await fetch(apiUrl, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Api-Key": apiKey,
    //       Authorization: `Bearer ${token}`,
    //       "access-control-allow-origin": "*",
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //   });

    //   if (response.ok) {
    //   } else {
    //     console.error("Logout failed");
    //   }
    // } catch (error) {
    //   console.error("Error during logout:", error);
    // }
    // alert(token);
  };

  return (
    <>
      <Dialog
        open={openlogoutbackdrop}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure want to logout?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This will ensure the security of your account. Click &apos; Yes
            &apos; to confirm or &apos; Cancel &apos; to stay logged in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleLogout} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Logout;
