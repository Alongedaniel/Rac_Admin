import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react'
import ArrowBack from '../../assets/icons/ArrowBack';
import ArrowLeftPurple from '../../assets/icons/ArrowLeftPurple';
import { useNavigate } from 'react-router-dom';

const Security = () => {
    const navigate = useNavigate()
  return (
    <Box p="24px 40px">
      <Box p="24px" maxWidth="1200px" borderRadius="20px" bgcolor="#fff">
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
    </Box>
  );
}

export default Security
