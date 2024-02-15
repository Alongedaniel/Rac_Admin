import React from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import SwitchIcon from "../../../assets/icons/SwitchIcon";
import car from "../../../assets/images/car.png";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import DollarIcon from "../../../assets/icons/DollarIcon";
import PercentageIcon from "../../../assets/icons/PercentageIcon";
import RetryIcon from "../../../assets/icons/RetryIcon";
import StyledArrowRight from "../../../assets/icons/StyledArrowRight";

const PaymentInformation = ({ drop, toggle }) => {
  const theme = useTheme();
  return (
    <div>
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
          Confirm the Payments Information for this Order
        </p>
      </div>
      <Box mb="20px" px="30px" mt="12px">
        <Box pt="30px" sx={{ borderTop: "1px solid #79747E" }}>
          <Box display="flex" alignItems="center" gap="20px" py="10px">
            <Typography
              fontSize={14}
              sx={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              Default Currency:{" "}
              <Typography display={"inline"} fontWeight={500}>
                USD
              </Typography>
            </Typography>
            <Box display="flex" alignItems="center" gap="8px">
              <SwitchIcon />
              <Typography color="#6750A4" fontSize={"14px"} fontWeight={500}>
                Switch to Naira
              </Typography>
            </Box>
          </Box>
          <Typography fontSize="12px">
            Our current exchange rate is set at ($1=₦1,200), and it may change
            with market trends. All costs will be charged in Naira, calculated
            at the current exchange rate at the time of payment.
          </Typography>
        </Box>
      </Box>
      <Box border="1px solid #CAC4D0" borderRadius="20px">
        <Grid
          sx={{
            bgcolor: "#F4EFF4",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          container
          p="30px"
        >
          <Grid item xs={3}>
            Items
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Car(s) Color
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Car(s) Value
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Pick Up Cost
          </Grid>
        </Grid>
        <Grid
          sx={{ bgcolor: "#fff", borderBottom: "1px solid #79747E" }}
          container
          p="20px"
        >
          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img
              src={car}
              alt="car"
              style={{ width: "61px", height: "54px" }}
            />
            <Typography fontSize={"14px"} fontWeight={500}>
              Benz s10
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={"14px"} fontWeight={500}>
              Blue
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={"14px"} fontWeight={500}>
              $88.99
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={"14px"} fontWeight={500}>
              $22.00
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{ bgcolor: "#fff", borderBottom: "1px solid #79747E" }}
          container
          p="20px"
        >
          <Grid
            item
            xs={3}
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <img
              src={car}
              alt="car"
              style={{ width: "61px", height: "54px" }}
            />
            <Typography fontSize={"14px"} fontWeight={500}>
              GLK 450d
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={"14px"} fontWeight={500}>
              Green
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={"14px"} fontWeight={500}>
              $88.99
            </Typography>
          </Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography fontSize={"14px"} fontWeight={500}>
              ---
            </Typography>
          </Grid>
        </Grid>
        <Grid
          sx={{
            bgcolor: "#fff",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          container
          p="20px"
        >
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3}></Grid>
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Typography fontSize={"14px"} color="#49454F">
              Total Declared Value:
            </Typography>
            <Typography fontSize={"20px"} color="#1C1B1F">
              $345.00
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        border="1px solid #CAC4D0"
        p="20px 30px"
        mt="20px"
        borderRadius="20px"
      >
        <div
          className={`${
            drop === 7 ? "h-full" : "h-[68px]  overflow-hidden"
          } transition-all border px-[28px] py-[20px] rounded-[20px]`}
          style={{ flex: 1 }}
        >
          <div
            onClick={() => toggle(7)}
            className={` transition-all flex items-center justify-between cursor-pointer`}
          >
            <p className="text-[20px]">Shipment Cost</p>
            <IoChevronUpCircleOutline className="text-[25px]" />
          </div>
          <Box mt="30px">
            <TextField
              required
              id="cost"
              sx={{ fontSize: "16px", color: "#1C1B1F" }}
              type="number"
              label="Shipping Cost"
              fullWidth
              // placeholder="Select origin"
              InputProps={{
                startAdornment: <DollarIcon />,
                sx: {
                  // maxWidth: "540px",
                  borderRadius: "20px", // Apply border radius to the input element
                  height: "56px",
                  borderColor: "#79747E",
                  fontSize: "16px",
                  color: "#1C1B1F",
                  mb: "10px",
                },
              }}
            />
            <Box border="1px solid #CAC4D0" p="20px 20px" borderRadius="20px">
              <Typography fontSize={"14px"} color="#49454F" mb="20px">
                Additional Costs
              </Typography>
              <Grid container>
                <Grid item xs={3}>
                  <Typography fontSize={"14px"} color="#49454F">
                    Storage Charge:
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    $23.00
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography fontSize={"14px"} color="#49454F">
                    Insurance Cost:
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    $23.00
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography fontSize={"14px"} color="#49454F">
                    Payment Method Surcharge:
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    $23.00
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography fontSize={"14px"} color="#49454F">
                    VAT:
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    $23.00
                  </Typography>
                </Grid>
              </Grid>
              <Grid container wrap="nowrap" gap="10px" my="20px">
                <Grid item xs={6}>
                  <TextField
                    required
                    id="pickup-cost"
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    type="number"
                    label="Pick Up Cost"
                    fullWidth
                    // placeholder="Select origin"
                    InputProps={{
                      startAdornment: <DollarIcon />,
                      sx: {
                        // maxWidth: "540px",
                        borderRadius: "20px", // Apply border radius to the input element
                        height: "56px",
                        borderColor: "#79747E",
                        fontSize: "16px",
                        color: "#1C1B1F",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    id="other-charges"
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    type="number"
                    label="Other Charges"
                    fullWidth
                    // placeholder="Select origin"
                    InputProps={{
                      startAdornment: <DollarIcon />,
                      sx: {
                        // maxWidth: "540px",
                        borderRadius: "20px", // Apply border radius to the input element
                        height: "56px",
                        borderColor: "#79747E",
                        fontSize: "16px",
                        color: "#1C1B1F",
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              gap="30px"
              mt="10px"
              pt="10px"
              sx={{ borderTop: "1px solid #79747E" }}
            >
              <Box
                maxWidth="384px"
                height="168px"
                border="1px solid #CAC4D0"
                p="22px 20px"
                borderRadius="20px"
              >
                <div
                  className={`transition-all flex items-center justify-between cursor-pointer`}
                >
                  <p className="text-[20px]">Discounts</p>
                  <Switch
                    sx={{
                      root: {
                        width: 50,
                        height: 26,
                        padding: 0,
                        "& .MuiSwitch-switchBase": {
                          padding: 1,
                          "&.Mui-checked": {
                            transform: "translateX(24px)",
                            color: theme.palette.common.white,
                            "& + .MuiSwitch-track": {
                              backgroundColor:
                                theme.palette.mode === "dark"
                                  ? "#2ECA45"
                                  : "#65C466",
                              opacity: 1,
                              border: 0,
                            },
                          },
                          "&.Mui-disabled + .MuiSwitch-track": {
                            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
                          },
                        },
                        "& .MuiSwitch-thumb": {
                          width: 24,
                          height: 24,
                          borderRadius: "50%",
                        },
                        "& .MuiSwitch-track": {
                          borderRadius: 26 / 2,
                          backgroundColor:
                            theme.palette.mode === "light"
                              ? "#E9E9EA"
                              : "#39393D",
                          opacity: 1,
                          transition: theme.transitions.create(
                            ["background-color"],
                            {
                              duration: 500,
                            }
                          ),
                        },
                      },
                    }}
                  />
                </div>
                <Box display="flex" alignItems="center" gap="20px">
                  <Box mt="20px">
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                      >
                        <Box sx={{ display: "flex" }}>
                          <FormControlLabel
                            value="%"
                            control={<Radio color="primary" />}
                            label="%"
                          />
                          <FormControlLabel
                            value="$"
                            control={<Radio color="primary" />}
                            label="$"
                          />
                        </Box>
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box mt="20px">
                    <TextField
                      id="discount"
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      // type="number"
                      label="Discount"
                      fullWidth
                      // placeholder="Select origin"
                      InputProps={{
                        startAdornment: <PercentageIcon />,
                        sx: {
                          // maxWidth: "540px",
                          borderRadius: "20px", // Apply border radius to the input element
                          height: "56px",
                          borderColor: "#79747E",
                          fontSize: "16px",
                          color: "#1C1B1F",
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                height="168px"
                maxWidth={"280px"}
                bgcolor="#21005D"
                p="22px 20px"
                borderRadius="20px"
              >
                <Typography fontSize={"16px"} color="#fff" fontWeight={500}>
                  Total Shipment Cost
                </Typography>
                <Box mt="30px">
                  {" "}
                  <Typography fontSize={"20px"} color="#fff" fontWeight={400}>
                    $126.00
                  </Typography>
                  <Typography fontSize={"14px"} color="#EADDFF">
                    The Naira Equivalent that will be charged if paid now is
                    <Typography display="inline" fontWeight={500}>
                      {" "}
                      ₦20,000
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              <Box height="168px">
                <Typography fontSize={"16px"} fontWeight={500} mb="16px">
                  Payment Status:
                </Typography>
                <Switch
                  sx={{
                    root: {
                      width: 50,
                      height: 26,
                      padding: 0,
                      "& .MuiSwitch-switchBase": {
                        padding: 1,
                        "&.Mui-checked": {
                          transform: "translateX(24px)",
                          color: theme.palette.common.white,
                          "& + .MuiSwitch-track": {
                            backgroundColor:
                              theme.palette.mode === "dark"
                                ? "#2ECA45"
                                : "#65C466",
                            opacity: 1,
                            border: 0,
                          },
                        },
                        "&.Mui-disabled + .MuiSwitch-track": {
                          opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
                        },
                      },
                      "& .MuiSwitch-thumb": {
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                      },
                      "& .MuiSwitch-track": {
                        borderRadius: 26 / 2,
                        backgroundColor:
                          theme.palette.mode === "light"
                            ? "#E9E9EA"
                            : "#39393D",
                        opacity: 1,
                        transition: theme.transitions.create(
                          ["background-color"],
                          {
                            duration: 500,
                          }
                        ),
                      },
                    },
                  }}
                />{" "}
                <Typography
                  my="10px"
                  fontSize={"20px"}
                  fontWeight={400}
                  color="#1C1B1F"
                >
                  Claim Rejected
                </Typography>
                <Button
                  startIcon={<RetryIcon />}
                  variant="contained"
                  sx={{
                    bgcolor: "#B3261E",
                    color: "#fff",
                    width: "100px",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                  }}
                >
                  Retry
                </Button>
              </Box>
            </Box>
            <Box mt="20px" display="flex" flexDirection="column" gap="5px">
              <Box display="flex" alignItems="center" gap="10px">
                <StyledArrowRight />
                <Typography fontSize={"12px"} fontWeight={500}>
                  RAC Logistics’s current exchange rate which is subjected to
                  change according to market trends is ($1=₦1,200), the customer
                  will be charged the Naira Equivalent of the shipping cost
                  based on the current exchange rate at any given time/point of
                  payment
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <StyledArrowRight color="#B3261E" />
                <Typography fontSize={"12px"} fontWeight={500}>
                  The total the customer are paying here includes only the
                  Shipping related costs
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <StyledArrowRight />
                <Typography fontSize={"12px"} fontWeight={500}>
                  Prices and subtotals are displayed including taxes
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <StyledArrowRight />
                <Typography fontSize={"12px"} fontWeight={500}>
                  Discounts are calculated based on prices and subtotals taken
                  without considering taxes
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default PaymentInformation;
