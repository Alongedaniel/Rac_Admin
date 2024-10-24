import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import CheckWhiteIcon from "../../assets/icons/CheckWhiteIcon";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import ProfileInformationForm from "./components/ProfileInformationForm";
import StaffProfileInfoForm from "./components/StaffProfileInfoForm";
import PriviledgeInformation from "./components/PriviledgeInformation";
import StaffInformation from "./components/StaffInformation";
import drone from "../../assets/images/drone.png";
import CircleRight from "../../assets/icons/CircleRight";
import { useNavigate } from "react-router-dom";
import CustomStepper from "../../components/CustomStepper";

const CreateStaff = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const steps = [
    "Profile Information",
    "Privilege Information",
    "Customer Details Confirmation",
    "New Staff Successfully Added",
  ];
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
                RACS1234567
              </Typography>
            </Typography>
          </Box>
        )}
        <CustomStepper steps={steps} activeStep={activeStep} />
        <Box mt="30px">
          {activeStep === 0 && <StaffProfileInfoForm />}
          {activeStep === 1 && <PriviledgeInformation />}
          {activeStep === 2 && (
            <StaffInformation setActiveStep={setActiveStep} />
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
                      You have just added a new staff.....
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
                        The staff will recevive an email saying.....
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
            onClick={() => navigate("/users-staffs")}
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
                  onClick={() => {
                    if (!finish) handleNext();
                  }}
                >
                  Confirm & Submit Order
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
    </Box>
  );
};

export default CreateStaff;
