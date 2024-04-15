import { Box, Grid, Radio, Typography } from "@mui/material";
import React, { useState } from "react";
import MainLayout from "../../components/Layout/MainLayout";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import ArrowBack from "../../assets/icons/ArrowBack";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import SectionHeader from "../../components/SectionHeader";
import CardWrapper from "../../components/order/components/CardWrapper";
import ArrowCircleUp from "../../assets/icons/ArrowCircleUp";
import laptop from "../../assets/images/laptop.png";
import car from "../../assets/images/car.png";

const PaymentInvoice = ({ showFullBar, setShowFullBar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location?.state;
  const [date, time] = state.order.createdDate.split(" ");
  const [selectedRadio, setSelectedRadio] = useState("Basic");
    const [fullHeight, setFullHeight] = useState(false);
    const shopForMeItems = [
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemLink: "htttp/jjnkkukja.jhgyja...",
        itemCost: "$88.99",
        urgentPurchase: "No",
        quantity: 3,
        totalItemValue: "$112.49",
      },
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemLink: "htttp/jjnkkukja.jhgyja...",
        itemCost: "$88.99",
        urgentPurchase: "No",
        quantity: 3,
        totalItemValue: "$112.49",
      },
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemLink: "htttp/jjnkkukja.jhgyja...",
        itemCost: "$88.99",
        urgentPurchase: "No",
        quantity: 3,
        totalItemValue: "$112.49",
      },
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemLink: "htttp/jjnkkukja.jhgyja...",
        itemCost: "$88.99",
        urgentPurchase: "No",
        quantity: 3,
        totalItemValue: "$112.49",
      },
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemLink: "htttp/jjnkkukja.jhgyja...",
        itemCost: "$88.99",
        urgentPurchase: "No",
        quantity: 3,
        totalItemValue: "$112.49",
      },
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemLink: "htttp/jjnkkukja.jhgyja...",
        itemCost: "$88.99",
        urgentPurchase: "No",
        quantity: 3,
        totalItemValue: "$112.49",
      },
    ];
    const autoImportItems = [
      {
        image: car,
        itemName: "Benz s10",
        itemColor: "blue",
        itemValue: "$88.99",
        pickupCost: "$22.00",
      },
      {
        image: car,
        itemName: "Benz s10",
        itemColor: "blue",
        itemValue: "$88.99",
        pickupCost: "$22.00",
      },
      {
        image: car,
        itemName: "Benz s10",
        itemColor: "blue",
        itemValue: "$88.99",
        pickupCost: "$22.00",
      },
      {
        image: car,
        itemName: "Benz s10",
        itemColor: "blue",
        itemValue: "$88.99",
        pickupCost: "$22.00",
      },
    ];
    const items = [
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemCost: "$88.99",
        quantity: 3,
        totalItemValue: "$112.49",
      },
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemCost: "$88.99",
        quantity: 3,
        totalItemValue: "$112.49",
      },
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemCost: "$88.99",
        quantity: 3,
        totalItemValue: "$112.49",
      },
      {
        image: laptop,
        itemName: "SteelSeries Rival 5 Gaming Laptop...",
        itemCost: "$88.99",
        quantity: 3,
        totalItemValue: "$112.49",
      },
    ];
  return (
    <MainLayout
      title={
        <>
          Invoice - {state.order.paymentFor}{" "}
          <span style={{ fontSize: "24px", color: "#6750A4" }}>
            • {state.order.service} Service
          </span>{" "}
        </>
      }
      showFullBar={showFullBar}
      setShowFullBar={setShowFullBar}
    >
      <Box p="30px 40px">
        <Box p="30px" borderRadius="24px" bgcolor="#fff" maxWidth="1100px">
          <Box mb="20px" onClick={() => navigate(-1)}>
            <ArrowBack />
          </Box>
          <Box display="flex" gap="16px" alignItems="center" mb="24px">
            <Typography fontSize="24px" color="#1C1B1F">
              Invoice ID:{" "}
              <Typography display="inline" fontSize="24px" fontWeight={700}>
                {state.order.id}
              </Typography>
            </Typography>
            <Box width="2px" height="20px" bgcolor="#CAC4D0"></Box>
            <Typography fontSize="24px" color="#1C1B1F">
              Order ID:{" "}
              <Typography display="inline" fontSize="24px" fontWeight={700}>
                {state.order.orderId}
              </Typography>
            </Typography>
          </Box>
          <Box mb="24px">
            <Typography mb="10px" fontSize="22px" color="#1C1B1F">
              Created At
            </Typography>
            <Typography
              mb="5px"
              fontSize="16px"
              color="#1C1B1F"
              fontWeight={500}
            >
              {date}{" "}
              <Typography display="inline" fontSize="16px" color="#49454F">
                {time}
              </Typography>
            </Typography>
            <Box display="flex" gap="8px" alignItems="center">
              <Typography fontSize="16px" color="#49454F">
                This invoice hasn't been paid yet
              </Typography>
              <Box width="2px" height="12px" bgcolor="#CAC4D0"></Box>
              <Box display="flex" alignItems="center" gap="8px">
                <RefreshIcon />
                <Typography fontSize="16px" color="#6750A4">
                  Check Payment status
                </Typography>
              </Box>
            </Box>
          </Box>
          <Grid container wrap="nowrap" gap="30px" mb="30px">
            <Grid item xs={4}>
              <Typography fontSize="22px" color="#1C1B1F" mb="10px">
                Invoiced To
              </Typography>
              <Box display="flex" flexDirection="column" gap="5px">
                <Typography fontSize="16px" color="#1C1B1F">
                  RAC45361 -{" "}
                  <Typography display="inline" fontSize="16px" fontWeight={700}>
                    Mr Rex Offor
                  </Typography>
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  +234 8080006321
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  rexoffor@gmail.com
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  2e festac junction beside soprite, ikeja, Lagos State,
                  Nigeria, 095444
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize="22px" color="#1C1B1F" mb="10px">
                Shipping To
              </Typography>
              <Box display="flex" flexDirection="column" gap="5px">
                <Typography fontSize="16px" color="#1C1B1F" fontWeight={700}>
                  Mr Rex Offor/
                  <Typography display="inline" fontSize="16px" fontWeight={500}>
                    RAC
                  </Typography>
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  +234 8080006321
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  rexoffor@gmail.com
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  2e festac junction beside soprite, ikeja, Lagos State,
                  Nigeria, 095444
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Typography fontSize="22px" color="#1C1B1F" mb="10px">
                Pay To
              </Typography>
              <Box display="flex" flexDirection="column" gap="5px">
                <Typography color="#1C1B1F" fontSize="16px" fontWeight={700}>
                  RAC LOGISTICS LTD.
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  +234 8080006321
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  rexoffor@gmail.com
                </Typography>
                <Typography fontSize="16px" color="#49454F">
                  2e festac junction beside soprite, ikeja, Lagos State,
                  Nigeria, 095444
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box
            bgcolor="#E7E0EC"
            p="20px 28px"
            borderRadius="20px"
            border="1px solid #CAC4D0"
            mb="30px"
          >
            <Typography mb="20px" fontSize="22px" color="#21005D">
              IMPORTANT NOTICE:
            </Typography>
            <Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Box
                  width="3px"
                  height="3px"
                  bgcolor="#49454F"
                  borderRadius="100%"
                ></Box>
                <Typography fontSize="16px" color="#49454F">
                  You can track shipment online with{" "}
                  <Typography display="inline" fontSize="16px" color="#1C1B1F">
                    Tracking ID:SH78667
                  </Typography>
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Box
                  width="3px"
                  height="3px"
                  bgcolor="#49454F"
                  borderRadius="100%"
                ></Box>
                <Typography fontSize="16px" color="#49454F">
                  You are covered for your full declared value of $65.00 only in
                  case of total loss or damage
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box mb="20px">
            <SectionHeader title="Shipping methods" noBorder />
            <Box
              mt="15px"
              p="20px 34px"
              borderRadius="24px"
              border="1px solid #CAC4D0"
            >
              <Box mb="24px" display="flex" alignItems="center" gap="16px">
                <Radio
                  sx={{ p: 0, m: 0 }}
                  value="Basic"
                  checked={selectedRadio === "Basic"}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <Typography fontSize="14px" color="#000" fontWeight={500}>
                  Basic
                </Typography>
              </Box>
              <Box pl="20px">
                <Grid container wrap="nowrap" mb="10px" gap="20px">
                  <Grid item xs={3}>
                    <Typography
                      color="#1C1B1F"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      Shipping Cost:
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      color="#1C1B1F"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      $126.66
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container wrap="nowrap" mb="10px" gap="20px">
                  <Grid item xs={3}>
                    <Typography
                      color="#1C1B1F"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      Clearing, Port Handling:
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      color="#1C1B1F"
                      fontSize="14px"
                      fontWeight={500}
                    >
                      $126.66
                    </Typography>
                  </Grid>
                </Grid>
                <Box mb="5px">
                  <Typography color="#49454F" fontSize="14px">
                    This shipping method takes your package 5 working days to
                    arrive your destination from the 1st Wednesday after your
                    payment, You can call us on +234 700 700 6000 or +1 888 567
                    8765 or{" "}
                    <Typography
                      display="inline"
                      fontWeight={700}
                      color="#6750A4"
                      sx={{ textDecoration: "underline" }}
                    >
                      send us a dm
                    </Typography>{" "}
                    to get alternative shipping methods with different benefits.
                  </Typography>
                </Box>
                <Typography color="#49454F" fontSize="14px">
                  The cost paid here covers clearing, documentation and delivery
                  to the destination.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box mb="24px">
            <SectionHeader title="Payment Methods" noBorder />
            <Box
              mt="15px"
              p="20px 34px"
              borderRadius="24px"
              border="1px solid #CAC4D0"
              height={fullHeight ? "fit-content" : "65px"}
              overflow="hidden"
            >
              <Box
                mb="24px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center" gap="16px">
                  <Radio
                    sx={{ p: 0, m: 0 }}
                    value="Paystack"
                    checked={selectedRadio === "Paystack"}
                    onChange={(e) => setSelectedRadio(e.target.value)}
                  />
                  <Typography fontSize="14px" color="#000" fontWeight={500}>
                    Paystack - Pay with Naira Card
                  </Typography>
                </Box>
                <Box onClick={() => setFullHeight(!fullHeight)}>
                  <ArrowCircleUp />
                </Box>
              </Box>
              <Typography pl='20px' color="#49454F" fontSize="14px">
                Pay with any payment method that Paystack offers such Card, Bank
                Transfers, USSD, etc.
              </Typography>
            </Box>
          </Box>
          <Grid container wrap="nowrap" gap="20px">
            <Grid item xs={3}>
              <SectionHeader title="Take Note" noBorder />
              <Box
                mt="15px"
                p="20px 25px"
                bgcolor="#F2B8B5"
                borderRadius="20px"
              >
                <Typography mb="30px" fontSize="22px" color="#21005D">
                  IMPORTANT NOTICE:
                </Typography>
                <Typography fontSize={"14px"} fontWeight={500} color="#49454F">
                  We do not ship or return any fraudulent purchased items. You
                  are advised to only pay to ship items that you can provide
                  valid evidence of proof of purchase when and if requested.
                  Items for which valid proof of purchase can be provided will
                  be handed over to the CUSTOMS. In addition any shipping cost
                  paid will be forfeited and billed to you as cost of
                  verification.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={9}>
              <SectionHeader title="Package Details" noBorder/>
              <Box mt='15px' border="1px solid #CAC4D0" borderRadius="20px">
                {state.order.service === "Shop For Me" ? (
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
                ) : state.order.service === "Auto Import" ? (
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
                {state.order.service === "Shop For Me"
                  ? shopForMeItems.map((item, i) => (
                      <Grid
                        key={i}
                        sx={{
                          bgcolor: "#fff",
                          borderBottom: "1px solid #79747E",
                        }}
                        container
                        gap="20px"
                        p="20px"
                        wrap="nowrap"
                      >
                        <Grid
                          item
                          xs={3}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={item.image}
                            alt="car"
                            style={{ width: "61px", height: "54px" }}
                          />
                          <Typography
                            fontSize={"14px"}
                            fontWeight={600}
                            color="#1D192B"
                          >
                            {item.itemName}
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
                              href={item.itemLink}
                              style={{
                                textDecoration: "none",
                                color: "#6750A4",
                                fontSize: "14px",
                                fontWeight: 500,
                              }}
                            >
                              {item.itemLink}
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
                            {item.itemCost}
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
                            {item.urgentPurchase}
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
                            {item.quantity}
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
                            {item.totalItemValue}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))
                  : state.order.service === "Auto Import"
                  ? autoImportItems.map((item, i) => (
                      <Grid
                        key={i}
                        sx={{
                          bgcolor: "#fff",
                          borderBottom: "1px solid #79747E",
                        }}
                        container
                        p="20px"
                      >
                        <Grid
                          item
                          xs={3}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={item.image}
                            alt="car"
                            style={{ width: "61px", height: "54px" }}
                          />
                          <Typography
                            fontSize={"14px"}
                            fontWeight={600}
                            color="#1D192B"
                          >
                            {item.itemName}
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
                            {item.itemColor}
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
                            {item.itemValue}
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
                            {item.pickupCost}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))
                  : items.map((item, i) => (
                      <Grid
                        key={i}
                        sx={{
                          bgcolor: "#fff",
                          borderBottom: "1px solid #79747E",
                        }}
                        container
                        p="20px"
                      >
                        <Grid
                          item
                          xs={3}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={item.image}
                            alt="car"
                            style={{ width: "61px", height: "54px" }}
                          />
                          <Typography
                            fontSize={"14px"}
                            fontWeight={600}
                            color="#1D192B"
                          >
                            {item.itemName}
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
                            {item.itemCost}
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
                            {item.totalItemValue}
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
                  {state.order.service === "Auto Import" ? (
                    <>
                      <Grid item xs={8}></Grid>
                      <Grid
                        item
                        xs={2}
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
                      <Grid
                        item
                        xs={2}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                        }}
                      >
                        <Typography fontSize={"14px"} color="#49454F">
                          Total pick up cost:
                        </Typography>
                        <Typography fontSize={"20px"} color="#1C1B1F">
                          $345.00
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
                          {state.order.service === "Shop For Me"
                            ? shopForMeItems.length
                            : items.length}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography fontSize={"14px"} color="#49454F">
                          Total Gross Weight:
                        </Typography>
                        <Typography fontSize={"20px"} color="#1C1B1F">
                          30lbs
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
                          $345.00
                        </Typography>
                      </Grid>
                    </>
                  )}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default PaymentInvoice;
