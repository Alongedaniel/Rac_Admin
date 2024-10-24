import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "../../../assets/icons/SearchIcon";
import TrackShipmentIcon from "../../../assets/icons/TrackShipmentIcon";
import { useNavigate } from "react-router-dom";

const TrackShipment = () => {
  const navigate = useNavigate();
  return (
    <Box p="30px 40px">
      <Box p="30px" borderRadius="24px" bgcolor="#fff" maxWidth="1140px">
        <Typography fontSize="22px" color="#1D192B" mb="20px">
          All shipments from RAC Logistics have a unique{" "}
          <Typography
            display="inline"
            fontSize="22px"
            color="#1D192B"
            fontWeight={700}
          >
            tracking ID
          </Typography>
          , you can track packages with this{" "}
          <Typography
            display="inline"
            fontSize="22px"
            color="#1D192B"
            fontWeight={700}
          >
            tracking ID
          </Typography>{" "}
          to be updated about their journey.
        </Typography>
        <TextField
          fullWidth
          sx={{ fontSize: "16px", color: "#1C1B1F", mb: "20px" }}
          id="id"
          type="text"
          label="Enter Tracking ID"
          // value={receiverEmail}
          // onChange={(e) => setReceiverEmail(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon />,
            sx: {
              borderRadius: "20px", // Apply border radius to the input element
              height: "56px",
              borderColor: "#79747E",
              fontSize: "16px",
              color: "#1C1B1F",
              input: {
                ml: "12px",
              },
            },
          }}
          // placeholder="Enter your country"
        />
        <Button
          startIcon={<TrackShipmentIcon />}
          variant="contained"
          sx={{
            bgcolor: "#6750A4",
            color: "#fff",
            width: "214px",
            height: "40px",
            borderRadius: "100px",
            textTransform: "none",
          }}
          onClick={() => navigate("shipping-id_SH78667")}
        >
          Track
        </Button>
      </Box>
    </Box>
  );
};

export default TrackShipment;
