import React, { useEffect, useState } from 'react'
import SectionHeader from '../../components/SectionHeader'
import {
  Box,
  Button,
  Grid,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowSquare from '../../assets/icons/ArrowSquare';
import UserTag from '../../assets/icons/UserTag';
import Eye from '../../assets/icons/Eye';
import CardWrapper from '../../components/order/components/CardWrapper';
import EditIcon from '../../assets/icons/EditIcon';
import NewShipmentIcon from '../../assets/icons/NewShipmentIcon';
import Line from '../../assets/icons/Line';
import EventUpdates from './EventUpdates';
import ArrowLeftPurple from '../../assets/icons/ArrowLeftPurple';
import UserModals from '../Users/components/UserModals';
import CircleRight from '../../assets/icons/CircleRight';
import Joiner from '../../assets/icons/Joiner';
import MenuIcon from '../../assets/icons/MenuIcon';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DeletIcon from '../../assets/icons/DeletIcon';
import AddIcon from '../../assets/icons/AddIcon';
import dayjs from 'dayjs';
import ArrowRightWhite from '../../assets/icons/ArrowRightWhite';
// import drone from '../../assets/images/boxes.png'
import { IoClose } from 'react-icons/io5';
import { LuCheck } from 'react-icons/lu';
import BillingDetailsInfo from '../../components/order/components/BillingDetailsInfo';
import BillingDetails from '../orders/components/BillingDetails';
import PaymentInformation from '../orders/components/PaymentInformation';

const ShipmentDetails = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const today = dayjs();
  const [date, setDate] = useState(today);

  const [selectedRadioValue, setSelectedRadioValue] = useState(null);
  const [courierModal, setCourierModal] = useState(false);
  const [dateModal, setDateModal] = useState(false);
  const [assignedOrderModal, setAssignedOrderModal] = useState(false);
  const [openClearanceModal, setOpenClearanceModal] = useState(false);
  const [clearance, setClearance] = useState(false);
  const [update, setUpdate] = useState(false);
  const order = location?.state?.order

  const handleRadioChange = (event) => {
    if (order?.service === 'Auto Import')
    {
      setSelectedRadioValue(event.target.value)
      
    }
    else
      setSelectedRadioValue(event.target.value);
  };

  useEffect(() => {
    if (order?.service === 'Auto Import' && selectedRadioValue === "Undergoing Customs Clearing")
      setOpenClearanceModal(true)
  }, [selectedRadioValue])


  const navigate = useNavigate()
  return (
    <Box py="30px" px="40px">
      <Box p="30px" borderRadius="20px" bgcolor="#fff">
        <Box display="flex" alignItems="center" gap="10px" mb="30px">
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
          <ArrowSquare />
          <Typography fontSize="24px" color="#1C1B1F">
            Tracking ID:{" "}
            <Typography
              fontSize="24px"
              color="#1C1B1F"
              display="inline"
              fontWeight={700}
            >
              SH78667
            </Typography>
          </Typography>
        </Box>
        <Box mb="30px">
          <SectionHeader title="Main Shipment Details" noBorder />
          <Box mt="20px" display="flex" gap="30px" alignItems="center">
            <CardWrapper title="Shipment Information">
              <Box mt="5px">
                <Grid container gap="30px" wrap="nowrap" mb="40px">
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Assigned Order:
                    </Typography>
                    <Box
                      onClick={() => setAssignedOrderModal(true)}
                      sx={{ cursor: "pointer" }}
                      display="flex"
                      alignItems="center"
                      gap="8px"
                    >
                      <Typography
                        sx={{ display: "inline" }}
                        fontSize="22px"
                        color="#21005D"
                      >
                        {order.id}{" "}
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
                      {order.service}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}></Grid>
                </Grid>
                <Grid container gap="30px" wrap="nowrap">
                  <Grid item xs={4.8}>
                    <Typography fontSize="14px" color="#49454F">
                      Packaging Status:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      {order.packaging}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Shipment Creation Date:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      {order.date}
                    </Typography>
                  </Grid>

                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Shipment Creation Time:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      9:48am
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}></Grid>
                </Grid>
              </Box>
            </CardWrapper>
            <Box onClick={() => setOpen(true)}>
              <EditIcon />
            </Box>
          </Box>
        </Box>
        <Box mb="10px">
          <SectionHeader noBorder title="Shipping Details" />
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
                      {order.deliveryCompany}
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
        <Line />
        <Box mt="10px" mb="10px" display="flex" gap="30px" alignItems="center">
          <Box
            py="20px"
            px="35px"
            border="1px solid #CAC4D0"
            borderRadius="20px"
            width="100%"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" gap="24px">
              <Typography fontSize="22px" fontWeight={400} color="#49454F">
                Shipment Status:
              </Typography>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <Box
                  width="12px"
                  height="12px"
                  borderRadius="100%"
                  bgcolor="#fff"
                  border="2px solid #21005D"
                ></Box>
                <span style={{ fontSize: "22px", color: "#6750A4" }}>
                  Shipment {order.status}
                </span>
              </div>
            </Box>
            <Button
              startIcon={<NewShipmentIcon color="#6750A4" />}
              variant="text"
              sx={{
                color: "#6750A4",
                width: "206px",
                height: "40px",
                textTransform: "none",
                // mt: "30px",
              }}
              // onClick={() => navigate("/shipment")}
            >
              Update Shipping Details
            </Button>
          </Box>
          <Box visibility="hidden">
            <EditIcon />
          </Box>
        </Box>
        <Box display="flex" gap="30px" alignItems="center" mb="10px">
          <CardWrapper title="Event Updates">
            <Grid
              container
              spacing="10px"
              mt="5px"
              height="700px"
              overflow="auto"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Grid key={item} item xs={6}>
                  <EventUpdates id={item} />
                </Grid>
              ))}
            </Grid>
          </CardWrapper>
          <EditIcon />
        </Box>

        <Line />
        <Box mt="10px" display="flex" gap="30px" alignItems="center">
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
            startIcon={<NewShipmentIcon />}
            variant="contained"
            // disabled={service.length === 0}
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "218px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Update Shipping Details
          </Button>
        </Box>
      </Box>
      <UserModals
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Shipping Details"
        type1="Order ID"
        type2="Tracking ID"
        id1={order.id}
        id2="SH78667"
      >
        <Box mb="10px">
          <SectionHeader noBorder title="Shipping Details" />
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
                      {order.deliveryCompany}
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
            <Box onClick={() => setCourierModal(true)}>
              <EditIcon />
            </Box>
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
            <Box mt="10px" width="100%" height="1px" bgcolor="#79747E"></Box>
          </Box>
          <Box display="flex" mt="30px">
            <Box
              p="24px"
              border="1px solid #CAC4D0"
              height="fit-content"
              borderRadius="20px"
              width="100%"
              bgcolor="#fff"
            >
              <Typography fontSize="22px" color="#49454F">
                Shipment Starting
              </Typography>
              <Typography fontSize="16px" color="#79747E" mt="6px" mb="16px">
                Select the shipment status as it begins its journey.
              </Typography>
              <Box bgcolor="#fffbfe">
                <Box
                  pr="15px"
                  border="1px solid #CAC4D0"
                  width="fit-content"
                  borderRadius="100px"
                  display="flex"
                  alignItems="center"
                  gap="0px"
                  bgcolor="#6750A41C"
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
              <Typography fontSize="16px" color="#79747E" mt="6px" mb="16px">
                Choose the status as the shipment is on its way.
              </Typography>
              <Box>
                <Box bgcolor="#fffbfe">
                  <Box
                    mb="16px"
                    pr="15px"
                    border="1px solid #CAC4D0"
                    width="fit-content"
                    borderRadius="100px"
                    display="flex"
                    alignItems="center"
                    gap="0px"
                    bgcolor="#6750A41C"
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
                </Box>
                <Box bgcolor="#fffbfe">
                  <Box
                    pr="15px"
                    border="1px solid #CAC4D0"
                    width="fit-content"
                    borderRadius="100px"
                    display="flex"
                    alignItems="center"
                    gap="0px"
                    bgcolor="#6750A41C"
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
            </Box>
            <Box alignSelf="center" sx={{ transform: "translateX(-5px)" }}>
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
              <Typography fontSize="16px" color="#79747E" mt="6px" mb="16px">
                Indicate the status as the shipment reaches its destination for
                import.
              </Typography>
              <Box>
                <Box bgcolor="#fffbfe">
                  <Box
                    mb="16px"
                    pr="15px"
                    border="1px solid #CAC4D0"
                    width="fit-content"
                    borderRadius="100px"
                    display="flex"
                    alignItems="center"
                    gap="0px"
                    bgcolor="#6750A41C"
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
                </Box>

                <Box bgcolor="#FFFBFE" width="fit-content">
                  <Box
                    border="1px solid #CAC4D0"
                    pr="15px"
                    bgcolor="#6750A41C"
                    display="flex"
                    alignItems="center"
                    gap="0px"
                    borderRadius="100px"
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
                <Box mt="5px" display="flex" flexDirection="column" gap="30px">
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
        <Box mt="10px" display="flex" gap="30px" alignItems="center">
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
          <Box onClick={() => setDateModal(true)}>
            <EditIcon />
          </Box>
        </Box>
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
            onClick={() => setOpen(false)}
          >
            Back
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "172px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
      <UserModals
        open={courierModal}
        height="fit-content"
        onClose={() => setCourierModal(false)}
        title="Edit Courier Information"
        type1="Order ID"
        type2="Tracking ID"
        id1={order.id}
        id2="SH78667"
        // width="800px"
        maxHeight="500px"
      >
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
            onClick={() => setCourierModal(false)}
          >
            Back
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "172px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
      <UserModals
        open={dateModal}
        height="fit-content"
        onClose={() => setDateModal(false)}
        title="Edit Estimated Delivery Period"
        type1="Order ID"
        type2="Tracking ID"
        id1={order.id}
        id2="SH78667"
        // width="800px"
        maxHeight="500px"
      >
        <Box>
          <SectionHeader title="Fill in the Estimated Delivery Period Details " />
          <Box mt="20px">
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
            onClick={() => setDateModal(false)}
          >
            Back
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "172px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
      <UserModals
        height="fit-content"
        open={assignedOrderModal}
        onClose={() => setAssignedOrderModal(false)}
        title="Edit Assigned Order Details"
        type1="Order ID"
        type2="Tracking ID"
        id1={order.id}
        id2="SH78667"
      >
        <Box>
          <div className="flex items-center space-x-[10px] ">
            <CircleRight />
            <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
              Please provide the details for the order to which this shipment
              should be assigned
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
        <Box>
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
            onClick={() => setAssignedOrderModal(false)}
          >
            Back
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "172px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
      <UserModals
        open={openClearanceModal}
        onClose={() => setOpenClearanceModal(false)}
        height={clearance ? "80%" : "fit-content"}
        width={clearance ? "70%" : "444px"}
        title={clearance ? "Adding Customs Clearing Costs" : undefined}
        type1={clearance ? "Order ID" : undefined}
        type2={clearance ? "Tracking ID" : undefined}
        id1={clearance ? order.id : undefined}
        id2={clearance ? "SH78667" : undefined}
      >
        {clearance ? (
          update ? (
            <Box width="100%">
              <Box bgcolor="#6750A4" borderRadius="20px" px="1px">
                <Box mb="40px" display="flex" gap="10px" alignItems="center">
                  <img src='../../assets/images/drone.png' alt="drone" />
                  <Box>
                    <Typography
                      fontSize="24px"
                      fontWeight={700}
                      color="#fff"
                      mb="10px"
                    >
                      {" "}
                      Congratulations!
                    </Typography>
                    <Typography fontSize="20px" color="#fff">
                      {`The shipping status has been updated and clearing cost has been added successfully`}
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
                        The customer has been notified about shipping status and
                        prompted to proceed with paying for their clearing cost.
                      </Typography>
                    </Box>
                    <Box display="flex" gap="20px" alignItems="center">
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
                      <Typography fontSize="20px">
                        After their payment gets confirmed, you’d be required to
                        start getting their Car(s) ready to be delivered to them
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Button
                startIcon={<ArrowLeftPurple />}
                variant="outlined"
                sx={{
                  borderColor: "#79747E",
                  color: "#79747E",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                  mt: "30px",
                }}
                onClick={() => setOpenClearanceModal(false)}
              >
                Close
              </Button>
            </Box>
          ) : (
            <Box>
              <>
                <BillingDetails proceed={true} order={order} />
                <Box mt="30px">
                  <PaymentInformation />
                </Box>
              </>
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
                  onClick={() => setOpenClearanceModal(false)}
                >
                  Back
                </Button>
                <Button
                  startIcon={<ArrowRightWhite />}
                    variant="contained"
                    onClick={() => setUpdate(true)}
                  sx={{
                    bgcolor: "#6750A4",
                    color: "#fff",
                    width: "172px",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                  }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          )
        ) : (
          <>
            <Typography fontSize="24px" color="#1C1B1F" mb="16px">
              Add Clearing Costs...
            </Typography>
            <Typography fontSize="14px" color="#49454F">
              Kindly note that making the shipping status of this auto import
              order “”Undergoing customs clearing” means you are ready to add
              the customs clearing and port handling costs to this shipment.
            </Typography>
            <Box
              mt="40px"
              display="flex"
              gap="8px"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Button
                variant="text"
                width="170px"
                height="40px"
                startIcon={<IoClose />}
                sx={{ fontSize: "14px", color: "#6750A4", fontWeight: 500 }}
                onClick={() => setOpenClearanceModal(false)}
              >
                {" "}
                No, I am not ready
              </Button>
              <Button
                variant="text"
                width="150px"
                height="40px"
                startIcon={<LuCheck />}
                sx={{ fontSize: "14px", color: "#6750A4", fontWeight: 500 }}
                  onClick={() => {
                    setClearance(true)
                    setAssignedOrderModal(false);
                  }}
              >
                {" "}
                Yes, let’s go on
              </Button>
            </Box>
          </>
        )}
      </UserModals>
    </Box>
  );
}

export default ShipmentDetails
