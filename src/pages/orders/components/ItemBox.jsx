import { Box } from '@mui/material';
import React from 'react'
import { IoChevronUpCircleOutline } from 'react-icons/io5';
import EditIcon from '../../../assets/icons/EditIcon';
import CardWrapper from '../../../components/order/components/CardWrapper';

const ItemBox = ({order, type}) => {
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
      <CardWrapper title={` Item - #1`}
      >

        {type === "request" ? (
          <>
            <div className="grid grid-cols-4 mt-[30px] gap-[20px]">
              {order.service === "Shop For Me" ? (
                <>
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Store:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      Amazon
                    </p>
                  </div>
                  {/* <div className=""></div> */}
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Urgent Purchase:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      No
                    </p>
                  </div>
                  <div className="col-span-4">
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
              ) : null}
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  Designer Bags
                </p>
              </div>
              <div></div>
              {order.service === "Shop For Me" ? (
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Item Cost from Store:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    $45.00
                  </p>
                </div>
              ) : (
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    ID: Tracking ID
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    123456789
                  </p>
                </div>
              )}
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Quantity:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">4</p>
              </div>
              {order.service === "Shop For Me" ? null : (
                <>
                  {" "}
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Delivered by:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      Seller
                    </p>
                  </div>
                  <div className=""></div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Item delivery status:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      Delivered
                    </p>
                  </div>
                </>
              )}
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="mt-[20px] grid grid-cols-4">
              <div>
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Product/Item Picture:
                  <div className="w-[220px] h-[150px] mt-[10px] rounded-[10px] border"></div>
                </p>
              </div>
              <div className=""></div>
              {order.service === "Shop For Me" ? (
                <>
                  <div className=""></div>
                  <div className=""></div>
                </>
              ) : null}

              <div>
                <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                  Additional Description:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  Additonvnv ghss jgsjvsn
                </p>
              </div>
              {order.service === "Shop For Me" ? null : (
                <div>
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                    Item original cost:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    $45.00
                  </p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 mt-[10px] gap-[20px]">
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
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-4 mt-[30px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Product Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  Designer Bags
                </p>
              </div>
              <div></div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Product Original Cost
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  $45.00
                </p>
              </div>
              <div className="">
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
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Width:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  5 inches
                </p>
              </div>
            </div>
            <div className="mt-[20px]">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Product/Item Picture:
              </p>
              <div className="w-[220px] h-[150px] mt-[10px] rounded-[10px] border"></div>
              <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                Product Description:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                Additonvnv ghss jgsjvsn
              </p>
            </div>
            <div className="grid grid-cols-2 mt-[10px] gap-[20px]">
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
            </div>
          </>
        )}
      </CardWrapper>
      {type === "request" ? null : <EditIcon />}
    </Box>
  );
}

export default ItemBox
