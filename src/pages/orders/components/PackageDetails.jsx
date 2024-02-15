import React from 'react'
import EditIcon from '../../../assets/icons/EditIcon';
import { IoChevronUpCircleOutline } from 'react-icons/io5';
import CircleRight from '../../../assets/icons/CircleRight';
import { Box } from '@mui/material';
import ItemBox from './ItemBox';
import ProductBox from './ProductBox';

const PackageDetails = ({type, toggle, drop, order}) => {
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
        <div
          className={`${
            drop === 3 ? "h-full " : "h-[68px] overflow-hidden"
          } transition-all px-[28px] py-[20px] border  rounded-[20px]`}
          style={{ flex: 1 }}
        >
          <div
            onClick={() => toggle(3)}
            className={` transition-all flex items-center justify-between cursor-pointer`}
          >
            <p className="text-[20px]">Package Origin/Shipment location</p>
            <IoChevronUpCircleOutline className="text-[25px]" />
          </div>
          {type === "request" &&
            (order.service === "Auto Import" ? null : (
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
                  {order.service === 'Shop For Me' ? "This is the RAC Facility where the items will be delivered after they are purchased and they will be shipped from here to our pickup office in Nigeria" : "This is the RAC Facility the customer claimed to have dropped the package off at"}
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
                  Nigeria(lagos - warehouse)
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Package delivery status:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  All delivered
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
        </div>
        {type === "request" ? null : <EditIcon />}
      </Box>
      {order.service === "Auto Import" ? (
        <ProductBox order={order} type={type} toggle={toggle} drop={drop} />
      ) : (
        <ItemBox order={order} type={type} toggle={toggle} drop={drop} />
      )}
    </div>
  );
}

export default PackageDetails
