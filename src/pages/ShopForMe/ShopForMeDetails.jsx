import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import { Box, Button, Grid, Radio, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowSquare from "../../assets/icons/ArrowSquare";
import UserTag from "../../assets/icons/UserTag";
import Eye from "../../assets/icons/Eye";
import CardWrapper from "../../components/order/components/CardWrapper";
import EditIcon from "../../assets/icons/EditIcon";
import NewShipmentIcon from "../../assets/icons/NewShipmentIcon";
import Line from "../../assets/icons/Line";
import EventUpdates from "../Shipment/EventUpdates";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import StartIcon from "../../assets/icons/StartIcon";
import TooltipIcon from "../../assets/icons/TooltipIcon";
import CloseCircle from "../../assets/icons/CloseCircle";
import ActivityIcon from "../../assets/icons/ActivityIcon";
import EyeIconRed from "../../assets/icons/EyeIconRed";
import UserModals from "../Users/components/UserModals";
import PackageDetailsInfo from "../../components/order/components/PackageDetailsInfo";
import AddShipmentDetails from "./AddShipmentDetails";

const ShopForMeDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location?.state?.order;

  const [selectedRadioValue, setSelectedRadioValue] = useState(null);
  const [addShipment, setAddShipment] = useState(false)

    const handleRadioChange = (event) => {
      setSelectedRadioValue(event.target.value);
    };
  return (
    <Box py="30px" px="40px" maxWidth="1140px">
      <Box p="30px" borderRadius="20px" bgcolor="#fff">
            <Box mb="30px">
              <Typography fontSize="24px" color="#1C1B1F">
                Order ID:{" "}
                <Typography
                  fontSize="24px"
                  color="#1C1B1F"
                  display="inline"
                  fontWeight={700}
                >
                  {order.id}
                </Typography>
              </Typography>
            </Box>
            <Box mb="30px">
              <SectionHeader title="Order Information" noBorder />
              <Box
                mt="20px"
                mb="10px"
                display="flex"
                gap="30px"
                alignItems="center"
              >
                <Box width="100%">
                  <CardWrapper title="Order Information">
                    <Box mt="5px">
                      <Grid container gap="30px" wrap="nowrap" mb="40px">
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Assigned Customer:
                          </Typography>
                          <Box display="flex" alignItems="center" gap="8px">
                            <UserTag />
                            <Typography
                              display="inline"
                              fontSize="22px"
                              color="#21005D"
                            >
                              Rex Offorex
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={2.4}></Grid>
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Order Type:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            Shipment
                          </Typography>
                        </Grid>
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Order Status:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            Under Process
                          </Typography>
                        </Grid>
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Item Purchase Status:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            Some Purchased
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container gap="30px" wrap="nowrap">
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Service:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            Shop For Me
                          </Typography>
                        </Grid>
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Shipment Method:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            Air
                          </Typography>
                        </Grid>
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Delivery Company:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            DHL
                          </Typography>
                        </Grid>
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Order Creation Date:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            12/02/2023
                          </Typography>
                        </Grid>

                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Order Creation Time:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            9:48am
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardWrapper>
                  <Box mt="10px" px="20px">
                    <Line />
                  </Box>
                </Box>
                <EditIcon />
              </Box>

              <Box mt="10px" display="flex" gap="30px" alignItems="center">
                <CardWrapper title="Shipment Details">
                  <Box mt="5px">
                    <Grid container gap="30px" wrap="nowrap" mb="40px">
                      <Grid item xs={2.4}>
                        <Typography fontSize="14px" color="#49454F">
                          Shipping/Tracking ID:
                        </Typography>
                        <Typography fontSize="22px" color="#1C1B1F">
                          SH78667
                        </Typography>
                      </Grid>
                      <Grid item xs={9.8}>
                        <p className="text-[14px] text-t/100 font-roboto">
                          Status:
                        </p>
                        <div className="flex items-center space-x-[10px]">
                          <p className="font-roboto  text-[20px]">
                            Not Started
                          </p>
                          <Button
                            startIcon={<StartIcon />}
                            variant="outlined"
                            sx={{
                              p: "5px 20px",
                              borderColor: "#79747E",
                              color: "#79747E",
                              borderRadius: "100px",
                              textTransform: "none",
                            }}
                          >
                            Start Now
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container gap="30px" wrap="nowrap" mb="40px">
                      <Grid item xs={2.4}>
                        <Typography fontSize="14px" color="#49454F">
                          Packaging Status:
                        </Typography>
                        <Typography fontSize="22px" color="#1C1B1F">
                          Not Started
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardWrapper>
                <EyeIconRed />
              </Box>
            </Box>

            <Box mb="30px">
              <SectionHeader noBorder title="Package details" />
              <Box
                mt="20px"
                mb="10px"
                display="flex"
                gap="30px"
                alignItems="center"
              >
                <Box width="100%">
                  <CardWrapper title="Package Origin">
                    <Box mt="5px">
                      <Grid container gap="30px" wrap="nowrap">
                        <Grid item xs={12}>
                          <Typography fontSize="14px" color="#49454F">
                            Origin warehouse:
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            fontSize="22px"
                            color="#21005D"
                          >
                            UK (London - warehouse)
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardWrapper>
                  <Box mt="10px" px="20px">
                    <Line />
                  </Box>
                </Box>
                <Box onClick={() => setActiveStep(1)}>
                  <EditIcon />
                </Box>
              </Box>
              <Box mt="10px" display="flex" gap="30px" alignItems="center">
                <Box
                  width="100%"
                  display="flex"
                  flexDirection={"column"}
                  gap="8px"
                >
                  <CardWrapper
                    title="Item - #PR08756"
                    bottomRadius
                  ></CardWrapper>
                  <CardWrapper
                    removeArrows
                    fullByDefault
                    title="Item Procurement Status"
                    topRadius
                  >
                    <Box>
                      <Typography fontSize="16px" color="#79747E">
                        Choose the status that shows the procurement status of
                        this item
                      </Typography>
                      <Box mt="16px" display="flex" gap="16px">
                        <Box
                          pr="15px"
                          border="1px solid #CAC4D0"
                          width="fit-content"
                          borderRadius="100px"
                          display="flex"
                          alignItems="center"
                          gap="0px"
                        >
                          <Radio
                            value="Purchase Not Started"
                            checked={
                              selectedRadioValue === "Purchase Not Started"
                            }
                            onChange={handleRadioChange}
                          />
                          <Typography fontSize="14px" color="#49454F">
                            Purchase Not Started
                          </Typography>
                        </Box>
                        <Box
                          pr="15px"
                          border="1px solid #CAC4D0"
                          width="fit-content"
                          borderRadius="100px"
                          display="flex"
                          alignItems="center"
                          gap="0px"
                        >
                          <Radio
                            value="Purchase in Progress"
                            checked={
                              selectedRadioValue === "Purchase in Progress"
                            }
                            onChange={handleRadioChange}
                          />
                          <Typography fontSize="14px" color="#49454F">
                            Purchase in Progress
                          </Typography>
                        </Box>
                        <Box
                          pr="15px"
                          border="1px solid #CAC4D0"
                          width="fit-content"
                          borderRadius="100px"
                          display="flex"
                          alignItems="center"
                          gap="0px"
                        >
                          <Radio
                            value="Purchase Completed"
                            checked={
                              selectedRadioValue === "Purchase Completed"
                            }
                            onChange={handleRadioChange}
                          />
                          <Typography fontSize="14px" color="#49454F">
                            Purchase Completed
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardWrapper>
                </Box>

                <Box onClick={() => setActiveStep(1)}>
                  <EditIcon />
                </Box>
              </Box>
              <Box mt="16px" display="flex" gap="30px" alignItems="center">
                <Box
                  width="100%"
                  display="flex"
                  flexDirection={"column"}
                  gap="8px"
                >
                  <CardWrapper
                    title="Item - #PR08766"
                    bottomRadius
                  ></CardWrapper>
                  <CardWrapper
                    removeArrows
                    fullByDefault
                    title="Item Procurement Status"
                    topRadius
                  >
                    <Box>
                      <Typography fontSize="16px" color="#79747E">
                        Choose the status that shows the procurement status of
                        this item
                      </Typography>
                      <Box mt="16px" display="flex" gap="16px">
                        <Box
                          pr="15px"
                          border="1px solid #CAC4D0"
                          width="fit-content"
                          borderRadius="100px"
                          display="flex"
                          alignItems="center"
                        >
                          <Radio
                            value="Purchase Not Started"
                            checked={
                              selectedRadioValue === "Purchase Not Started"
                            }
                            onChange={handleRadioChange}
                          />
                          <Typography fontSize="14px" color="#49454F">
                            Purchase Not Started
                          </Typography>
                        </Box>
                        <Box
                          pr="15px"
                          border="1px solid #CAC4D0"
                          width="fit-content"
                          borderRadius="100px"
                          display="flex"
                          alignItems="center"
                        >
                          <Radio
                            value="Purchase in Progress"
                            checked={
                              selectedRadioValue === "Purchase in Progress"
                            }
                            onChange={handleRadioChange}
                          />
                          <Typography fontSize="14px" color="#49454F">
                            Purchase in Progress
                          </Typography>
                        </Box>
                        <Box
                          pr="15px"
                          border="1px solid #CAC4D0"
                          width="fit-content"
                          borderRadius="100px"
                          display="flex"
                          alignItems="center"
                        >
                          <Radio
                            value="Purchase Completed"
                            checked={
                              selectedRadioValue === "Purchase Completed"
                            }
                            onChange={handleRadioChange}
                          />
                          <Typography fontSize="14px" color="#49454F">
                            Purchase Completed
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardWrapper>
                </Box>

                <Box onClick={() => setActiveStep(1)}>
                  <EditIcon />
                </Box>
              </Box>
            </Box>

            <Box mb="30px">
              <SectionHeader noBorder title="Shipping Details" />
              <Box mt="20px" display="flex" gap="30px" alignItems="center">
                <CardWrapper title="Destination/Shipping Address">
                  <Box mt="5px">
                    <Grid container gap="30px" wrap="nowrap">
                      <Grid item xs={12}>
                        <Typography fontSize="14px" color="#49454F">
                          Destination warehouse:
                        </Typography>
                        <Box display="flex" alignItems={"center"} gap="10px">
                          <Typography
                            sx={{ display: "inline" }}
                            fontSize="22px"
                            color="#21005D"
                          >
                            N/A
                          </Typography>
                          <TooltipIcon />
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </CardWrapper>
                <Box onClick={() => setActiveStep(1)}>
                  <EditIcon />
                </Box>
              </Box>
            </Box>
            <Box mb="30px">
              <SectionHeader noBorder title="Billing Details" />
              <Box mt="20px" display="flex" gap="30px" alignItems="center">
                <CardWrapper title="Destination/Shipping Address">
                  <Box mt="5px">
                    <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
                      <div className="col-span-2">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          First Name:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          Malibu
                        </p>
                      </div>
                      <div className="col-span-3">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Last Name:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          SHedrack
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Phone Number:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          +234 803 456 7845
                        </p>
                      </div>
                      <div className="col-span-3">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Email:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          Malibushdrack@gmail.com
                        </p>
                      </div>
                    </div>
                    <div className="mt-[30px] col-span-5">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Address:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        No, 1osolo way, ikeja road, behind scaint merry
                      </p>
                    </div>
                    <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
                      <div className="">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Country:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          Turkey
                        </p>
                      </div>
                      <div className="">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          State:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          Istanbul
                        </p>
                      </div>
                      <div className="">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          City:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          Cyprusic
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                          Zip/postal Code:
                        </p>
                        <p className="font-roboto  text-[20px] text-brand/100">
                          98765
                        </p>
                      </div>
                    </div>
                  </Box>
                </CardWrapper>
                <Box onClick={() => setActiveStep(1)}>
                  <EditIcon />
                </Box>
              </Box>
              <Box mt="10px" display="flex" gap="30px" alignItems="center">
                <CardWrapper title="Payments Information">
                  <div className="grid grid-cols-5 mt-[30px]">
                    <div className="col-span-2">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Total Procurement Cost:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        $234,000.00
                      </p>
                    </div>
                    <div className="">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Payment Status:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        Processing
                      </p>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="grid grid-cols-5 mt-[30px]">
                    <div className="col-span-2">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Total Shipment Cost:
                      </p>
                      <Box display="flex" alignItems={"center"} gap="10px">
                        <Typography
                          sx={{ display: "inline" }}
                          fontSize="22px"
                          color="#21005D"
                        >
                          N/A
                        </Typography>
                        <TooltipIcon />
                      </Box>
                    </div>
                    <div className="">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Payment Status:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        N/A
                      </p>
                    </div>
                  </div>
                </CardWrapper>
                <Box onClick={() => setActiveStep(1)}>
                  <EditIcon />
                </Box>
              </Box>
            </Box>

        <Box mt="30px" display="flex" alignItems="center" gap="10px">
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#79747E",
              color: "#79747E",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mr: "10px",
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            startIcon={<ActivityIcon />}
            variant="contained"
            // disabled={service.length === 0}
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "196px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            View order activities
          </Button>
          {selectedRadioValue === "Purchase Completed" ? (
            <Button
              startIcon={
                <Box sx={{ transform: "rotate(180deg)" }}>
                  <ArrowLeftPurple color="#fff" />
                </Box>
              }
              variant="contained"
              onClick={() => navigate("add_shipment_details_shop_for_me")}
              // disabled={service.length === 0}
              sx={{
                bgcolor: "#6750A4",
                color: "#fff",
                width: "273px",
                height: "40px",
                borderRadius: "100px",
                textTransform: "none",
              }}
            >
              Proceed to add Shipment details
            </Button>
          ) : (
            <Button
              startIcon={<CloseCircle />}
              variant="contained"
              // disabled={service.length === 0}
              sx={{
                bgcolor: "#B3261E",
                color: "#fff",
                width: "147px",
                height: "40px",
                borderRadius: "100px",
                textTransform: "none",
              }}
            >
              Cancel order
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ShopForMeDetails;
