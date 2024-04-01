import React, { useState } from 'react'
import EditIcon from '../../../assets/icons/EditIcon';
import { IoChevronUpCircleOutline } from 'react-icons/io5';
import CircleRight from '../../../assets/icons/CircleRight';
import { Box, Button } from '@mui/material';
import CardWrapper from '../../../components/order/components/CardWrapper';
import UserModals from '../../Users/components/UserModals';
import BillingDetailsForm from '../../../components/order/components/BillingDetailsForm';
import ArrowLeftPurple from '../../../assets/icons/ArrowLeftPurple';
import ArrowRightWhite from '../../../assets/icons/ArrowRightWhite';

const BillingDetails = ({ order, type = '', proceed = false }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {type === "request" &&
      order.service !== "Auto Import" &&
      order.service !== "Shop For Me" ? null : (
        <div className="">
          <div className="flex items-center space-x-[10px] ">
            <CircleRight />
            <p className="font-roboto font-[500] text-[14px] text-t/100 ">
              Billing Details
            </p>
          </div>

          <div className="flex flex-col space-y-[20px]">
            {order.service === "Shop For Me" ? null : (
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
                </CardWrapper>
                {type === "request" && !proceed ? null : (
                  <Box onClick={() => setOpen(true)}>
                    <EditIcon />
                  </Box>
                )}
              </Box>
            )}
            {order.service === "Auto Import" ? null : (
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
                    {order.service === "Shop For Me" && (
                      <>
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
                      </>
                    )}
                  </div>
                  <div className="grid grid-cols-5 mt-[30px]">
                    <div className="col-span-2">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Total Shipment Cost:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        {order.service === "Shop For Me"
                          ? "Not yet assigned"
                          : "$234,000.00"}
                      </p>
                    </div>
                    <div className="">
                      <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                        Payment Status:
                      </p>
                      <p className="font-roboto  text-[20px] text-brand/100">
                        {order.service === "Shop For Me" ? "---" : "Processing"}
                      </p>
                    </div>
                  </div>
                </CardWrapper>
                {type === "request" ? null : <EditIcon />}
              </Box>
            )}
          </div>
          <UserModals
            open={open}
            onClose={() => setOpen(false)}
            title="Edit Billing Details"
          >
            <BillingDetailsForm />
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
        </div>
      )}
    </>
  );
}

export default BillingDetails
