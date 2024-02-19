import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FetchWriteReview } from "../../api/datas";
import toast from "react-hot-toast";

const Card = ({
  reviewOpen,
  handleClose,
  productId,
  onReviewSubmitSuccess,
}) => {
  const [text, setText] = useState();
  const [value, setValue] = useState();
  const token = localStorage.getItem("Encrypted Key");

  const handleWriteReview = async () => {
    const existingReviews = JSON.parse(localStorage.getItem("reviewIds")) || [];

    // Check if the current productId is not already in the array
    if (!existingReviews.includes(productId)) {
      existingReviews.push(productId);

      // Save the updated array back to localStorage
      localStorage.setItem("reviewIds", JSON.stringify(existingReviews));
    }

    const response = await FetchWriteReview({ productId, value, text }, token);
    if (response) {
      toast.success("Your review is successfully submitted");
      onReviewSubmitSuccess();
      handleClose();
    }
  };
  return (
    <div>
      <Dialog
        fullWidth
        open={reviewOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Write your review about this product"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography component="legend">Select the Rate</Typography>

            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />

            <TextField
              sx={{ marginTop: "20px" }}
              fullWidth
              id="outlined-basic"
              label="Review"
              variant="outlined"
              rows={5}
              multiline
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleWriteReview} autoFocus>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Card;
