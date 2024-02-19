import React from 'react'
import CardWrapper from './CardWrapper';
import CircleRight from '../../../assets/icons/CircleRight';
import EditIcon from '../../../assets/icons/EditIcon';
import { Box } from '@mui/material';

const OrderInfo = ({order}) => {
  return (
    <div>
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
          Order Information
        </p>
      </div>
      <Box mt='20px' display='flex' alignItems='center' gap='30px'>
        <CardWrapper title="Order Information" style={{ width: "100%" }}>
          <div className="grid grid-cols-5 mt-[30px]  gap-[20px]">
            <div>
              <p className="text-[14px] text-t/100 font-roboto">
                Assigned Customer:
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <p
                  className="font-roboto text-[22px]"
                  style={{ color: "#1C1B1F" }}
                >
                  {order.assignedCustomer}
                </p>
              </div>
            </div>
            <div></div>
            <div>
              <p className="text-[14px] text-t/100 font-roboto">Order Type:</p>
              <p
                className="font-roboto  text-[22px]"
                style={{ color: "#1C1B1F" }}
              >
                {order.orderType}
              </p>
            </div>
            <div>
              <p className="text-[14px] text-t/100 font-roboto">Service:</p>
              <p
                className="font-roboto  text-[22px]"
                style={{ color: "#1C1B1F" }}
              >
                {order.service}
              </p>
            </div>
            <div></div>
            <div>
              <p className="text-[14px] text-t/100 font-roboto">
                Shipment Method:
              </p>
              <p
                className="font-roboto  text-[22px]"
                style={{ color: "#1C1B1F" }}
              >
                {order.shipmentMethod}
              </p>
            </div>
            <div></div>
            <div>
              <p className="text-[14px] text-t/100 font-roboto">
                Delivery Company:
              </p>
              <p
                className="font-roboto  text-[22px]"
                style={{ color: "#1C1B1F" }}
              >
                {order.deliveryCompany}
              </p>
            </div>
          </div>
              </CardWrapper>
              <EditIcon />
      </Box>
    </div>
  );
}

export default OrderInfo
