import React from "react";
import SearchOffIcon from "@mui/icons-material/SearchOff";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <SearchOffIcon fontSize="large" />
      No Result
    </div>
  );
};

export default NotFound;
