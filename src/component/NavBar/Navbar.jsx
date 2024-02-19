// Navbar.js
import {  useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { NavLink } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import Img from "../../assets/img/logo.png";
import AccountMenu from "./AccountMenu";
import { FiSearch } from "react-icons/fi";
import { useGetPagesQuery } from "../../api/pageApi";
const Navbar = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data, isSuccess, isError, isLoading, refetch } =
    useGetPagesQuery(selectedLanguage);
  // console.log(data);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  let content = null;
  let mobilecontent = null;

  if (isLoading) {
    content = (
      <>
        <h1>Loading</h1>
      </>
    );
  }

  if (isError) {
    content = (
      <>
        <h1>Navbar fetch error</h1>
      </>
    );
  }

  if (isSuccess) {
    const navdata = data.data;
    // console.log(data);
    content = (
      <>
        {navdata.map((el, index) => {
          return (
            <NavLink
              key={index}
              to={`/dynamic-content/${el.id}`}
              className="cursor-pointer mx-4 text-primary-dark  transition-all duration-100 relative   before:absolute before:-bottom-3 before:rounded before:contents-[''] before:w-0 before:h-[3px] before:bg-primary-soft hover:before:w-full before:transition-all before:duration-150"
            >
              {el.name}
            </NavLink>
          );
        })}
      </>
    );
  }

  if (isSuccess) {
    const navdata = data.data;
    mobilecontent = (
      <>
        {navdata.map((el, index) => {
          return (
            <div className="mb-4" key={index}>
              <NavLink
                to={`/dynamic-content/${el.id}`}
                className="block py-2 px-4 hover:bg-gray-800"
                onClick={toggleDrawer}
              >
                {el.name}
              </NavLink>
            </div>
          );
        })}
      </>
    );
  }

  const handleLanguageChange = async (lang) => {
    setSelectedLanguage(lang);
    onLanguageChange(lang);
    // Additional logic for handling language change, if needed
    await refetch();
  };
  // console.log(selectedLanguage);

  return (
    <div className="">
      <LanguageSwitcher onLanguageChange={handleLanguageChange} />
      <AppBar position="static" sx={{ backgroundColor: "#333" }} className="">
        <Toolbar className="justify-between w-full md:w-[95%] lg:w-[85%] mx-auto">
          <NavLink to="/">
            <img src={Img} alt="" />
          </NavLink>
          <div className="hidden md:flex">
            <NavLink
              to="/"
              className="mx-4 text-primary-dark relative  transition-all duration-100 before:absolute before:-bottom-3 before:rounded before:contents-[''] before:w-0 before:h-[3px] before:bg-primary-soft hover:before:w-full before:transition-all before:duration-150  "
            >
              {selectedLanguage === "en" ? "Home" : "ပင်မစာမျက်နှာ"}
            </NavLink>
            <NavLink
              to="/products"
              className="mx-4 text-primary-dark relative  transition-all duration-100 before:absolute before:-bottom-3 before:rounded before:contents-[''] before:w-0 before:h-[3px] before:bg-primary-soft hover:before:w-full before:transition-all before:duration-150"
            >
              {selectedLanguage === "en" ? "Products" : "ပစ္စည်းများ"}
            </NavLink>
            {content}
          </div>
          <div className="hidden md:block">
            <div className="border rounded-2xl overflow-hidden bg-white px-2 py-1 group">
              <input
                type="text"
                className="px-3 text-gray-600 focus:outline-none"
              />
              <button>
                <FiSearch className="text-gray-600 group-hover:text-primary-dark" />
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <AccountMenu selectedLanguage={selectedLanguage} />
          </div>
          <div className="md:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        BackdropProps={{ style: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
        PaperProps={{
          style: {
            background: "rgba(255, 255, 255, 0.7)",
            color: "rgb(255, 179, 0)",
            backdropFilter: "blur(10px)",
          },
        }}
      >
        <div className="p-4">
          <div className="mb-4">
            <NavLink
              to="/"
              className="block py-2 px-4 hover:bg-gray-800"
              onClick={toggleDrawer}
            >
              {selectedLanguage === "en" ? "Home" : "ပင်မစာမျက်နှာ"}
            </NavLink>
          </div>
          <div className="mb-4">
            <NavLink
              to="/products"
              className="block py-2 px-4 hover:bg-gray-800"
              onClick={toggleDrawer}
            >
              {selectedLanguage === "en" ? "Products" : "ပစ္စည်းများ"}
            </NavLink>
          </div>
          {mobilecontent}
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
