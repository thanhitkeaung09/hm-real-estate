import React, { useEffect } from "react";
import ProductLists from "./ProductLists";
import Footer from "../../component/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Encrypted Key");
    if (token) {
      ("something");
    } else {
      //some route might be change
      navigate("/");
    }
  }, []);
  return (
    <div>
      <ProductLists />
      <Footer />
    </div>
  );
};

export default Product;
