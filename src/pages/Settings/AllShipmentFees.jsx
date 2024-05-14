import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableValue from "./components/TableValue";
import CloseCircle from "../../assets/icons/CloseCircle";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import ArrowBack from "../../assets/icons/ArrowBack";
import PaymentsTable from "./components/PaymentsTable";

const AllShipmentFees = () => {
  const navigate = useNavigate();
    const [value, setValue] = useState("0.1");
    const [shipmentValue, setShipmentValue] = useState("2000");
    const columns = [
      "Weight (kg)",
      "Zone 1 (₦)",
      "Zone 2 (₦)",
      "Zone 3 (₦)",
      "Zone 4 (₦)",
      "Zone 5 (₦)",
      "Zone 6 (₦)",
      "Zone 7 (₦)",
      "Zone 8 (₦)",
    ];
    const rows = [
      "0.5 - 0.9",
      "1 - 2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11 - 20",
      "21 - 30",
    ];
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff" maxWidth="1200px">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "10px" }}>
          <ArrowBack />
        </IconButton>
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          All Shipment Fees
        </Typography>
        <Box p="24px" borderRadius="20px" border="1px solid #CAC4D0" mb="24px">
          <Typography fontSize="22px" color="#1C1B1F" mb="16px">
            General Charges
          </Typography>
          <Typography fontSize="16px" color="#1D192B" mb="24px">
            These general charges apply to....
          </Typography>
          <Box pt="24px" borderTop="1px solid #CAC4D0">
            <Grid container wrap="nowrap" gap="16px">
              <Grid item xs={4} pr="16px" borderRight="1px solid #CAC4D0">
                <Box
                  borderBottom="1px solid #CAC4D0"
                  py="18px"
                  pl="16px"
                  mb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    Storage Charge
                  </Typography>
                </Box>
                <Box display="flex">
                  <TableValue
                    width="106px"
                    value={`${value}%`}
                    setValue={setValue}
                  />
                  <Box
                    width="100%"
                    height="56px"
                    bgcolor="#FFECF1"
                    display="flex"
                    alignItems="flex-end"
                    pl="16px"
                    borderBottom="1px solid #E7E0EC"
                    pb="8px"
                  >
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#060C2C"
                    >
                      {`* {Cost of Item} * {Number of days}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2.5} pr="16px" borderRight="1px solid #CAC4D0">
                <Box
                  borderBottom="1px solid #CAC4D0"
                  py="18px"
                  pl="16px"
                  mb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    Insurance Charge
                  </Typography>
                </Box>
                <Box display="flex">
                  <TableValue
                    width="106px"
                    value={`${value}%`}
                    setValue={setValue}
                  />
                  <Box
                    width="100%"
                    height="56px"
                    bgcolor="#FFECF1"
                    display="flex"
                    alignItems="flex-end"
                    pl="16px"
                    borderBottom="1px solid #E7E0EC"
                    pb="8px"
                  >
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#060C2C"
                    >
                      {`* {Cost of Item}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2.5} pr="16px" borderRight="1px solid #CAC4D0">
                <Box
                  borderBottom="1px solid #CAC4D0"
                  py="18px"
                  pl="16px"
                  mb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    Payment method surcharge
                  </Typography>
                </Box>
                <Box display="flex">
                  <TableValue
                    width="106px"
                    value={`${value}%`}
                    setValue={setValue}
                  />
                  <Box
                    width="100%"
                    height="56px"
                    bgcolor="#FFECF1"
                    display="flex"
                    alignItems="flex-end"
                    pl="16px"
                    borderBottom="1px solid #E7E0EC"
                    pb="8px"
                  >
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#060C2C"
                    >
                      {`* {Total cost}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box
                  borderBottom="1px solid #CAC4D0"
                  py="18px"
                  pl="16px"
                  mb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    VAT
                  </Typography>
                </Box>
                <Box display="flex">
                  <TableValue
                    width="106px"
                    value={`${value}%`}
                    setValue={setValue}
                  />
                  <Box
                    width="100%"
                    height="56px"
                    bgcolor="#FFECF1"
                    display="flex"
                    alignItems="flex-end"
                    pl="16px"
                    borderBottom="1px solid #E7E0EC"
                    pb="8px"
                  >
                    <Typography
                      fontSize="14px"
                      fontWeight={500}
                      color="#060C2C"
                    >
                      {`* {Total cost}`}
                    </Typography>
                  </Box>
                </Box>
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
        <Box p="24px" borderRadius="20px" border="1px solid #CAC4D0" mb="24px">
          <Typography fontSize="22px" color="#1C1B1F" mb="16px">
            Export Shipping rates
          </Typography>
          <Typography fontSize="16px" color="#1D192B" mb="24px">
            These shipping fees includes Customs and port handling
          </Typography>
          <Box pt="24px" borderTop="1px solid #CAC4D0">
            <PaymentsTable columns={columns} rows={rows} tooltip>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
            </PaymentsTable>
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
        <Box p="24px" borderRadius="20px" border="1px solid #CAC4D0" mb="24px">
          <Typography fontSize="22px" color="#1C1B1F" mb="16px">
            Import Shipping rates
          </Typography>
          <Typography fontSize="16px" color="#1D192B" mb="24px">
            These shipping fees includes Customs and port handling except for
            the UK
          </Typography>
          <Box pt="24px" borderTop="1px solid #CAC4D0">
            <Grid container wrap="nowrap" gap="24px">
              <Grid item xs={6} pr="24px" borderRight="1px solid #CAC4D0">
                <Box
                  pl="16px"
                  py="18px"
                  borderRadius="8px"
                  border="1px solid #79747E"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    United States
                  </Typography>
                </Box>
                <PaymentsTable
                  columns={["Weight (kg)", "Rate ($)"]}
                  rows={["0.5 - 4", "Above 4"]}
                  allColored
                >
                  <TableValue value={"70"} setValue={() => {}} />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TableValue value={"5.5"} setValue={() => {}} />
                    <Typography
                      color="#1C1B1F"
                      fontSize="16px"
                      fontWeight={500}
                    >
                      /lbs
                    </Typography>
                  </Box>
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
                    United Kingdom
                  </Typography>
                </Box>
                <PaymentsTable
                  columns={["Weight (kg)", "Rate (£)"]}
                  rows={["0.5 - 10", "Above 10"]}
                  allColored
                >
                  <TableValue value={"70"} setValue={() => {}} />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TableValue value={"5.5"} setValue={() => {}} />
                    <Typography
                      color="#1C1B1F"
                      fontSize="16px"
                      fontWeight={500}
                    >
                      /lbs
                    </Typography>
                  </Box>
                </PaymentsTable>
                <Box display="flex" borderBottom="1px solid #E7E0EC">
                  <Box
                    height="56px"
                    width="250px"
                    display="flex"
                    alignItems="center"
                    pl="16px"
                    bgcolor="#E8DEF8"
                  >
                    <Typography
                      color="#1C1B1F"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      Customs and Port Handling
                    </Typography>
                  </Box>
                  <TableValue value="20" setValue={() => {}} />
                  {/* <Box
                    height="56px"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    pl="16px"
                  >
                    <Typography color="#1C1B1F" fontSize="16px">
                      20
                    </Typography>
                  </Box> */}
                </Box>
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
                    Dubai
                  </Typography>
                </Box>
                <PaymentsTable
                  columns={["Weight (kg)", "Rate (AED)"]}
                  rows={["Above 0.5"]}
                  allColored
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TableValue value={"5.5"} setValue={() => {}} />
                    <Typography
                      color="#1C1B1F"
                      fontSize="16px"
                      fontWeight={500}
                    >
                      /lbs
                    </Typography>
                  </Box>
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
                    China
                  </Typography>
                </Box>
                <PaymentsTable
                  columns={["Weight (kg)", "Rate (¥)"]}
                  rows={["Above 0.5"]}
                  allColored
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TableValue value={"5.5"} setValue={() => {}} />
                    <Typography
                      color="#1C1B1F"
                      fontSize="16px"
                      fontWeight={500}
                    >
                      /lbs
                    </Typography>
                  </Box>
                </PaymentsTable>
                <Box display="flex" borderBottom="1px solid #E7E0EC">
                  <Box
                    height="56px"
                    width="250px"
                    display="flex"
                    alignItems="center"
                    pl="16px"
                    bgcolor="#E8DEF8"
                  >
                    <Typography
                      color="#1C1B1F"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      Customs and Port Handling
                    </Typography>
                  </Box>
                  <TableValue value="20" setValue={() => {}} />
                  {/* <Box
                    height="56px"
                    width="100%"
                    display="flex"
                    alignItems="center"
                    pl="16px"
                  >
                    <Typography color="#1C1B1F" fontSize="16px">
                      20
                    </Typography>
                  </Box> */}
                </Box>
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
            width: "170px",
            mt: "24px",
          }}
          startIcon={<CloseCircle color="#6750A4" />}
          onClick={() => navigate("/settings")}
        >
          Back to Settings
        </Button>
      </Box>
    </Box>
  );
};

export default AllShipmentFees;
