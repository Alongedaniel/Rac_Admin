import { Box, Button } from '@mui/material';
import React, { useState } from 'react'
import { IoChevronUpCircleOutline } from 'react-icons/io5';
import EditIcon from '../../../assets/icons/EditIcon';
import CardWrapper from '../../../components/order/components/CardWrapper';
import UserModals from '../../Users/components/UserModals';
import PackageDetailsForm from '../../../components/order/components/PackageDetailsForm';
import ArrowLeftPurple from '../../../assets/icons/ArrowLeftPurple';
import ArrowRightWhite from '../../../assets/icons/ArrowRightWhite';

const ItemBox = ({ order, type = '', proceed = false, item, itemNumber }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      key={item?.id}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        marginTop: "20px",
      }}
    >
      <CardWrapper title={` Item - #${itemNumber}`}>
        {type === "request" ? (
          <>
            <div className="grid grid-cols-4 mt-[30px] gap-[20px]">
              {order?.serviceType === "shopForMe" ? (
                <>
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Store:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {item?.store ?? "N/A"}
                    </p>
                  </div>
                  {/* <div className=""></div> */}
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Urgent Purchase:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {item?.urgentPurchase ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="col-span-4">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Item URL:
                    </p>
                    <a
                      href={item?.itemUrl ?? ""}
                      className="font-roboto  text-[20px]"
                      style={{ color: "#B3261E" }}
                    >
                      {item?.itemUrl ?? "N/A"}
                    </a>
                  </div>
                </>
              ) : null}
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.itemName ?? "N/A"}
                </p>
              </div>
              <div></div>
              {order?.serviceType === "shopForMe" ? (
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Item Cost from Store:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    ${item?.cost ?? 0}
                  </p>
                </div>
              ) : (
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    ID: Tracking ID
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {item?.trackingId ?? "N/A"}
                  </p>
                </div>
              )}
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Quantity:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.qty ?? "N/A"}
                </p>
              </div>
              {order?.serviceType === "shopForMe" ? null : (
                <>
                  {" "}
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Delivered by:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {item?.deliveredBy ?? "N/A"}
                    </p>
                  </div>
                  <div className=""></div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Item delivery status:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {item?.deliveryStatus ?? "N/A"}
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
                  <div className="w-[220px] h-[150px] mt-[10px] rounded-[10px] border">
                    <img src={item?.itemImage ?? ''} alt="product" style={{width:'100%', height: '100%'}} />
                  </div>
                </p>
              </div>
              <div className=""></div>
              {order?.serviceType === "shopForMe" ? (
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
                  {item?.additionalDescription ?? "N/A"}
                </p>
              </div>
              {order?.serviceType === "shopForMe" ? null : (
                <div>
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                    Item original cost:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    ${item?.originalCost ?? 0}
                  </p>
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 mt-[10px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Color:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.itemColor ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Stripes:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.stripes ?? "N/A"} inches`}
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
                  {item?.itemName ?? "N/A"}
                </p>
              </div>
              <div></div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Product Original Cost
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  ${item?.originalCost ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Quantity:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.qty ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Weight:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.weight}kg` ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Height:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.height} inches` ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Length:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.length} inches` ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Width:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.width} inches` ?? "N/A"}
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
                {item?.additionalDescription ?? "N/A"}
              </p>
            </div>
            <div className="grid grid-cols-2 mt-[10px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Color:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.color ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Stripes:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.stripes} inches` ?? "N/A"}
                </p>
              </div>
            </div>
          </>
        )}
      </CardWrapper>
      {type === "request" && !proceed ? null : (
        <Box onClick={() => setOpen(true)}>
          <EditIcon />
        </Box>
      )}
      <UserModals
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Package Details"
      >
        <PackageDetailsForm service={order?.service} />
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
    </Box>
  );
}

export default ItemBox
