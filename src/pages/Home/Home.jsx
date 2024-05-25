import {
  Box,
  Button,
  Typography,
  TextField,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import React from "react";
import InfoCard from "./components/InfoCard";
import Shop from "../../assets/icons/Shop";
import Export from "../../assets/icons/Export";
import Import from "../../assets/icons/Import";
import Car from "../../assets/icons/Car";
import Chart from "./components/Chart";
import OrderRequestComp from "../../components/order/order-request";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UserModals from "../Users/components/UserModals";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../utils/contexts/userContext/UserContext";
import CloseIcon from "../../assets/icons/CloseIcon";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    verifyOtp,
    isAuthenticated,
    loading,
    success,
    setSuccess,
    setError,
    error,
  } = useAuth();
  const [openModal, setOpenModal] = useState(location?.state?.newUser ?? false);
  const [open, setOpen] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (success) {
      setOpen(success ? true : false);
    }
    if (error) {
      setOpenError(error ? true : false);
    }
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 10000);
  }, [loading]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) setEmail(JSON.parse(email));
  }, [otp]);
  const data = {
    email: email,
    otp: otp,
  };

  const IconComponents = [
    {
      icon: <Shop />,
      value: 200,
    },
    {
      icon: <Export />,
      value: 200,
    },
    {
      icon: <Import />,
      value: 200,
    },
    {
      icon: <Car />,
      value: 200,
    },
  ];
  // if (!isAuthenticated && !openModal)
  //   return <Navigate to='/login' state={{from: location.pathname}} />
  return (
    <Box p="32px 40px">
      <Box display="flex" gap="16px" mb="24px">
        <InfoCard
          title="Total Orders"
          count="1200"
          subTitle="Total orders performed on the RAC Logistics platform"
          iconComponents={IconComponents}
        />
        <InfoCard
          title="Total Shipments"
          count="1200"
          subTitle="Total shipments managed on the RAC Logistics platform"
          iconComponents={IconComponents}
        />
        <InfoCard
          title="Pending Payments"
          count="1200"
          subTitle="All pending payments on the RAC Logistics platform"
          iconComponents={IconComponents}
        />
        <InfoCard
          title="Order Requests"
          count="1200"
          subTitle="Total orders requested by customers through the RAC Logistics platform"
          iconComponents={IconComponents}
        />
      </Box>
      <Box mb="24px">
        <Chart />
      </Box>
      <Box>
        <Box display="flex" alignItems="center" gap="8px" mb="16px">
          <Typography fontSize="16px" fontWeight={500} color="#49454F">
            Unapproved Order Requests
          </Typography>
          <Box height="1px" width="100%" flex={1} bgcolor="#CAC4D0"></Box>
          <Button
            variant="text"
            startIcon={
              <Box sx={{ transform: "rotate(180deg)" }}>
                <ArrowLeftPurple />
              </Box>
            }
            sx={{
              width: "97px",
              height: "26px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#6750A4",
              textTransform: "none",
            }}
            onClick={() => navigate("/order-requests")}
          >
            See all
          </Button>
        </Box>
        <OrderRequestComp home />
      </Box>
      <UserModals
        open={isAuthenticated ? false : openModal}
        onClose={() => setOpenModal(false)}
        title="Verify your account!"
      >
        <Typography fontSize="22px" fontWeight={600} color="#49454F" mb="30px">
          Enter the OTP we sent to your email{" "}
          <Typography
            display="inline"
            fontSize="22px"
            fontWeight={400}
            color="#49454F"
          >
            {email}
          </Typography>{" "}
          to verify your account
        </Typography>
        <TextField
          fullWidth
          id="text"
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          InputProps={{
            sx: {
              borderRadius: "20px", // Apply border radius to the input element
              height: "56px",
              borderColor: "#79747E",
              mb: "30px",
            },
          }}
          placeholder="Enter code"
        />
        <Button
          disabled={loading || otp.length < 6}
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "200px" },
            height: "40px",
            fontSize: "14px",
            color: "#fff",
            bgcolor: "#6750A4",
            textTransform: "capitalize",
            borderRadius: "100px",
            mb: "10px",
            // "&:hover": {
            //   bgcolor: "#6750A4",
            // },
          }}
          onClick={() => {
            verifyOtp(data);
            if (isAuthenticated) {
              navigate("/");
              setOpen(true);
            }
          }}
        >
          {loading ? <CircularProgress /> : "Submit"}
        </Button>
        <Typography fontSize="14px" color="#000">
          Did not receive any OTP?{" "}
          <Typography
            display="inline"
            fontSize="14px"
            color="#6750A4"
            sx={{ cursor: "pointer" }}
          >
            Resend OTP
          </Typography>
        </Typography>
      </UserModals>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": { borderRadius: "30px", top: "130px" },
        }}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        message={success}
        action={<CloseIcon />}
      />
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": { borderRadius: "30px", top: "130px" },
        }}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
        message={success}
        action={<CloseIcon />}
      />
    </Box>
  );
};

export default Home;
