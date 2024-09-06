import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowBack from "../../assets/icons/ArrowBack";
import { useNavigate } from "react-router-dom";
import PaymentsTable from "./components/PaymentsTable";
import TableValue from "./components/TableValue";
import CloseCircle from "../../assets/icons/CloseCircle";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import Requests from "../../utils/hooks/api/requests";
import CloseIcon from "../../assets/icons/CloseIcon";
import { useState } from "react";
import { useEffect } from "react";
import useCustomGetRequest from "../../utils/hooks/api/useCustomGetRequest";

const ProcurementFees = () => {
  const { data: procurement, loading: procLoading } = useCustomGetRequest(
    "/settings/urgent-purchase-fee/processing-fee"
  );
  const navigate = useNavigate();
  const columns = ["Amount ($)", "Processing Fee ($)"];
  const rows = [
    "1 - 150",
    "151 - 1000",
    "1001 - 5000",
    "5001 - 10000",
    "10001 - 1M",
  ];
  const { customPutRequest, data, loading, error, setError } = Requests();
  const [urgentPurchaseFee, setUrgentPurchaseFee] = useState(0);
  const [range1, setRange1] = useState(0);
  const [range2, setRange2] = useState(0);
  const [range3, setRange3] = useState(0);
  const [range4, setRange4] = useState(0);
  const [range5, setRange5] = useState(0);
  const [discard, setDiscard] = useState(false);
  const [openError, setOpenError] = useState(false);
  console.log(discard);
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

  const ProcurementFeesUpdateData = {
    updates: [
      {
        amountRange: "1-150",
        processingFee: Number(range1),
      },
      {
        amountRange: "151-1000",
        processingFee: Number(range2),
      },
      {
        amountRange: "1001-5000",
        processingFee: Number(range3),
      },
      {
        amountRange: "5001-10000",
        processingFee: Number(range4),
      },
      {
        amountRange: "10001-1000000",
        processingFee: Number(range5),
      },
    ],
  };

  useEffect(() => {
    setUrgentPurchaseFee(procurement?.data?.urgentPurchaseFee);
    setRange1(procurement?.data?.procurementFees[0].processingFee);
    setRange2(procurement?.data?.procurementFees[1].processingFee);
    setRange3(procurement?.data?.procurementFees[2].processingFee);
    setRange4(procurement?.data?.procurementFees[3].processingFee);
    setRange5(procurement?.data?.procurementFees[4].processingFee);
  }, [procLoading]);
  return (
    <Box p="24px 40px">
      <Box p="24px" borderRadius="20px" bgcolor="#fff">
        <IconButton onClick={() => navigate(-1)} sx={{ mb: "10px" }}>
          <ArrowBack />
        </IconButton>
        <Box
          p="24px"
          border="1px solid #CAC4D0"
          borderRadius={"20px"}
          mb="24px"
        >
          <Typography fontSize="24px" color="#1C1B1F" mb="8px">
            Other Charges
          </Typography>
          <Typography fontSize="16px" color="#1D192B" mb="24px">
            These urgent purchase fee below charges apply to each individual
            Item that needs an urgent purchase
          </Typography>
          <Box>
            <Box
              pl="16px"
              py="18px"
              borderRadius="8px"
              borderTop="1px solid #79747E"
              borderLeft="1px solid #79747E"
            >
              <Typography fontSize="14px" fontWeight={500} color="#1D192B">
                Urgent Purchase Fee ($)
              </Typography>
            </Box>
            <PaymentsTable rows={[]} columns={[]} allColored>
              <Box display="flex">
                <TableValue
                  width="190px"
                  value={urgentPurchaseFee}
                  dollar
                  setValue={setUrgentPurchaseFee}
                />
                <Box
                  alignSelf={"flex-end"}
                  width="100%"
                  height="46px"
                  bgcolor="#FFECF1"
                  display="flex"
                  alignItems="flex-end"
                  pl="16px"
                  borderBottom="1px solid #E7E0EC"
                  pb="8px"
                >
                  <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                    {`Flat rate`}
                  </Typography>
                </Box>
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
                  // onClick={() => setDiscard(!discard)}
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
                    customPutRequest("/settings/urgent-purchase-fee", {
                      urgentPurchaseFee: Number(urgentPurchaseFee),
                    })
                  }
                >
                  Save Changes
                </Button>
              </Box>
            </PaymentsTable>
          </Box>
        </Box>
        <Box p="24px" border="1px solid #CAC4D0" borderRadius={"20px"}>
          <Typography fontSize="24px" color="#1C1B1F" mb="8px">
            Procurement Fees
          </Typography>
          <Typography fontSize="16px" color="#1D192B" mb="24px">
            These costs apply to shop for me orders only
          </Typography>
          <PaymentsTable rows={rows} columns={columns} allColored>
            <Box display="flex">
              <TableValue
                width="143px"
                value={range1}
                dollar
                setValue={setRange1}
              />
              <Box
                alignSelf={"flex-end"}
                width="238px"
                height="46px"
                bgcolor="#FFECF1"
                display="flex"
                alignItems="flex-end"
                pl="16px"
                borderBottom="1px solid #E7E0EC"
                pb="8px"
              >
                <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                  {`Flat Rate`}
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <TableValue
                width="143px"
                value={range2}
                percentage
                setValue={setRange2}
              />
              <Box
                alignSelf={"flex-end"}
                width="238px"
                height="46px"
                bgcolor="#FFECF1"
                display="flex"
                alignItems="flex-end"
                pl="16px"
                borderBottom="1px solid #E7E0EC"
                pb="8px"
              >
                <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                  {`* {Total Value of Items}`}
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <TableValue
                width="143px"
                value={range3}
                percentage
                setValue={setRange3}
              />
              <Box
                alignSelf={"flex-end"}
                width="238px"
                height="46px"
                bgcolor="#FFECF1"
                display="flex"
                alignItems="flex-end"
                pl="16px"
                borderBottom="1px solid #E7E0EC"
                pb="8px"
              >
                <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                  {`* {Total Value of Items}`}
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <TableValue
                width="143px"
                value={range4}
                percentage
                setValue={setRange4}
              />
              <Box
                alignSelf={"flex-end"}
                width="238px"
                height="46px"
                bgcolor="#FFECF1"
                display="flex"
                alignItems="flex-end"
                pl="16px"
                borderBottom="1px solid #E7E0EC"
                pb="8px"
              >
                <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                  {`* {Total Value of Items}`}
                </Typography>
              </Box>
            </Box>
            <Box display="flex">
              <TableValue
                width="143px"
                value={range5}
                percentage
                setValue={setRange5}
              />
              <Box
                alignSelf={"flex-end"}
                width="238px"
                height="46px"
                bgcolor="#FFECF1"
                display="flex"
                alignItems="flex-end"
                pl="16px"
                borderBottom="1px solid #E7E0EC"
                pb="8px"
              >
                <Typography fontSize="14px" fontWeight={500} color="#060C2C">
                  {`* {Total Value of Items}`}
                </Typography>
              </Box>
            </Box>
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
              // onClick={() => setDiscard(!discard)}
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
                  "/settings/processing-fee-update",
                  ProcurementFeesUpdateData
                )
              }
            >
              Save Changes
            </Button>
          </Box>
        </Box>
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

export default ProcurementFees;
