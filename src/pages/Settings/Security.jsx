import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ArrowBack from '../../assets/icons/ArrowBack';
import ArrowLeftPurple from '../../assets/icons/ArrowLeftPurple';
import { useNavigate } from 'react-router-dom';
import UserModals from '../Users/components/UserModals';
import CustomStepper from '../../components/CustomStepper';
import ArrowRightWhite from '../../assets/icons/ArrowRightWhite';
import AuthenticatorIcon from '../../assets/icons/AuthenticatorIcon';
import Qr from '../../assets/icons/Qr';
import MinusCircle from '../../assets/icons/MinusCircle';
import BoxIcon from '../../assets/icons/BoxIcon';

const Security = () => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const appAuthStep = [
    "Email Verification",
    "Download Authentication app",
    "Connect to authenticator app",
    "Your authentication via App is now Set Up!",
  ];
  const emailAuthStep = [
    "Email Verification",
    "Your authentication via Email is now Set Up!",
  ];
  useEffect(() => {
    if (!openModal && !openModal2) setActiveStep(0);
  }, [openModal, openModal2]);
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "16px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="8px">
          Setup Two-Factor Authentication (2FA)
        </Typography>
        <Typography fontSize="16px" color="#49454F" mb="24px">
          Enhance the security of your account with Two-Factor Authentication.
          Choose your preferred method below;
        </Typography>
        <Box>
          <Box
            p="18px 30px"
            border="1px solid #CAC4D0"
            borderRadius="20px"
            mb="20px"
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenModal(true)}
          >
            <Typography fontSize="22px" color="#1C1B1F" mb="12px">
              Authentication via App
            </Typography>
            <Typography fontSize="16px" color="#1C1B1F">
              Opt for an extra layer of security by using a Time-based One-Time
              Password (TOTP) authenticator app like Google Authenticator App.
              Scan the QR code or enter the provided key in your authenticator
              app to generate codes for login verification
            </Typography>
          </Box>
          <Box
            p="18px 30px"
            border="1px solid #CAC4D0"
            borderRadius="20px"
            mb="20px"
            sx={{ cursor: "pointer" }}
            onClick={() => setOpenModal2(true)}
          >
            <Typography fontSize="22px" color="#1C1B1F" mb="12px">
              Authentication via Email
            </Typography>
            <Typography fontSize="16px" color="#1C1B1F">
              Receive a verification code via Email for added security. A code
              will be sent to your registered email address during the login
              process
            </Typography>
          </Box>
          <Box
            pl="10px"
            display="flex"
            gap="10px"
            alignItems="center"
            mb="20px"
          >
            <Box
              width="5px"
              height="5px"
              borderRadius="100%"
              bgcolor="#79747E"
            ></Box>
            <Typography fontSize="16px" color="#79747E">
              We recommend using an authenticator app for increased security
            </Typography>
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={{
            color: "#6750A4",
            width: "170px",
            height: "40px",
            borderRadius: "100px",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 500,
            border: "1px solid #79747E",
          }}
          startIcon={<ArrowLeftPurple />}
          onClick={() => navigate(-1)}
        >
          Back to Settings
        </Button>
      </Box>
      <UserModals
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Authentication via App Setup"
        // height='fit-content'
      >
        <CustomStepper steps={appAuthStep} activeStep={activeStep} />
        <Box my="30px">
          {activeStep === 0 ? (
            <>
              <Typography fontSize="22px" color="#49454F" mb="30px">
                We have sent a code to your email, Kindly copy and paste it here
              </Typography>
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
                type="text"
                fullWidth
                id="code"
                label="Enter Code"
                placeholder="Enter code"
              />
            </>
          ) : activeStep === 1 ? (
            <>
              <Typography fontSize="22px" color="#49454F" mb="30px">
                You can use any authentication app of your choice, but we
                recommend the following:
              </Typography>
              <Box
                p="9px 20px"
                border="1px solid #CAC4D0"
                borderRadius="20px"
                bgcolor="#fffbfe"
                display="flex"
                alignItems="center"
              >
                <AuthenticatorIcon />
                <Typography fontSize="16px" color="#49454F" fontWeight={500}>
                  Google Authenticator
                </Typography>
              </Box>
            </>
          ) : activeStep === 2 ? (
            <>
              <Box
                p="20px 20px 30px 20px"
                border="1px solid #CAC4D0"
                borderRadius="20px"
                bgcolor="#fffbfe"
                mb="30px"
              >
                <Typography fontSize="22px" color="#49454F" mb="20px">
                  Scan the QR code using your preferred authentication app and
                  enter the provided code below. This app will be required for
                  every login to your RAC Logistics dashboard.
                </Typography>
                <Box display="flex" alignItems="center" gap="20px">
                  <Qr />
                  <Box>
                    <Box mb="10px" display="flex" alignItems="center" gap="4px">
                      <MinusCircle left={0} />
                      <Typography fontSize="12px" color="#49454F">
                        You can’t scan QR code?
                      </Typography>
                    </Box>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#79747E",
                        color: "#79747E",
                        width: "162px",
                        height: "40px",
                        borderRadius: "100px",
                        textTransform: "none",
                      }}
                    >
                      Show code
                    </Button>
                  </Box>
                </Box>
              </Box>
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
                type="text"
                fullWidth
                id="code"
                label="Enter Code"
                placeholder="Enter code"
              />
            </>
          ) : activeStep === 3 ? (
            <>
              <Typography fontSize="22px" color="#49454F" mb="15px">
                Each time you access your account, you’ll be required to input a
                generated code from your mobile application. In case you lose
                access to your mobile device, utilize the backup codes below to
                disable mobile authentication.
              </Typography>
              <Box
                p="20px"
                border="1px solid #CAC4D0"
                borderRadius="20px"
                bgcolor="#fffbfe"
                mb="30px"
              >
                <Typography fontSize="22px" color="#49454F" mb="30px">
                  Backup codes will only be displayed once. Ensure you save them
                  in a secure location accessible only to you.
                </Typography>
                <Box display="flex" alignItems="center" gap="20px">
                  <Box
                    border="1px solid #CAC4D0"
                    borderRadius="20px"
                    bgcolor="#fffbfe"
                  >
                    <Box
                      bgcolor="#6750A414"
                      width="564px"
                      p="20px"
                      borderRadius="20px"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box mb="10px" display="flex" alignItems="center" gap="4px">
                      <BoxIcon />
                      <Typography fontSize="12px" color="#49454F">
                        How do you want to store them?
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#6750A4",
                        color: "#fff",
                        width: "206px",
                        height: "40px",
                        borderRadius: "100px",
                        textTransform: "none",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      Download
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#79747E",
                        color: "#79747E",
                        width: "206px",
                        height: "40px",
                        borderRadius: "100px",
                        textTransform: "none",
                      }}
                    >
                      Show code
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          ) : null}
        </Box>
        <Box>
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#79747E",
              color: "#79747E",
              width: "98px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mr: "10px",
              display: activeStep < 3 ? "inline-flex" : "none",
            }}
            onClick={() => {
              if (activeStep === 0) setOpenModal(false);
              else setActiveStep((prev) => prev - 1);
            }}
          >
            Back
          </Button>
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
              if (activeStep < 3) setActiveStep((prev) => prev + 1);
              else setOpenModal(false); //
            }}
          >
            {activeStep === 2
              ? "Verify"
              : activeStep === 3
              ? "Finish Setup"
              : "Confirm"}
          </Button>
        </Box>
      </UserModals>
      <UserModals
        open={openModal2}
        onClose={() => {
          setOpenModal2(false)
          setActiveStep(0)
        }}
        title="Authentication via Email Setup"
        // height='fit-content'
      >
        <CustomStepper steps={emailAuthStep} activeStep={activeStep} />
        <Box my="30px">
          {activeStep === 0 ? (
            <>
              <Typography fontSize="22px" color="#49454F" mb="30px">
                We have sent a code to your email, Kindly copy and paste it here
              </Typography>
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
                type="text"
                fullWidth
                id="code"
                label="Enter Code"
                placeholder="Enter code"
              />
            </>
          ) : activeStep === 1 ? (
            <>
              <Typography fontSize="22px" color="#49454F" mb="15px">
                Each time you access your account, you’ll be required to input a
                code sent to your email address:{" "}
                  <Typography fontSize="22px" color="#49454F" fontWeight={700} display='inline'> offorrex@gmail.com.</Typography> In case you lose
                access to your mobile device, utilize the backup codes below to
                disable mobile authentication.
              </Typography>
              <Box
                p="20px"
                border="1px solid #CAC4D0"
                borderRadius="20px"
                bgcolor="#fffbfe"
                mb="30px"
              >
                <Typography fontSize="22px" color="#49454F" mb="30px">
                  Backup codes will only be displayed once. Ensure you save them
                  in a secure location accessible only to you.
                </Typography>
                <Box display="flex" alignItems="center" gap="20px">
                  <Box
                    border="1px solid #CAC4D0"
                    borderRadius="20px"
                    bgcolor="#fffbfe"
                  >
                    <Box
                      bgcolor="#6750A414"
                      width="564px"
                      p="20px"
                      borderRadius="20px"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                      <Typography fontSize="22px" color="#49454F" mb="10px">
                        DF3R HGTY FGTR GHUU
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box mb="10px" display="flex" alignItems="center" gap="4px">
                      <BoxIcon />
                      <Typography fontSize="12px" color="#49454F">
                        How do you want to store them?
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#6750A4",
                        color: "#fff",
                        width: "206px",
                        height: "40px",
                        borderRadius: "100px",
                        textTransform: "none",
                        mb: "10px",
                        display: "block",
                      }}
                    >
                      Download
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#79747E",
                        color: "#79747E",
                        width: "206px",
                        height: "40px",
                        borderRadius: "100px",
                        textTransform: "none",
                      }}
                    >
                      Show code
                    </Button>
                  </Box>
                </Box>
              </Box>
            </>
          ) : null}
        </Box>
        <Box>
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#79747E",
              color: "#79747E",
              width: "98px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mr: "10px",
              display: activeStep < 1 ? "inline-flex" : "none",
            }}
            onClick={() => {
              if (activeStep === 0) setOpenModal2(false);
              else setActiveStep((prev) => prev - 1);
            }}
          >
            Back
          </Button>
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
              if (activeStep < 1) setActiveStep((prev) => prev + 1);
              else setOpenModal2(false); //
            }}
          >
            {activeStep === 1 ? "Finish Setup" : "Confirm"}
          </Button>
        </Box>
      </UserModals>
    </Box>
  );
}

export default Security
