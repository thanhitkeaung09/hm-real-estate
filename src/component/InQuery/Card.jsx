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
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import Img from "../../assets/img/logo.png";
import { FetchInQuery, FetchProducts } from "../../api/datas";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Card = ({ handleClose,id }) => {
  const navigate = useNavigate();
  const [automobile,setAutomobile] = useState([]);
  const [name,setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address , setAddress] = useState(null);
  const [question , setQuestion] = useState(null);
  const [automobileid, setAutomobileId] = useState(null);

  const token = localStorage.getItem("Encrypted Key");


  useEffect(()=>{
    const auth = JSON.parse(localStorage.getItem("auth-info"));
    // console.log(auth);
    if(auth){
      setName(auth.data.name);
      setEmail(auth.data.email);
    }
    else if (auth === null){
      // toast.error("Login First to see the automobile detail")
      // navigate("/login");
    }
    else{
      setName(null);
      setEmail(null);
    }
    const fetchData = async () =>{
      const response = await FetchProducts();
      // console.log(response.data.data);
      setAutomobile(response.data.data);
    }
    fetchData();
  },[])

  const handleCloseQueryForm = () => {
    handleClose();
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    // alert(`>>>${automobileid}>>>>${name}>>>>${email}>>>>>${phone}>>>>${address}>>>>${question}`);
    const response = await FetchInQuery({automobile_id : id , name, email, phone, address , question},token)
    // console.log(response.data.data);
    if(response.data.data){
      toast.success("The Inquery form is successfully submitted");
      handleCloseQueryForm();
    }
    else{
      toast.error("Something Wrong");
    }
  }
  return (
    <>
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="bg-white py-3 px-10 border shadow-sm rounded-sm w-[500px] relative"
        >
          <div className="absolute top-3 right-3">
            <HiOutlineX
              className="cursor-pointer text-black z-20 "
              onClick={handleCloseQueryForm}
            />
          </div>
          <div className="flex items-center">
            <img src={Img} alt="" />
            <h1 className="text-gray-500">H E A V E N &nbsp;&nbsp; M A L L</h1>
          </div>
          {/* <div className="mb-1">
            <h4 className="text-gray-500 mb-[1px]">Request Details</h4>
          </div> */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">AutoMobile</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={automobileid}
                label="AutoMobile"
                onChange={(e)=>setAutomobileId(e.target.value)}
              >{
                automobile.map(el=>{
                  return(
                    <MenuItem value={el.id}>{el.name}</MenuItem>

                  );
                })
              }
          
              </Select>
            </FormControl> */}

            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              variant="outlined"
              required
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              variant="outlined"
              required
            />
            <TextField
              label="Phone"
              type="number"
              name="phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              variant="outlined"
              required
            />
            <TextField
              id="outlined-multiline-static"
              label="Address"
              name="address"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              multiline
              rows={2}
            />
            <TextField
              label="Question"
              // type={showPasswordConfirm ? "text" : "password"}
              name="question"
              value={question}
              onChange={(e)=>setQuestion(e.target.value)}
              variant="outlined"
              multiline
              rows={2}
              required
            />
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
                paddingTop : "10px",
                paddingBottom : "10px"
              }}
              // disabled={loading}
            >
              Send
              {/* {loading ? "Submitting" : "Register"} */}
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Card;
