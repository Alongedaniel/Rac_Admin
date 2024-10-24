import { Box } from "@mui/material";
import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import CardWrapper from "../../../components/order/components/CardWrapper";
import EditIcon from "../../../assets/icons/EditIcon";

const ProfileInformation = ({ setActiveStep, data }) => {
  return (
    <>
      <Box mt="30px">
        <SectionHeader
          noBorder
          title="Confirm the Customer’s Profile Information"
        />
        <Box mt="20px" display="flex" gap="30px" alignItems="center">
          <CardWrapper title="Profile Information">
            <Box mt="5px">
              <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    First Name:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {data.firstName}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Last Name:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {data.lastName}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Phone Number:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {data.contactAddress[0].countryCode}{" "}
                    {data.contactAddress[0].phoneNumber}
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Email:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {data.email}
                  </p>
                </div>
              </div>
              <div className="mt-[30px] col-span-5">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Address:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {data.contactAddress[0].streetAddress}
                </p>
              </div>
              <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Country:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {data.contactAddress[0].country}
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    State:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {data.contactAddress[0].state}
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    City:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {data.contactAddress[0].city}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Zip/postal Code:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {data.contactAddress[0].postalCode}
                  </p>
                </div>
              </div>
            </Box>
          </CardWrapper>
          <Box onClick={() => setActiveStep(0)}>
            <EditIcon />
          </Box>
        </Box>
      </Box>
      <Box mt="30px">
        <SectionHeader
          noBorder
          title="Confirm the Customer’s Additional Information"
        />
        <Box mt="20px" display="flex" gap="30px" alignItems="center">
          <CardWrapper title="Business Information">
            <Box mt="5px">
              <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    First Name:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    Malibu
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Last Name:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    SHedrack
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Phone Number:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    +234 803 456 7845
                  </p>
                </div>
                <div className="col-span-3">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Email:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    Malibushdrack@gmail.com
                  </p>
                </div>
              </div>
              <div className="mt-[30px] col-span-5">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Address:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  No, 1osolo way, ikeja road, behind scaint merry
                </p>
              </div>
              <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Country:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    Turkey
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    State:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    Istanbul
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    City:
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
            </Box>
          </CardWrapper>
          <Box onClick={() => setActiveStep(1)}>
            <EditIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileInformation;
