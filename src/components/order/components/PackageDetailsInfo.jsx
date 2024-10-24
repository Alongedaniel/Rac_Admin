import React from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import CardWrapper from "./CardWrapper";
import EditIcon from "../../../assets/icons/EditIcon";
import ProductBox from "../../../pages/orders/components/ProductBox";
import ItemBox from "../../../pages/orders/components/ItemBox";
import { Box } from "@mui/material";
import OrderItem from "./OrderItem";
import AutoImportItem from "./AutoImportItem";

const PackageDetailsInfo = ({ order, view, service }) => {
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
          <div className="grid grid-cols-2 mt-[20px]">
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Origin warehouse:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                Nigeria(lagos - warehouse)
              </p>
            </div>
          </div>
        </CardWrapper>
        {view ? null : <EditIcon />}
      </Box>
      {(order?.orderInformation?.service ?? service === "Auto Import") ? (
        <AutoImportItem view={view} />
      ) : (
        <OrderItem order={order} service={service} view={view} />
      )}
    </div>
  );
};

export default PackageDetailsInfo;
