import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import EditIcon from "../../../assets/icons/EditIcon";
import car from "../../../assets/images/car.png";
import CardWrapper from "../../../components/order/components/CardWrapper";
import UserModals from "../../Users/components/UserModals";
import AutoImportPackageDetails from "../../../components/order/components/AutoImportPackageDetails";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";
import currencyFormatter from "../../../components/CurrencyFormatter";

const ProductBox = ({
  order,
  type = "",
  proceed = false,
  item,
  itemNumber,
  isRequest,
  activeStep,
}) => {
  const [openModal, setOpenModal] = useState(false);
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
      <CardWrapper title={`Car - #${itemNumber}`}>
        {isRequest ? (
          <>
            <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.carBrand}
                </p>
              </div>
              <div></div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Model:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.model}
                </p>
              </div>
              <div className=""></div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Production Year
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.productionYear}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Car Value:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {currencyFormatter.format(item?.carValue)}
                </p>
              </div>
              <div className=""></div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Car Condition:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.carCondition}
                </p>
              </div>
              {/* <div className=""></div> */}
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Car Color:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.color}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Mileage:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.mileage}km
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  VIN Number:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.vehicleIdNumber}
                </p>
              </div>
              <div className=""></div>
              <div className="col-span-2">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Direct URL/Website Link to the Car:
                </p>
                <a
                  href={item?.link}
                  className="font-roboto  text-[20px]"
                  style={{ color: "#B3261E" }}
                >
                  {item?.link}
                </a>
              </div>
              {/* <div className=""></div> */}
              {/* <div className=""></div> */}
            </div>
            <div className="mt-[20px] grid grid-cols-5">
              <div>
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Product/Item Picture:
                  {/* <div className="w-[220px] h-[150px] mt-[10px] rounded-[10px] border"></div> */}
                  <div>
                    <img src={car} alt="car" />
                  </div>
                </p>
              </div>
              <div className=""></div>

              <div>
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Copy of the Car Title:
                  <div className="w-[147px] h-[151px] mt-[10px] rounded-[10px] border"></div>
                </p>
              </div>
              <div className=""></div>
              <div className=""></div>

              <div className="col-span-2">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                  Additional Description:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.additionalDescription}
                </p>
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              {/* <div className=""></div> */}
              {/* <div>
                <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                  Item original cost:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  $45.00
                </p>
              </div> */}
            </div>
            {/* <div className="grid grid-cols-5 mt-[10px] gap-[20px]">
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
            </div> */}
            <Box mt="20px" pt="10px" sx={{ borderTop: "1px solid #79747E" }}>
              <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Receiver's First Name:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    Malibu
                  </p>
                </div>

                <div className=""></div>
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Receiver's Last Name:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    SHedrack
                  </p>
                </div>
                <div className=""></div>
                <div className=""></div>
                <div className="col-span-2">
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
                <div className=""></div>
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
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Zip/postal Code:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    98765
                  </p>
                </div>
                <div className=""></div>
                <div className="mt-[10px] col-span-5">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Receiver's Address:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    No, 1osolo way, ikeja road, behind scaint merry
                  </p>
                </div>
              </div>
            </Box>
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
      {!activeStep && !proceed ? null : (
        <Box onClick={() => setOpenModal(true)}>
          <EditIcon />
        </Box>
      )}
      <UserModals
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Edit Package Details"
      >
        <AutoImportPackageDetails />
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
            onClick={() => setOpenModal(false)}
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
};

export default ProductBox;
