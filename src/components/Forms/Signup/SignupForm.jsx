import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "../../../assets/icons/Logo";
import Tick from "../../../assets/icons/Tick";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../utils/contexts/userContext/UserContext";

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const { signUp, message, loading } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    contactAddress: [
      {
        country: country,
        state: state,
        city: city,
        streetAddress: streetAddress,
        countryCode: countryCode,
        phoneNumber: phoneNumber,
        postalCode: postalCode,
      },
    ],
  };
  console.log(data);
  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Nigeria",
    "Germany",
    "France",
    "Japan",
    "Italy",
    "Spain",
    "Brazil",
  ];
  const states = [
    "Lagos",
    "Kano",
    "Oyo",
    "Rivers",
    "Kaduna",
    "Abuja",
    "Ogun",
    "Edo",
    "Enugu",
    "Delta",
  ];
  const cities = [
    "Oshodi",
    "Ikeja",
    "Lekki",
    "Victoria Island",
    "Ikoyi",
    "Ajah",
    "Surulere",
    "Epe",
    "Badagry",
    "Agege",
  ];
  const countryCodes = [
    { name: "Nigeria", code: "+234" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
    { name: "Germany", code: "+49" },
    { name: "France", code: "+33" },
    { name: "Japan", code: "+81" },
    { name: "Brazil", code: "+55" },
    { name: "India", code: "+91" },
  ];
  const containsAlpha = /[A-Z]/.test(password);
  const containsLower = /[a-z]/.test(password);
  const containsSymbol =
    /[!@#$%^&*(),.?":{}|<>]/.test(password) || /\d/.test(password);
  const isMinLength = password.length > 8;
  const isConfirmed = password === confirmPassword;

  
  const isValid = () => {
    if (
      containsAlpha &&
      containsLower &&
      containsSymbol &&
      isMinLength &&
      isConfirmed &&
      firstName &&
      lastName &&
      email &&
      password
    )
      return false;
    else return true;
  };

  return (
    <Stack
      py="50px"
      px="20px"
      bgcolor="#060C2C"
      height="100%"
      display={"flex"}
      alignItems="center"
      justifyContent="center"
    >
      {step === 1 ? (
        <>
          <Box mb={{ xs: "70px", sm: "100px" }}>
            <Logo />
          </Box>
          <Box
            p={{ xs: "20px", sm: "30px" }}
            mb={{ xs: "30px", sm: "40px" }}
            width="100%"
            maxWidth="600px"
            height={"fit-content"}
            // maxHeight="370px"
            borderRadius="20px"
            bgcolor="#fff"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontSize="22px"
              color="#79747E"
              mb={{ xs: "30px", sm: "60px" }}
            >
              CREATE YOUR ACCOUNT
            </Typography>
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
                id="firstname"
                type="text"
                label="First Name"
                name="firstName"
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
              />
              <TextField
                fullWidth
                id="lastname"
                type="text"
                label="Last Name"
                name="lastName"
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
              />
              <TextField
                fullWidth
                id="email"
                type="email"
                label="Email"
                name="email"
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
              <Box>
                <TextField
                  InputProps={{
                    sx: {
                      borderRadius: "20px", // Apply border radius to the input element
                      height: "56px",
                      borderColor:
                        containsAlpha &&
                        containsLower &&
                        containsSymbol &&
                        isMinLength
                          ? "#79747E"
                          : "#B3261E",
                      fontSize: "16px",
                      color: "#1C1B1F",
                    },
                  }}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  fullWidth
                  id="password"
                  label="Password"
                  placeholder="Enter your password"
                />
                {password.length === 0 ? null : (
                  <Typography
                    display={
                      containsAlpha &&
                      containsLower &&
                      containsSymbol &&
                      isMinLength
                        ? "none"
                        : "block"
                    }
                    pl="16px"
                    fontSize="12px"
                    color="#B3261E"
                  >
                    Your password must meet the criteria below.
                  </Typography>
                )}
              </Box>
            </Box>
            <Grid
              container
              p="10px"
              display="flex"
              sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick
                  color={
                    containsLower
                      ? "#6750A4"
                      : password.length === 0
                      ? "#79747E"
                      : "#B3261E"
                  }
                />
                <Typography
                  fontSize="12px"
                  color={
                    containsLower
                      ? "#21005D"
                      : password.length === 0
                      ? "#49454F"
                      : "#410E0B"
                  }
                  letterSpacing=".4px"
                >
                  At least one lowercase letter
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick
                  color={
                    isMinLength
                      ? "#6750A4"
                      : password.length === 0
                      ? "#79747E"
                      : "#B3261E"
                  }
                />
                <Typography
                  fontSize="12px"
                  color={
                    isMinLength
                      ? "#21005D"
                      : password.length === 0
                      ? "#49454F"
                      : "#410E0B"
                  }
                  letterSpacing=".4px"
                >
                  Minimum of 8 characters
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick
                  color={
                    containsAlpha
                      ? "#6750A4"
                      : password.length === 0
                      ? "#79747E"
                      : "#B3261E"
                  }
                />
                <Typography
                  fontSize="12px"
                  color={
                    containsAlpha
                      ? "#21005D"
                      : password.length === 0
                      ? "#49454F"
                      : "#410E0B"
                  }
                  letterSpacing=".4px"
                >
                  At least one uppercase character
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                display="flex"
                alignItems="center"
                gap="10px"
              >
                <Tick
                  color={
                    containsSymbol
                      ? "#6750A4"
                      : password.length === 0
                      ? "#79747E"
                      : "#B3261E"
                  }
                />
                <Typography
                  fontSize="12px"
                  color={
                    containsSymbol
                      ? "#21005D"
                      : password.length === 0
                      ? "#49454F"
                      : "#410E0B"
                  }
                  letterSpacing=".4px"
                >
                  Must contain a number or special character
                </Typography>
              </Grid>
            </Grid>
            <TextField
              InputProps={{
                sx: {
                  borderRadius: "20px", // Apply border radius to the input element
                  height: "56px",
                  borderColor: "#79747E",
                },
              }}
              type="password"
              fullWidth
              id="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Re-Enter your password"
              placeholder="Re-Enter your password"
            />
            <Box
              alignSelf={"flex-start"}
              p="10px"
              display="flex"
              alignItems="center"
              gap="10px"
            >
              <Tick
                color={
                  isConfirmed && confirmPassword.length > 0
                    ? "#6750A4"
                    : confirmPassword.length === 0
                    ? "#79747E"
                    : "#B3261E"
                }
              />
              <Typography
                fontSize="12px"
                color={
                  isConfirmed && confirmPassword.length > 0
                    ? "#21005D"
                    : confirmPassword.length === 0
                    ? "#49454F"
                    : "#410E0B"
                }
                letterSpacing=".4px"
              >
                Passwords match each other
              </Typography>
            </Box>
            <Button
              variant="contained"
              disabled={isValid()}
              height="40px"
              sx={{
                mt: { xs: "32px", sm: "48px" },
                width: { xs: "100%", sm: "200px" },
                fontSize: "14px",
                color: "#fff",
                bgcolor: "#6750A4",
                textTransform: "capitalize",
                borderRadius: "20px",
                p: "10px 24px",
                "&:hover": {
                  bgcolor: "#6750A4",
                },
              }}
              onClick={() => setStep((prev) => prev + 1)}
            >
              Proceed
            </Button>
          </Box>
          <Box>
            <Box mb="12px" display="flex" alignItems={"center"} gap="10px">
              <Typography fontSize="14px" color="#fff" fontFamily={"Roboto"}>
                Already have an account?
              </Typography>
              <Typography
                fontSize="14px"
                color="#6750A4"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box mb={{ xs: "70px", sm: "100px" }}>
            <Logo />
          </Box>
          <Box
            p={{ xs: "20px", sm: "30px" }}
            mb={{ xs: "30px", sm: "40px" }}
            width="100%"
            maxWidth="600px"
            height={"fit-content"}
            // maxHeight="370px"
            borderRadius="20px"
            bgcolor="#fff"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              //   justifyContent: "space-between",
            }}
          >
            <Typography fontSize="22px" color="#79747E" mb="10px">
              Just one more step
            </Typography>
            <Typography
              fontSize="16px"
              color="#79747E"
              mb={{ xs: "20px", sm: "30px" }}
            >
              <Typography sx={{ display: "inline" }} fontWeight={700}>
                Dear {firstName}
              </Typography>
              , Provide us your contact address
            </Typography>
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
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="country"
                type="text"
                label="Country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                select
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                placeholder="Enter your country"
              >
                {countries.map((country, i) => (
                  <MenuItem value={country} key={i}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                id="state"
                type="text"
                label="State"
                select
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                placeholder="Enter your state"
              >
                {states.map((state, i) => (
                  <MenuItem value={state} key={i}>
                    {state}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                id="city"
                type="text"
                label="City"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                select
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                placeholder="Enter your city"
              >
                {cities.map((city, i) => (
                  <MenuItem value={city} key={i}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                id="street address"
                type="text"
                label="Street Address"
                name="streetAddress"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                placeholder="Enter your street address"
              />
              <TextField
                fullWidth
                id="zip/postal code"
                type="text"
                label="Zip/Postal Code"
                name="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                InputProps={{
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                placeholder="Enter your zip or postal code"
              />
              <Box
                display="flex"
                sx={{
                  width: "100%",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: "20px",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="country code"
                  type="text"
                  fullWidth={isSmall ? true : false}
                  label="Country Code"
                  select
                  name="countryCode"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  InputProps={{
                    sx: {
                      borderRadius: "20px", // Apply border radius to the input element
                      height: "56px",
                      borderColor: "#79747E",
                      fontSize: "16px",
                      color: "#1C1B1F",
                      width: { xs: "100%", sm: "160px" },
                      mr: { xs: 0, sm: "80px" },
                    },
                  }}
                  placeholder="Enter your country code"
                >
                  {countryCodes.map((code, i) => (
                    <MenuItem value={`${code.name} ${code.code}`} key={i}>
                      {`${code.name} ${code.code}`}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  InputProps={{
                    sx: {
                      borderRadius: "20px", // Apply border radius to the input element
                      height: "56px",
                      borderColor: "#79747E",
                      fontSize: "16px",
                      color: "#1C1B1F",
                    },
                  }}
                  fullWidth
                  type="number"
                  id="phone number"
                  label="Phone Number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                />
              </Box>
            </Box>

            <Box
              width="100%"
              mt={{ xs: "32px", sm: "48px" }}
              display="flex"
              sx={{
                justifyContent: "center",
                flexDirection: { xs: "column-reverse", sm: "row" },
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                height="40px"
                startIcon={<ArrowLeftPurple />}
                sx={{
                  width: { xs: "100%", sm: "98px" },
                  fontSize: "14px",
                  color: "#6750A4",
                  bgcolor: "#fff",
                  border: "1px solid #6750A4",
                  textTransform: "capitalize",
                  borderRadius: "20px",
                  p: "10px 24px",
                  "&:hover": {
                    bgcolor: "#fff",
                  },
                }}
                onClick={() => setStep((prev) => prev - 1)}
              >
                Back
              </Button>
              <Button
                disabled={loading}
                variant="contained"
                height="40px"
                sx={{
                  width: { xs: "100%", sm: "230px" },
                  fontSize: "14px",
                  fontWeight: 500,
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
                  signUp(data);
                  localStorage.setItem("email", JSON.stringify(email));
                }}
              >
                {loading ? <CircularProgress /> : "Create my account"}
              </Button>
            </Box>
            <Typography
              sx={{
                width: "100%",
                maxWidth: "358px",
              }}
              textAlign={"center"}
              fontSize="14px"
              color="#79747E"
              mt="10px"
            >
              You accept the privacy statement of RAC Logistics by clicking the{" "}
              <Typography
                color="#6750A4"
                fontWeight={700}
                sx={{ display: "inline", cursor: "pointer" }}
              >
                Create My Account
              </Typography>{" "}
              button
            </Typography>
          </Box>
        </>
      )}
    </Stack>
  );
};

export default SignupForm;
