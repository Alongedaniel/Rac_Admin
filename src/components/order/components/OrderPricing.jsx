import React, { useEffect, useState } from "react";
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
import CardWrapper from "./CardWrapper";
import DollarIcon from "../../../assets/icons/DollarIcon";
import PercentageIcon from "../../../assets/icons/PercentageIcon";
import RetryIcon from "../../../assets/icons/RetryIcon";
import StyledArrowRight from "../../../assets/icons/StyledArrowRight";
import car from "../../../assets/images/car.png";
import laptop from "../../../assets/images/laptop.png";
import XCloseIcon from "../../../assets/icons/XCloseIcon";
import AddIcon from "../../../assets/icons/AddIcon";
import currencyFormatter from "../../CurrencyFormatter";
import nairaCurrencyFormatter from "../../NairaCurrencyFormatter";
import CarPickupBox from "./CarPickupBox";

const OrderPricing = ({
  shippingCost = "",
  clearingCost = "",
  dutyFee = "",
  setShippingCost = () => {},
  setClearingCost = () => {},
  setDutyFee = () => {},
  service = "",
  shopForMe = false,
  requestItems = [],
  data = {},
  warehouseCost,
  setWarehouseCost,
  discountValue,
  setDiscountValue,
  required,
  otherCharges,
  setOtherCharges,
  totalPickupCost,
  setTotalPickupCost,
  isRequest,
}) => {
  const [discountType, setDiscoutType] = useState("");
  const totalShopForMeCost = () => {
    let total = 0;
    requestItems.map((x) => (total += x.qty * x.originalCost));
    return total;
  };
  const totalRequestCost = () => {
    let total = 0;
    data.map((x) => (total += x.quantity * x.originalCost));
    return total;
  };

  const totalDeclaredAutoImportValue = () => {
    let total = 0;
    requestItems.map((x) => (total += x.carValue));
    return total;
  };
  const overallCost =
    data?.totalProcessingFee +
    data?.totalUrgentPurchaseCost +
    data?.orderVat +
    (Number(warehouseCost) || 0) +
    totalShopForMeCost();

  const overallAutoImportCost =
    data?.insurance +
    data?.paymentMethodSurcharge +
    data?.vat +
    data?.storageCharges +
    (Number(shippingCost) ?? 0) +
    (Number(totalPickupCost) ?? 0) +
    (Number(otherCharges) ?? 0);

  useEffect(() => {
    if (warehouseCost?.length === 0 || Number(warehouseCost) < 0) {
      setWarehouseCost(0);
    }

    if (warehouseCost?.length > 1 && warehouseCost[0] === "0") {
      const formatCost = setTimeout(() => {
        const cost = warehouseCost.slice(1, warehouseCost?.length);
        setWarehouseCost(cost);
      }, 100);
      return () => clearTimeout(formatCost);
    }
  }, [warehouseCost]);

  console.log(typeof warehouseCost, warehouseCost);
  const [checked, setChecked] = useState(false);

  console.log(checked);
  const calcDiscount = () => {
    let newValue;
    if (service === "Shop For Me") {
      if (discountValue > 0)
        if (discountType === "Percentage")
          newValue = overallCost - (overallCost * discountValue) / 100;
        else if (discountValue < overallCost)
          newValue = overallCost - discountValue;
        else newValue = 0;
      else newValue = overallCost;
    }
    if (service === "Auto Import") {
      if (discountValue > 0)
        if (discountType === "Percentage")
          newValue =
            overallAutoImportCost -
            (overallAutoImportCost * discountValue) / 100;
        else if (discountValue < overallAutoImportCost)
          newValue = overallAutoImportCost - discountValue;
        else newValue = 0;
      else newValue = overallAutoImportCost;
      console.log("object");
    }
    return newValue;
  };
  // const shopForMeItems = [
  //   {
  //     image: laptop,
  //     itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
  //     itemLink: "htttp/jjnkkukja.jhgyja...",
  //     itemCost: "$88.99",
  //     urgentPurchase: "No",
  //     quantity: 3,
  //     totalItemValue: "$112.49",
  //   },
  //   {
  //     image: laptop,
  //     itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
  //     itemLink: "htttp/jjnkkukja.jhgyja...",
  //     itemCost: "$88.99",
  //     urgentPurchase: "No",
  //     quantity: 3,
  //     totalItemValue: "$112.49",
  //   },
  //   {
  //     image: laptop,
  //     itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
  //     itemLink: "htttp/jjnkkukja.jhgyja...",
  //     itemCost: "$88.99",
  //     urgentPurchase: "No",
  //     quantity: 3,
  //     totalItemValue: "$112.49",
  //   },
  //   {
  //     image: laptop,
  //     itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
  //     itemLink: "htttp/jjnkkukja.jhgyja...",
  //     itemCost: "$88.99",
  //     urgentPurchase: "No",
  //     quantity: 3,
  //     totalItemValue: "$112.49",
  //   },
  //   {
  //     image: laptop,
  //     itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
  //     itemLink: "htttp/jjnkkukja.jhgyja...",
  //     itemCost: "$88.99",
  //     urgentPurchase: "No",
  //     quantity: 3,
  //     totalItemValue: "$112.49",
  //   },
  //   {
  //     image: laptop,
  //     itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
  //     itemLink: "htttp/jjnkkukja.jhgyja...",
  //     itemCost: "$88.99",
  //     urgentPurchase: "No",
  //     quantity: 3,
  //     totalItemValue: "$112.49",
  //   },
  // ];
  const autoImportItems = [
    {
      image: car,
      itemName: "Benz s10",
      itemColor: "blue",
      itemValue: "$88.99",
      totalPickupCost: "$22.00",
    },
    {
      image: car,
      itemName: "Benz s10",
      itemColor: "blue",
      itemValue: "$88.99",
      totalPickupCost: "$22.00",
    },
    {
      image: car,
      itemName: "Benz s10",
      itemColor: "blue",
      itemValue: "$88.99",
      totalPickupCost: "$22.00",
    },
    {
      image: car,
      itemName: "Benz s10",
      itemColor: "blue",
      itemValue: "$88.99",
      totalPickupCost: "$22.00",
    },
  ];
  const items = [
    {
      image: laptop,
      itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
      itemCost: "$88.99",
      quantity: 3,
      totalItemValue: "$112.49",
    },
    {
      image: laptop,
      itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
      itemCost: "$88.99",
      quantity: 3,
      totalItemValue: "$112.49",
    },
    {
      image: laptop,
      itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
      itemCost: "$88.99",
      quantity: 3,
      totalItemValue: "$112.49",
    },
    {
      image: laptop,
      itemName: "SteelSeries Rival 5 Gaming Laptop with PrismSync RGB...",
      itemCost: "$88.99",
      quantity: 3,
      totalItemValue: "$112.49",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  let totalItems = 0;
  let total = 0;

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
        {service === "Shop For Me" ? (
          <Grid
            sx={{
              bgcolor: "#F4EFF4",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            container
            p="20px 30px"
            gap="20px"
            wrap="nowrap"
          >
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontWeight: 600,
              }}
            >
              Items
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontWeight: 600,
              }}
            >
              Item URL
            </Grid>
            <Grid
              item
              xs={1.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontWeight: 600,
              }}
            >
              Item Cost From Store
            </Grid>
            <Grid
              item
              xs={1.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontWeight: 600,
              }}
            >
              Urgent Purchase
            </Grid>
            <Grid
              item
              xs={1.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontWeight: 600,
              }}
            >
              Quantity Of Items
            </Grid>
            <Grid
              item
              xs={1.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                fontWeight: 600,
              }}
            >
              Total Value Of Item
            </Grid>
          </Grid>
        ) : service === "Auto Import" ? (
          <Grid
            sx={{
              bgcolor: "#F4EFF4",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            container
            p="30px"
          >
            <Grid item xs={3} sx={{ fontWeight: 600 }}>
              Items
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
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
                fontWeight: 600,
              }}
            >
              Car Value
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              Pickup Cost
            </Grid>
          </Grid>
        ) : (
          <Grid
            sx={{
              bgcolor: "#F4EFF4",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
            }}
            container
            p="30px"
          >
            <Grid item xs={3} sx={{ fontWeight: 600 }}>
              Items
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              Valur Per Item
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              Quantity of Items
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              Total Value Of Item
            </Grid>
          </Grid>
        )}
        {service === "Shop For Me"
          ? requestItems.map((item, i) => (
              <Grid
                key={i}
                sx={{ bgcolor: "#fff", borderBottom: "1px solid #79747E" }}
                container
                gap="20px"
                p="20px"
                wrap="nowrap"
              >
                <Grid
                  item
                  xs={3}
                  sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <img
                    src={item.itemImage}
                    alt="car"
                    style={{
                      width: "61px",
                      height: "54px",
                      objectFit: "cover",
                    }}
                  />
                  <Typography
                    fontSize={"14px"}
                    fontWeight={600}
                    color="#1D192B"
                  >
                    {item.itemName?.length > 20
                      ? item?.itemName?.slice(0, 20) + "..."
                      : item?.itemName}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography fontSize={"14px"} fontWeight={600}>
                    <a
                      href={item.itemUrl}
                      style={{
                        textDecoration: "none",
                        color: "#6750A4",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {item.itemUrl?.length > 20
                        ? item?.itemUrl?.slice(0, 20) + "..."
                        : item?.itemUrl}
                    </a>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography fontSize={"14px"} fontWeight={600}>
                    {item.originalCost}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography fontSize={"14px"} fontWeight={600}>
                    {item.urgentPurchase ? "Yes" : "No"}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography fontSize={"14px"} fontWeight={600}>
                    {item.qty}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={1.5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography fontSize={"14px"} fontWeight={600}>
                    {currencyFormatter.format(item.qty * item.originalCost)}
                  </Typography>
                </Grid>
              </Grid>
            ))
          : service === "Auto Import"
            ? requestItems.map((item, i) => (
                <Grid
                  key={i}
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
                      src={item.carImage}
                      alt="car"
                      style={{
                        width: "61px",
                        height: "54px",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      fontSize={"14px"}
                      fontWeight={600}
                      color="#1D192B"
                    >
                      {item.carBrand?.length > 20
                        ? item?.carBrand?.slice(0, 20) + "..."
                        : item?.carBrand}
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
                    <Typography fontSize={"14px"} fontWeight={600}>
                      {item.color}
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
                    <Typography fontSize={"14px"} fontWeight={600}>
                      {currencyFormatter.format(item.carValue)}
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
                    <Typography fontSize={"14px"} fontWeight={600}>
                      {item?.pickupDetails?.firstName ? "Yes" : "No"}
                    </Typography>
                  </Grid>
                </Grid>
              ))
            : data.map((item, i) => (
                <Grid
                  key={i}
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
                      src={item.productImage}
                      alt="car"
                      style={{
                        width: "61px",
                        height: "54px",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      fontSize={"14px"}
                      fontWeight={600}
                      color="#1D192B"
                    >
                      {item.productName?.length > 20
                        ? item?.productName?.slice(0, 20) + "..."
                        : item?.productName}
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
                    <Typography fontSize={"14px"} fontWeight={600}>
                      {currencyFormatter.format(item.originalCost)}
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
                    <Typography fontSize={"14px"} fontWeight={600}>
                      {item.quantity}
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
                    <Typography fontSize={"14px"} fontWeight={600}>
                      {currencyFormatter.format(
                        item.originalCost * item.quantity,
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
        <Grid
          sx={{
            bgcolor: "#fff",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
          container
          p="20px"
        >
          {service === "Auto Import" ? (
            <>
              <Grid item xs={6}></Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize={"14px"} color="#49454F">
                  Total Declared Value:
                </Typography>
                <Typography fontSize={"20px"} color="#1C1B1F">
                  {currencyFormatter.format(totalDeclaredAutoImportValue())}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                }}
              >
                <Typography fontSize={"14px"} color="#49454F">
                  Total pick up cost:
                </Typography>
                <Typography fontSize={"20px"} color="#1C1B1F">
                  {totalPickupCost}
                </Typography>
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={4}>
                <Typography fontSize={"14px"} color="#49454F">
                  Total Number Of Items:
                </Typography>
                <Typography fontSize={"20px"} color="#1C1B1F">
                  {service === "Shop For Me"
                    ? requestItems?.map((x) => (x.qty += totalItems))
                    : data?.map((x) => (total += x.quantity))}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography fontSize={"14px"} color="#49454F">
                  Total Gross Weight:
                </Typography>
                <Typography fontSize={"20px"} color="#1C1B1F">
                  N/A
                </Typography>
              </Grid>
              {/* <Grid item xs={3}></Grid> */}
              <Grid
                item
                xs={4}
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
                  {service === "Shop For Me"
                    ? currencyFormatter.format(Number(totalShopForMeCost()))
                    : currencyFormatter.format(Number(totalRequestCost()))}
                </Typography>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
      <Box mt="20px">
        <CardWrapper
          fullByDefault
          title={
            service === "Shop For Me" ? "Procurement Cost" : "Shipment Cost"
          }
        >
          {service === "Auto Import" ? (
            <Box>
              <TextField
                fullWidth
                required
                sx={{
                  fontSize: "16px",
                  color: "#1C1B1F",
                  "& .MuiInputLabel-root": {
                    color: required && !shippingCost ? "#B3261E" : "#1C1B1F",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: required && !shippingCost ? "#B3261E" : "#79747E",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor:
                        required && !shippingCost ? "#B3261E" : "#79747E", // Border color when focused
                    },
                  },
                }}
                id="shipping-cost"
                type="text"
                value={shippingCost}
                onChange={(e) => setShippingCost(e.target.value)}
                label="Shipping Cost"
                InputProps={{
                  startAdornment: <DollarIcon />,
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    //   borderBottomLeftRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                // placeholder="Enter your country"
              />
            </Box>
          ) : service === "Shop For Me" ? (
            <Box>
              <Grid container mb="20px">
                <Grid item xs={4}>
                  <Typography fontSize={"14px"} color="#49454F">
                    Total Item(s) Cost from Store(s):
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    {service === "Shop For Me"
                      ? currencyFormatter.format(Number(totalShopForMeCost()))
                      : "23.00"}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography fontSize={"14px"} color="#49454F">
                    Total Processing Fee:
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    {currencyFormatter.format(Number(data?.totalProcessingFee))}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography fontSize={"14px"} color="#49454F">
                    Total Urgent Purchase Fee:
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    {currencyFormatter.format(
                      Number(data?.totalUrgentPurchaseCost),
                    )}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container mb="20px">
                <Grid item xs={4}>
                  <Typography fontSize={"14px"} color="#49454F">
                    Payment Method Surcharge:
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    {currencyFormatter.format(
                      Number(data?.orderPaymentMethodSurcharge ?? 0),
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography fontSize={"14px"} color="#49454F">
                    VAT:
                  </Typography>
                  <Typography fontSize={"20px"} color="#1C1B1F">
                    {currencyFormatter.format(Number(data?.orderVat))}
                  </Typography>
                </Grid>
                <Grid item xs={4}></Grid>
              </Grid>
              <TextField
                fullWidth
                required
                sx={{
                  fontSize: "16px",
                  color: "#1C1B1F",
                  "& .MuiInputLabel-root": {
                    color: required && !warehouseCost ? "#B3261E" : "#1C1B1F",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: required && !warehouseCost ? "#B3261E" : "#79747E",
                  },
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor:
                        required && !warehouseCost ? "#B3261E" : "#79747E", // Border color when focused
                    },
                  },
                }}
                id="warehouse-cost"
                // type="number"
                type="text"
                value={warehouseCost}
                onChange={(e) => setWarehouseCost(e.target.value)}
                label="Total Shipping to Origin Warehouse cost"
                InputProps={{
                  startAdornment: <DollarIcon />,
                  sx: {
                    borderRadius: "20px", // Apply border radius to the input element
                    //   borderBottomLeftRadius: "20px", // Apply border radius to the input element
                    height: "56px",
                    borderColor: "#79747E",
                    fontSize: "16px",
                    color: "#1C1B1F",
                  },
                }}
                // placeholder="Enter your country"
              />
            </Box>
          ) : (
            <Box
              mt="20px"
              display="flex"
              gap="25px"
              sx={{ minHeight: "262px" }}
            >
              <Box minWidth="332px">
                <CardWrapper
                  title="Basic Shipping Method"
                  removeArrows
                  showRadio={
                    <Radio
                      value="basic"
                      checked={selectedValue === "basic"}
                      onChange={handleChange}
                    />
                  }
                  fullByDefault
                  style={{ height: "100%" }}
                >
                  <Box display="flex" flexDirection="column" gap="20px">
                    <Box>
                      <Typography fontSize={"14px"} color="#49454F">
                        Shipping Cost:
                      </Typography>
                      <Typography fontSize={"20px"} color="#1C1B1F">
                        $23.00
                      </Typography>
                    </Box>
                    <Box>
                      <Typography fontSize={"14px"} color="#49454F">
                        Clearing, Port Handling:
                      </Typography>
                      <Typography fontSize={"20px"} color="#1C1B1F">
                        $0.00
                      </Typography>
                    </Box>
                  </Box>
                </CardWrapper>
              </Box>
              <Box width="100%">
                <CardWrapper
                  title="Custom Shipping Method"
                  removeArrows
                  showRadio={
                    <Radio
                      value="custom"
                      checked={selectedValue === "custom"}
                      onChange={handleChange}
                    />
                  }
                  fullByDefault
                  style={{ height: "100%" }}
                >
                  <Grid container gap="30px" mb="30px" wrap="nowrap">
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        required
                        sx={{
                          fontSize: "16px",
                          color: "#1C1B1F",
                        }}
                        id="shipping-cost"
                        type="text"
                        value={shippingCost}
                        onChange={(e) => setShippingCost(e.target.value)}
                        label="Shipping Cost"
                        InputProps={{
                          startAdornment: <DollarIcon />,
                          sx: {
                            borderRadius: "20px", // Apply border radius to the input element
                            //   borderBottomLeftRadius: "20px", // Apply border radius to the input element
                            height: "56px",
                            borderColor: "#79747E",
                            fontSize: "16px",
                            color: "#1C1B1F",
                          },
                        }}
                        // placeholder="Enter your country"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        required
                        sx={{ fontSize: "16px", color: "#1C1B1F" }}
                        id="clearing-cost"
                        type="text"
                        value={shippingCost}
                        onChange={(e) => setShippingCost(e.target.value)}
                        label="Clearing, Port Handling"
                        InputProps={{
                          startAdornment: <DollarIcon />,
                          sx: {
                            borderRadius: "20px", // Apply border radius to the input element
                            //   borderBottomLeftRadius: "20px", // Apply border radius to the input element
                            height: "56px",
                            borderColor: "#79747E",
                            fontSize: "16px",
                            color: "#1C1B1F",
                          },
                        }}
                        // placeholder="Enter your country"
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    required
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    id="duty fee"
                    type="text"
                    value={shippingCost}
                    onChange={(e) => setShippingCost(e.target.value)}
                    label="Duty Fee"
                    InputProps={{
                      startAdornment: <DollarIcon />,
                      sx: {
                        borderRadius: "20px", // Apply border radius to the input element
                        // borderBottomLeftRadius: "20px", // Apply border radius to the input element
                        height: "56px",
                        borderColor: "#79747E",
                        fontSize: "16px",
                        color: "#1C1B1F",
                      },
                    }}
                    // placeholder="Enter your country"
                  />
                </CardWrapper>
              </Box>
            </Box>
          )}

          <Box mt="10px">
            {service === "Shop For Me" ? null : (
              <>
                <Box
                  border="1px solid #CAC4D0"
                  p="16px 20px"
                  borderRadius="20px"
                >
                  <Typography fontSize={"14px"} color="#49454F" mb="20px">
                    Additional Costs
                  </Typography>
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography fontSize={"14px"} color="#49454F">
                        Storage Charge:
                      </Typography>
                      <Typography fontSize={"20px"} color="#1C1B1F">
                        {currencyFormatter.format(
                          Number(data?.storageCharges ?? 0),
                        )}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography fontSize={"14px"} color="#49454F">
                        Insurance Cost:
                      </Typography>
                      <Typography fontSize={"20px"} color="#1C1B1F">
                        {currencyFormatter.format(Number(data?.insurance ?? 0))}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography fontSize={"14px"} color="#49454F">
                        Payment Method Surcharge:
                      </Typography>
                      <Typography fontSize={"20px"} color="#1C1B1F">
                        {currencyFormatter.format(
                          Number(data?.paymentMethodSurcharge ?? 0),
                        )}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography fontSize={"14px"} color="#49454F">
                        VAT:
                      </Typography>
                      <Typography fontSize={"20px"} color="#1C1B1F">
                        {currencyFormatter.format(Number(data?.vat ?? 0))}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container wrap="nowrap" gap="10px" mt="20px">
                    {service === "Auto Import" ? (
                      <Box width="100%">
                        <Grid container gap="30px" wrap="nowrap">
                          <Grid item xs={12}>
                            <TextField
                              required
                              id="other-charges"
                              sx={{
                                fontSize: "16px",
                                color: "#1C1B1F",
                                "& .MuiInputLabel-root": {
                                  color:
                                    required && !otherCharges
                                      ? "#B3261E"
                                      : "#1C1B1F",
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                  color:
                                    required && !otherCharges
                                      ? "#B3261E"
                                      : "#79747E",
                                },
                                "& .MuiOutlinedInput-root": {
                                  "&.Mui-focused fieldset": {
                                    borderColor:
                                      required && !otherCharges
                                        ? "#B3261E"
                                        : "#79747E", // Border color when focused
                                  },
                                },
                              }}
                              type="number"
                              label="Other Charges"
                              fullWidth
                              value={otherCharges}
                              onChange={(e) => setOtherCharges(e.target.value)}
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
                        {/* <Button
                        onClick={() => setClicked(!clicked)}
                        startIcon={clicked ? <XCloseIcon /> : <AddIcon />}
                        variant={clicked ? "contained" : "outlined"}
                        sx={{
                          border: clicked ? "none" : "1px solid #79747E",
                          bgcolor: clicked ? "#E7E0EC" : "transparent",
                          color: "#1C1B1F",
                          fontSize: "16px",
                          width: "200px",
                          height: "56px",
                          borderRadius: "20px",
                          borderBottomLeftRadius: clicked ? 0 : "20px",
                          borderBottomRightRadius: clicked ? 0 : "20px",
                          borderBottom: clicked
                            ? "1px solid #49454F"
                            : "1px solid #79747E",
                          textTransform: "none",
                          mt: "20px",
                          "&:hover": {
                            bgcolor: clicked ? "#E7E0EC" : "transparent",
                          },
                        }}
                      >
                        Pick-Up Cost
                      </Button> */}
                      </Box>
                    ) : (
                      <Grid item xs={12}>
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
                    )}
                  </Grid>
                </Box>
                <Box
                  border="1px solid #CAC4D0"
                  p="16px 20px"
                  borderRadius="20px"
                  mt="10px"
                >
                  <Typography fontSize={"14px"} color="#49454F" mb="20px">
                    Pickup Costs
                  </Typography>
                  <Grid container spacing={2.5}>
                    {requestItems.map((car, i) => (
                      <Grid item xs={6}>
                        <CarPickupBox
                          requestItems={requestItems}
                          car={car}
                          index={i + 1}
                          required={required}
                          totalPickupCost={totalPickupCost}
                          setTotalPickupCost={setTotalPickupCost}
                          isRequest={isRequest}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            )}
            <Box
              display="flex"
              alignItems="center"
              gap="30px"
              mt="10px"
              pt="10px"
              sx={{ borderTop: "1px solid #79747E" }}
            >
              <Box
                // maxWidth="384px"
                alignSelf="flex-start"
                width="100%"
                // height="168px"
                overflow="hidden"
                height={checked ? "168px" : "60px"}
                border="1px solid #CAC4D0"
                p="22px 20px"
                py={checked ? "22px" : "10px"}
                borderRadius="20px"
              >
                <div
                  className={`transition-all flex items-center justify-between cursor-pointer`}
                >
                  <p className="text-[20px]">Discounts</p>
                  <Switch
                    checked={checked || discountValue?.length}
                    onClick={() => {
                      setChecked(true);
                      if (checked) {
                        setDiscoutType("");
                        setDiscountValue(0);
                      }
                    }}
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
                            },
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
                            onChange={() => setDiscoutType("Percentage")}
                            disabled={!checked}
                            checked={discountType === "Percentage"}
                          />
                          <FormControlLabel
                            value="$"
                            control={<Radio color="primary" />}
                            label="$"
                            onChange={() => setDiscoutType("Dollar")}
                            disabled={!checked}
                            checked={discountType === "Dollar"}
                          />
                        </Box>
                      </RadioGroup>
                    </FormControl>
                  </Box>
                  <Box mt="20px">
                    <TextField
                      id="discount"
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      type="number"
                      label="Discount"
                      disabled={discountType === ""}
                      fullWidth
                      value={discountValue}
                      onChange={(e) =>
                        setDiscountValue(parseInt(e.target.value, 10))
                      }
                      // placeholder="Select origin"
                      InputProps={{
                        startAdornment:
                          discountType === "Percentage" ? (
                            <PercentageIcon />
                          ) : (
                            <DollarIcon />
                          ),
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
                // maxWidth={"280px"}
                width="100%"
                bgcolor="#21005D"
                p="22px 20px"
                borderRadius="20px"
              >
                <Typography fontSize={"16px"} color="#fff" fontWeight={500}>
                  {service === "Shop For Me"
                    ? "Total Procurement Cost"
                    : "Total Shipment Cost"}
                </Typography>
                <Box mt="30px">
                  {" "}
                  <Typography fontSize={"20px"} color="#fff" fontWeight={400}>
                    {service === "Shop For Me" || service === "Auto Import"
                      ? currencyFormatter.format(Number(calcDiscount()))
                      : "126.00"}
                  </Typography>
                  <Typography fontSize={"14px"} color="#EADDFF">
                    The Naira Equivalent that will be charged if paid now is
                    <Typography display="inline" fontWeight={500}>
                      {" "}
                      {nairaCurrencyFormatter.format(calcDiscount() * 1650)}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              {/* <Box height="168px">
                <Typography fontSize={"16px"} fontWeight={500} mb="16px">
                  Transaction Status:
                </Typography>

                <Typography
                  my="10px"
                  fontSize={"22px"}
                  fontWeight={400}
                  color="#1C1B1F"
                >
                  Rejected
                </Typography>
                <Button
                  startIcon={<RetryIcon />}
                  variant="contained"
                  sx={{
                    bgcolor: "#B3261E",
                    color: "#fff",
                    width: "178px",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                  }}
                >
                  Retry Submission
                </Button>
              </Box> */}
            </Box>
            <Box mt="20px" display="flex" flexDirection="column" gap="5px">
              <Box display="flex" alignItems="center" gap="10px">
                <Box width="24px">
                  <StyledArrowRight />
                </Box>
                <Typography fontSize={"12px"} fontWeight={500}>
                  RAC Logistics’s current exchange rate which is subjected to
                  change according to market trends is ($1=₦1,200), the customer
                  will be charged the Naira Equivalent of the shipping cost
                  based on the current exchange rate at any given time/point of
                  payment
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Box width="24px">
                  <StyledArrowRight color="#B3261E" />
                </Box>

                <Typography fontSize={"12px"} fontWeight={500}>
                  {service === "Shop For Me"
                    ? "The shipping amount paid by customers here does not include clearing costs, which are only due once the car(s) have successfully arrived at the Port in Nigeria."
                    : "The total the customer are paying here includes only the Shipping related costs"}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Box width="24px">
                  <StyledArrowRight />
                </Box>
                <Typography fontSize={"12px"} fontWeight={500}>
                  Prices and subtotals are displayed including taxes
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Box width="24px">
                  <StyledArrowRight />
                </Box>
                <Typography fontSize={"12px"} fontWeight={500}>
                  Discounts are calculated based on prices and subtotals taken
                  without considering taxes
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardWrapper>
        {(service === "Shop For Me" || service === "Auto Import") &&
          !shopForMe && (
            <CardWrapper
              mt="20px"
              title={
                service === "Auto Import" ? "Clearing Cost" : "Shipping Cost"
              }
            >
              <Box
                mt="10px"
                p="10px 20px"
                borderRadius="100px"
                border="1px solid #CAC4D0"
                bgcolor="#F4EFF4"
              >
                {service === "Auto Import" ? (
                  <Typography
                    fontSize={"16px"}
                    fontWeight={500}
                    color="#1C1B1F"
                  >
                    The clearing cost decision will be made upon the arrival of
                    the car(s) at the port in Nigeria.
                  </Typography>
                ) : (
                  <Typography
                    fontSize={"16px"}
                    fontWeight={500}
                    color="#1C1B1F"
                  >
                    This will be decided once the items have been procured and
                    brought to the origin warehouse.
                  </Typography>
                )}
              </Box>
            </CardWrapper>
          )}
      </Box>
    </div>
  );
};

export default OrderPricing;
