import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import UserTag from "../../../assets/icons/UserTag";
import ShieldIcon from "../../../assets/icons/ShieldIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import StartIcon from "../../../assets/icons/StartIcon";
import ChangeIcon from "../../../assets/icons/ChangeIcon";
import CircleRight from "../../../assets/icons/CircleRight";
import CardWrapper from "../../../components/order/components/CardWrapper";
import UserModals from "../../Users/components/UserModals";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";
import SectionHeader from "../../../components/SectionHeader";
import EyeIconRed from "../../../assets/icons/EyeIconRed";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { toTitleCase } from "../order-details";
import { getStatusBgColor } from "../../../components/order/order-request";

const OrderInformation = ({
  order,
  type,
  isRequest,
  activeStep,
  deliveryCompany,
  shipmentMethod,
  setActiveStep = () => {},
}) => {
  const navigate = useNavigate();
  const [editOrderInfo, setEditOrderInfo] = useState(false);
  const customer =
    order?.customerData?.firstName + " " + order?.customerData?.lastName;
  const requestStatus =
    order?.request?.requestStatus === "responded"
      ? "Approved"
      : (order?.request?.requestStatus === "Not Responded" ||
          order?.request?.requestStatus === "not responded")
        ? "Not Responded"
        : "Declined";
  return type === "request" || isRequest ? (
    <>
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
          Order Information
        </p>
      </div>
      <div className="flex flex-col space-y-[20px]">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            // marginTop: "20px",
          }}
        >
          <CardWrapper title="Order Information" style={{ width: "100%" }}>
            <div className="grid grid-cols-5 mt-[30px]  gap-[20px]">
              <div className="col-span-2">
                <p className="text-[14px] text-t/100 font-roboto ">
                  Assigned Customer:
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    borderBottom: "1px solid #79747E",
                    maxWidth: "149px",
                  }}
                >
                  <UserTag />
                  <p
                    className="font-roboto text-[20px]"
                    style={{ color: "#21005D", fontWeight: 400 }}
                  >
                    {customer ?? "N/A"}
                  </p>
                </div>
              </div>
              {/* <div></div> */}
              <div>
                <p className="text-[14px] text-t/100 font-roboto">
                  Order Type:
                </p>
                <p className="font-roboto  text-[20px]">Shipment</p>
              </div>
              {(type === "request" || isRequest) &&
              activeStep !== 3 &&
              activeStep !== 4 ? (
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto">
                    {type === "request" || isRequest
                      ? "Request Status:"
                      : "Order Status:"}
                  </p>
                  <p
                    style={{
                      display:
                        type === "request" || isRequest ? "none" : "block",
                      textTransform: "capitalize",
                    }}
                    className="font-roboto  text-[20px]"
                  >
                    {requestStatus}
                  </p>
                  <p
                    style={{
                      display:
                        type === "request" || isRequest ? "flex" : "none",
                      gap: "5px",
                      alignItems: "center",
                      borderRadius: "10px",
                      width: "fit-content",
                      padding: "5px 10px",
                      textTransform: "capitalize",
                      ...getStatusBgColor(toTitleCase(requestStatus)),
                    }}
                    className="font-roboto  text-[20px] text-brand/200"
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: "#fff",
                        borderRadius: "100%",
                        border: "1px solid #B3261E",
                      }}
                    ></div>
                    {requestStatus}
                    {/* <Button
                    startIcon={<ShieldIcon />}
                    variant="outlined"
                    sx={{
                      borderColor: "#79747E",
                      color: "#79747E",
                      height: "40px",
                      borderRadius: "100px",
                      width: "50%",
                      textTransform: "none",
                    }}
                    onClick={() => navigate("/orders")}
                  >
                    Proceed with confirmation
                  </Button> */}
                  </p>
                </div>
              ) : null}
              {/* <div></div> */}
              <div>
                <p className="text-[14px] text-t/100 font-roboto">Service:</p>
                <p className="font-roboto  text-[20px]">
                  {toTitleCase(order?.serviceType)}
                </p>
              </div>
              {(type === "request" || isRequest) &&
              activeStep !== 3 &&
              activeStep !== 4 ? null : (
                <div></div>
              )}
              {(type === "request" || isRequest) &&
              activeStep !== 3 &&
              activeStep !== 4 ? null : (
                <>
                  <div>
                    <p className="text-[14px] text-t/100 font-roboto">
                      Shipment Method:
                    </p>
                    <p className="font-roboto  text-[20px]">
                      {shipmentMethod ?? "N/A"}
                    </p>
                  </div>
                  <div></div>
                  <div>
                    <p className="text-[14px] text-t/100 font-roboto">
                      Delivery Company:
                    </p>
                    <p className="font-roboto  text-[20px]">
                      {deliveryCompany ?? "N/A"}
                    </p>
                  </div>
                </>
              )}
              {(type === "request" || isRequest) &&
              activeStep !== 3 &&
              activeStep !== 4 ? (
                <>
                  <div>
                    <p className="text-[14px] text-t/100 font-roboto">
                      Order Request Date:
                    </p>
                    <p className="font-roboto  text-[20px]">
                      {moment(order?.request?.createdAt).format("DD-MM-YYYY")}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] text-t/100 font-roboto">
                      Order Request Time:
                    </p>
                    <p className="font-roboto  text-[20px]">
                      {moment(order?.request?.createdAt).format("HH:mm")}
                    </p>
                  </div>
                </>
              ) : null}
            </div>
          </CardWrapper>
          {(type === "request" || isRequest) &&
          activeStep !== 3 &&
          activeStep !== 4 ? null : (
            <Box onClick={() => setActiveStep(0)}>
              <EditIcon />
            </Box>
          )}
        </Box>
        {type === "request" || isRequest ? null : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "30px",
              marginTop: "20px",
            }}
          >
            <CardWrapper title="Shipment Details">
              <div className="grid grid-cols-2 mt-[30px] ">
                <div>
                  <p className="text-[14px] text-t/100 font-roboto">
                    Shipping/Tracking ID:
                  </p>
                  <p className="font-roboto  text-[20px]">{order.shipId}</p>
                </div>
                <div>
                  <p className="text-[14px] text-t/100 font-roboto">Status:</p>
                  <div className="flex items-center space-x-[10px]">
                    <p className="font-roboto  text-[20px]">{order.status}</p>
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
                </div>
              </div>
              <div className="grid  ">
                <div>
                  <p className="text-[14px] text-t/100 font-roboto">
                    Packaging:
                  </p>
                  <div className="flex items-center space-x-[10px]">
                    <p className="font-roboto  text-[20px]">
                      {order.packaging}
                    </p>
                    <Button
                      startIcon={<ChangeIcon />}
                      variant="outlined"
                      sx={{
                        p: "5px 20px",
                        borderColor: "#79747E",
                        color: "#79747E",
                        borderRadius: "100px",
                        textTransform: "none",
                      }}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </CardWrapper>
            {type === "request" || isRequest ? null : <EditIcon />}
          </Box>
        )}
        {/* {type === "request" ? null : (
             <div className="">
               <div className="flex items-center space-x-[10px] ">
                 <CircleRight />
                 <p className="font-roboto font-[500] text-[14px] text-t/100 ">
                   Shipping Details
                 </p>
               </div>
               <div className="flex flex-col space-y-[20px]">
                 <Box
                   sx={{
                     width: "100%",
                     display: "flex",
                     alignItems: "center",
                     gap: "30px",
                     marginTop: "20px",
                   }}
                 >
                   <div
                     className={`${
                       drop === 5
                         ? "h-full p-[10px]"
                         : "h-[40px] overflow-hidden"
                     } transition-all border  rounded-[20px]`}
                     style={{ flex: 1 }}
                   >
                     <div
                       onClick={() => toggle(5)}
                       className={`${
                         drop === 5 ? "" : "p-[10px]"
                       } transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                     >
                       <p className="text-[20px]">
                         Destination/Shipping Address
                       </p>
                       <IoChevronUpCircleOutline className="text-[25px]" />
                     </div>
                     <div className="grid grid-cols-2 gap-[20px] mt-[30px] ">
                       <div className="">
                         <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                           Receiver's First Name:
                         </p>
                         <p className="font-roboto  text-[20px] text-brand/100">
                           Malibu
                         </p>
                       </div>
                       <div className="">
                         <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                           Receiver's Last Name:
                         </p>
                         <p className="font-roboto  text-[20px] text-brand/100">
                           SHedrack
                         </p>
                       </div>
                       <div className="">
                         <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                           Receiver's Phone Number:
                         </p>
                         <p className="font-roboto  text-[20px] text-brand/100">
                           +234 803 456 7845
                         </p>
                       </div>
                       <div className="">
                         <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                           Receiver's Email:
                         </p>
                         <p className="font-roboto  text-[20px] text-brand/100">
                           Malibushdrack@gmail.com
                         </p>
                       </div>
                     </div>
                     <div className="mt-[10px]">
                       <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                         Receiver's Address:
                       </p>
                       <p className="font-roboto  text-[20px] text-brand/100">
                         No, 1osolo way, ikeja road, behind scaint merry
                       </p>
                     </div>
                     <div className="grid grid-cols-4 gap-[20px] mt-[30px] ">
                       <div className="">
                         <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                           Destination Country:
                         </p>
                         <p className="font-roboto  text-[20px] text-brand/100">
                           Turkey
                         </p>
                       </div>
                       <div className="">
                         <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                           Destination State:
                         </p>
                         <p className="font-roboto  text-[20px] text-brand/100">
                           Istanbul
                         </p>
                       </div>
                       <div className="">
                         <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                           Destination City:
                         </p>
                         <p className="font-roboto  text-[20px] text-brand/100">
                           Cyprusic
                         </p>
                       </div>
                       <div className="">
                         <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                           Zip/postal Code:
                         </p>
                         <p className="font-roboto  text-[20px] text-brand/100">
                           98765
                         </p>
                       </div>
                     </div>
                   </div>
                   {type === "request" ? null : <EditIcon />}
                 </Box>
               </div>
             </div>
           )} */}
      </div>
    </>
  ) : (
    <div className="">
      <Box mb="30px">
        <SectionHeader title="Order Information" noBorder />
        <Box mt="20px" mb="10px" display="flex" gap="30px" alignItems="center">
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
                        {order?.customerData?.firstName +
                          " " +
                          order?.customerData?.lastName}
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
                      {toTitleCase(order?.request?.orderStatus)}
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
                      {toTitleCase(order?.serviceType)}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Shipment Method:
                    </Typography>
                    <Typography
                      fontSize="22px"
                      color="#1C1B1F"
                      textTransform="capitalize"
                    >
                      {order?.request?.shipmentMethod}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography
                      fontSize="14px"
                      color="#49454F"
                      textTransform="capitalize"
                    >
                      Delivery Company:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      {order?.request?.deliveryCompany}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Order Creation Date:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      {moment(order?.request?.createdAt).format("DD/MM/YYYY")}
                    </Typography>
                  </Grid>

                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Order Creation Time:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      {moment(order?.request?.createdAt).format("HH:MM")}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardWrapper>
            {/* <Box mt="10px" px="20px">
                <Line />
              </Box> */}
          </Box>
          <Box onClick={() => setEditOrderInfo(true)}>
            <EditIcon />
          </Box>
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
                    {order?.request?.trackingId}
                  </Typography>
                </Grid>
                <Grid item xs={9.8}>
                  <p className="text-[14px] text-t/100 font-roboto">Status:</p>
                  <div className="flex items-center space-x-[10px]">
                    <p className="font-roboto  text-[20px] capitalize">
                      {order?.request?.shippingStatus}
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
                  <Typography
                    fontSize="22px"
                    color="#1C1B1F"
                    textTransform="capitalize"
                  >
                    {order?.request?.shippingStatus}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </CardWrapper>
          <EyeIconRed />
        </Box>
      </Box>
      <UserModals
        open={editOrderInfo}
        onClose={() => setEditOrderInfo(false)}
        title="Edit Order Information"
        type1="Order ID"
        id1={order?.request?.id}
      >
        <Box>
          <div className="flex items-center space-x-[10px] ">
            <CircleRight />
            <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
              Fill in the order & customer details
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
              id="assigned-customer"
              sx={{ fontSize: "16px", color: "#1C1B1F" }}
              type="text"
              label="Assigned Customer"
              fullWidth
              disabled
              value={order?.request?.customer}
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
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="shipment-method"
                  type="text"
                  label="Order Type"
                  select
                  InputProps={{
                    sx: {
                      borderRadius: "20px", // Apply border radius to the input element
                      height: "56px",
                      borderColor: "#79747E",
                      fontSize: "16px",
                      color: "#1C1B1F",
                    },
                  }}
                  // placeholder="Enter your country"
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="service"
                  type="text"
                  label="Service"
                  defaultValue={order?.request?.service}
                  select
                  disabled
                  InputProps={{
                    sx: {
                      borderRadius: "20px", // Apply border radius to the input element
                      height: "56px",
                      borderColor: "#79747E",
                      fontSize: "16px",
                      color: "#1C1B1F",
                    },
                  }}
                  // placeholder="Enter your country"
                >
                  <MenuItem value={order?.request?.service}>
                    {order?.request?.service}
                  </MenuItem>
                </TextField>
              </Grid>
            </Grid>
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="shipment-method"
                  type="text"
                  label="Shipment Method"
                  select
                  InputProps={{
                    sx: {
                      borderRadius: "20px", // Apply border radius to the input element
                      height: "56px",
                      borderColor: "#79747E",
                      fontSize: "16px",
                      color: "#1C1B1F",
                    },
                  }}
                  // placeholder="Enter your country"
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="delivery-company"
                  type="text"
                  label="Delivery Company"
                  select
                  InputProps={{
                    sx: {
                      borderRadius: "20px", // Apply border radius to the input element
                      height: "56px",
                      borderColor: "#79747E",
                      fontSize: "16px",
                      color: "#1C1B1F",
                    },
                  }}
                  // placeholder="Enter your country"
                ></TextField>
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
            onClick={() => setEditOrderInfo(false)}
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
    </div>
  );
};

export default OrderInformation;
