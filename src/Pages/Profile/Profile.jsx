import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { useNavigate } from "react-router-dom";
import { useUpdateProfileMutation } from "../../api/authApi";
import axios from "axios";
import { api_key, base_url } from "../../api/key";
import toast from "react-hot-toast";
import {
  FetchBookingList,
  FetchInQueryList,
  FetchUpdatePassword,
  FetchUpdateProfile,
} from "../../api/datas";
import { useDispatch, useSelector } from "react-redux";
import {
  toogleFormDialog,
  tooglePasswordDialog,
} from "../../feature/profileSlice";
// import { useGetInQueryQuery } from "../../api/inqueryApi";

const Profile = ({ selectedLanguage }) => {
  const { openFormDialog, openPasswordDialog } = useSelector(
    (state) => state.profile
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authData, setAuthData] = useState();
  const [avatarFile, setAvatarFile] = useState(null);
  const [name, setName] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState(null);
  const [inqueryList, setInqueryList] = useState([]);
  const [bookingList, setBookingList] = useState([]);

  const [update] = useUpdateProfileMutation();
  const token = localStorage.getItem("Encrypted Key");

  useEffect(() => {
    const fetchInqueryData = async () => {
      const response = await FetchInQueryList(token);
      setInqueryList(response);
      // console.log(response);
    };
    fetchInqueryData();

    const fetchBookingData = async () => {
      const response = await FetchBookingList(token);
      // console.log(response);
      setBookingList(response);
    };
    fetchBookingData();
    // fetch("https://portal.heavenmall.net/api/automobiles/inquires")
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    const data = JSON.parse(localStorage.getItem("auth-info"));
    if (data) {
      // console.log(data.data);
      setAuthData(data.data);
    } else {
      // console.log("Data Ma Shi");
    }

    if (!token) {
      navigate("/");
    }
  }, []);

  const handleClose = () => {
    dispatch(toogleFormDialog(false));
    dispatch(tooglePasswordDialog(false));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);

    // You can also show a preview of the selected image if needed.
    const reader = new FileReader();
    reader.onload = (e) => {
      // Set the preview image source here
      const previewImageSrc = e.target.result;
      // Do something with the preview image source (e.g., set it in state)
    };
    reader.readAsDataURL(file);
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("avatar", avatarFile);
    const response = await FetchUpdateProfile(
      { name: name, avatar: avatarFile },
      token
    );
    if (response.status === 200) {
      localStorage.setItem("auth-info", JSON.stringify(response.data));
    }
    window.location.reload();
    navigate("/");
    toast.success("Profile is successfully updated");
  };

  const handleUpdatePassword = async () => {
    const response = await FetchUpdatePassword(
      oldPassword,
      newPassword,
      newPasswordConfirmation,
      token
    );
    // console.log(response);
    if (response.data.status === false) {
      toast.error("Something wrong");
    } else if (response.status === 422) {
      toast.error("Password Confirmation does not match");
    } else {
      toast.success("Password is updated successfully");
      navigate("/");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 120,
      renderCell: (params) => (
        <img
          src={params.row.item.images}
          alt={`item-${params.row.id}`}
          style={{ width: "100%", height: "100%" }}
        />
      ),
    },
    { field: "question", headerName: "Question", width: 130 },
    { field: "answer", headerName: "Answer", width: 130 },
    {
      field: "date",
      headerName: "Date",
      type: "string",
      width: 90,
    },
    {
      field: "item",
      headerName: "Item",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.item.name}`,
    },
    {
      field: "price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.item.price}`,
    },
    {
      field: "parent_category",
      headerName: "Parent Category",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.item.parent_category}`,
    },
    {
      field: "category",
      headerName: "Category",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.item.category}`,
    },
  ];

  const bookingcolumns = [
    { field: "id", headerName: "ID", flex: 1 },

    { field: "status", headerName: "Status", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "item",
      headerName: "Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.item.name}`,
    },
  ];

  const handleOpen = () => {
    dispatch(toogleFormDialog(true));
    // alert("this is handleOpen");
  };

  const handleOpenPassword = () => {
    dispatch(tooglePasswordDialog(true));
  };

  return (
    <>
      <div className="w-[95%] md:w-[85%] mx-auto pt-[20px]">
        {/* profile */}
        <div className="mb-5">
          <div className="flex flex-col items-center">
            <Avatar
              alt="Remy Sharp"
              src={authData?.avatar}
              sx={{ width: 100, height: 100 }}
            />
            <div className="">
              <h1 className="text-sm md:text-sm font-semibold pt-3 ">
                {authData?.name}
              </h1>
            </div>
            <div className="text-gray-500">
              <h1 className="text-sm md:text-sm">{authData?.phone}</h1>
            </div>
            <div className="text-gray-400">
              <h1 className="text-sm md:text-sm">{authData?.email}</h1>
            </div>
            <div className="mt-2 flex">
              <div className="">
                <div className="hidden md:block">
                  <Button
                    className="text-sm md:text-sm"
                    sx={{ marginRight: "5px" }}
                    variant="contained"
                    color="warning"
                    // onClick={() => setOpen(true)}
                    onClick={() => handleOpen()}
                  >
                    {selectedLanguage === "en"
                      ? " Profile Edit"
                      : "ပရိုဖိုင် ပြောင်းလဲရန်"}
                  </Button>
                </div>
                <div className="block md:hidden">
                  <Button
                    size="small"
                    className="text-sm md:text-sm"
                    sx={{ marginRight: "5px" }}
                    variant="contained"
                    color="warning"
                    // onClick={() => setOpen(true)}
                    onClick={() => handleOpen()}
                  >
                    {selectedLanguage === "en"
                      ? " Profile Edit"
                      : "ပရိုဖိုင် ပြောင်းလဲရန်"}
                  </Button>
                </div>
              </div>

              <div className="">
                <div className="hidden md:block">
                  <Button
                    variant="outlined"
                    color="warning"
                    // onClick={() => setPasswordOpen(true)}
                    onClick={() => handleOpenPassword()}
                  >
                    {selectedLanguage === "en"
                      ? " Change Password"
                      : "စကား၀ှက်ပြောင်းလဲရန်"}
                  </Button>
                </div>
                <div className="block md:hidden">
                  <Button
                    size="small"
                    variant="outlined"
                    color="warning"
                    // onClick={() => setPasswordOpen(true)}
                    onClick={() => handleOpenPassword()}
                  >
                    {selectedLanguage === "en"
                      ? " Change Password"
                      : "စကား၀ှက်ပြောင်းလဲရန်"}
                  </Button>
                </div>
              </div>
            </div>
            {/* update profile */}
            <div className="">
              <Dialog
                fullWidth
                open={openFormDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Update your profile"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <div
                      style={{
                        marginTop: "1rem",
                        border: "2px dashed #ddd",
                        padding: "1rem",
                        textAlign: "center",
                        position: "relative",
                        width: "100%",
                        height: "200px",
                      }}
                    >
                      <label
                        htmlFor="avatar-upload"
                        style={{
                          cursor: "pointer",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body1">
                          Click to upload or drag and drop
                        </Typography>
                        <Typography variant="body2">
                          SVG, PNG, JPG, or GIF (max. 3MB)
                        </Typography>
                        {avatarFile ? (
                          <Typography variant="body1">
                            {avatarFile.name}
                          </Typography>
                        ) : null}
                      </label>
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        id="avatar-upload"
                        type="file"
                        onChange={handleFileChange}
                      />
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleUpdate} autoFocus>
                    Update
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
            {/* update profile end */}
            {/* edit password */}
            <div className="">
              <Dialog
                fullWidth
                open={openPasswordDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Update your password"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <TextField
                      sx={{ marginBottom: "15px" }}
                      fullWidth
                      id="outlined-basic"
                      label="Old Password"
                      variant="outlined"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                    />

                    <TextField
                      sx={{ marginBottom: "15px" }}
                      fullWidth
                      id="outlined-basic"
                      label="New Password"
                      variant="outlined"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />

                    <TextField
                      fullWidth
                      id="outlined-basic"
                      label="New Password Confirmation"
                      variant="outlined"
                      value={newPasswordConfirmation}
                      onChange={(e) =>
                        setNewPasswordConfirmation(e.target.value)
                      }
                    />
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleUpdatePassword} autoFocus>
                    Update
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="col-span-9">
          {/* Inquery List Table */}
          <div className="mb-10">
            <h1 className="text-[20px] mb-5">
              {selectedLanguage === "en"
                ? " InQuery Lists Table "
                : "စုံစမ်းထားသောအချက်အလက်ဇယား"}
            </h1>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={inqueryList}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
              />
            </div>
          </div>
          {/* Booking List Table */}
          <div className="mb-10">
            <h1 className="text-[20px] mb-5">
              {selectedLanguage === "en"
                ? " Booking Lists Table "
                : "ကြိုတင်မှာယူထားသောဇယား"}
            </h1>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={bookingList}
                columns={bookingcolumns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
