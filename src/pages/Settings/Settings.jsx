import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate()
  return (
    <Box p="32px 40px">
      <Box p="24px 30px" borderRadius="20px" maxWidth="1200px" bgcolor="#fff">
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          My Account
        </Typography>
        <Box display="flex" gap="20px" mb="24px">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="24px"
            borderRadius="20px"
            border="1px solid #CAC4D0"
            height="226px"
            width="100%"
          >
            <Box>
              <Typography color="#49454F" fontSize="22px">
                Profile Information
              </Typography>
              <Typography color="#49454F" fontSize="16px">
                We know you through your profile information and it reflects on
                your invoices
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  bgcolor: "#6750A4",
                  width: "100%",
                }}
                onClick={() => navigate("my_account_profile_information")}
              >
                View profile
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="24px"
            borderRadius="20px"
            border="1px solid #CAC4D0"
            height="226px"
            width="100%"
          >
            <Box>
              <Typography color="#49454F" fontSize="22px">
                Communication preferences
              </Typography>
              <Typography color="#49454F" fontSize="16px">
                You can customise your notification preferences for order or
                shipping updates, promotions, etc.
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  bgcolor: "#6750A4",
                  width: "100%",
                }}
                onClick={() => navigate("my_account_communication_preferences")}
              >
                Modify communication preferences
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="24px"
            borderRadius="20px"
            border="1px solid #CAC4D0"
            height="226px"
            width="100%"
          >
            <Box>
              <Typography color="#49454F" fontSize="22px">
                Security
              </Typography>
              <Typography color="#49454F" fontSize="16px">
                You can update your security settings easily here.
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  bgcolor: "#6750A4",
                  width: "100%",
                }}
                onClick={() => navigate("my_account_security")}
              >
                Modify security settings
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mb="24px">
          <Typography fontSize="24px" color="#1C1B1F" mb="24px">
            Title
          </Typography>
          <Box width="100%" height="139px" bgcolor="#EADDFF"></Box>
        </Box>
        <Box mb="24px">
          <Typography fontSize="24px" color="#1C1B1F" mb="24px">
            Title
          </Typography>
          <Box width="100%" height="139px" bgcolor="#EADDFF"></Box>
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
        >
          Back to Settings
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;
