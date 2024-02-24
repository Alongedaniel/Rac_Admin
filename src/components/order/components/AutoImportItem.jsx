import { Box } from '@mui/material';
import React from 'react'
import laptop from '../../../assets/images/laptop.png'
import CardWrapper from './CardWrapper';
import EditIcon from '../../../assets/icons/EditIcon';

const AutoImportItem = () => {
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
      <CardWrapper title={` Car - #1`}>
        <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
          <>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Car Model:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                Mercedes
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Model:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">GLK</p>
            </div>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Year:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">2022</p>
            </div>
          </>
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Value:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              $50,000,000
            </p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Condition:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">Drivable</p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Color:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">Blue</p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Mileage:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">77676km</p>
          </div>
        </div>
        <div className="mt-[30px] grid grid-cols-5">
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
              VIN Number:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">918273645</p>
          </div>
          <div className="col-span-3">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Direct URL/Website Link to the Car:
            </p>
            <a
              href="https://amazon.com"
              className="font-roboto  text-[20px]"
              style={{ color: "#B3261E" }}
            >
              amazon.com
            </a>
          </div>
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Picture:
              <div className=" mt-[10px] rounded-[10px]">
                <img src={laptop} alt="laptop" />
              </div>
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
              Copy of the Car Title:
            </p>
            <Box
              width="147px"
              height="150px"
              bgcolor="#D9D9D9"
              borderRadius="10px"
            ></Box>
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
            <p className="font-roboto  text-[20px] text-brand/100">5 inches</p>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
        <Box
          width="100%"
          height="1px"
          bgcolor="#79747E"
          mt="30px"
          mb="20px"
        ></Box>
        <div>
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
              <p className="font-roboto  text-[20px] text-brand/100">Malibu</p>
            </div>
            <div className="col-span-3">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Last Name:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                SHedrack
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Phone Number:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                +234 803 456 7845
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Email:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                Malibushdrack@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-[10px] col-span-5">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Street Address:
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
              <p className="font-roboto  text-[20px] text-brand/100">Turkey</p>
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
              <p className="font-roboto  text-[20px] text-brand/100">98765</p>
            </div>
          </div>
        </div>
          </CardWrapper>
          <EditIcon />
    </Box>
  );
}

export default AutoImportItem
