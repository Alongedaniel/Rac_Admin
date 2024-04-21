import React from 'react'
import CardWrapper from '../../components/order/components/CardWrapper';
import { Box } from '@mui/material';

const BillingInfo = () => {
  return (
    <Box>
      <CardWrapper title="Billing Information">
        <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Receiver's First Name:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">Malibu</p>
          </div>
          <div className="col-span-3">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Receiver's Last Name:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">SHedrack</p>
          </div>
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Receiver's Phone Number:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              +234 803 456 7845
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Receiver's Email:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              Malibushdrack@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-[10px] col-span-5">
          <p className="text-[14px] text-t/100 font-roboto text-brand/200">
            Receiver's Address:
          </p>
          <p className="font-roboto  text-[20px] text-brand/100">
            No, 1osolo way, ikeja road, behind scaint merry
          </p>
        </div>
        <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Destination Country:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">Turkey</p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Destination State:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">Istanbul</p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Destination City:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">Cyprusic</p>
          </div>
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Zip/postal Code:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">98765</p>
          </div>
        </div>
      </CardWrapper>
    </Box>
  );
}

export default BillingInfo
