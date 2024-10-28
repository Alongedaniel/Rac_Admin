import React, { useState } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import EditIcon from "../../../assets/icons/EditIcon";
import { Box, Button } from "@mui/material";
import CircleRight from "../../../assets/icons/CircleRight";
import CardWrapper from "../../../components/order/components/CardWrapper";
import UserModals from "../../Users/components/UserModals";
import ShippingDetailsForm from "../../../components/order/components/ShippingDetailsForm";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";

const ShippingDetails = ({
  type = "",
  order,
  proceed = false,
  isRequest = "",
  setDestinationDetails,
  destinationDetails,
}) => {
  const [open, setOpen] = useState(false);
  const destination = order?.request?.destinationDetails;
  return (
    <>
      {type === "request" ||
      (isRequest && order?.request?.service !== "Auto Import") ? null : (
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
              <CardWrapper title="Destination/Shipping Address">
                <div className="grid grid-cols-2 gap-[20px] mt-[30px] ">
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Receiver's First Name:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {destination?.firstName}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Receiver's Last Name:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {destination?.lastName}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Receiver's Phone Number:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {destination?.phoneNumber}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Receiver's Email:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {destination?.email}
                    </p>
                  </div>
                </div>
                <div className="mt-[10px]">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Receiver's Address:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {destination?.address}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-[20px] mt-[30px] ">
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Destination Country:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {destination?.country}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Destination State:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {destination?.state}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Destination City:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {destination?.city}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Zip/postal Code:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {destination?.zipPostalCode}
                    </p>
                  </div>
                </div>
              </CardWrapper>
              {(type === "request" || isRequest) && !proceed ? null : (
                <Box onClick={() => setOpen(true)}>
                  <EditIcon />
                </Box>
              )}
            </Box>
          </div>
          <UserModals
            open={open}
            onClose={() => setOpen(false)}
            title="Edit Shipping Details"
          >
            <ShippingDetailsForm
              destinationDetail={destinationDetails}
              setDestinationDetails={setDestinationDetails}
            />
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
        </div>
      )}
    </>
  );
};

export default ShippingDetails;
