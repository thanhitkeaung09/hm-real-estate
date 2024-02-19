import { HiOutlineX } from "react-icons/hi";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Img from "../../assets/img/logo.png";
import BookingImage from "../../assets/img/car-booking.jpg";
import { useEffect, useState } from "react";
import { FetchBooking, FetchProducts } from "../../api/datas";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Card = ({ handleBookingClose, id }) => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAddress] = useState(null);
  const [payment, setPayment] = useState(null);
  const [automobile, setAutomobile] = useState([]);
  // console.log(id);
  // const [automobileId , setAutomobileId] = useState(id);

  const token = localStorage.getItem("Encrypted Key");

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth-info"));
    // console.log(auth);
    // console.log("bbbbbbbllllllllaaaaaaa");
    if (auth) {
      setName(auth.data.name);
      setEmail(auth.data.email);
    } else if (auth === null) {
      // navigate("/login");
    } else {
      setName(null);
      setEmail(null);
    }
    // console.log("alsjfljsadlfsd");

    const fetchData = async () => {
      const response = await FetchProducts();
      // console.log(response.data.data);
      setAutomobile(response.data.data);
    };
    fetchData();
  }, []);

  const handleCloseBookingForm = () => {
    handleBookingClose();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(token);
    // alert(`${name}...${email}...${phone}...${address}...${payment}.>>>>>${automobileId}`);
    const response = await FetchBooking(
      {
        name,
        email,
        phone,
        address,
        payment_method: payment,
        automobile_id: id,
      },
      token
    );
    // console.log(response);
    if (response.data.status === true) {
      toast.success("The Booking is successfully submitted");
      handleCloseBookingForm();
    } else {
      toast.error("Something Wrong");
    }
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="p-7 rounded-lg shadow  w-[300px] md:[w-500] lg:w-[600px] relative bg-white">
          <p className="text-xl mb-4 text-gray-600">Book Now</p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-sm rounded-sm"
          >
            <div className="absolute top-3 right-3">
              <HiOutlineX
                className="cursor-pointer text-black z-20 "
                onClick={handleCloseBookingForm}
              />
            </div>
            <div className="flex items-center"></div>
            {/* <div className="mb-1">
            <h4 className="text-gray-500 mb-[1px]">Request Details</h4>
          </div> */}
            <div className="grid grid-cols-12 gap-5">
              {/* <div className="col-span-6">
              <div className="">
                <img className="" src={BookingImage} alt="" />
              </div>
            </div> */}
              <div className="col-span-12">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Auto Mobile
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={id}
                      label="AutoMobile"
                      onChange={(e)=>setAutomobileId(e.target.value)}
                    >
                      {
                        automobile.map(el=>{
                          return(
                            <MenuItem value={el.id}>{el.name}</MenuItem>

                          )
                      
                        })
                      }
                    
                    </Select>
                  </FormControl> */}
                  <TextField
                    label="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    required
                  />
                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="outlined"
                    required
                  />
                  <TextField
                    label="Phone"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    variant="outlined"
                    required
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    multiline
                    rows={2}
                  />

                  <TextField
                    label="Payment"
                    type="text"
                    name="payment"
                    value={payment}
                    onChange={(e) => setPayment(e.target.value)}
                    variant="outlined"
                    required
                  />

                  <Button
                    // onClick={handleConfirmation}
                    type="submit"
                    className="bg-primary-soft"
                    sx={{
                      backgroundColor: "#fecc39",
                      "&:hover": { backgroundColor: "#333" },
                      color: "white",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                    // disabled={loading}
                  >
                    Send
                    {/* {loading ? "Submitting" : "Register"} */}
                  </Button>
                </Box>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
