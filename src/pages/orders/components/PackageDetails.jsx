import React, { useState } from "react";
import EditIcon from "../../../assets/icons/EditIcon";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import CircleRight from "../../../assets/icons/CircleRight";
import { Box, Button } from "@mui/material";
import ItemBox from "./ItemBox";
import ProductBox from "./ProductBox";
import CardWrapper from "../../../components/order/components/CardWrapper";
import { toTitleCase } from "../order-details";
import AutoImportItem from "../../../components/order/components/AutoImportItem";
import AddIcon from "../../../assets/icons/AddIcon";
import PackageDetailsForm from "../../../components/order/components/PackageDetailsForm";
import UserModals from "../../Users/components/UserModals";
import AutoImportPackageDetails from "../../../components/order/components/AutoImportPackageDetails";

const PackageDetails = ({
  confirm = false,
  type = "",
  order,
  proceed = false,
  isRequest = false,
  activeStep,
  setActiveStep,
  refetch,
  requestId,
  service,
  origin,
  setOrigin,
  requests,
  setrequests,
}) => {
  const [open, setOpen] = useState(false);
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
          {(type === "request" || isRequest) && activeStep === 3
            ? null
            : toTitleCase(order?.request?.serviceType ?? service) !==
                "Auto Import" && (
                <div
                  style={{
                    marginTop: "30px",
                    width: "100%",
                    backgroundColor: "#F2B8B5",
                    padding: "10px 14px",
                    borderRadius: "20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#49454F",
                    }}
                  >
                    {toTitleCase(order?.request?.serviceType ?? service) ===
                    "Shop For Me"
                      ? "This is the RAC Facility where the items will be delivered after they are purchased and they will be shipped from here to our pickup office in Nigeria"
                      : "This is the RAC Facility the customer claimed to have dropped the package off at"}
                  </p>
                </div>
              )}
          {type === "request" || isRequest ? (
            <div className="grid grid-cols-2 mt-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Origin warehouse:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {order?.request?.origin ?? origin}
                </p>
              </div>
            </div>
          ) : (
            <>
              {" "}
              <div className="mt-[30px]">
                <p className="text-[14px] text-t/100 font-roboto">Origin:</p>
                <p className="font-roboto  text-[20px]">{order?.location}</p>
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
        {(type === "request" || isRequest) &&
        !proceed &&
        activeStep !== 3 ? null : (
          <EditIcon />
        )}
      </Box>
      {toTitleCase(order?.serviceType) === "Auto Import"
        ? order?.request?.requestItems?.map((item, i) =>
            isRequest ? (
              <AutoImportItem
                view
                item={item}
                itemNumber={i + 1}
                proceed={proceed}
                refetch={refetch}
                order={order}
              />
            ) : (
              <ProductBox
                proceed={proceed}
                order={order}
                item={item}
                itemNumber={i + 1}
                type={type}
                isRequest={isRequest}
                activeStep={activeStep}
              />
            ),
          )
        : order?.request?.requestItems
          ? order?.request?.requestItems?.map((item, i) => (
              <ItemBox
                confirm={order?.request?.requestStatus === "Not Responded"}
                activeStep={activeStep}
                proceed={proceed}
                isRequest={isRequest}
                order={order}
                item={item}
                type={type}
                itemNumber={i + 1}
                refetch={refetch}
              />
            ))
          : order?.map((item, i) => (
              <ItemBox
                confirm={false}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                proceed={proceed}
                isRequest={isRequest}
                order={order}
                item={item}
                type={type}
                itemNumber={i + 1}
                refetch={refetch}
                requestId={requestId}
                requestService={service}
              />
            ))}
      {(type === "request" || isRequest) && proceed && (
        <Button
          startIcon={<AddIcon color="#E6E1E5" />}
          variant="contained"
          sx={{
            mt: "20px",
            bgcolor: "#49454F",
            color: "#E6E1E5",
            width: "233px",
            height: "56px",
            borderRadius: "20px",
            textTransform: "none",
          }}
          onClick={() => setOpen(true)}
        >
          Add new product/item
        </Button>
      )}
      <UserModals
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Package Details"
      >
        {toTitleCase(order?.serviceType) === "Auto Import" ? (
          <AutoImportPackageDetails
            setOrigin={setOrigin}
            origin={origin}
            requests={requests}
            setrequests={setrequests}
            service={toTitleCase(order?.request?.serviceType)}
          />
        ) : (
          <PackageDetailsForm
            setOrigin={setOrigin}
            origin={origin}
            requests={requests}
            setrequests={setrequests}
            service={toTitleCase(order?.request?.serviceType)}
          />
        )}
      </UserModals>
    </div>
  );
};

export default PackageDetails;
