import {
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import CheckWhiteIcon from "../../assets/icons/CheckWhiteIcon";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import ProfileInformationForm from "./components/ProfileInformationForm";
import AdditionInfoForm from "./components/AdditionInfoForm";
import ProfileInformation from "./components/ProfileInformation";
import drone from "../../assets/images/drone.png";
import CircleRight from "../../assets/icons/CircleRight";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/CustomStepper";
import axiosInstance from "../../utils/hooks/api/axiosInstance";
import CloseIcon from "../../assets/icons/CloseIcon";

const CreateCustomer = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [openError, setOpenError] = useState(false);

  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: "PassWord123",
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

  const handleClose = () => {
    setOpenError(false);
    setError("");
    setSuccess("");
  };

  console.log(data);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = [
    "Profile Information",
    "Additional Information",
    "Customer Details Confirmation",
    "New Customer Successfully Added",
  ];

  const createNewUser = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.post("/admin/users/add-new-user", data);
      console.log(res.data.user);
      setSuccess(res.data.message);
      setUser(res.data.user);
      setError("");
      setLoading(false);
      handleNext();
      setOpenError(true);
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
      setSuccess(null);
      setUser(null);
      setLoading(false);
      setOpenError(true);
    }
  };

  const finish = activeStep === steps.length - 1;
  return (
    <Box px="50px">
      <Box
        bgcolor="#fff"
        sx={{ p: "30px", mt: "40px", height: "100%", borderRadius: "20px" }}
        maxWidth={{ xs: "1100px", xl: "1400px" }}
      >
        {activeStep === 3 && (
          <Box mb="30px">
            <Typography fontSize="24px" color="#1C1B1F">
              User ID:{" "}
              <Typography
                fontSize="24px"
                color="#1C1B1F"
                display="inline"
                fontWeight={700}
              >
                {user?.racId}
              </Typography>
            </Typography>
          </Box>
        )}
        <CustomStepper steps={steps} activeStep={activeStep} />
        <Box mt="30px">
          {activeStep === 0 && (
            <ProfileInformationForm
              firstName={firstName}
              lastName={lastName}
              email={email}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              phoneNumber={phoneNumber}
              country={country}
              state={state}
              city={city}
              setPhoneNumber={setPhoneNumber}
              setCountry={setCountry}
              setState={setState}
              setCity={setCity}
              postalCode={postalCode}
              setPostalCode={setPostalCode}
              streetAddress={streetAddress}
              setStreetAddress={setStreetAddress}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            />
          )}
          {activeStep === 1 && <AdditionInfoForm />}
          {activeStep === 2 && (
            <ProfileInformation data={data} setActiveStep={setActiveStep} />
          )}
          {activeStep === 3 && (
            <Box width="100%">
              <Box bgcolor="#6750A4" borderRadius="20px" px="1px">
                <Box mb="40px" display="flex" gap="10px" alignItems="center">
                  <img src={drone} alt="drone" />
                  <Box>
                    <Typography
                      fontSize="24px"
                      fontWeight={700}
                      color="#fff"
                      mb="10px"
                    >
                      Congratulations!
                    </Typography>
                    <Typography fontSize="20px" color="#fff">
                      You have just added a new customer.....
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <div className="flex items-center space-x-[10px] ">
                  <CircleRight />
                  <p className="font-roboto font-[500] text-[14px] text-t/100 ">
                    What Next?
                  </p>
                </div>
                <Box
                  mt="20px"
                  px="14px"
                  py="10px"
                  borderRadius="20px"
                  border="1px solid #CAC4D0"
                >
                  <Typography
                    fontSize="20px"
                    fontWeight={700}
                    color="#49454F"
                    mb="20px"
                    pl="14px"
                  >
                    Here are more information on how ....
                  </Typography>
                  <Box>
                    <Box
                      display="flex"
                      gap="20px"
                      alignItems="center"
                      mb="13px"
                    >
                      <Box
                        width="33px"
                        height="48px"
                        borderRadius="20px"
                        bgcolor="#6750A4"
                        color="#fff"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="20px"
                      >
                        1
                      </Box>
                      <Typography fontSize="20px">
                        The customer will recevive an email saying.....
                      </Typography>
                    </Box>
                    <Box display="flex" gap="20px" alignItems="center">
                      <Box
                        width="33px"
                        height="48px"
                        borderRadius="20px"
                        bgcolor="#6750A4"
                        color="#fff"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="20px"
                      >
                        2
                      </Box>
                      <Typography fontSize="20px">
                        They can then change their password or leave it
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        {finish ? (
          <Button
            startIcon={<CheckWhiteIcon />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "211px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mt: "30px",
            }}
            onClick={() => navigate("/users-customers")}
          >
            Done
          </Button>
        ) : (
          <Box mt="30px">
            <Button
              startIcon={<ArrowLeftPurple />}
              variant="outlined"
              sx={{
                borderColor: "#79747E",
                color: "#79747E",
                height: "40px",
                borderRadius: "100px",
                textTransform: "none",
                mr: "10px",
              }}
              onClick={() => {
                if (activeStep === 0) navigate(-1);
                else handleBack();
              }}
            >
              Back
            </Button>
            {activeStep === steps.length - 2 && (
              <>
                <Button
                  startIcon={<ArrowRightWhite />}
                  variant="contained"
                  sx={{
                    bgcolor: "#6750A4",
                    width: "270px",
                    color: "#fff",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                  }}
                  disabled={loading}
                  onClick={() => {
                    if (!finish) createNewUser();
                  }}
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    "Confirm & Create new Customer"
                  )}
                </Button>
              </>
            )}
            {activeStep !== steps.length - 2 && (
              <Button
                startIcon={<ArrowRightWhite />}
                variant="contained"
                sx={{
                  bgcolor: "#6750A4",
                  color: "#fff",
                  width: "172px",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                }}
                disabled={!firstName && !lastName && !email}
                onClick={() => {
                  if (!finish) handleNext();
                }}
              >
                Proceed
              </Button>
            )}
          </Box>
        )}
      </Box>
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
        onClose={handleClose}
        message={error || success}
        action={
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        }
      />
    </Box>
  );
};

export default CreateCustomer;
