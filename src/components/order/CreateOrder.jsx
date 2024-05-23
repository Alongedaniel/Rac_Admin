import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OrderInformationForm from "./components/OrderInformationForm";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import PackageDetails from "../../pages/orders/components/PackageDetails";
import PackageDetailsForm from "./components/PackageDetailsForm";
import { useNavigate } from "react-router-dom";
import ShippingDetailsForm from "./components/ShippingDetailsForm";
import BillingDetails from "../../pages/orders/components/BillingDetails";
import PaymentInformation from "../../pages/orders/components/PaymentInformation";
import OrderInformation from "../../pages/orders/components/OrderInformation";
import ShippingDetails from "../../pages/orders/components/ShippingDetails";
import CheckWhiteIcon from "../../assets/icons/CheckWhiteIcon";
import DraftIcon from "../../assets/icons/DraftIcon";
import drone from "../../assets/images/drone.png";
import CircleRight from "../../assets/icons/CircleRight";
import BillingDetailsForm from "./components/BillingDetailsForm";
import OrderPricing from "./components/OrderPricing";
import OrderInfo from "./components/OrderInfo";
import AutoImportPackageDetails from "./components/AutoImportPackageDetails";
import PackageDetailsInfo from "./components/PackageDetailsInfo";
import ShippingDetailsInfo from "./components/ShippingDetailsInfo";
import BillingDetailsInfo from "./components/BillingDetailsInfo";
import Navbar from "../Layout/Navbar";
import CustomStepper from "../CustomStepper";
import ShopForMePackageDetails from "../../pages/ShopForMe/ShopForMePackageDetails";
import BillingInfo from "../../pages/ShopForMe/BillingInfo";
import car from "../../assets/images/car.png";
import axios from "axios";
import { useAuth } from "../../utils/contexts/userContext/UserContext";
import axiosInstance from "../../utils/hooks/api/axiosInstance";

const CreateOrder = ({ shopForMe = false }) => {
  const { bearerToken } = useAuth()
  const [assignedCustomer, setAssignedCustomer] = useState("");
  const [orderType, setOrderType] = useState("");
  const [service, setService] = useState("");
  const [shipmentMethod, setShipmentMethod] = useState("");
  const [deliveryCompany, setDeliveryCompany] = useState("");
  const [origin, setOrigin] = useState("");
  const [productName, setProductName] = useState("");
  const [originalCost, setOriginalCost] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [itemColor, setItemColor] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const [length, setLength] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [receiverFirstName, setReceiverFirstName] = useState("");
  const [receiverLastName, setReceiverLastName] = useState("");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [destinationState, setDestinationState] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [receiverAddress, setReceiverAddress] = useState("");
  const [receiverZipCode, setReceiverZipCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [model, setModel] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [carValue, setCarValue] = useState("");
  const [carCondition, setCarCondition] = useState("");
  const [mileage, setMileage] = useState("");
  const [color, setColor] = useState("");
  const [vehicleIdNumber, setVehicleIdNumber] = useState("");
  const [link, setLink] = useState("");
  const [carImage, setCarImage] = useState("");
  const [carTitle, setCarTitle] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [clearingCost, setClearingCost] = useState("");
  const [dutyFee, setDutyFee] = useState("");
  const [otherCharges, setOtherCharges] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [saveAsDraft, setSaveAsDraft] = useState(false);
  // const [error, setError] = useState("")
  // const [data, setData] = useState("")

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const navigate = useNavigate();

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
    else setProceed(false);
  };

  const [quantityValue, setQuantityValue] = useState(1);
  const exportOrder = {
    orderInformation: {
      assignedCustomer: assignedCustomer,
      orderType: orderType,
      service: service,
      shipmentMethod: shipmentMethod,
      deliveryCompany: deliveryCompany,
    },
    packageDetails: {
      origin: origin,
      product: [
        {
          productName: productName,
          originalCost: originalCost,
          quantity: quantity,
          itemColor: itemColor,
          productDescription: productDescription,
        },
      ],
      weight: weight,
      length: length,
      width: width,
      height: height,
    },
    shippingDetails: {
      receiverFirstName: receiverFirstName,
      receiverLastName: receiverLastName,
      receiverEmail: receiverEmail,
      receiverPhoneNumber: receiverPhoneNumber,
      destinationCountry: destinationCountry,
      destinationState: destinationState,
      destinationCity: destinationCity,
      receiverAddress: receiverAddress,
      receiverZipCode: receiverZipCode,
    },
    billingDetails: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      country: country,
      state: state,
      city: city,
      address: address,
      zipCode: zipCode,
    },
    shippingCost: {
      customShippingMethod: {
        shippingCost: shippingCost,
        clearingCost: clearingCost,
        dutyFee: dutyFee,
      },
      additionalCosts: {
        otherCharges: otherCharges,
      },
    },
  };

  const autoImportOrderData = {
    origin: "Dubai",
    requestItems: [
      {
        carBrand: "Mercedes",
        model: "GLE 350",
        productionYear: "2024",
        carValue: "80,000,000",
        carCondition: "new",
        color: "black",
        mileage: "3500",
        vehicleIdNumber: "123456789",
        link: "https://google.com",
        // carImage: car,
        // carTitle: "mercedes",
        additionalDescription: "This is a mercedes gle 350",
        additionalProperties: [{ label: "horse power", description: "1000hp" }],
      },
    ],
  };

  const handleCreateAutoImportOrder = async () => {

    try {
      const res = await axiosInstance.post(
        "/auto-import-requests/create",
        autoImportOrderData
      );
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  };
  // const autoImportOrderData = {
  //   origin: origin,
  //   requestItems: [
  //     {
  //       carBrand: carBrand,
  //       model: model,
  //       productionYear: productionYear,
  //       carValue: carValue,
  //       carCondition: carCondition,
  //       color: color,
  //       mileage: mileage,
  //       vehicleIdNumber: vehicleIdNumber,
  //       link: link,
  //       carImage: carImage,
  //       carTitle: carTitle,
  //       additionalDescription: additionalDescription,
  //       additionalProperties: [
  //         {label: label,
  //         description: description,}
  //       ]
  //     }
  //   ]
  // }

  const steps =
    exportOrder.orderInformation.service !== "Shop For Me"
      ? [
          "Order Information",
          "Package Details",
          "Shipping Details",
          "Billing Details",
          "Order Details Confirmation",
          saveAsDraft ? "Order Saved to Draft" : "Order Successfully Created",
        ]
      : [
          "Order Information",
          "Package Details",
          "Billing Details",
          "Order Details Confirmation",
          saveAsDraft ? "Order Saved to Draft" : "Order Successfully Created",
        ];
  const finish = activeStep === steps.length - 1;

  console.log(exportOrder);
  const order = {
    id: "R78607",
    service: "Auto Import",
    customer: "Rexo Offorex",
    location: "Lagos, Nigeria",
    status: "Not Responded",
    date: "22-03-2023 13:05",
    staff: "Micheal Sam obalodu",
    actions: "axtions",
  };
  return (
    <>
      {shopForMe ? null : (
        <Box width="100%" position="relative" height="96px">
          <Box
            zIndex={999}
            width="100%"
            // maxWidth={ "1400px"}
            pr={{ xs: "40px" }}
            position="fixed"
          >
            <Navbar navbarTitle={`Create New ${service ?? ""} Order`} />
          </Box>
        </Box>
      )}
      <Box px="50px">
        <Box
          bgcolor="#fff"
          sx={{ p: "30px", mt: "40px", height: "100%", borderRadius: "20px" }}
          maxWidth={{ xs: "1200px", xl: "1400px" }}
        >
          <CustomStepper steps={steps} activeStep={activeStep} />
          <Box mt="30px">
            {activeStep === 0 ? (
              <OrderInformationForm
                shopForMe={shopForMe}
                setAssignedCustomer={setAssignedCustomer}
                assignedCustomer={assignedCustomer}
                orderType={orderType}
                setOrderType={setOrderType}
                service={service}
                setService={setService}
                shipmentMethod={shipmentMethod}
                setShipmentMethod={setShipmentMethod}
                deliveryCompany={deliveryCompany}
                setDeliveryCompany={setDeliveryCompany}
              />
            ) : activeStep === 1 ? (
              <Box>
                {exportOrder.orderInformation.service === "Auto Import" ? (
                  <AutoImportPackageDetails
                    origin={origin}
                    setOrigin={setOrigin}
                    carBrand={carBrand}
                    setCarBrand={setCarBrand}
                    model={model}
                    setModel={setModel}
                    productionYear={productionYear}
                    setProductionYear={setProductionYear}
                  />
                ) : shopForMe ? (
                  <ShopForMePackageDetails />
                ) : (
                  <PackageDetailsForm
                    origin={origin}
                    productName={productName}
                    originalCost={originalCost}
                    quantity={quantity}
                    itemColor={itemColor}
                    setOrigin={setOrigin}
                    setProductName={setProductName}
                    setOriginalCost={setOriginalCost}
                    setQuantity={setQuantity}
                    setItemColor={setItemColor}
                    productDescription={productDescription}
                    setProductDescription={setProductDescription}
                    weight={weight}
                    length={length}
                    width={width}
                    height={height}
                    setWeight={setWeight}
                    setLength={setLength}
                    setWidth={setWidth}
                    setHeight={setHeight}
                    service={exportOrder.orderInformation.service}
                  />
                )}
              </Box>
            ) : activeStep === 2 ? (
              <Box>
                {exportOrder.orderInformation.service === "Shop For Me" ? (
                  <>
                    <BillingDetailsForm
                      setZipCode={setZipCode}
                      zipCode={zipCode}
                      setAddress={setAddress}
                      address={address}
                      setCity={setCity}
                      city={city}
                      setState={setState}
                      state={state}
                      setCountry={setCountry}
                      country={country}
                      setPhoneNumber={setPhoneNumber}
                      phoneNumber={phoneNumber}
                      setEmail={setEmail}
                      email={email}
                      setLastName={setLastName}
                      lastName={lastName}
                      setFirstName={setFirstName}
                      firstName={firstName}
                    />

                    <Box mt="30px">
                      <OrderPricing
                        service={exportOrder.orderInformation.service}
                        shippingCost={shippingCost}
                        clearingCost={clearingCost}
                        dutyFee={dutyFee}
                        setShippingCost={setShippingCost}
                        setClearingCost={setClearingCost}
                        setDutyFee={setDutyFee}
                      />
                    </Box>
                  </>
                ) : (
                  <ShippingDetailsForm
                    setReceiverZipCode={setReceiverZipCode}
                    receiverZipCode={receiverZipCode}
                    setReceiverAddress={setReceiverAddress}
                    receiverAddress={receiverAddress}
                    setDestinationCity={setDestinationCity}
                    destinationCity={destinationCity}
                    setDestinationState={setDestinationState}
                    destinationState={destinationState}
                    setDestinationCountry={setDestinationCountry}
                    destinationCountry={destinationCountry}
                    setReceiverPhoneNumber={setReceiverPhoneNumber}
                    receiverPhoneNumber={receiverPhoneNumber}
                    setReceiverEmail={setReceiverEmail}
                    receiverEmail={receiverEmail}
                    setReceiverLastName={setReceiverLastName}
                    receiverLastName={receiverLastName}
                    setReceiverFirstName={setReceiverFirstName}
                    receiverFirstName={receiverFirstName}
                    service={
                      shopForMe
                        ? "Import"
                        : exportOrder.orderInformation.service
                    }
                  />
                )}
              </Box>
            ) : activeStep === 3 ? (
              <>
                {" "}
                {exportOrder.orderInformation.service === "Shop For Me" ? (
                  <Box display="flex" flexDirection="column" gap="30px">
                    <OrderInfo order={exportOrder.orderInformation} />

                    <PackageDetailsInfo order={exportOrder} />
                    <ShippingDetailsInfo order={exportOrder} />
                    <BillingDetailsInfo order={exportOrder} />
                  </Box>
                ) : shopForMe ? (
                  <>
                    <Box mb="30px">
                      <BillingInfo />
                    </Box>
                    <Box mt="30px">
                      <OrderPricing
                        service="Shop For Me"
                        shippingCost={shippingCost}
                        clearingCost={clearingCost}
                        dutyFee={dutyFee}
                        setShippingCost={setShippingCost}
                        setClearingCost={setClearingCost}
                        setDutyFee={setDutyFee}
                        shopForMe={true}
                      />
                    </Box>
                  </>
                ) : (
                  <>
                    <BillingDetailsForm
                      setZipCode={setZipCode}
                      zipCode={zipCode}
                      setAddress={setAddress}
                      address={address}
                      setCity={setCity}
                      city={city}
                      setState={setState}
                      state={state}
                      setCountry={setCountry}
                      country={country}
                      setPhoneNumber={setPhoneNumber}
                      phoneNumber={phoneNumber}
                      setEmail={setEmail}
                      email={email}
                      setLastName={setLastName}
                      lastName={lastName}
                      setFirstName={setFirstName}
                      firstName={firstName}
                    />

                    <Box mt="30px">
                      <OrderPricing
                        service={exportOrder.orderInformation.service}
                        shippingCost={shippingCost}
                        clearingCost={clearingCost}
                        dutyFee={dutyFee}
                        setShippingCost={setShippingCost}
                        setClearingCost={setClearingCost}
                        setDutyFee={setDutyFee}
                      />
                    </Box>
                  </>
                )}
              </>
            ) : activeStep === 4 ? (
              exportOrder.orderInformation.service === "Shop For Me" ? (
                <Box width="100%">
                  <Box bgcolor="#6750A4" borderRadius="20px" px="1px">
                    <Box
                      p={saveAsDraft ? "20px" : 0}
                      mb="40px"
                      display="flex"
                      gap="10px"
                      alignItems="center"
                    >
                      {saveAsDraft ? null : <img src={drone} alt="drone" />}
                      <Box>
                        <Typography
                          fontSize="24px"
                          fontWeight={700}
                          color="#fff"
                          mb="10px"
                        >
                          {saveAsDraft
                            ? "Kudos for getting this far!"
                            : "Congratulations!"}
                        </Typography>
                        <Typography fontSize="20px" color="#fff">
                          {saveAsDraft
                            ? `You have just saved this ${exportOrder.orderInformation.service} request to draft. The customer will not be informed about this order until this request has been approved.`
                            : `You have just created this ${exportOrder.orderInformation.service} order, and your payment claim is currently awaiting approval.`}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <div className="flex items-center space-x-[10px] ">
                      <CircleRight />
                      <p className="font-roboto font-[500] text-[14px] text-t/100 ">
                        What Next?
                      </p>
                    </div>
                    <Box
                      mt="20px"
                      px="14px"
                      py="10px"
                      borderRadius="20px"
                      border="1px solid #CAC4D0"
                    >
                      <Typography
                        fontSize="20px"
                        fontWeight={700}
                        color="#49454F"
                        mb="20px"
                        pl="14px"
                      >
                        Here are more information on how to follow up this order
                      </Typography>
                      {saveAsDraft ? (
                        <Typography pl="14px" fontSize="20px">
                          To complete the approval of this request, please
                          navigate to the "Drafts" tab in the order history.
                          Locate this request using its ID or any associated
                          information.
                        </Typography>
                      ) : null}
                      {saveAsDraft ? null : (
                        <Box>
                          <Box
                            display="flex"
                            gap="20px"
                            alignItems="center"
                            mb="13px"
                          >
                            <Box
                              width="33px"
                              height="48px"
                              borderRadius="20px"
                              bgcolor="#6750A4"
                              color="#fff"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontSize="20px"
                            >
                              1
                            </Box>
                            <Typography fontSize="20px">
                              The customer will not be informed about this order
                              until the Finance Team confirms the claimed
                              transaction to be true.
                            </Typography>
                          </Box>
                          <Box display="flex" gap="20px" alignItems="center">
                            <Box
                              width="33px"
                              height="48px"
                              borderRadius="20px"
                              bgcolor="#6750A4"
                              color="#fff"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                              fontSize="20px"
                            >
                              2
                            </Box>
                            <Typography fontSize="20px">
                              After the confirmation of this order’s payment,
                              you can then start necessary preparations for the
                              shipment processes.
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              ) : shopForMe ? (
                <Box display="flex" flexDirection="column" gap="30px">
                  <OrderInfo order={exportOrder.orderInformation} />

                  <PackageDetailsInfo order={exportOrder} />
                  <ShippingDetailsInfo order={exportOrder} service="Import" />
                  <BillingDetailsInfo order={exportOrder} />
                </Box>
              ) : (
                <Box display="flex" flexDirection="column" gap="30px">
                  <OrderInfo order={exportOrder.orderInformation} />

                  <PackageDetailsInfo order={exportOrder} />
                  <ShippingDetailsInfo order={exportOrder} />
                  <BillingDetailsInfo order={exportOrder} />
                </Box>
              )
            ) : activeStep === 5 ? (
              <Box width="100%">
                <Box bgcolor="#6750A4" borderRadius="20px" px="1px">
                  <Box
                    p={saveAsDraft ? "20px" : 0}
                    mb="40px"
                    display="flex"
                    gap="10px"
                    alignItems="center"
                  >
                    {saveAsDraft ? null : <img src={drone} alt="drone" />}
                    <Box>
                      <Typography
                        fontSize="24px"
                        fontWeight={700}
                        color="#fff"
                        mb="10px"
                      >
                        {saveAsDraft
                          ? "Kudos for getting this far!"
                          : "Congratulations!"}
                      </Typography>
                      <Typography fontSize="20px" color="#fff">
                        {saveAsDraft
                          ? `You have just saved this ${exportOrder.orderInformation.service} request to draft. The customer will not be informed about this order until this request has been approved.`
                          : `You have just created this ${exportOrder.orderInformation.service} order, and your payment claim is currently awaiting approval.`}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <div className="flex items-center space-x-[10px] ">
                    <CircleRight />
                    <p className="font-roboto font-[500] text-[14px] text-t/100 ">
                      What Next?
                    </p>
                  </div>
                  <Box
                    mt="20px"
                    px="14px"
                    py="10px"
                    borderRadius="20px"
                    border="1px solid #CAC4D0"
                  >
                    <Typography
                      fontSize="20px"
                      fontWeight={700}
                      color="#49454F"
                      mb="20px"
                      pl="14px"
                    >
                      Here are more information on how to follow up this order
                    </Typography>
                    {saveAsDraft ? (
                      <Typography pl="14px" fontSize="20px">
                        To complete the approval of this request, please
                        navigate to the "Drafts" tab in the order history.
                        Locate this request using its ID or any associated
                        information.
                      </Typography>
                    ) : null}
                    {saveAsDraft ? null : (
                      <Box>
                        <Box
                          display="flex"
                          gap="20px"
                          alignItems="center"
                          mb="13px"
                        >
                          <Box
                            width="33px"
                            height="48px"
                            borderRadius="20px"
                            bgcolor="#6750A4"
                            color="#fff"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="20px"
                          >
                            1
                          </Box>
                          <Typography fontSize="20px">
                            The customer will not be informed about this order
                            until the Finance Team confirms the claimed
                            transaction to be true.
                          </Typography>
                        </Box>
                        <Box display="flex" gap="20px" alignItems="center">
                          <Box
                            width="33px"
                            height="48px"
                            borderRadius="20px"
                            bgcolor="#6750A4"
                            color="#fff"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="20px"
                          >
                            2
                          </Box>
                          <Typography fontSize="20px">
                            After the confirmation of this order’s payment, you
                            can then start necessary preparations for the
                            shipment processes.
                          </Typography>
                        </Box>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            ) : null}
          </Box>
          {finish ? (
            <Button
              startIcon={<CheckWhiteIcon />}
              variant="contained"
              sx={{
                bgcolor: "#6750A4",
                color: "#fff",
                width: "211px",
                height: "40px",
                borderRadius: "100px",
                textTransform: "none",
                mt: "30px",
              }}
              onClick={() => navigate("/orders")}
            >
              Done
            </Button>
          ) : (
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
                onClick={() => {
                  if (activeStep === 0) navigate(-1);
                  else handleBack();
                }}
              >
                Back
              </Button>
              {activeStep === steps.length - 2 && (
                <>
                  <Button
                    startIcon={<DraftIcon />}
                    variant="contained"
                    sx={{
                      bgcolor: "#6750A4",
                      color: "#fff",
                      width: "151px",
                      height: "40px",
                      borderRadius: "100px",
                      textTransform: "none",
                      mr: "10px",
                    }}
                    onClick={() => {
                      if (!finish) handleNext();
                      setSaveAsDraft(true);
                    }}
                  >
                    Save as Draft
                  </Button>
                  <Button
                    startIcon={<CheckWhiteIcon />}
                    variant="contained"
                    sx={{
                      bgcolor: "#21005D",
                      width: "220px",
                      color: "#fff",
                      height: "40px",
                      borderRadius: "100px",
                      textTransform: "none",
                    }}
                    onClick={handleCreateAutoImportOrder}
                      // if (!finish) handleNext();
                  >
                    Confirm & Submit Order
                  </Button>
                </>
              )}
              {activeStep !== steps.length - 2 && (
                <Button
                  startIcon={<ArrowRightWhite />}
                  variant="contained"
                  disabled={service.length === 0 && !shopForMe}
                  sx={{
                    bgcolor: "#6750A4",
                    color: "#fff",
                    width: "172px",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                  }}
                  onClick={() => {
                    if (!finish) handleNext();
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CreateOrder;
