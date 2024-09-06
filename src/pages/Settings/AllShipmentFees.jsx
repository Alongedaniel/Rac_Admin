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
import useCustomGetRequest from "../../utils/hooks/api/useCustomGetRequest";

const AllShipmentFees = () => {
  const { data: shipments, loading: shipLoading } = useCustomGetRequest(
    "/settings/general-charges"
  );
  console.log(shipments);
  const navigate = useNavigate();
  const { error, loading, data, setError, customPutRequest } = Requests();
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
  const [usAbove4, setUsAbove4] = useState(0);
  const [usBelow4, setUsBelow4] = useState(0);
  const [ukAbove4, setUkAbove4] = useState(0);
  const [ukBelow4, setUkBelow4] = useState(0);
  const [ukBelow4CustomClearing, setUkBelow4CustomClearing] = useState(0);
  const [dubaiAbove, setDubaiAbove] = useState(0);
  const [chinaAbove, setChinaAbove] = useState(0);
  const [chinaAboveCustomClearing, setChinaAboveCustomClearing] = useState(0);
  const [zone1, setZone1] = useState(0);
  const [zone2, setZone2] = useState(0);
  const [zone3, setZone3] = useState(0);
  const [zone4, setZone4] = useState(0);
  const [zone5, setZone5] = useState(0);
  const [zone6, setZone6] = useState(0);
  const [zone7, setZone7] = useState(0);
  const [zone8, setZone8] = useState(0);
  const [zone9, setZone9] = useState(0);
  const [zone10, setZone10] = useState(0);
  const [zone11, setZone11] = useState(0);
  const [zone12, setZone12] = useState(0);
  const [zone13, setZone13] = useState(0);
  const [zone14, setZone14] = useState(0);
  const [zone15, setZone15] = useState(0);
  const [zone16, setZone16] = useState(0);
  const [zone17, setZone17] = useState(0);
  const [zone18, setZone18] = useState(0);
  const [zone19, setZone19] = useState(0);
  const [zone20, setZone20] = useState(0);
  const [zone21, setZone21] = useState(0);
  const [zone22, setZone22] = useState(0);
  const [zone23, setZone23] = useState(0);
  const [zone24, setZone24] = useState(0);
  const [zone25, setZone25] = useState(0);
  const [zone26, setZone26] = useState(0);
  const [zone27, setZone27] = useState(0);
  const [zone28, setZone28] = useState(0);
  const [zone29, setZone29] = useState(0);
  const [zone30, setZone30] = useState(0);
  const [zone31, setZone31] = useState(0);
  const [zone32, setZone32] = useState(0);
  const [zone33, setZone33] = useState(0);
  const [zone34, setZone34] = useState(0);
  const [zone35, setZone35] = useState(0);
  const [zone36, setZone36] = useState(0);
  const [zone37, setZone37] = useState(0);
  const [zone38, setZone38] = useState(0);
  const [zone39, setZone39] = useState(0);
  const [zone40, setZone40] = useState(0);
  const [zone41, setZone41] = useState(0);
  const [zone42, setZone42] = useState(0);
  const [zone43, setZone43] = useState(0);
  const [zone44, setZone44] = useState(0);
  const [zone45, setZone45] = useState(0);
  const [zone46, setZone46] = useState(0);
  const [zone47, setZone47] = useState(0);
  const [zone48, setZone48] = useState(0);
  const [zone49, setZone49] = useState(0);
  const [zone50, setZone50] = useState(0);
  const [zone51, setZone51] = useState(0);
  const [zone52, setZone52] = useState(0);
  const [zone53, setZone53] = useState(0);
  const [zone54, setZone54] = useState(0);
  const [zone55, setZone55] = useState(0);
  const [zone56, setZone56] = useState(0);
  const [zone57, setZone57] = useState(0);
  const [zone58, setZone58] = useState(0);
  const [zone59, setZone59] = useState(0);
  const [zone60, setZone60] = useState(0);
  const [zone61, setZone61] = useState(0);
  const [zone62, setZone62] = useState(0);
  const [zone63, setZone63] = useState(0);
  const [zone64, setZone64] = useState(0);
  const [zone65, setZone65] = useState(0);
  const [zone66, setZone66] = useState(0);
  const [zone67, setZone67] = useState(0);
  const [zone68, setZone68] = useState(0);
  const [zone69, setZone69] = useState(0);
  const [zone70, setZone70] = useState(0);
  const [zone71, setZone71] = useState(0);
  const [zone72, setZone72] = useState(0);
  const [zone73, setZone73] = useState(0);
  const [zone74, setZone74] = useState(0);
  const [zone75, setZone75] = useState(0);
  const [zone76, setZone76] = useState(0);
  const [zone77, setZone77] = useState(0);
  const [zone78, setZone78] = useState(0);
  const [zone79, setZone79] = useState(0);
  const [zone80, setZone80] = useState(0);
  const [zone81, setZone81] = useState(0);
  const [zone82, setZone82] = useState(0);
  const [zone83, setZone83] = useState(0);
  const [zone84, setZone84] = useState(0);
  const [zone85, setZone85] = useState(0);
  const [zone86, setZone86] = useState(0);
  const [zone87, setZone87] = useState(0);
  const [zone88, setZone88] = useState(0);
  const [zone89, setZone89] = useState(0);
  const [zone90, setZone90] = useState(0);
  const [zone91, setZone91] = useState(0);
  const [zone92, setZone92] = useState(0);
  const [zone93, setZone93] = useState(0);
  const [zone94, setZone94] = useState(0);
  const [zone95, setZone95] = useState(0);
  const [zone96, setZone96] = useState(0);

  useEffect(() => {
    setStorageCharge(shipments?.data?.generalCharges?.storageCharge);
    setInsuranceCharge(shipments?.data?.generalCharges?.insuranceCharge);
    setPaymentMethodSurcharge(
      shipments?.data?.generalCharges?.paymentMethodSurcharge
    );
    setVat(shipments?.data?.generalCharges?.vat);
    setUsBelow4(shipments?.data?.importShippingRates?.unitedStates[0]?.rate);
    setUsAbove4(shipments?.data?.importShippingRates?.unitedStates[1]?.rate);
    setUkBelow4(shipments?.data?.importShippingRates?.unitedKingdom[0]?.rate);
    setUkAbove4(shipments?.data?.importShippingRates?.unitedKingdom[1]?.rate);
    setUkBelow4CustomClearing(
      shipments?.data?.importShippingRates?.unitedKingdom[1]
        ?.customClearingPortHandling
    );
    setDubaiAbove(shipments?.data?.importShippingRates?.dubai[0]?.rate);
    setChinaAbove(shipments?.data?.importShippingRates?.china[0]?.rate);
    setChinaAboveCustomClearing(
      shipments?.data?.importShippingRates?.china[0]?.customClearingPortHandling
    );
    setZone1(shipments?.data?.exportShippingRates[0]?.zone1);
    setZone2(shipments?.data?.exportShippingRates[0]?.zone2);
    setZone3(shipments?.data?.exportShippingRates[0]?.zone3);
    setZone4(shipments?.data?.exportShippingRates[0]?.zone4);
    setZone5(shipments?.data?.exportShippingRates[0]?.zone5);
    setZone6(shipments?.data?.exportShippingRates[0]?.zone6);
    setZone7(shipments?.data?.exportShippingRates[0]?.zone7);
    setZone8(shipments?.data?.exportShippingRates[0]?.zone8);

    setZone9(shipments?.data?.exportShippingRates[1]?.zone1);
    setZone10(shipments?.data?.exportShippingRates[1]?.zone2);
    setZone11(shipments?.data?.exportShippingRates[1]?.zone3);
    setZone12(shipments?.data?.exportShippingRates[1]?.zone4);
    setZone13(shipments?.data?.exportShippingRates[1]?.zone5);
    setZone14(shipments?.data?.exportShippingRates[1]?.zone6);
    setZone15(shipments?.data?.exportShippingRates[1]?.zone7);
    setZone16(shipments?.data?.exportShippingRates[1]?.zone8);

    setZone17(shipments?.data?.exportShippingRates[2]?.zone1);
    setZone18(shipments?.data?.exportShippingRates[2]?.zone2);
    setZone19(shipments?.data?.exportShippingRates[2]?.zone3);
    setZone20(shipments?.data?.exportShippingRates[2]?.zone4);
    setZone21(shipments?.data?.exportShippingRates[2]?.zone5);
    setZone22(shipments?.data?.exportShippingRates[2]?.zone6);
    setZone23(shipments?.data?.exportShippingRates[2]?.zone7);
    setZone24(shipments?.data?.exportShippingRates[2]?.zone8);

    setZone25(shipments?.data?.exportShippingRates[3]?.zone1);
    setZone26(shipments?.data?.exportShippingRates[3]?.zone2);
    setZone27(shipments?.data?.exportShippingRates[3]?.zone3);
    setZone28(shipments?.data?.exportShippingRates[3]?.zone4);
    setZone29(shipments?.data?.exportShippingRates[3]?.zone5);
    setZone30(shipments?.data?.exportShippingRates[3]?.zone6);
    setZone31(shipments?.data?.exportShippingRates[3]?.zone7);
    setZone32(shipments?.data?.exportShippingRates[3]?.zone8);

    setZone33(shipments?.data?.exportShippingRates[4]?.zone1);
    setZone34(shipments?.data?.exportShippingRates[4]?.zone2);
    setZone35(shipments?.data?.exportShippingRates[4]?.zone3);
    setZone36(shipments?.data?.exportShippingRates[4]?.zone4);
    setZone37(shipments?.data?.exportShippingRates[4]?.zone5);
    setZone38(shipments?.data?.exportShippingRates[4]?.zone6);
    setZone39(shipments?.data?.exportShippingRates[4]?.zone7);
    setZone40(shipments?.data?.exportShippingRates[4]?.zone8);

    setZone41(shipments?.data?.exportShippingRates[5]?.zone1);
    setZone42(shipments?.data?.exportShippingRates[5]?.zone2);
    setZone43(shipments?.data?.exportShippingRates[5]?.zone3);
    setZone44(shipments?.data?.exportShippingRates[5]?.zone4);
    setZone45(shipments?.data?.exportShippingRates[5]?.zone5);
    setZone46(shipments?.data?.exportShippingRates[5]?.zone6);
    setZone47(shipments?.data?.exportShippingRates[5]?.zone7);
    setZone48(shipments?.data?.exportShippingRates[5]?.zone8);

    setZone49(shipments?.data?.exportShippingRates[6]?.zone1);
    setZone50(shipments?.data?.exportShippingRates[6]?.zone2);
    setZone51(shipments?.data?.exportShippingRates[6]?.zone3);
    setZone52(shipments?.data?.exportShippingRates[6]?.zone4);
    setZone53(shipments?.data?.exportShippingRates[6]?.zone5);
    setZone54(shipments?.data?.exportShippingRates[6]?.zone6);
    setZone55(shipments?.data?.exportShippingRates[6]?.zone7);
    setZone56(shipments?.data?.exportShippingRates[6]?.zone8);

    setZone57(shipments?.data?.exportShippingRates[7]?.zone1);
    setZone58(shipments?.data?.exportShippingRates[7]?.zone2);
    setZone59(shipments?.data?.exportShippingRates[7]?.zone3);
    setZone60(shipments?.data?.exportShippingRates[7]?.zone4);
    setZone61(shipments?.data?.exportShippingRates[7]?.zone5);
    setZone62(shipments?.data?.exportShippingRates[7]?.zone6);
    setZone63(shipments?.data?.exportShippingRates[7]?.zone7);
    setZone64(shipments?.data?.exportShippingRates[7]?.zone8);

    setZone65(shipments?.data?.exportShippingRates[8]?.zone1);
    setZone66(shipments?.data?.exportShippingRates[8]?.zone2);
    setZone67(shipments?.data?.exportShippingRates[8]?.zone3);
    setZone68(shipments?.data?.exportShippingRates[8]?.zone4);
    setZone69(shipments?.data?.exportShippingRates[8]?.zone5);
    setZone70(shipments?.data?.exportShippingRates[8]?.zone6);
    setZone71(shipments?.data?.exportShippingRates[8]?.zone7);
    setZone72(shipments?.data?.exportShippingRates[8]?.zone8);

    setZone73(shipments?.data?.exportShippingRates[9]?.zone1);
    setZone74(shipments?.data?.exportShippingRates[9]?.zone2);
    setZone75(shipments?.data?.exportShippingRates[9]?.zone3);
    setZone76(shipments?.data?.exportShippingRates[9]?.zone4);
    setZone77(shipments?.data?.exportShippingRates[9]?.zone5);
    setZone78(shipments?.data?.exportShippingRates[9]?.zone6);
    setZone79(shipments?.data?.exportShippingRates[9]?.zone7);
    setZone80(shipments?.data?.exportShippingRates[9]?.zone8);

    setZone81(shipments?.data?.exportShippingRates[10]?.zone1);
    setZone82(shipments?.data?.exportShippingRates[10]?.zone2);
    setZone83(shipments?.data?.exportShippingRates[10]?.zone3);
    setZone84(shipments?.data?.exportShippingRates[10]?.zone4);
    setZone85(shipments?.data?.exportShippingRates[10]?.zone5);
    setZone86(shipments?.data?.exportShippingRates[10]?.zone6);
    setZone87(shipments?.data?.exportShippingRates[10]?.zone7);
    setZone88(shipments?.data?.exportShippingRates[10]?.zone8);

    setZone89(shipments?.data?.exportShippingRates[11]?.zone1);
    setZone90(shipments?.data?.exportShippingRates[11]?.zone2);
    setZone91(shipments?.data?.exportShippingRates[11]?.zone3);
    setZone92(shipments?.data?.exportShippingRates[11]?.zone4);
    setZone93(shipments?.data?.exportShippingRates[11]?.zone5);
    setZone94(shipments?.data?.exportShippingRates[11]?.zone6);
    setZone95(shipments?.data?.exportShippingRates[11]?.zone7);
    setZone96(shipments?.data?.exportShippingRates[11]?.zone8);
  }, [shipLoading]);

  const updateExportShippingRates = {
    updates: [
      {
        weight: "0.5-0.9",
        zones: {
          zone1: zone1,
          zone2: zone2,
          zone3: zone3,
          zone4: zone4,
          zone5: zone5,
          zone6: zone6,
          zone7: zone7,
          zone8: zone8,
        },
      },
      {
        weight: "1-2",
        zones: {
          zone9: zone9,
          zone10: zone10,
          zone11: zone11,
          zone12: zone12,
          zone13: zone13,
          zone14: zone14,
          zone15: zone15,
          zone16: zone16,
        },
      },
      {
        weight: "3",
        zones: {
          zone17: zone17,
          zone18: zone18,
          zone19: zone19,
          zone20: zone20,
          zone21: zone21,
          zone22: zone22,
          zone23: zone23,
          zone24: zone24,
        },
      },
      {
        weight: "4",
        zones: {
          zone25: zone25,
          zone26: zone26,
          zone27: zone27,
          zone28: zone28,
          zone29: zone29,
          zone30: zone30,
          zone31: zone31,
          zone32: zone32,
        },
      },
      {
        weight: "5",
        zones: {
          zone33: zone33,
          zone34: zone34,
          zone35: zone35,
          zone36: zone36,
          zone37: zone37,
          zone38: zone38,
          zone39: zone39,
          zone40: zone40,
        },
      },
      {
        weight: "6",
        zones: {
          zone41: zone41,
          zone42: zone42,
          zone43: zone43,
          zone44: zone44,
          zone45: zone45,
          zone46: zone46,
          zone47: zone47,
          zone48: zone48,
        },
      },
      {
        weight: "7",
        zones: {
          zone49: zone49,
          zone50: zone50,
          zone51: zone51,
          zone52: zone52,
          zone53: zone53,
          zone54: zone54,
          zone55: zone55,
          zone56: zone56,
        },
      },
      {
        weight: "8",
        zones: {
          zone57: zone57,
          zone58: zone58,
          zone59: zone59,
          zone60: zone60,
          zone61: zone61,
          zone62: zone62,
          zone63: zone63,
          zone64: zone64,
        },
      },
      {
        weight: "9",
        zones: {
          zone65: zone65,
          zone66: zone66,
          zone67: zone67,
          zone68: zone68,
          zone69: zone69,
          zone70: zone70,
          zone71: zone71,
          zone72: zone72,
        },
      },
      {
        weight: "10",
        zones: {
          zone73: zone73,
          zone74: zone74,
          zone75: zone75,
          zone76: zone76,
          zone77: zone77,
          zone78: zone78,
          zone79: zone79,
          zone80: zone80,
        },
      },
      {
        weight: "11-20",
        zones: {
          zone81: zone81,
          zone82: zone82,
          zone83: zone83,
          zone84: zone84,
          zone85: zone85,
          zone86: zone86,
          zone87: zone87,
          zone88: zone88,
        },
      },
      {
        weight: "21-30",
        zones: {
          zone89: zone89,
          zone90: zone90,
          zone91: zone91,
          zone92: zone92,
          zone93: zone93,
          zone94: zone94,
          zone95: zone95,
          zone96: zone96,
        },
      },
    ],
  };

  const updateImportShippingRate = {
    unitedStates: [
      {
        weightRange: "0.5-4",
        rate: Number(usBelow4),
      },
      {
        weightRange: "above4",
        rate: Number(usAbove4),
      },
    ],
    unitedKingdom: [
      {
        weight: "0.5-10",
        rate: Number(ukBelow4),
        customClearingPortHandling: Number(ukBelow4CustomClearing),
      },
      {
        weight: "above10",
        rate: Number(ukAbove4),
        customClearingPortHandling: Number(ukBelow4CustomClearing),
      },
    ],
    dubai: {
      weight: "above 0.5",
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

  console.log(Number(dubaiAbove));

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
                    loading={shipLoading}
                    minWidth="160px"
                    maxWidth="160px"
                    value={storageCharge}
                    setValue={setStorageCharge}
                    percentage
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
                    loading={shipLoading}
                    minWidth="160px"
                    maxWidth="160px"
                    value={insuranceCharge}
                    setValue={setInsuranceCharge}
                    percentage
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
                    loading={shipLoading}
                    minWidth="160px"
                    maxWidth="160px"
                    value={paymentMethodSurcharge}
                    setValue={setPaymentMethodSurcharge}
                    percentage
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
                    loading={shipLoading}
                    minWidth="160px"
                    maxWidth="160px"
                    value={vat}
                    setValue={setVat}
                    percentage
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
                customPutRequest(`/settings/general-charges-update`, {
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
                  loading={shipLoading}
                  value={zone1}
                  flex={1}
                  setValue={setZone1}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone2}
                  flex={1}
                  setValue={setZone2}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone3}
                  flex={1}
                  setValue={setZone3}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone4}
                  flex={1}
                  setValue={setZone4}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone5}
                  flex={1}
                  setValue={setZone5}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone6}
                  flex={1}
                  setValue={setZone6}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone7}
                  flex={1}
                  setValue={setZone7}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone8}
                  flex={1}
                  setValue={setZone8}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone9}
                  flex={1}
                  setValue={setZone9}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone10}
                  flex={1}
                  setValue={setZone10}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone11}
                  flex={1}
                  setValue={setZone11}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone12}
                  flex={1}
                  setValue={setZone12}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone13}
                  flex={1}
                  setValue={setZone13}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone14}
                  flex={1}
                  setValue={setZone14}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone15}
                  flex={1}
                  setValue={setZone15}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone16}
                  flex={1}
                  setValue={setZone16}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone17}
                  flex={1}
                  setValue={setZone17}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone18}
                  flex={1}
                  setValue={setZone18}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone19}
                  flex={1}
                  setValue={setZone19}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone20}
                  flex={1}
                  setValue={setZone20}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone21}
                  flex={1}
                  setValue={setZone21}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone22}
                  flex={1}
                  setValue={setZone22}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone23}
                  flex={1}
                  setValue={setZone23}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone24}
                  flex={1}
                  setValue={setZone24}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone25}
                  flex={1}
                  setValue={setZone25}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone26}
                  flex={1}
                  setValue={setZone26}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone27}
                  flex={1}
                  setValue={setZone27}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone28}
                  flex={1}
                  setValue={setZone28}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone29}
                  flex={1}
                  setValue={setZone29}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone30}
                  flex={1}
                  setValue={setZone30}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone31}
                  flex={1}
                  setValue={setZone31}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone32}
                  flex={1}
                  setValue={setZone32}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone33}
                  flex={1}
                  setValue={setZone33}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone34}
                  flex={1}
                  setValue={setZone34}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone35}
                  flex={1}
                  setValue={setZone35}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone36}
                  flex={1}
                  setValue={setZone36}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone37}
                  flex={1}
                  setValue={setZone37}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone38}
                  flex={1}
                  setValue={setZone38}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone39}
                  flex={1}
                  setValue={setZone39}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone40}
                  flex={1}
                  setValue={setZone40}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone41}
                  flex={1}
                  setValue={setZone41}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone42}
                  flex={1}
                  setValue={setZone42}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone43}
                  flex={1}
                  setValue={setZone43}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone44}
                  flex={1}
                  setValue={setZone44}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone45}
                  flex={1}
                  setValue={setZone45}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone46}
                  flex={1}
                  setValue={setZone46}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone47}
                  flex={1}
                  setValue={setZone47}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone48}
                  flex={1}
                  setValue={setZone48}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone49}
                  flex={1}
                  setValue={setZone49}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone50}
                  flex={1}
                  setValue={setZone50}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone51}
                  flex={1}
                  setValue={setZone51}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone52}
                  flex={1}
                  setValue={setZone52}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone53}
                  flex={1}
                  setValue={setZone53}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone54}
                  flex={1}
                  setValue={setZone54}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone55}
                  flex={1}
                  setValue={setZone55}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone56}
                  flex={1}
                  setValue={setZone56}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone57}
                  flex={1}
                  setValue={setZone57}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone58}
                  flex={1}
                  setValue={setZone58}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone59}
                  flex={1}
                  setValue={setZone59}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone60}
                  flex={1}
                  setValue={setZone60}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone61}
                  flex={1}
                  setValue={setZone61}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone62}
                  flex={1}
                  setValue={setZone62}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone63}
                  flex={1}
                  setValue={setZone63}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone64}
                  flex={1}
                  setValue={setZone64}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone65}
                  flex={1}
                  setValue={setZone65}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone66}
                  flex={1}
                  setValue={setZone66}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone67}
                  flex={1}
                  setValue={setZone67}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone68}
                  flex={1}
                  setValue={setZone68}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone69}
                  flex={1}
                  setValue={setZone69}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone70}
                  flex={1}
                  setValue={setZone70}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone71}
                  flex={1}
                  setValue={setZone71}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone72}
                  flex={1}
                  setValue={setZone72}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone73}
                  flex={1}
                  setValue={setZone73}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone74}
                  flex={1}
                  setValue={setZone74}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone75}
                  flex={1}
                  setValue={setZone75}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone76}
                  flex={1}
                  setValue={setZone76}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone77}
                  flex={1}
                  setValue={setZone77}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone78}
                  flex={1}
                  setValue={setZone78}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone79}
                  flex={1}
                  setValue={setZone79}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone80}
                  flex={1}
                  setValue={setZone80}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone81}
                  flex={1}
                  setValue={setZone81}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone82}
                  flex={1}
                  setValue={setZone82}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone83}
                  flex={1}
                  setValue={setZone83}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone84}
                  flex={1}
                  setValue={setZone84}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone85}
                  flex={1}
                  setValue={setZone85}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone86}
                  flex={1}
                  setValue={setZone86}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone87}
                  flex={1}
                  setValue={setZone87}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone88}
                  flex={1}
                  setValue={setZone88}
                  width="127px"
                />
              </Box>

              <Box display="flex">
                <TableValue
                  loading={shipLoading}
                  value={zone89}
                  flex={1}
                  setValue={setZone89}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone90}
                  flex={1}
                  setValue={setZone90}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone91}
                  flex={1}
                  setValue={setZone91}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone92}
                  flex={1}
                  setValue={setZone92}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone93}
                  flex={1}
                  setValue={setZone93}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone94}
                  flex={1}
                  setValue={setZone94}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone95}
                  flex={1}
                  setValue={setZone95}
                  width="127px"
                />
                <TableValue
                  loading={shipLoading}
                  value={zone96}
                  flex={1}
                  setValue={setZone96}
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
              onClick={() =>
                customPutRequest(
                  "/settings/export-rate-update",
                  updateExportShippingRates
                )
              }
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
                      loading={shipLoading}
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
                      loading={shipLoading}
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
                      loading={shipLoading}
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
                      loading={shipLoading}
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
                    loading={shipLoading}
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
                      loading={shipLoading}
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
                      loading={shipLoading}
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
                    loading={shipLoading}
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
              onClick={() =>
                customPutRequest(
                  "/settings/import-rate-update",
                  updateImportShippingRate
                )
              }
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
        sx={{
          "& .MuiSnackbarContent-root": {
            borderRadius: "30px",
            width: "fit-content",
          },
        }}
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
