import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import Logo from "../../../assets/icons/Logo";
import { useEffect } from "react";
import { useAuth } from "../../../utils/contexts/userContext/UserContext";
import CloseIcon from "../../../assets/icons/CloseIcon";
import { useNavigate } from "react-router-dom";

const TwoFactorAuth = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [openError, setOpenError] = useState(false);
  const { loading, verifyOtp, isAuthenticated, message, error, setError } =
    useAuth();
  const [otp, setOtp] = useState("");

  useEffect(() => {
    setStep(3);
  }, [message]);

  useEffect(() => {
    if (error) {
      setOpenError(error.length > 0 ? true : false);
    }

    setTimeout(() => {
      setError("");
    }, 10000);
  }, [loading]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) setEmail(JSON.parse(email));
  }, [otp]);

  const data = {
    email: email.toLowerCase(),
    otp: otp,
  };

  return (
    <Stack
      px="20px"
      bgcolor="#060C2C"
      height="100dvh"
      display={"flex"}
      alignItems="center"
      justifyContent="center"
      gap={{ xs: "20px", sm: "30px" }}
    >
      <Box mb={{ xs: "40px", sm: "70px" }}>
        <Logo />
      </Box>
      <Box
        p={{ xs: "20px", sm: "30px" }}
        gap={{ xs: "20px", sm: "30px" }}
        // mb={{ xs: "20px", sm: "30px" }}
        width="100%"
        maxWidth="600px"
        height="fit-content"
        // maxHeight={{ xs: "400px", sm: "360px" }}
        borderRadius="20px"
        bgcolor="#fff"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "space-between",
        }}
      >
        <Box width="100%">
          <Typography
            fontSize="22px"
            color="#79747E"
            textAlign="center"
            mb="10px"
          >
            Two-Factor Authorization
          </Typography>
          <Typography
            fontSize="16px"
            color="#79747E"
            sx={{ width: { xs: "100%", md: "480px" }, textAlign: "center" }}
          >
            {step === 1
              ? "Enter a 6-digit code from your back up codes that you have not used before to finish the login procedure"
              : step === 2
              ? " Access your selected authenticator app (eg. Google Authenticator or any other one) and enter the 6-digit code provided to finish the login procedure"
              : "A distinct code has been sent to your email address. Kindly check your inbox and enter the code provided to finish the login procedure"}
          </Typography>
        </Box>
        <Box
          sx={{
            gap: { xs: "20px", sm: "30px" },
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
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
              },
            }}
            placeholder={step === 1 ? "Enter backup code" : "Enter code"}
          />
        </Box>
        <Button
          disabled={loading || otp.length < 6}
          variant="contained"
          height="40px"
          sx={{
            width: { xs: "100%", sm: "200px" },
            fontSize: "14px",
            color: "#fff",
            bgcolor: "#6750A4",
            textTransform: "capitalize",
            borderRadius: "20px",
            p: "10px 24px",
            // "&:hover": {
            //   bgcolor: "#6750A4",
            // },
          }}
          onClick={() => {
            verifyOtp(data);
            if (isAuthenticated) navigate("/");
          }}
        >
          {loading ? <CircularProgress /> : "Verify"}
        </Button>
        {step !== 1 && (
          <Box
            //   mb="12px"
            display="flex"
            alignItems={"center"}
            gap="10px"
          >
            <Typography fontSize="14px" color="#000" fontFamily={"Roboto"}>
              Didn't see the code?
            </Typography>
            <Typography
              fontSize="14px"
              color="#6750A4"
              sx={{ cursor: "pointer" }}
            >
              Resend code
            </Typography>
          </Box>
        )}
      </Box>
      {step > 1 && (
        <Box>
          <Typography
            fontSize="14px"
            color="#6750A4"
            sx={{ cursor: "pointer" }}
          >
            Enter backup code
          </Typography>
        </Box>
      )}
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            borderRadius: "30px",
            maxWidth: "300px",
          },
        }}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
        message={error}
        action={<CloseIcon />}
      />
    </Stack>
  );
};

export default TwoFactorAuth;
