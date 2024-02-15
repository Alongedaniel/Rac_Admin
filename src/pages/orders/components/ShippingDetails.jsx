import React from 'react'
import { IoChevronUpCircleOutline } from 'react-icons/io5';
import EditIcon from '../../../assets/icons/EditIcon';
import { Box } from '@mui/material';
import CircleRight from '../../../assets/icons/CircleRight';

const ShippingDetails = ({type, order, drop, toggle}) => {
  return (
    <>
      {type === "request" && order.service !== "Auto Import" ? null : (
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
                  drop === 5 ? "h-full " : "h-[68px] overflow-hidden"
                } transition-all px-[28px] py-[20px] border  rounded-[20px]`}
                style={{ flex: 1 }}
              >
                <div
                  onClick={() => toggle(5)}
                  className={` transition-all  flex items-center justify-between cursor-pointer`}
                >
                  <p className="text-[20px]">Destination/Shipping Address</p>
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
      )}
    </>
  );
}

export default ShippingDetails
