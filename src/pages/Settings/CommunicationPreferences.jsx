import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBack from '../../assets/icons/ArrowBack'
import ArrowLeftPurple from '../../assets/icons/ArrowLeftPurple';
import { useNavigate } from 'react-router-dom';

const CommunicationPreferences = () => {
    const navigate = useNavigate()
  return (
    <Box p="24px 40px">
      <Box p="24px" maxWidth="1200px" borderRadius="20px" bgcolor="#fff">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "16px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          Set up your communication preferences
        </Typography>
        <Box>
          <Box
            p="18px 30px"
            border="1px solid #CAC4D0"
            borderRadius="20px"
            mb="20px"
          >
            <Typography fontSize="22px" color="#1C1B1F" mb="12px">
              Notifications via SMS
            </Typography>
            <Typography fontSize="16px" color="#1C1B1F">
              Opt to receive important updates and alert via SMS through your
              phone number +234 000 000 000. Keep your contact number updated
              for timely notification
            </Typography>
          </Box>
          <Box
            p="18px 30px"
            border="1px solid #CAC4D0"
            borderRadius="20px"
            mb="20px"
          >
            <Typography fontSize="22px" color="#1C1B1F" mb="12px">
              Notifications via WhatsApp
            </Typography>
            <Typography fontSize="16px" color="#1C1B1F">
              Receive timely updates and alert via WhatsApp through your phone
              number +234 000 000 000 for a convenient and instant communication
              experience.
            </Typography>
          </Box>
          <Box
            p="18px 30px"
            border="1px solid #CAC4D0"
            borderRadius="20px"
            mb="20px"
          >
            <Typography fontSize="22px" color="#1C1B1F" mb="12px">
              Receive latest information on our exclusive deals and offerings
              via Email
            </Typography>
            <Typography fontSize="16px" color="#1C1B1F">
              Stay informed about exclusive offers and offerings by opting to
              receive updates via your email offorrex@gmail.com.
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
          onClick={() => navigate(-1)}
          startIcon={<ArrowLeftPurple />}
        >
          Back to Settings
        </Button>
      </Box>
    </Box>
  );
}

export default CommunicationPreferences
