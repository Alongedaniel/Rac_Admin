import React from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import { Box, Tooltip } from "@mui/material";
import CardWrapper from "./CardWrapper";
import EditIcon from "../../../assets/icons/EditIcon";
import TooltipIcon from "../../../assets/icons/TooltipIcon";

const BillingDetailsInfo = ({ order, service, view }) => {
  return (
    <div className="">
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 ">
          Billing Details
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
          <CardWrapper title="Billing Information">
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
                <p className="font-roboto  text-[20px] text-brand/100">98765</p>
              </div>
            </div>
          </CardWrapper>
          {view ? null : <EditIcon />}
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginTop: "20px",
          }}
        >
          <CardWrapper title="Payments Information">
            <div className="grid grid-cols-5 mt-[30px]">
              <>
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Total Procurement Cost:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    $234,000.00
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Payment Status:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    Processing
                  </p>
                </div>
              </>
            </div>
            {((order?.orderInformation?.service ?? service) === "Auto Import" ||
              (order?.orderInformation?.service ?? service) ===
                "Shop For Me") && (
              <div className="grid grid-cols-5 mt-[30px]">
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Clearing Cost:
                  </p>
                  <Box display="flex" gap="10px" alignItems={"center"}>
                    {" "}
                    <p className="font-roboto  text-[20px] text-brand/100">
                      N/A
                    </p>
                    <Tooltip
                      title="The shipment cost is not will be decided once the 
items have been procured and brought to the origin warehouse."
                      placement="right-start"
                    >
                      <Box>
                        <TooltipIcon />
                      </Box>
                    </Tooltip>
                  </Box>
                </div>
                <div className="col-span-3">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Payment Status:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">N/A</p>
                </div>
              </div>
            )}
          </CardWrapper>
          {view ? null : <EditIcon />}
        </Box>
      </div>
    </div>
  );
};

export default BillingDetailsInfo;
