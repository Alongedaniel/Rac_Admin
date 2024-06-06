import React from 'react'
import EditIcon from '../../../assets/icons/EditIcon';
import { IoChevronUpCircleOutline } from 'react-icons/io5';
import CircleRight from '../../../assets/icons/CircleRight';
import { Box } from '@mui/material';
import ItemBox from './ItemBox';
import ProductBox from './ProductBox';
import CardWrapper from '../../../components/order/components/CardWrapper';

const PackageDetails = ({type='', order, proceed=false}) => {
  return (
    <div className="">
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 ">
          Package Details
        </p>
      </div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginTop: "20px",
        }}
      >
        <CardWrapper
          title="Package Origin/Shipment location"
          style={{ width: "100%" }}
        >
          {type === "request" &&
            (order?.request?.service === "Auto Import" ? null : (
              <div
                style={{
                  marginTop: "30px",
                  width: "100%",
                  backgroundColor: "#F2B8B5",
                  padding: "10px",
                  borderRadius: "100px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#49454F",
                  }}
                >
                  {order?.request?.service === "Shop For Me"
                    ? "This is the RAC Facility where the items will be delivered after they are purchased and they will be shipped from here to our pickup office in Nigeria"
                    : "This is the RAC Facility the customer claimed to have dropped the package off at"}
                </p>
              </div>
            ))}
          {type === "request" ? (
            <div className="grid grid-cols-2 mt-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Origin warehouse:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {order?.request?.origin}
                </p>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <div className="mt-[30px]">
                <p className="text-[14px] text-t/100 font-roboto">Origin:</p>
                <p className="font-roboto  text-[20px]">{order.location}</p>
              </div>
              <div className=" mt-[40px] ">
                <p className="text-brand/200">Origin Address</p>
                <div className="grid grid-cols-2 mt-[20px]">
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      First Name:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      Malibu
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Last Name:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      SHedrack
                    </p>
                  </div>
                </div>
                <div className="mt-[20px] ">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Street Address:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    No, 1osolo way, ikeja road, behind scaint merry
                  </p>
                </div>
                <div className="grid grid-cols-3 mt-[20px]">
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      State:{" "}
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
            </>
          )}
        </CardWrapper>
        {type === "request" && !proceed ? null : <EditIcon />}
      </Box>
      {order?.service === "Auto Import" ? (
        <ProductBox proceed={proceed} order={order} type={type} />
      ) : (
        order?.request?.requestItems?.map((item, i) => (
          <ItemBox proceed={proceed} order={order} item={item} type={type} itemNumber={i + 1} />
        ))
      )}
    </div>
  );
}

export default PackageDetails
