import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBack from "../../assets/icons/ArrowBack";
import CloseCircle from "../../assets/icons/CloseCircle";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import PaymentsTable from "./components/PaymentsTable";
import TableValue from "./components/TableValue";

const WarehouseLocations = () => {
  const rows = [
    "Country",
    "State",
    "City",
    "Street Address",
    "Zip/postal code",
    "Phone Number",
  ];
  const [value, setValue] = useState("2000");
  const navigate = useNavigate();
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff" maxWidth="1200px">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "10px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          Warehouse Locations
        </Typography>
        <Box mb="24px">
          <Box
            pl="16px"
            py="18px"
            borderRadius="8px"
            border="1px solid #79747E"
          >
            <Typography fontSize="14px" fontWeight={500} color="#1D192B">
              Nigeria Warehouse (Lagos)
            </Typography>
          </Box>
          <PaymentsTable columns={[]} rows={rows} allColored>
            <TableValue value={"Nigeria"} setValue={() => {}} />
            <TableValue value={"Lagos"} setValue={() => {}} />
            <TableValue value={"Ikeja"} setValue={() => {}} />
            <TableValue value={"abcdefgh"} setValue={() => {}} />
            <TableValue value={"77407"} setValue={() => {}} />
            <TableValue value={"0000000000"} setValue={() => {}} />
          </PaymentsTable>
          <Grid container wrap="nowrap" gap="24px" mt="24px">
            <Grid item xs={6} pr="24px" borderRight="1px solid #CAC4D0">
              <Box
                pl="16px"
                py="18px"
                borderRadius="8px"
                border="1px solid #79747E"
              >
                <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                  US Warehouse (Richmond Texas)
                </Typography>
              </Box>
              <PaymentsTable columns={[]} rows={rows} allColored>
                <TableValue value={"USA"} setValue={() => {}} />
                <TableValue value={"Richmond"} setValue={() => {}} />
                <TableValue value={"abcdef"} setValue={() => {}} />
                <TableValue value={"abcdefgh"} setValue={() => {}} />
                <TableValue value={"77407"} setValue={() => {}} />
                <TableValue value={"0000000000"} setValue={() => {}} />
              </PaymentsTable>
            </Grid>
            <Grid item xs={6}>
              <Box
                pl="16px"
                py="18px"
                borderRadius="8px"
                border="1px solid #79747E"
              >
                <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                  UK Warehouse (London)
                </Typography>
              </Box>
              <PaymentsTable columns={[]} rows={rows} allColored>
                <TableValue value={"United Kingdom"} setValue={() => {}} />
                <TableValue value={"London"} setValue={() => {}} />
                <TableValue value={"abcdef"} setValue={() => {}} />
                <TableValue value={"abcdefgh"} setValue={() => {}} />
                <TableValue value={"77407"} setValue={() => {}} />
                <TableValue value={"0000000000"} setValue={() => {}} />
              </PaymentsTable>
            </Grid>
          </Grid>
          <Grid container wrap="nowrap" gap="24px" mt="24px">
            <Grid item xs={6} pr="24px" borderRight="1px solid #CAC4D0">
              <Box
                pl="16px"
                py="18px"
                borderRadius="8px"
                border="1px solid #79747E"
              >
                <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                  Dubai Warehouse
                </Typography>
              </Box>
              <PaymentsTable columns={[]} rows={rows} allColored>
                <TableValue value={"Dubai"} setValue={() => {}} />
                <TableValue value={"abcdef"} setValue={() => {}} />
                <TableValue value={"abcdef"} setValue={() => {}} />
                <TableValue value={"abcdefgh"} setValue={() => {}} />
                <TableValue value={"77407"} setValue={() => {}} />
                <TableValue value={"0000000000"} setValue={() => {}} />
              </PaymentsTable>
            </Grid>
            <Grid item xs={6}>
              <Box
                pl="16px"
                py="18px"
                borderRadius="8px"
                border="1px solid #79747E"
              >
                <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                  China Warehouse (Guangzhou City)
                </Typography>
              </Box>
              <PaymentsTable columns={[]} rows={rows} allColored>
                <TableValue value={"China"} setValue={() => {}} />
                <TableValue value={"abcdef"} setValue={() => {}} />
                <TableValue value={"abcdef"} setValue={() => {}} />
                <TableValue value={"abcdefgh"} setValue={() => {}} />
                <TableValue value={"77407"} setValue={() => {}} />
                <TableValue value={"0000000000"} setValue={() => {}} />
              </PaymentsTable>
            </Grid>
          </Grid>
        </Box>

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

export default WarehouseLocations;
