import { TextField } from "@mui/material";
import React from "react";

const Edit = () => {
  return (
    <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
      <div className="flex justify-center">
        <TextField
          sx={{ width: "500px" }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Edit;
