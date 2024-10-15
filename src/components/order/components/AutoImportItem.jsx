import { Box, Button } from '@mui/material';
import React, { useState } from 'react'
import car from '../../../assets/images/car.png'
import CardWrapper from './CardWrapper';
import EditIcon from '../../../assets/icons/EditIcon';
import currencyFormatter from '../../CurrencyFormatter';
import AutoImportPackageDetails from './AutoImportPackageDetails';
import ArrowLeftPurple from '../../../assets/icons/ArrowLeftPurple';
import ArrowRightWhite from '../../../assets/icons/ArrowRightWhite';
import UserModals from '../../../pages/Users/components/UserModals';

const AutoImportItem = ({ view, item, itemNumber, proceed }) => {
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
        <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
          <>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Car Model:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.carBrand}
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Model:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.model}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Year:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.productionYear}
              </p>
            </div>
          </>
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Value:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {currencyFormatter.format(item?.carValue)}
            </p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Condition:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.carCondition}
            </p>
          </div>
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
        </div>
        <div className="mt-[30px] grid grid-cols-5">
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              VIN Number:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.vehicleIdNumber}
            </p>
          </div>
          <div className="col-span-3">
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
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
              Car Picture:
            </p>
            <Box width="280px" height="150px" borderRadius="10px">
              <div>
                <img
                  src={item?.carImage}
                  alt="car"
                  className=" mt-[10px] rounded-[10px]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Box>
          </div>
          <div className="col-span-3">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
              Copy of the Car Title:
            </p>
            <img
              src={item?.carTitle}
              alt="car"
              className="w-[147px] h-[150px] mt-[10px] rounded-[10px]"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-5">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
              Additional Description:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.additionalDescription}
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
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
            <p className="font-roboto  text-[20px] text-brand/100">5 inches</p>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div> */}
        <Box
          display={item?.pickupDetails?.firstName ? "block" : "none"}
          width="100%"
          height="1px"
          bgcolor="#79747E"
          mt="30px"
          mb="20px"
        ></Box>
        <div
          style={{ display: item?.pickupDetails?.firstName ? "block" : "none" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <p className="font-roboto  text-[22px] text-brand/100">
              Pickup Details
            </p>
          </div>
          <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's First Name:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.firstName}
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Last Name:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.lastName}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Phone Number:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.phoneNumber}
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Email:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.email}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Country:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.country}
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                State:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.state}
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                City:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.city}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Zip/postal Code:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.zipPostalCode}
              </p>
            </div>
          </div>
          <div className="mt-[30px] col-span-5">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Street Address:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.pickupDetails?.address}
            </p>
          </div>
        </div>
      </CardWrapper>
      {view && !proceed ? null : (
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
}

export default AutoImportItem
