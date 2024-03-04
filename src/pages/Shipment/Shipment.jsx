import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Shipment = () => {
  const navigate = useNavigate()
  return (
    <Box
      mt="16px"
      px="40px"
      display="flex"
      gap="20px"
      // justifyContent="space-between"
    >
      <Box
        width="350px"
        height="200px"
        borderRadius="20px"
        border="1px solid #CAC4D0"
        p="24px"
        bgcolor="#fff"
        display={"flex"}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box display={"flex"} flexDirection="column" gap="6px">
          <Typography fontSize="22px" color="#49454F">
            Shipment History
          </Typography>
          <Typography fontSize="16px">
            View the complete shipment history of your customers.
          </Typography>
        </Box>
        <Box pt="16px" sx={{ borderTop: "1px dotted #79747E" }} width='100%'>
          <Button
            variant="contained"
            sx={{
              py: "10px",
              fontSize: "14px",
              fontWeight: 500,
              width: "100%",
              borderRadius: "100px",
            }}
            onClick={() => navigate('history')}
          >
            Review Shipment History
          </Button>
        </Box>
      </Box>
      <Box
        width="350px"
        height="200px"
        borderRadius="20px"
        border="1px solid #CAC4D0"
        p="24px"
        bgcolor="#fff"
        display={"flex"}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box display={"flex"} flexDirection="column" gap="6px">
          <Typography fontSize="22px" color="#49454F">
            Create Shipment
          </Typography>
          <Typography fontSize="16px">
            Easily initiate a new shipment.
          </Typography>
        </Box>
        <Box pt="16px" sx={{ borderTop: "1px dotted #79747E" }} width='100%'>
          <Button
            variant="contained"
            onClick={() => navigate('add-new-shipment')}
            sx={{
              py: "10px",
              fontSize: "14px",
              fontWeight: 500,
              width: "100%",
              borderRadius: "100px",
            }}
          >
            Add new shipment
          </Button>
        </Box>
      </Box>
      <Box
        width="350px"
        height="200px"
        borderRadius="20px"
        border="1px solid #CAC4D0"
        p="24px"
        bgcolor="#fff"
        display={"flex"}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box display={"flex"} flexDirection="column" gap="6px">
          <Typography fontSize="22px" color="#49454F">
            Track Shipment
          </Typography>
          <Typography fontSize="16px">
            Monitor real-time shipment status.
          </Typography>
        </Box>
        <Box pt="16px" sx={{ borderTop: "1px dotted #79747E" }} width='100%'>
          <Button
            variant="contained"
            sx={{
              py: "10px",
              fontSize: "14px",
              fontWeight: 500,
              width: "100%",
              borderRadius: "100px",
            }}
          >
            Track Shipment Progress
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Shipment
