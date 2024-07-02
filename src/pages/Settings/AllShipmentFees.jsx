import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TableValue from "./components/TableValue";
import CloseCircle from "../../assets/icons/CloseCircle";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import ArrowBack from "../../assets/icons/ArrowBack";
import PaymentsTable from "./components/PaymentsTable";
import WeightSymbol from "./components/WeightSymbol";
import Requests from "../../utils/hooks/api/requests";
import CloseIcon from "../../assets/icons/CloseIcon";

const AllShipmentFees = () => {
  const navigate = useNavigate();
  const {
    error,
    loading,
    data,
    setError,
    UpdateGeneralCharges,
    updateImportRate,
  } = Requests();
  const [value, setValue] = useState("0.1");
  const [shipmentValue, setShipmentValue] = useState("2000");
  const [discard, setDiscard] = useState(false);
  const [openError, setOpenError] = useState(false);
  useEffect(() => {
    if (error || data?.message) {
      setOpenError(true);
    } else setOpenError(false);
  }, [loading]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
    setError("");
  };
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
  const [storageCharge, setStorageCharge] = useState(0);
  const [insuranceCharge, setInsuranceCharge] = useState(0);
  const [paymentMethodSurcharge, setPaymentMethodSurcharge] = useState(0);
  const [vat, setVat] = useState(0);
  const [usAbove4, setUsAbove4] = useState(0)
  const [usBelow4, setUsBelow4] = useState(0)
  const [ukAbove4, setUkAbove4] = useState(0)
  const [ukBelow4, setUkBelow4] = useState(0)
  const [ukBelow4CustomClearing, setUkBelow4CustomClearing] = useState(0)
  const [dubaiAbove, setDubaiAbove] = useState(0)
  const [chinaAbove, setChinaAbove] = useState(0)
  const [chinaAboveCustomClearing, setChinaAboveCustomClearing] = useState(0)

  

  const updateImportShippingRate = {
    unitedStates: [
      {
        weightRange: "0.5-4",
        rate: Number(usBelow4),
      },
      {
        weightRange: "above 4",
        rate: Number(usAbove4),
      },
    ],
    unitedKingdom: [
      {
        weight: "0.5-4",
        rate: Number(ukBelow4),
        customClearingPortHandling: Number(ukBelow4CustomClearing),
      },
      {
        weight: "above 4",
        rate: Number(ukAbove4),
      },
    ],
    dubai: {
      rate: Number(dubaiAbove),
    },
    china: [
      {
        weight: "above 0.5",
        rate: Number(chinaAbove),
        customClearingPortHandling: Number(chinaAboveCustomClearing),
      },
    ],
  };


  useEffect(() => {
    setInsuranceCharge(3);
    setPaymentMethodSurcharge(5);
    setStorageCharge(4);
    setVat(2);
    setUsAbove4(0);
    setUsBelow4(0);
    setUkAbove4(0);
    setUkBelow4(0);
    setDubaiAbove(0)
    setChinaAbove(0)
    setChinaAboveCustomClearing(0);
    setUkBelow4CustomClearing(0);
    setDiscard(false);
  }, [discard]);
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff" maxWidth="1300px">
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
              <Grid item xs={6} pr="16px" borderRight="1px solid #CAC4D0">
                <Box
                  pl="16px"
                  py="18px"
                  borderRadius="8px"
                  borderTop="1px solid #CAC4D0"
                  borderLeft="1px solid #CAC4D0"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    Storage Charge
                  </Typography>
                </Box>
                <Box display="flex">
                  <TableValue
                    minWidth="160px"
                    maxWidth="160px"
                    value={`${storageCharge}`}
                    setValue={setStorageCharge}
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
              <Grid item xs={6}>
                <Box
                  borderTop="1px solid #CAC4D0"
                  borderLeft="1px solid #CAC4D0"
                  py="18px"
                  pl="16px"
                  borderRadius="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    Insurance Charge
                  </Typography>
                </Box>
                <Box display="flex">
                  <TableValue
                    minWidth="160px"
                    maxWidth="160px"
                    value={`${insuranceCharge}`}
                    setValue={setInsuranceCharge}
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
            </Grid>
            <Grid container wrap="nowrap" gap="16px" mt="24px">
              <Grid item xs={6} pr="16px" borderRight="1px solid #CAC4D0">
                <Box
                  borderTop="1px solid #CAC4D0"
                  borderLeft="1px solid #CAC4D0"
                  py="18px"
                  pl="16px"
                  borderRadius="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    Payment method surcharge
                  </Typography>
                </Box>
                <Box display="flex">
                  <TableValue
                    minWidth="160px"
                    maxWidth="160px"
                    value={`${paymentMethodSurcharge}`}
                    setValue={setPaymentMethodSurcharge}
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
              <Grid item xs={6}>
                <Box
                  borderTop="1px solid #CAC4D0"
                  borderLeft="1px solid #CAC4D0"
                  py="18px"
                  pl="16px"
                  borderRadius="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                    VAT
                  </Typography>
                </Box>
                <Box display="flex">
                  <TableValue
                    minWidth="160px"
                    maxWidth="160px"
                    value={`${vat}`}
                    setValue={setVat}
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
              onClick={() => setDiscard(true)}
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
              onClick={() =>
                UpdateGeneralCharges(`/settings/general-charges-update`, {
                  storageCharge: Number(storageCharge),
                  insuranceCharge: Number(insuranceCharge),
                  paymentMethodSurcharge: Number(paymentMethodSurcharge),
                  vat: Number(vat),
                })
              }
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
            <PaymentsTable flex={1} columns={columns} rows={rows} tooltip>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
              </Box>
              <Box display="flex">
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
                  setValue={setShipmentValue}
                  width="127px"
                />
                <TableValue
                  value={shipmentValue}
                  flex={1}
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
                  borderTop="1px solid #CAC4D0"
                  borderLeft="1px solid #CAC4D0"
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
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TableValue
                      minWidth="160px"
                      maxWidth="160px"
                      value={usBelow4}
                      setValue={setUsBelow4}
                    />
                    <Box
                      width="100%"
                      height="46px"
                      alignSelf={"flex-end"}
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
                        Flat Rate
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TableValue
                      minWidth="160px"
                      maxWidth="160px"
                      value={usAbove4}
                      setValue={setUsAbove4}
                    />
                    <WeightSymbol />
                  </Box>
                </PaymentsTable>
              </Grid>
              <Grid item xs={6}>
                <Box
                  pl="16px"
                  py="18px"
                  borderRadius="8px"
                  borderTop="1px solid #CAC4D0"
                  borderLeft="1px solid #CAC4D0"
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
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TableValue
                      minWidth="160px"
                      maxWidth="160px"
                      value={ukBelow4}
                      setValue={setUkBelow4}
                    />
                    <Box
                      width="100%"
                      height="46px"
                      alignSelf={"flex-end"}
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
                        Flat Rate
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <TableValue
                      minWidth="160px"
                      maxWidth="160px"
                      value={ukAbove4}
                      setValue={setUkAbove4}
                    />
                    <WeightSymbol />
                  </Box>
                </PaymentsTable>
                <Box display="flex" borderBottom="1px solid #E7E0EC">
                  <Box
                    height="56px"
                    minWidth="170px"
                    maxWidth="170px"
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
                      Customs Clearing and Port Handling
                    </Typography>
                  </Box>
                  <TableValue
                    minWidth="160px"
                    maxWidth="160px"
                    value={ukBelow4CustomClearing}
                    setValue={setUkBelow4CustomClearing}
                  />
                  <Box
                    width="100%"
                    height="46px"
                    alignSelf={"flex-end"}
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
                      Flat Rate
                    </Typography>
                  </Box>
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
                  borderTop="1px solid #CAC4D0"
                  borderLeft="1px solid #CAC4D0"
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
                    <TableValue
                      minWidth="160px"
                      maxWidth="160px"
                      value={dubaiAbove}
                      setValue={setDubaiAbove}
                    />
                    <WeightSymbol />
                  </Box>
                </PaymentsTable>
              </Grid>
              <Grid item xs={6}>
                <Box
                  pl="16px"
                  py="18px"
                  borderRadius="8px"
                  borderTop="1px solid #CAC4D0"
                  borderLeft="1px solid #CAC4D0"
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
                    <TableValue
                      minWidth="160px"
                      maxWidth="160px"
                      value={chinaAbove}
                      setValue={setChinaAbove}
                    />
                    <WeightSymbol />
                  </Box>
                </PaymentsTable>
                <Box display="flex" borderBottom="1px solid #E7E0EC">
                  <Box
                    height="56px"
                    minWidth="170px"
                    maxWidth="170px"
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
                      Customs Clearing and Port Handling
                    </Typography>
                  </Box>
                  <TableValue
                    minWidth="160px"
                    maxWidth="160px"
                    value={chinaAboveCustomClearing}
                    setValue={setChinaAboveCustomClearing}
                  />
                  <Box
                    width="100%"
                    height="46px"
                    alignSelf={"flex-end"}
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
                      Flat Rate
                    </Typography>
                  </Box>
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
              onClick={() => setDiscard(true)}
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
              onClick={() => updateImportRate("/settings/import-rate-update", updateImportShippingRate)}
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
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { borderRadius: "30px" } }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error || data?.message}
        action={
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        }
      />
      <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default AllShipmentFees;
