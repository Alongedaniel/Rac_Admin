import { Box, Button } from "@mui/material";
import React from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import UserTag from "../../../assets/icons/UserTag";
import ShieldIcon from "../../../assets/icons/ShieldIcon";
import EditIcon from "../../../assets/icons/EditIcon";
import StartIcon from "../../../assets/icons/StartIcon";
import ChangeIcon from "../../../assets/icons/ChangeIcon";
import CircleRight from "../../../assets/icons/CircleRight";
import CardWrapper from "../../../components/order/components/CardWrapper";

const OrderInformation = ({ toggle, order, type, drop }) => {
  return (
    <div className="">
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
              marginTop: "20px",
            }}
          >
            <CardWrapper
              title="Order Information"
              style={{width:'100%'}}
            >

              <div className="grid grid-cols-5 mt-[30px]  gap-[20px]">
                <div>
                  <p className="text-[14px] text-t/100 font-roboto">
                    Assigned Customer:
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      borderBottom: "1px solid #79747E",
                    }}
                  >
                    <UserTag />
                    <p
                      className="font-roboto text-[20px]"
                      style={{ color: "#21005D", fontWeight: 400 }}
                    >
                      {order.customer}
                    </p>
                  </div>
                </div>
                {/* <div></div> */}
                <div>
                  <p className="text-[14px] text-t/100 font-roboto">
                    Order Type:
                  </p>
                  <p className="font-roboto  text-[20px]">
                    {order.type ?? "Shipment"}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[14px] text-t/100 font-roboto">
                    {type === "request" ? "Request Status:" : "Order Status:"}
                  </p>
                  <p
                    style={{
                      display: type === "request" ? "none" : "block",
                    }}
                    className="font-roboto  text-[20px]"
                  >
                    {order.status}
                  </p>
                  <p
                    style={{
                      display: type === "request" ? "flex" : "none",
                      gap: "5px",
                      alignItems: "center",
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
                    {order.status}
                    <Button
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
                    </Button>
                  </p>
                </div>
                {/* <div></div> */}
                <div>
                  <p className="text-[14px] text-t/100 font-roboto">Service:</p>
                  <p className="font-roboto  text-[20px]">{order.service}</p>
                </div>
                {type === "request" ? null : (
                  <>
                    <div>
                      <p className="text-[14px] text-t/100 font-roboto">
                        Shipment Method:
                      </p>
                      <p className="font-roboto  text-[20px]">Air</p>
                    </div>
                    <div>
                      <p className="text-[14px] text-t/100 font-roboto">
                        Delivery Company:
                      </p>
                      <p className="font-roboto  text-[20px]">DHL</p>
                    </div>
                  </>
                )}
                <div>
                  <p className="text-[14px] text-t/100 font-roboto">
                    Order Date:
                  </p>
                  <p className="font-roboto  text-[20px]">12/02/2023</p>
                </div>
                <div>
                  <p className="text-[14px] text-t/100 font-roboto">
                    Order Time:
                  </p>
                  <p className="font-roboto  text-[20px]">9:48am</p>
                </div>
              </div>
            </CardWrapper>
            {type === "request" ? null : <EditIcon />}
          </Box>
          {type === "request" ? null : (
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
                    <p className="text-[14px] text-t/100 font-roboto">
                      Status:
                    </p>
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
              {type === "request" ? null : <EditIcon />}
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
    </div>
  );
};

export default OrderInformation;
