import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBack from "../../assets/icons/ArrowBack";
import PaymentsTable from "./components/PaymentsTable";
import TableValue from "./components/TableValue";
import CloseCircle from "../../assets/icons/CloseCircle";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";

const PaymentMethods = () => {
  const navigate = useNavigate();
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "10px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          Payment Methods
        </Typography>
        <Grid container wrap="nowrap" gap="24px">
          <Grid item xs={2} pr="24px" borderRight="1px solid #CAC4D0">
            <Box borderBottom="1px solid #CAC4D0" py="18px" pl="16px" mb="8px">
              <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                Paystack
              </Typography>
            </Box>
            <Box py="74px">
              <Typography textAlign={"center"} fontSize="14px" color="#49454F">
                Integrated with an API
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} pr="24px" borderRight="1px solid #CAC4D0">
            <Box borderBottom="1px solid #CAC4D0" py="18px" pl="16px" mb="8px">
              <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                POS Terminal
              </Typography>
            </Box>
            <Box py="74px">
              <Typography textAlign={"center"} fontSize="14px" color="#49454F">
                Details Off platform
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} pr="24px" borderRight="1px solid #CAC4D0">
            <Box borderBottom="1px solid #CAC4D0" py="18px" pl="16px" mb="8px">
              <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                Naira Bank Transfer
              </Typography>
            </Box>
            <PaymentsTable
              //   columns={["Weight (kg)", "Rate ($)"]}
              rows={["Bank", "Acc Number", "Acc Name"]}
              allColored
            >
              <TableValue value={"GTB"} setValue={() => {}} />
              <TableValue value={"0000000000"} setValue={() => {}} />
              <TableValue value={"RAC Logistics Ltd"} setValue={() => {}} />
            </PaymentsTable>
          </Grid>
          <Grid item xs={4}>
            <Box borderBottom="1px solid #CAC4D0" py="18px" pl="16px" mb="8px">
              <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                USD Bank Transfer
              </Typography>
            </Box>
            <PaymentsTable
              //   columns={["Weight (kg)", "Rate ($)"]}
              rows={["Bank", "Acc Number", "Acc Name"]}
              allColored
            >
              <TableValue value={"GTB"} setValue={() => {}} />
              <TableValue value={"0000000000"} setValue={() => {}} />
              <TableValue value={"RAC Logistics Ltd"} setValue={() => {}} />
            </PaymentsTable>
          </Grid>
        </Grid>
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

export default PaymentMethods;
