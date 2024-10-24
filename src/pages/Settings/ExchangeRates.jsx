import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBack from "../../assets/icons/ArrowBack";
import PaymentsTable from "./components/PaymentsTable";
import TableValue from "./components/TableValue";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import CloseCircle from "../../assets/icons/CloseCircle";
import { useNavigate } from "react-router-dom";

const ExchangeRates = () => {
  const columns = ["Currency", "Naira Rate (₦)"];
  const rows = ["US Dollars ($)", "Pounds (£)", "Dubai AED", "RMB (¥)"];
  const [value, setValue] = useState("2000");
  const navigate = useNavigate();
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "10px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          RAC Exchange Rates
        </Typography>
        <PaymentsTable rows={rows} columns={columns} allColored>
          <TableValue value={value} setValue={setValue} />
          <TableValue value={value} setValue={setValue} />
          <TableValue value={value} setValue={setValue} />
          <TableValue value={value} setValue={setValue} />
        </PaymentsTable>
        <Box mt="24px" display="flex" alignItems="center" gap="10px">
          <Button
            variant="outlined"
            sx={{
              color: "#6750A4",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              fontSize: "14px",
              fontWeight: 500,
              border: "1px solid #6750A4",
              width: "174px",
            }}
            startIcon={<CloseCircle color="#6750A4" />}
          >
            Discard Changes
          </Button>
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
              width: "172px",
            }}
            startIcon={<ArrowRightWhite />}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ExchangeRates;
