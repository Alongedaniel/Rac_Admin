import React from 'react'
import CardWrapper from './CardWrapper';
import { Box } from '@mui/material';
import EditIcon from '../../../assets/icons/EditIcon';
import laptop from '../../../assets/images/laptop.png'

const OrderItem = ({order, service, view}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        marginTop: "20px",
      }}
    >
      <CardWrapper title={` Item - #1`}>
        {order?.orderInformation?.service ?? service === "Shop For Me" ? (
          <>
            <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
              <>
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Store:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    Amazon
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Urgent Purchase:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">No</p>
                </div>
                <div className="col-span-5">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Item URL:
                  </p>
                  <a
                    href="https://amazon.com"
                    className="font-roboto  text-[20px]"
                    style={{ color: "#B3261E" }}
                  >
                    amazon.com
                  </a>
                </div>
              </>
              <div className="col-span-2">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  Designer Bags
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Cost from Store:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  $45.00
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Quantity:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">4</p>
              </div>
            </div>
            <div className="mt-[30px] grid grid-cols-5">
              <div className="col-span-5">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Picture:
                  <div className=" mt-[10px] rounded-[10px]">
                    <img src={laptop} alt="laptop" />
                  </div>
                </p>
              </div>

              <div className="col-span-5">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                  Additional Description:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  Additonvnv ghss jgsjvsn
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Color:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">Blue</p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Stripes:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  5 inches
                </p>
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
              <div className="col-span-2">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  Designer Bags
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Original Cost
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  $45.00
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Quantity:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">4</p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Weight:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">67kg</p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Height:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  5 inches
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Length:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  5 inches
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Width:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  5 inches
                </p>
              </div>
            </div>
            <div className="mt-[30px] grid grid-cols-5">
              <div className="col-span-2">
                {" "}
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Picture:
                </p>
                <div className=" mt-[10px] rounded-[10px]">
                  <img src={laptop} alt="laptop" />
                </div>
              </div>
              <div className="col-span-3">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                  Additional Description:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  Additonvnv ghss jgsjvsn
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 mt-[10px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Color:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">Blue</p>
              </div>
              <div className="col-span-4">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Stripes:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  5 inches
                </p>
              </div>
            </div>
          </>
        )}
      </CardWrapper>
      {view ? null : <EditIcon />}
    </Box>
  );
}

export default OrderItem
