import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { InputLabel } from "@mui/material";
import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";

import { FetchSignup } from "../../api/datas";

const Profile = ({ handleShowProfile }) => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  //   password_confirmation: "",
  // });
  // const [showPassword, setShowPassword] = useState(false);
  // const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   const { name, value } = event.target;
  //   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  // };

  const handleClose = () => {
    handleShowProfile();
  };

  // const handleTogglePasswordVisibility = () => {
  //   setShowPassword((prevShowPassword) => !prevShowPassword);
  // };

  // const handleTogglePasswordVisibilityConfirm = () => {
  //   setShowPasswordConfirm((prevShowPassword) => !prevShowPassword);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   setLoading(true);
  //   const response = await FetchSignup(formData);
  //   if (response === 200) {
  //     setShowAlert(true);
  //     handleConfirm();
  //     setTimeout(() => {
  //       setShowAlert(false);
  //     }, 1000);
  //   }
  // };

  // const handleConfirmation = () => {
  //   handleConfirm();
  // };

  return (
    <>
      <div className="flex flex-col">
        <form
          // onSubmit={handleSubmit}
          className="bg-white p-8 border shadow-sm rounded-sm w-96 relative"
        >
          <div className="absolute top-3 right-3">
            <HiOutlineX
              className="cursor-pointer text-black z-20 "
              onClick={handleClose}
            />
          </div>
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          <div className="mb-3">
            <h4 className="text-gray-500 mb-[1px]">Personal Information</h4>
          </div>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <div className="">
              <img
                className="h-44 w-full object-cover"
                src={
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                }
                alt=""
              />
            </div>
            {/* <div className="">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                My Profile
              </InputLabel>
            </div> */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  className=""
                  sx={{
                    borderBottom: "1px solid #B2B2B2",
                    paddingBottom: 1,
                  }}
                >
                  Nann Sham Kham
                </InputLabel>
              </div>
              <div>
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  className=""
                  sx={{
                    borderBottom: "1px solid #B2B2B2",
                    paddingBottom: 1,
                  }}
                >
                  09 - 583759947
                </InputLabel>
              </div>
            </div>
            <div>
              <InputLabel
                variant="standard"
                htmlFor="uncontrolled-native"
                className=""
                sx={{
                  borderBottom: "1px solid #B2B2B2",
                  paddingBottom: 1,
                }}
              >
                nannshamkham@gmail.com
              </InputLabel>
            </div>
            {/* Name */}
            {/* <div className="">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Name
              </InputLabel>
              <h1 className="text-black">Nann Sham Kham</h1>
            </div> */}
            {/* Email */}
            {/* <div className="">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Email
              </InputLabel>
              <h1 className="text-black">nannshamkham1123@gmail.com</h1>
            </div> */}
            {/* Phone */}
            {/* <div className="">
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Phone
              </InputLabel>
              <h1 className="text-black">0947387979707</h1>
            </div> */}
            <Button
              // onClick={handleConfirmation}
              type="submit"
              // variant="contained"
              // color="primary"
              sx={{
                border: "1px solid black",
                "&:hover": { backgroundColor: "#333", color: "white" },
                color: "black",
              }}
              // disabled={loading}
            >
              Change Password
            </Button>
            <Button
              // onClick={handleConfirmation}
              type="submit"
              // variant="contained"
              // color="primary"
              className="bg-primary-soft"
              sx={{
                backgroundColor: "#fecc39",
                "&:hover": { backgroundColor: "#333" },
                color: "white",
              }}
              // disabled={loading}
            >
              Forget Password
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Profile;
