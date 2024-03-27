import {
  Box,
  Button,
  Grid,
  Link,
  Radio,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import { useNavigate } from "react-router-dom";
import CircleRight from "../../assets/icons/CircleRight";
import CardWrapper from "../../components/order/components/CardWrapper";
import Joiner from "../../assets/icons/Joiner";
import MenuIcon from "../../assets/icons/MenuIcon";
import DeletIcon from "../../assets/icons/DeletIcon";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PlusIcon from "../../assets/icons/PlusIcon";
import SectionHeader from "../../components/SectionHeader";
import AddIcon from "../../assets/icons/AddIcon";
import EditIcon from "../../assets/icons/EditIcon";
import UserTag from "../../assets/icons/UserTag";
import Eye from "../../assets/icons/Eye";
import LinkIcon from "../../assets/icons/LinkIcon";
import drone from "../../assets/images/drone.png"
import laptop from "../../assets/images/laptop.png"
import CheckWhiteIcon from "../../assets/icons/CheckWhiteIcon";
import UserModals from "../Users/components/UserModals";
import OrderInformation from "../orders/components/OrderInformation";
import Line from "../../assets/icons/Line";
import OrderItem from "../../components/order/components/OrderItem";
import ShippingDetailsInfo from "../../components/order/components/ShippingDetailsInfo";
import BillingDetailsInfo from "../../components/order/components/BillingDetailsInfo";
import PackageDetailsInfo from "../../components/order/components/PackageDetailsInfo";

const CreateShipment = () => {
  const steps = [
    "Assigned Order Details",
    "Shipping Details",
    "Shipment Details Summary",
    "Shipment Successfully Created",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const [assignedOrder, setAssignedOrder] = useState(false)
  const today = dayjs();
  const [date, setDate] = useState(today);

  const [selectedRadioValue, setSelectedRadioValue] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedRadioValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
    else setProceed(false);
  };
    const order = {
      image: laptop,
      service: "Auto Import",
      id: "SH08758",
      customer: "Rexo Offorex",
      shippingMethod: "Basic",
      shipmentMethod: "Air",
      destination: "Lagos, Nigeria",
      status: "Not Started",
      origin: "London, UK",
      date: "22-03-2023 ",
      time: "13:05",
      cost: "$107.76",
      deliveryCompany: "---",
      dispatchCompany: "---",
      staff: "Micheal Sam obalodu",
      packaging: "Packaging In Progress",
      actions: "actions",
    };
  const finish = activeStep === steps.length - 1;
  useEffect(() => {
    window.scroll(0, 0)
  }, [activeStep])
  
  return (
    <Box px="40px" pt="30px">
      <Box
        p="30px"
        borderRadius="20px"
        bgcolor="#fff"
        width="100%"
        maxWidth={{ xs: "1100px", xl: "1400px" }}
      >
        <Stepper activeStep={activeStep}>
          {steps.map((step, i) => (
            <Step key={i}>
              <StepLabel>{i === activeStep ? step : null}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box mt="30px">
          {activeStep === 0 ? (
            <Box>
              <div className="flex items-center space-x-[10px] ">
                <CircleRight />
                <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                  Please provide the details for the order to which this
                  shipment should be assigned
                </p>
              </div>
              <Box
                display="flex"
                flexDirection="column"
                gap="30px"
                mt="10px"
                p="30px"
                sx={{ borderTop: "1px solid #79747E" }}
              >
                <TextField
                  id="assigned-order"
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  type="text"
                  label="Assigned Order"
                  fullWidth
                  select
                  // value={assignedCustomer}
                  // onChange={(e) => setAssignedCustomer(e.target.value)}
                  // placeholder="Select origin"
                  InputProps={{
                    sx: {
                      // maxWidth: "540px",
                      borderRadius: "20px", // Apply border radius to the input element
                      // height: "144px",
                      borderColor: "#79747E",
                      fontSize: "16px",
                      color: "#1C1B1F",
                    },
                  }}
                />
              </Box>
            </Box>
          ) : activeStep === 1 ? (
            <Box>
              <Box
                p="22px 14px"
                border="1px solid #CAC4D0"
                borderRadius="20px"
                mb="20px"
              >
                <div className="flex items-center space-x-[10px] ">
                  <CircleRight />
                  <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                    Courier Information
                  </p>
                </div>
                <Box
                  mt="20px"
                  pb="20px"
                  display="flex"
                  flexDirection="column"
                  gap="30px"
                >
                  <Grid container gap="30px" wrap="nowrap">
                    <Grid item xs={6}>
                      {" "}
                      <TextField
                        id="delivery-company"
                        sx={{ fontSize: "16px", color: "#1C1B1F" }}
                        type="text"
                        label="Delivery Company"
                        fullWidth
                        select
                        InputProps={{
                          sx: {
                            borderRadius: "20px",
                            borderColor: "#79747E",
                            fontSize: "16px",
                            color: "#1C1B1F",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      {" "}
                      <TextField
                        id="tracking-id"
                        sx={{ fontSize: "16px", color: "#1C1B1F" }}
                        type="text"
                        label="Tracking ID"
                        fullWidth
                        placeholder="112..."
                        InputProps={{
                          sx: {
                            borderRadius: "20px",
                            borderColor: "#79747E",
                            fontSize: "16px",
                            color: "#1C1B1F",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    id="tracking-link"
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    type="text"
                    label="Tracking Link"
                    fullWidth
                    placeholder="https://example.com"
                    InputProps={{
                      sx: {
                        borderRadius: "20px",
                        borderColor: "#79747E",
                        fontSize: "16px",
                        color: "#1C1B1F",
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box mb="30px">
                <div className="flex items-center space-x-[10px] ">
                  <CircleRight />
                  <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                    Manage Shipment Status
                  </p>
                </div>
                <Box pl="30px">
                  <Box
                    mt="10px"
                    width="100%"
                    height="1px"
                    bgcolor="#79747E"
                  ></Box>
                </Box>
                <Box display="flex" mt="30px">
                  <Box
                    p="24px"
                    border="1px solid #CAC4D0"
                    height="fit-content"
                    borderRadius="20px"
                    width="100%"
                  >
                    <Typography fontSize="22px" color="#49454F">
                      Shipment Starting
                    </Typography>
                    <Typography
                      fontSize="16px"
                      color="#79747E"
                      mt="6px"
                      mb="16px"
                    >
                      Select the shipment status as it begins its journey.
                    </Typography>
                    <Box>
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
                          value="processing"
                          checked={selectedRadioValue === "processing"}
                          onChange={handleRadioChange}
                        />
                        <Typography fontSize="14px" color="#49454F">
                          Processing
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box alignSelf="center">
                    <Joiner />
                  </Box>
                  <Box
                    sx={{ transform: "translateX(-5px)" }}
                    width="100%"
                    p="24px"
                    border="1px solid #CAC4D0"
                    height="fit-content"
                    borderRadius="20px"
                    bgcolor="#fff"
                  >
                    <Typography fontSize="22px" color="#49454F">
                      Shipment is En Route
                    </Typography>
                    <Typography
                      fontSize="16px"
                      color="#79747E"
                      mt="6px"
                      mb="16px"
                    >
                      Choose the status as the shipment is on its way.
                    </Typography>
                    <Box>
                      <Box
                        mb="16px"
                        pr="15px"
                        border="1px solid #CAC4D0"
                        width="fit-content"
                        borderRadius="100px"
                        display="flex"
                        alignItems="center"
                        gap="0px"
                      >
                        <Radio
                          value="In Transit"
                          checked={selectedRadioValue === "In Transit"}
                          onChange={handleRadioChange}
                        />
                        <Typography fontSize="14px" color="#49454F">
                          In Transit
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
                          value="Undergoing Customs Clearing"
                          checked={
                            selectedRadioValue === "Undergoing Customs Clearing"
                          }
                          onChange={handleRadioChange}
                        />
                        <Typography fontSize="14px" color="#49454F">
                          Undergoing Customs Clearing
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    alignSelf="center"
                    sx={{ transform: "translateX(-5px)" }}
                  >
                    <Joiner />
                  </Box>
                  <Box
                    sx={{ transform: "translateX(-10px)" }}
                    p="24px"
                    border="1px solid #CAC4D0"
                    height="fit-content"
                    borderRadius="20px"
                    width="100%"
                    bgcolor="#fff"
                  >
                    <Typography fontSize="22px" color="#49454F">
                      Shipment Arrived at Destination
                    </Typography>
                    <Typography
                      fontSize="16px"
                      color="#79747E"
                      mt="6px"
                      mb="16px"
                    >
                      Indicate the status as the shipment reaches its
                      destination for import.
                    </Typography>
                    <Box>
                      <Box
                        mb="16px"
                        pr="15px"
                        border="1px solid #CAC4D0"
                        width="fit-content"
                        borderRadius="100px"
                        display="flex"
                        alignItems="center"
                        gap="0px"
                      >
                        <Radio
                          value="Ready for Pickup"
                          checked={selectedRadioValue === "Ready for Pickup"}
                          onChange={handleRadioChange}
                        />
                        <Typography fontSize="14px" color="#49454F">
                          Ready for Pickup
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
                          value="Delivered"
                          checked={selectedRadioValue === "Delivered"}
                          onChange={handleRadioChange}
                        />
                        <Typography fontSize="14px" color="#49454F">
                          Delivered
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box>
                <SectionHeader title="Add Shipment Event Updates" />
                <Box>
                  <Box
                    mt="30px"
                    mb="24px"
                    display="flex"
                    alignItems="center"
                    gap="30px"
                  >
                    <MenuIcon />
                    <CardWrapper title="Event - #1">
                      <Box
                        mt="5px"
                        display="flex"
                        flexDirection="column"
                        gap="30px"
                      >
                        <TextField
                          id="event-title"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Event Title"
                          fullWidth
                          placeholder="Shipment was submitted"
                          InputProps={{
                            sx: {
                              borderRadius: "20px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                        <Grid container gap="30px" wrap="nowrap">
                          <Grid item xs={7}>
                            {" "}
                            <TextField
                              id="location"
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              type="text"
                              label="Location"
                              fullWidth
                              placeholder="LAGOS - NIGERIA"
                              InputProps={{
                                sx: {
                                  borderRadius: "20px",
                                  borderColor: "#79747E",
                                  fontSize: "16px",
                                  color: "#1C1B1F",
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={5}>
                            {" "}
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="Event Date"
                                slotProps={{
                                  textField: {
                                    helperText: "MM/DD/YYYY",
                                  },
                                }}
                                value={date}
                                onChange={(newValue) => setDate(newValue)}
                                sx={{
                                  //   display: 'none',
                                  width: "100%",
                                  borderRadius: "20px", // Apply border radius to the input element
                                  height: "56px",
                                  borderColor: "#79747E",
                                  fontSize: "16px",
                                  color: "#1C1B1F",
                                }}
                              />
                            </LocalizationProvider>
                          </Grid>
                        </Grid>
                        <Grid container gap="30px" wrap="nowrap">
                          <Grid item xs={7}>
                            {" "}
                            <Box
                              width="100%"
                              height="100%"
                              borderRadius="28px"
                              bgcolor="#6750A41C"
                            ></Box>
                          </Grid>
                          <Grid item xs={5}>
                            {" "}
                            <TextField
                              id="note"
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              type="text"
                              label="Note"
                              fullWidth
                              multiline
                              rows={5}
                              maxRows={5}
                              placeholder="Note made by admin"
                              InputProps={{
                                sx: {
                                  borderRadius: "20px",
                                  borderColor: "#79747E",
                                  fontSize: "16px",
                                  color: "#1C1B1F",
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </CardWrapper>
                    <DeletIcon />
                  </Box>
                  <Box display="flex" alignItems="center" gap="30px" mb="24px">
                    <MenuIcon />
                    <CardWrapper title="Event - #2"></CardWrapper>
                    <DeletIcon />
                  </Box>
                </Box>
                <Button
                  startIcon={<AddIcon />}
                  variant="text"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#6750A4",
                    width: "148px",
                    height: "40px",
                    textTransform: "none",
                    mb: "30px",
                  }}
                >
                  Add new event
                </Button>
              </Box>
              <Box>
                <SectionHeader title="Fill in the Estimated Delivery Period Details " />
                <Box mt="20px">
                  <Grid container gap="30px" wrap="nowrap">
                    <Grid item xs={4}>
                      {" "}
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Estimated Delivery Date"
                          // slotProps={{
                          //   textField: {
                          //     helperText: "MM/DD/YYYY",
                          //   },
                          // }}
                          value={date}
                          onChange={(newValue) => setDate(newValue)}
                          sx={{
                            //   display: 'none',
                            width: "100%",
                            borderRadius: "20px", // Apply border radius to the input element
                            height: "56px",
                            borderColor: "#79747E",
                            fontSize: "16px",
                            color: "#1C1B1F",
                          }}
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={8}>
                      {" "}
                      <TextField
                        id="time-of-day"
                        sx={{ fontSize: "16px", color: "#1C1B1F" }}
                        type="text"
                        label="Time Of Day"
                        fullWidth
                        select
                        InputProps={{
                          sx: {
                            borderRadius: "20px",
                            borderColor: "#79747E",
                            fontSize: "16px",
                            color: "#1C1B1F",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          ) : activeStep === 2 ? (
            <Box>
              <Box mb="30px">
                <SectionHeader
                  noBorder
                  title="Confirm the Assigned Order Details"
                />
                <Box mt="20px" display="flex" gap="30px" alignItems="center">
                  <CardWrapper title="Assigned Order Details">
                    <Box mt="5px">
                      <Grid container gap="30px" wrap="nowrap">
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Assigned Order:
                          </Typography>
                          <Box
                            display="flex"
                            alignItems="center"
                            gap="8px"
                            sx={{ cursor: "pointer" }}
                            onClick={() => setAssignedOrder(true)}
                          >
                            <Typography
                              sx={{ display: "inline" }}
                              fontSize="22px"
                              color="#21005D"
                            >
                              OD7866{" "}
                            </Typography>
                            <Eye />
                          </Box>
                        </Grid>
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
                            Service:
                          </Typography>
                          <Typography fontSize="22px" color="#1C1B1F">
                            Export
                          </Typography>
                        </Grid>
                        <Grid item xs={2.4}></Grid>
                      </Grid>
                    </Box>
                  </CardWrapper>
                  <Box onClick={() => setActiveStep(0)}>
                    <EditIcon />
                  </Box>
                </Box>
              </Box>
              <Box mb="30px">
                <SectionHeader
                  noBorder
                  title="Confirm the Courier Information"
                />
                <Box mt="20px" display="flex" gap="30px" alignItems="center">
                  <CardWrapper title="Courier Information">
                    <Box mt="5px">
                      <Grid container gap="30px" wrap="nowrap">
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Delivery Company:
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            fontSize="22px"
                            color="#21005D"
                          >
                            DHL
                          </Typography>
                        </Grid>
                        <Grid item xs={2.4}>
                          <Typography fontSize="14px" color="#49454F">
                            Tracking ID:
                          </Typography>
                          <Typography
                            display="inline"
                            fontSize="22px"
                            color="#21005D"
                          >
                            765764
                          </Typography>
                        </Grid>
                        <Grid item xs={4.8}>
                          <Typography fontSize="14px" color="#49454F">
                            Tracking Link:
                          </Typography>
                          <Typography fontSize="22px" color="#B3261E">
                            http://jjnkkukja.jhgyjayjdjjhcjc
                          </Typography>
                        </Grid>
                        <Grid item xs={2.4}></Grid>
                      </Grid>
                    </Box>
                  </CardWrapper>
                  <Box onClick={() => setActiveStep(1)}>
                    <EditIcon />
                  </Box>
                </Box>
              </Box>
              <Box mb="30px">
                <SectionHeader noBorder title="Confirm the Shipment Status" />
                <Box mt="20px" display="flex" gap="30px" alignItems="center">
                  <CardWrapper title="Shipment Status" fullByDefault>
                    <Box mt="5px">
                      <Grid container gap="30px" wrap="nowrap">
                        <Grid item xs={12}>
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
                              value="processing"
                              checked={
                                true ?? selectedRadioValue === "processing"
                              }
                              onChange={handleRadioChange}
                            />
                            <Typography fontSize="14px" color="#49454F">
                              Processing
                            </Typography>
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
                <SectionHeader noBorder title="Confirm the Event Updates" />
                <Box mt="20px" display="flex" gap="30px" alignItems="center">
                  <CardWrapper title="Event Updates">
                    <Box
                      mt="5px"
                      p="20px"
                      borderRadius="20px"
                      bgcolor="#CAC4D0"
                      display="flex"
                      flexDirection="column"
                      gap="30px"
                    >
                      <Grid container gap="30px" wrap="nowrap">
                        <Grid item xs={6}>
                          <Typography fontSize="14px" color="#49454F">
                            Event Title:
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            fontSize="22px"
                            color="#1C1B1F"
                          >
                            Shipment was submitted
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography fontSize="14px" color="#49454F">
                            Location:
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            fontSize="22px"
                            color="#1C1B1F"
                          >
                            LAGOS - NIGERIA
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container gap="30px" wrap="nowrap">
                        <Grid item xs={6}>
                          <Typography fontSize="14px" color="#49454F">
                            Event Date:
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            fontSize="22px"
                            color="#1C1B1F"
                          >
                            12/02/2023
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography fontSize="14px" color="#49454F">
                            Event Time:
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            fontSize="22px"
                            color="#1C1B1F"
                          >
                            9:47 AM
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container gap="30px" wrap="nowrap">
                        <Grid item xs={12}>
                          <Typography fontSize="14px" color="#49454F">
                            Note:
                          </Typography>
                          <Typography
                            sx={{ display: "inline" }}
                            fontSize="22px"
                            color="#1C1B1F"
                          >
                            The notes will be visible here
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </CardWrapper>
                  <Box onClick={() => setActiveStep(1)}>
                    <EditIcon />
                  </Box>
                </Box>
              </Box>
              <Box>
                <SectionHeader
                  noBorder
                  title="Confirm the Estimated Delivery Period details"
                />
                <Box mt="20px" display="flex" gap="30px" alignItems="center">
                  <CardWrapper title="Estimated Delivery Period">
                    <Grid container gap="30px" wrap="nowrap">
                      <Grid item xs={2.4}>
                        <Typography fontSize="14px" color="#49454F">
                          Estimated Delivery Date:
                        </Typography>
                        <Typography
                          sx={{ display: "inline" }}
                          fontSize="22px"
                          color="#1C1B1F"
                        >
                          12/02/2023
                        </Typography>
                      </Grid>
                      <Grid item xs={2.4}>
                        <Typography fontSize="14px" color="#49454F">
                          Delivery Time of the Day:
                        </Typography>
                        <Typography
                          sx={{ display: "inline" }}
                          fontSize="22px"
                          color="#1C1B1F"
                        >
                          By End of Day
                        </Typography>
                      </Grid>
                      <Grid item xs={2.4}></Grid>
                      <Grid item xs={2.4}></Grid>
                      <Grid item xs={2.4}></Grid>
                    </Grid>
                  </CardWrapper>
                  <Box onClick={() => setActiveStep(1)}>
                    <EditIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box width="100%">
              <Box bgcolor="#6750A4" borderRadius="20px" px="1px">
                <Box mb="40px" display="flex" gap="10px" alignItems="center">
                  <img src={drone} alt="drone" />
                  <Box>
                    <Typography
                      fontSize="24px"
                      fontWeight={700}
                      color="#fff"
                      mb="10px"
                    >
                      Congratulations!
                    </Typography>
                    <Typography fontSize="20px" color="#fff">
                      You have just created a new shipment for this this export
                      order.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <div className="flex items-center space-x-[10px] ">
                  <CircleRight />
                  <p className="font-roboto font-[500] text-[14px] text-t/100 ">
                    What Next?
                  </p>
                </div>
                <Box
                  mt="20px"
                  px="14px"
                  py="10px"
                  borderRadius="20px"
                  border="1px solid #CAC4D0"
                >
                  <Typography
                    fontSize="20px"
                    fontWeight={700}
                    color="#49454F"
                    mb="20px"
                    pl="14px"
                  >
                    Here are more information on how to follow up this order
                  </Typography>
                  <Box>
                    <Box
                      display="flex"
                      gap="20px"
                      alignItems="center"
                      mb="13px"
                    >
                      <Box
                        width="33px"
                        height="48px"
                        borderRadius="20px"
                        bgcolor="#6750A4"
                        color="#fff"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="20px"
                      >
                        1
                      </Box>
                      <Typography fontSize="20px">
                        The customer has been sent their shipment and tracking
                        details.`
                      </Typography>
                    </Box>
                    <Box display="flex" gap="20px" alignItems="flex-start">
                      <Box
                        width="33px"
                        height="48px"
                        borderRadius="20px"
                        bgcolor="#6750A4"
                        color="#fff"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="20px"
                      >
                        2
                      </Box>
                      <Box>
                        <Typography fontSize="20px">
                          This shipment can be tracked through the{" "}
                          <Typography display="inline" fontWeight={700}>
                            Tracking ID
                          </Typography>{" "}
                          above or through the link below
                        </Typography>
                        <a
                          href="http://jjnkkukja.jhgyjayjdjjhcjc"
                          style={{
                            textDecoration: "none",
                            color: "#21005D",
                            fontSize: "22px",
                            display: "block",
                          }}
                        >
                          http://jjnkkukja.jhgyjayjdjjhcjc
                        </a>
                        <Button
                          startIcon={<LinkIcon />}
                          variant="contained"
                          sx={{
                            bgcolor: "#fff",
                            color: "#6750A4",
                            width: "183px",
                            height: "40px",
                            borderRadius: "100px",
                            textTransform: "none",
                            mt: "16px",
                          }}
                        >
                          Copy Tracking link
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        {finish ? (
          <Button
            startIcon={<CheckWhiteIcon />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "211px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mt: "30px",
            }}
            onClick={() => navigate("/shipment")}
          >
            Done
          </Button>
        ) : (
          <Box mt="30px">
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
              onClick={() => {
                if (activeStep === 0) navigate(-1);
                else handleBack();
              }}
            >
              Back
            </Button>
            {activeStep !== steps.length - 1 && (
              <Button
                startIcon={<ArrowRightWhite />}
                variant="contained"
                // disabled={service.length === 0}
                sx={{
                  bgcolor: "#6750A4",
                  color: "#fff",
                  width: "172px",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                }}
                onClick={() => {
                  if (!finish) handleNext();
                }}
              >
                Next
              </Button>
            )}
          </Box>
        )}
      </Box>
      <UserModals
        open={assignedOrder}
        onClose={() => setAssignedOrder(false)}
        title="Assigned Order Details"
      >
        <Box mb="30px">
          <Typography fontSize="24px" color="#1C1B1F">
            Order ID:{" "}
            <Typography
              fontSize="24px"
              color="#1C1B1F"
              display="inline"
              fontWeight={700}
            >
              OD78667
            </Typography>
          </Typography>
        </Box>
        <Box mb="30px">
          <SectionHeader noBorder title="Order Information" />
          <CardWrapper mt="20px" title="Order Information">
            <Box mt="5px">
              <Grid container wrap="nowrap" mb="20px">
                <Grid item xs={4.8}>
                  <Typography fontSize="14px" color="#49454F">
                    Assigned Customer:
                  </Typography>
                  <Box display="flex" alignItems="center" gap="4px">
                    <UserTag />
                    <Typography fontSize="22px" color="#21005D">
                      {order.customer}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={2.4}>
                  <Typography fontSize="14px" color="#49454F">
                    Order Type:
                  </Typography>
                  <Typography fontSize="22px" color="#1C1B1F">
                    Shipment
                  </Typography>
                </Grid>
                <Grid item xs={4.8}>
                  <Typography fontSize="14px" color="#49454F">
                    Order Status:
                  </Typography>
                  <Typography fontSize="22px" color="#1C1B1F">
                    {order.status}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item xs={2.4}>
                  <Typography fontSize="14px" color="#49454F">
                    Service:
                  </Typography>
                  <Typography fontSize="22px" color="#1C1B1F">
                    {order.service}
                  </Typography>
                </Grid>
                <Grid item xs={2.4}>
                  <Typography fontSize="14px" color="#49454F">
                    Shipment Method:
                  </Typography>
                  <Typography fontSize="22px" color="#1C1B1F">
                    {order.shipmentMethod}
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
                    {order.date}
                  </Typography>
                </Grid>
                <Grid item xs={2.4}>
                  <Typography fontSize="14px" color="#49454F">
                    Order Creation Time:
                  </Typography>
                  <Typography fontSize="22px" color="#1C1B1F">
                    {order.time}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardWrapper>
          <Box py="10px">
            <Line />
          </Box>
          <CardWrapper title="Shipping Details">
            <Box mt="5px">
              <Grid container wrap="nowrap" mb="20px">
                <Grid item xs={2.4}>
                  <Typography fontSize="14px" color="#49454F">
                    Shipping/Tracking ID:
                  </Typography>
                  <Typography fontSize="22px" color="#1C1B1F">
                    {order.id}
                  </Typography>
                </Grid>
                <Grid item xs={9.6}>
                  <Typography fontSize="14px" color="#49454F">
                    Shipping Status:
                  </Typography>
                  <Typography fontSize="22px" color="#1C1B1F">
                    Processing
                  </Typography>
                </Grid>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item xs={12}>
                  <Typography fontSize="14px" color="#49454F">
                    Packaging Status:
                  </Typography>
                  <Typography fontSize="22px" color="#1C1B1F">
                    {order.packaging}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardWrapper>
        </Box>
        <Box mb="30px">
          <PackageDetailsInfo service={order.service} view={true} />
        </Box>
        <Box mb="30px">
          <ShippingDetailsInfo service={order.service} view={true} />
        </Box>
        <Box>
          <BillingDetailsInfo service={order.service} view={true} />
        </Box>
      </UserModals>
    </Box>
  );
};

export default CreateShipment;
