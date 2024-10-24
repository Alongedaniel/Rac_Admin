import React from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import CardWrapper from "./CardWrapper";
import { Box, Tooltip, Typography } from "@mui/material";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import EditIcon from "../../../assets/icons/EditIcon";

const ShippingDetailsInfo = ({ order, service, view }) => {
  return (
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
            {(order?.orderInformation?.service ?? service === "Import") ? (
              <Box mt="10px">
                <Box p="10px 14px" borderRadius="20px" bgcolor="#F2B8B5">
                  <Typography
                    fontSize={"14px"}
                    color="#49454F"
                    fontWeight={500}
                  >
                    This package will be delivered to this RAC Logistics
                    warehouse in Nigeria where the customer can pickup from when
                    it arrives Nigeria.
                  </Typography>
                </Box>
                <div className="grid grid-cols-2 mt-[20px]">
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Origin warehouse:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      Nigeria(lagos - warehouse)
                    </p>
                  </div>
                </div>
              </Box>
            ) : (order?.orderInformation?.service ??
              service === "Shop For Me") ? (
              <Box mt="10px">
                {" "}
                <div className="grid grid-cols-2 mt-[20px]">
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Origin warehouse:
                    </p>
                    <Box display="flex" gap="10px" alignItems={"center"}>
                      {" "}
                      <p className="font-roboto  text-[20px] text-brand/100">
                        N/A
                      </p>
                      <Tooltip
                        title="The destination/shipping address will be decided once the 
items have been procured and brought to the origin warehouse."
                        placement="right-start"
                      >
                        <Box>
                          <TooltipIcon />
                        </Box>
                      </Tooltip>
                    </Box>
                  </div>
                </div>
              </Box>
            ) : (
              <>
                <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Receiver's First Name:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      Malibu
                    </p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Receiver's Last Name:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      SHedrack
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Receiver's Phone Number:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      +234 803 456 7845
                    </p>
                  </div>
                  <div className="col-span-3">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Receiver's Email:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      Malibushdrack@gmail.com
                    </p>
                  </div>
                </div>
                <div className="mt-[10px] col-span-5">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Receiver's Address:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    No, 1osolo way, ikeja road, behind scaint merry
                  </p>
                </div>
                <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
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
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Zip/postal Code:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      98765
                    </p>
                  </div>
                </div>
              </>
            )}
          </CardWrapper>
          {view ? null : <EditIcon />}
        </Box>
      </div>
    </div>
  );
};

export default ShippingDetailsInfo;
