import { useEffect, useState } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CircleRight from "../../assets/icons/CircleRight";
import EditIcon from "../../assets/icons/EditIcon";
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  Switch,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import UserTag from "../../assets/icons/UserTag";
import StartIcon from "../../assets/icons/StartIcon";
import ChangeIcon from "../../assets/icons/ChangeIcon";
import ShieldIcon from "../../assets/icons/ShieldIcon";
import CloseCircle from "../../assets/icons/CloseCircle";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import CheckWhiteIcon from "../../assets/icons/CheckWhiteIcon";
import TooltipIcon from "../../assets/icons/TooltipIcon";
import DollarIcon from "../../assets/icons/DollarIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import SubtractIcon from "../../assets/icons/SubtractIcon";
import UploadIcon from "../../assets/icons/UploadIcon";
import { BsPlus } from "react-icons/bs";
import DeletIcon from "../../assets/icons/DeletIcon";
import PercentageIcon from "../../assets/icons/PercentageIcon";
import OrderInformation from "./components/OrderInformation";
import ShippingDetails from "./components/ShippingDetails";
import PackageDetails from "./components/PackageDetails";
import DraftIcon from "../../assets/icons/DraftIcon";
import SuccessImageIcon from "../../assets/icons/SuccessImageIcon";
import drone from "../../assets/images/drone.png";
import BillingDetails from "./components/BillingDetails";
import PaymentInformation from "./components/PaymentInformation";
import PackageDetailsForm from "../../components/order/components/PackageDetailsForm";
import ShopForMeDetails from "../ShopForMe/ShopForMeDetails";
import ActivityIcon from "../../assets/icons/ActivityIcon";
import CustomStepper from "../../components/CustomStepper";
import SectionHeader from "../../components/SectionHeader";
import useCustomGetRequest from "../../utils/hooks/api/useCustomGetRequest";
import moment from "moment";
import OrderPricing from "../../components/order/components/OrderPricing";
import Requests from "../../utils/hooks/api/requests";
import CloseIcon from "../../assets/icons/CloseIcon";
import currencyFormatter from "../../components/CurrencyFormatter";
import ShippingDetailsInfo from "../../components/order/components/ShippingDetailsInfo";
import PackageDetailsInfo from "../../components/order/components/PackageDetailsInfo";
import BillingDetailsInfo from "../../components/order/components/BillingDetailsInfo";

export const toTitleCase = (str) => {
  const words = str?.match(/[A-Z][a-z]+|[a-z]+/g);
  const titleCasedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return titleCasedWords?.join(" ");
};

function OrderDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    customPutRequest,
    customPostRequest,
    loading,
    error,
    data: procurement,
    setError,
    success,
  } = Requests();
  // const requestId = location.state?.requestId;
  const { id } = useParams();
  const isRequest = location.pathname.includes("order-requests");
  // const order = location?.state?.order;
  const type = location?.state?.type;
  const theme = useTheme();
  const [drop, setDrop] = useState(null);
  const [saveAsDraft, setSaveAsDraft] = useState(false);
  const [required, setRequired] = useState(false);
  const { data, refetch } = useCustomGetRequest(
    `/admin/get-request-by-id/${id}`
  );
  const shipmentMethods = ["Road", "Air", "Rail", "Sea"];
  const deliveryCompanies = ["DHL", "Gokada", "Glovo"];
  const [origin, setOrigin] = useState("");
  const destination = data?.request?.destinationDetails;
  const billing = data?.request?.billingInformation;
  const [destinationDetails, setDestinationDetails] = useState(destination);
  const [billingInformation, setBillingInformation] = useState(billing);

  useEffect(() => {
    setDestinationDetails(destination);
    setBillingInformation(billing);
    setOrigin(data?.request?.origin);
  }, [data]);
  console.log(destinationDetails, "destination");
  useEffect(() => {
    refetch();
  }, [loading]);

  const [requests, setrequests] = useState(
    toTitleCase(data?.serviceType) === "Auto Import"
      ? [
          {
            carBrand: "",
            carCondition: "",
            color: "",
            link: "",
            model: "",
            carValue: 0,
            mileage: 0,
            additionalDescription: "",
            carImage: null,
            carTitle: null,
            productionYear: "",
            vehicleIdNumber: "",
            pickupDetails: {
              address: "",
              city: "",
              country: "",
              countryCode: "",
              email: "",
              firstName: "",
              lastName: "",
              locationType: "",
              phoneNumber: "",
              pickUpDate: "",
              state: "",
              zipPostalCode: "",
            },
          },
        ]
      : toTitleCase(data?.serviceType) === "Shop For Me"
        ? [
            {
              itemName: "",
              originalCost: 0,
              qty: 0,
              additionalDescription: "",
              itemImage: null,
              store: "",
              urgentPurchase: false,
              itemUrl: "",
            },
          ]
        : [
            {
              itemName: "",
              itemOriginalCost: 0,
              quantity: 0,
              itemDescription: "",
              itemImage: null,
              deliveredBy: "",
              itemDeliveryStatus: "",
              idNumber: "",
              idType: "",
            },
          ]
  );

  useEffect(() => {
    const storedRequests = localStorage.getItem("requests");
    if (storedRequests) {
      setrequests(JSON.parse(storedRequests));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("requests", JSON.stringify(requests));
  }, [requests]);

  const editRequestData = {
    service: toTitleCase(data?.serviceType),
    requestId: data?.request?.requestId,
    generalUpdate: {
      // ...data?.request,
      origin: origin,
    },
    destinationDetails: destinationDetails,
    billingInformation: billingInformation,
    requestItems: requests,
    // shippingAndBillingInfo: data?.request?.shippingAndBillingInfo,
  };

  const handleUpdateRequest = async () => {
    try {
      customPostRequest(`/cross-service/edit-requests`, editRequestData);
    } catch (e) {
    } finally {
      localStorage.removeItem("requests");
    }
  };

  console.log(editRequestData, "editRequestData");

  const [shipmentMethod, setShipmentMethod] = useState("");
  const [deliveryCompany, setDeliveryCompany] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const [warehouseCost, setWarehouseCost] = useState(0);
  const [productName, setProductName] = useState("");
  const [originalCost, setOriginalCost] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [discountType, setDiscoutType] = useState("");
  const [checked, setChecked] = useState(false);

  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [otherCharges, setOtherCharges] = useState("");
  const [totalPickupCost, setTotalPickupCost] = useState(0);
  const [shippingCost, setShippingCost] = useState("");
  const [totalCalculatedCost, setTotalCalculatedCost] = useState(0);

  console.log(data);

  const toggle = (i) => {
    setDrop((prevFaq) => (prevFaq === i ? null : i));
  };
  const [proceed, setProceed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps =
    data?.serviceType === "autoImport"
      ? [
          "Order Information",
          "Package Details",
          "Shipping Details",
          "Billing",
          "Order Details Confirmation",
          "Request Successfully Approved",
        ]
      : [
          "Order Information",
          "Package Details",
          "Billing",
          "Order Details Confirmation",
          "Request Successfully Approved",
        ];
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  const finish = activeStep === steps.length - 1;
  const handleNext = () => {
    if (toTitleCase(data?.serviceType) === "Shop For Me") {
      if ((!shipmentMethod || !deliveryCompany) && activeStep === 0) {
        setOpenError(true);
        setError("Please input all fields");
        setRequired(true);
      } else if (activeStep === 2 && !warehouseCost) {
        setOpenError(true);
        setError("Please input all fields");
        setRequired(true);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setRequired(false);
      }
    }
    if (toTitleCase(data?.serviceType) === "Auto Import") {
      if ((!shipmentMethod || !deliveryCompany) && activeStep === 0) {
        setOpenError(true);
        setError("Please input all fields");
        setRequired(true);
      } else if (activeStep === 3 && (!shippingCost || !otherCharges)) {
        setOpenError(true);
        setError("Please input all fields");
        setRequired(true);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setRequired(false);
      }
    }
    if (
      toTitleCase(data?.serviceType) === "Export" ||
      toTitleCase(data?.serviceType) === "Import"
    ) {
      if ((!shipmentMethod || !deliveryCompany) && activeStep === 0) {
        setOpenError(true);
        setError("Please input all fields");
        setRequired(true);
      } else if (
        activeStep === 1 &&
        (!height || !width || !weight || !length)
      ) {
        setOpenError(true);
        setError("Please input all fields");
        setRequired(true);
      } else if (activeStep === 2 && !otherCharges) {
        setOpenError(true);
        setError("Please input all fields");
        setRequired(true);
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setRequired(false);
      }
    }
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
    else setProceed(false);
  };

  const totalCost = () => {
    let total = data?.serviceType === "shopForMe" ? Number(warehouseCost) : 0;
    if (data?.serviceType === "shopForMe") {
      data?.request?.requestItems?.map(
        (x) => (total += x.qty * x.originalCost)
      );
      return total > Number(discountValue)
        ? total - Number(discountValue)
        : Number(discountValue) - total;
    }
    // if (data?.serviceType === "autoImport") {
    //   let cost = Number(shippingCost) + Number(otherCharges) + data?.request?.insurance +
    // data?.request?.paymentMethodSurcharge +
    // data?.request?.vat +
    // data?.request?.storageCharges +
    // (Number(totalPickupCost) ?? 0)
    //   total += cost;
    //   return total > Number(discountValue)
    //     ? total - Number(discountValue)
    //     : Number(discountValue) - total;
    // }
  };

  const customer =
    data?.customerData?.firstName + " " + data?.customerData?.lastName;

  const [openError, setOpenError] = useState(false);
  useEffect(() => {
    if (error) {
      setOpenError(true);
    } else setOpenError(false);
    if (success) handleNext();
  }, [loading]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
    setError("");
  };

  const approveSfmRequestData = {
    requestStatus: data?.request?.requestStatus,
    discount: discountValue,
    serviceType: data?.serviceType,
    totalShippingToOriginWarehouse: warehouseCost,
    shipmentMethod: shipmentMethod,
    deliveryCompany: deliveryCompany,
  };

  const approveAutoImportRequestData = {
    status: "responded",
    orderId: data?.request?.orderId,
    discount: discountValue,
    serviceType: data?.serviceType,
    shippingCost: shippingCost,
    totalPickupCost: totalPickupCost,
    otherCharges: otherCharges,
    shipmentMethod: shipmentMethod,
    deliveryCompany: deliveryCompany,
  };

  const approveExportRequestData = {
    requestStatus: "responded",
    orderId: data?.request?.orderId,
    discount: Number(discountValue),
    shipmentMethod: shipmentMethod,
    deliveryCompany: deliveryCompany,
    totalHeight: Number(height),
    totalWidth: Number(width),
    totalLength: Number(length),
    totalWeight: Number(weight),
    otherCharges: Number(otherCharges),
  };

  // console.log(approveExportRequestData);

  const approveOrder = async () => {
    if (toTitleCase(data?.serviceType) === "Shop For Me") {
      if (
        shipmentMethod &&
        deliveryCompany &&
        data?.serviceType &&
        totalCost() &&
        warehouseCost
      ) {
        customPutRequest(
          `/admin/admin/update-request-status/${data?.request?._id}`,
          approveSfmRequestData
        );
      } else {
        setOpenError(true);
        setError("Please input all fields");
      }
    }
    if (toTitleCase(data?.serviceType) === "Export") {
      if (
        shipmentMethod &&
        deliveryCompany &&
        height &&
        width &&
        length &&
        weight &&
        otherCharges
      ) {
        customPutRequest(
          `/export/admin/update-order-status`,
          approveExportRequestData
        );
      } else {
        setOpenError(true);
        setError("Please input all fields");
      }
    }
    if (toTitleCase(data?.serviceType) === "Import") {
      if (
        shipmentMethod &&
        deliveryCompany &&
        height &&
        width &&
        length &&
        weight &&
        otherCharges
      ) {
        customPutRequest(
          `/import/admin/update-order-status`,
          approveExportRequestData
        );
      } else {
        setOpenError(true);
        setError("Please input all fields");
      }
    }
    if (toTitleCase(data?.serviceType) === "Auto Import") {
      if (shipmentMethod && deliveryCompany && shippingCost && otherCharges) {
        customPutRequest(
          `/auto-import/admin/autoimport-status-update`,
          approveAutoImportRequestData
        );
      } else {
        setOpenError(true);
        setError("Please input all fields");
      }
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [activeStep, proceed]);

  return (
    <>
      {(toTitleCase(data?.serviceType) === "Shop For Me" ||
        type === "shop for me") &&
      type !== "request" ? (
        <ShopForMeDetails order={data} refetch={refetch} />
      ) : (
        <div
          className="px-[40px] py-[30px] font-roboto h-full"
          style={{ maxWidth: "1140px" }}
        >
          <>
            {proceed ? (
              <div
                className="p-[30px] bg-white rounded-[20px]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <p className="font-roboto text-[24px]">
                  <span>
                    {type === "request" ? "Request ID:" : "Order ID:"}
                  </span>{" "}
                  <span className="font-[700]">{data?.request?.requestId}</span>
                </p>
                <CustomStepper activeStep={activeStep} steps={steps} />
                <Box>
                  {activeStep === 0 ? (
                    <Box>
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                          marginTop: "20px",
                        }}
                      >
                        <div className="flex items-center space-x-[10px] ">
                          <CircleRight />
                          <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                            Order Information
                          </p>
                        </div>
                        <div
                          className={` h-full px-[28px] py-[20px]
                     transition-all border  rounded-[20px]`}
                          style={{ flex: 1 }}
                        >
                          <div
                            className={`
                     transition-all  h-[40px] flex items-center justify-between cursor-pointer`}
                          >
                            <p className="text-[20px]">Order Information</p>
                          </div>

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
                                  borderBottom: "1px solid #79747E",
                                }}
                              >
                                <UserTag />
                                <p
                                  className="font-roboto text-[20px]"
                                  style={{ color: "#21005D", fontWeight: 400 }}
                                >
                                  {customer ?? "N/A"}
                                </p>
                              </div>
                            </div>
                            <div></div>
                            <div>
                              <p className="text-[14px] text-t/100 font-roboto">
                                Order Type:
                              </p>
                              <p className="font-roboto  text-[20px]">
                                Shipment
                              </p>
                            </div>
                            {/* <div className="col-span-3">
                        <p className="text-[14px] text-t/100 font-roboto">
                          {type === "request"
                            ? "Request Status:"
                            : "Order Status:"}
                        </p>
                        <p
                          style={{
                            display: type === "request" ? "none" : "block",
                          }}
                          className="font-roboto  text-[20px]"
                        >
                          {order.status}
                        </p>
                        <p
                          style={{
                            display: type === "request" ? "flex" : "none",
                            gap: "5px",
                            alignItems: "center",
                          }}
                          className="font-roboto  text-[20px] text-brand/200"
                        >
                          <div
                            style={{
                              width: "12px",
                              height: "12px",
                              backgroundColor: "#fff",
                              borderRadius: "100%",
                              border: "1px solid #B3261E",
                            }}
                          ></div>
                          {order.status}
                          <Button
                            startIcon={<ShieldIcon />}
                            variant="outlined"
                            sx={{
                              borderColor: "#79747E",
                              color: "#79747E",
                              height: "40px",
                              borderRadius: "100px",
                              width: "50%",
                              textTransform: "none",
                            }}
                            onClick={() => navigate("/orders")}
                          >
                            Proceed with confirmation
                          </Button>
                        </p>
                      </div> */}
                            {/* <div></div> */}
                            <div>
                              <p className="text-[14px] text-t/100 font-roboto">
                                Service:
                              </p>
                              <p className="font-roboto  text-[20px]">
                                {toTitleCase(data?.serviceType)}
                              </p>
                            </div>
                            <div></div>
                            {type === "request" || isRequest ? null : (
                              <>
                                <div>
                                  <p className="text-[14px] text-t/100 font-roboto">
                                    Shipment Method:
                                  </p>
                                  <p className="font-roboto  text-[20px]">
                                    {data?.request?.shipmentMethod ?? "N/A"}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-[14px] text-t/100 font-roboto">
                                    Delivery Company:
                                  </p>
                                  <p className="font-roboto  text-[20px]">
                                    {data?.request?.deliveryCompany ?? "N/A"}
                                  </p>
                                </div>
                              </>
                            )}
                            <div>
                              <p className="text-[14px] text-t/100 font-roboto">
                                Order Date:
                              </p>
                              <p className="font-roboto  text-[20px]">
                                {moment(data?.request?.createdAt).format(
                                  "DD/MM/YYYY"
                                )}
                              </p>
                            </div>
                            <div></div>
                            <div>
                              <p className="text-[14px] text-t/100 font-roboto">
                                Order Time:
                              </p>
                              <p className="font-roboto  text-[20px]">
                                {moment(data?.request?.createdAt).format(
                                  "HH:mm"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Box>
                      <Box mt="30px">
                        <div className="flex items-center space-x-[10px] ">
                          <CircleRight />
                          <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                            Complete The Order Details
                          </p>
                        </div>
                        <Box px="30px" mt="12px">
                          <Box
                            pt="30px"
                            sx={{ borderTop: "1px solid #79747E" }}
                          >
                            <Box display="flex" alignItems="center" gap="30px">
                              <TextField
                                fullWidth
                                required
                                sx={{
                                  fontSize: "16px",
                                  color: "#1C1B1F",
                                  "& .MuiInputLabel-root": {
                                    color:
                                      required && !shipmentMethod
                                        ? "#B3261E"
                                        : "#1C1B1F",
                                  },
                                  "& .MuiInputLabel-root.Mui-focused": {
                                    color:
                                      required && !shipmentMethod
                                        ? "#B3261E"
                                        : "#79747E",
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                      borderColor:
                                        required && !shipmentMethod
                                          ? "#B3261E"
                                          : "#79747E", // Border color when focused
                                    },
                                  },
                                }}
                                id="shipment-method"
                                type="text"
                                label="Shipment Method"
                                defaultValue={"Air"}
                                value={shipmentMethod}
                                onChange={(e) =>
                                  setShipmentMethod(e.target.value)
                                }
                                select
                                InputProps={{
                                  sx: {
                                    borderRadius: "20px", // Apply border radius to the input element
                                    height: "56px",
                                    borderColor:
                                      required && !shipmentMethod
                                        ? "#B3261E"
                                        : "#79747E",
                                    fontSize: "16px",
                                    color: "#1C1B1F",
                                  },
                                }}
                                // placeholder="Enter your country"
                              >
                                {shipmentMethods.map((method, i) => (
                                  <MenuItem value={method} key={i}>
                                    {method}
                                  </MenuItem>
                                ))}
                              </TextField>
                              <TextField
                                fullWidth
                                required
                                sx={{
                                  fontSize: "16px",
                                  color: "#1C1B1F",
                                  "& .MuiInputLabel-root": {
                                    color:
                                      required && !deliveryCompany
                                        ? "#B3261E"
                                        : "#1C1B1F",
                                  },
                                  "& .MuiInputLabel-root.Mui-focused": {
                                    color:
                                      required && !deliveryCompany
                                        ? "#B3261E"
                                        : "#79747E",
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                      borderColor:
                                        required && !deliveryCompany
                                          ? "#B3261E"
                                          : "#79747E", // Border color when focused
                                    },
                                  },
                                }}
                                id="delivery-company"
                                type="text"
                                label="Delivery Company"
                                defaultValue={"DHL"}
                                value={deliveryCompany}
                                onChange={(e) =>
                                  setDeliveryCompany(e.target.value)
                                }
                                select
                                InputProps={{
                                  sx: {
                                    borderRadius: "20px", // Apply border radius to the input element
                                    height: "56px",
                                    borderColor:
                                      required && !deliveryCompany
                                        ? "#B3261E"
                                        : "#79747E",
                                    fontSize: "16px",
                                    color: "#1C1B1F",
                                  },
                                }}
                                // placeholder="Enter your country"
                              >
                                {deliveryCompanies.map((company, i) => (
                                  <MenuItem value={company} key={i}>
                                    {company}
                                  </MenuItem>
                                ))}
                              </TextField>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  ) : activeStep === 1 ? (
                    data?.serviceType === "autoImport" ||
                    data?.serviceType === "shopForMe" ? (
                      <PackageDetails
                        refetch={refetch}
                        proceed={proceed}
                        isRequest={isRequest}
                        order={data}
                        type={type}
                        requests={requests}
                        setrequests={setrequests}
                        setOrigin={setOrigin}
                        origin={origin}
                        confirm={true}
                        service={toTitleCase(data?.serviceType)}
                        activeStep={activeStep}
                        setActiveStep={setActiveStep}
                      />
                    ) : (
                      <PackageDetailsForm
                        required={required}
                        requests={requests}
                        setrequests={setrequests}
                        order={data}
                        service={toTitleCase(data?.serviceType)}
                        setProductName={setProductName}
                        productName={productName}
                        setOriginalCost={setOriginalCost}
                        originalCost={originalCost}
                        productDescription={productDescription}
                        setProductDescription={setProductDescription}
                        setOrigin={setOrigin}
                        origin={origin}
                        weight={weight}
                        length={length}
                        width={width}
                        height={height}
                        setWeight={setWeight}
                        setLength={setLength}
                        setWidth={setWidth}
                        setHeight={setHeight}
                      />
                    )
                  ) : activeStep === 2 ? (
                    data?.serviceType === "autoImport" ? (
                      <>
                        <ShippingDetails
                          proceed={proceed}
                          destinationDetails={destinationDetails}
                          setDestinationDetails={setDestinationDetails}
                          order={data}
                          type={type}
                        />
                      </>
                    ) : data?.serviceType === "shopForMe" ? (
                      <OrderPricing
                        id={data?.request?._id}
                        service={toTitleCase(data?.serviceType)}
                        requestItems={requests}
                        data={data?.request}
                        setDiscountValue={setDiscountValue}
                        discountValue={discountValue}
                        warehouseCost={warehouseCost}
                        setWarehouseCost={setWarehouseCost}
                        required={required}
                        setTotalCalculatedCost={setTotalCalculatedCost}
                      />
                    ) : (
                      <Box>
                        <div className="flex items-center space-x-[10px] ">
                          <CircleRight />
                          <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                            Fill in discount information if needed
                          </p>
                        </div>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "30px",
                            mt: "20px",
                          }}
                        >
                          <div
                            className={` h-full overflow-hidden
                     px-[19px] py-[22px] transition-all  border  rounded-[20px]`}
                            style={{ flex: 1 }}
                          >
                            <div
                              className={`transition-all flex items-center justify-between cursor-pointer`}
                            >
                              <p className="text-[20px]">Discounts</p>
                              <Switch
                                checked={checked || discountValue.length}
                                onChange={() => {
                                  setChecked(!checked);
                                  if (checked) {
                                    setDiscoutType("");
                                    setDiscountValue(0);
                                  }
                                }}
                                sx={{
                                  root: {
                                    width: 50,
                                    height: 26,
                                    padding: 0,
                                    "& .MuiSwitch-switchBase": {
                                      padding: 1,
                                      "&.Mui-checked": {
                                        transform: "translateX(24px)",
                                        color: theme.palette.common.white,
                                        "& + .MuiSwitch-track": {
                                          backgroundColor:
                                            theme.palette.mode === "dark"
                                              ? "#2ECA45"
                                              : "#65C466",
                                          opacity: 1,
                                          border: 0,
                                        },
                                      },
                                      "&.Mui-disabled + .MuiSwitch-track": {
                                        opacity:
                                          theme.palette.mode === "light"
                                            ? 0.7
                                            : 0.3,
                                      },
                                    },
                                    "& .MuiSwitch-thumb": {
                                      width: 24,
                                      height: 24,
                                      borderRadius: "50%",
                                    },
                                    "& .MuiSwitch-track": {
                                      borderRadius: 26 / 2,
                                      backgroundColor:
                                        theme.palette.mode === "light"
                                          ? "#E9E9EA"
                                          : "#39393D",
                                      opacity: 1,
                                      transition: theme.transitions.create(
                                        ["background-color"],
                                        {
                                          duration: 500,
                                        }
                                      ),
                                    },
                                  },
                                }}
                              />
                            </div>
                            <Box mt="20px">
                              <FormControl>
                                <RadioGroup
                                  aria-labelledby="demo-controlled-radio-buttons-group"
                                  name="controlled-radio-buttons-group"
                                >
                                  <Box sx={{ display: "flex" }}>
                                    <FormControlLabel
                                      value="%"
                                      control={<Radio color="primary" />}
                                      label="%"
                                      onChange={() =>
                                        setDiscoutType("Percentage")
                                      }
                                      disabled={!checked}
                                      checked={discountType === "Percentage"}
                                    />
                                    <FormControlLabel
                                      value="$"
                                      control={<Radio color="primary" />}
                                      label="$"
                                      onChange={() => setDiscoutType("Dollar")}
                                      disabled={!checked}
                                      checked={discountType === "Dollar"}
                                    />
                                  </Box>
                                </RadioGroup>
                              </FormControl>
                            </Box>
                            <Box mt="20px">
                              <TextField
                                id="discount"
                                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                type="number"
                                label="Discount"
                                disabled={discountType === ""}
                                fullWidth
                                value={discountValue}
                                onChange={(e) =>
                                  setDiscountValue(parseInt(e.target.value, 10))
                                }
                                // placeholder="Select origin"
                                InputProps={{
                                  startAdornment:
                                    discountType === "Percentage" ? (
                                      <PercentageIcon />
                                    ) : (
                                      <DollarIcon />
                                    ),
                                  sx: {
                                    // maxWidth: "540px",
                                    borderRadius: "20px", // Apply border radius to the input element
                                    height: "56px",
                                    borderColor: "#79747E",
                                    fontSize: "16px",
                                    color: "#1C1B1F",
                                  },
                                }}
                              />
                            </Box>
                          </div>
                        </Box>
                        <Box mt="30px">
                          <SectionHeader
                            noBorder
                            title="Confirm the Additional Costs for this request"
                          />
                          <Box
                            mt="15px"
                            border="1px solid #CAC4D0"
                            p="20px 20px"
                            borderRadius="20px"
                          >
                            <Typography
                              fontSize={"14px"}
                              color="#49454F"
                              mb="20px"
                            >
                              Additional Costs
                            </Typography>
                            <Grid container>
                              <Grid item xs={3}>
                                <Typography fontSize={"14px"} color="#49454F">
                                  Storage Charge:
                                </Typography>
                                <Typography fontSize={"20px"} color="#1C1B1F">
                                  {currencyFormatter.format(
                                    data?.request?.storageCharges
                                  )}
                                </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography fontSize={"14px"} color="#49454F">
                                  Insurance Cost:
                                </Typography>
                                <Typography fontSize={"20px"} color="#1C1B1F">
                                  {currencyFormatter.format(
                                    data?.request?.insurance
                                  )}
                                </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography fontSize={"14px"} color="#49454F">
                                  Payment Method Surcharge:
                                </Typography>
                                <Typography fontSize={"20px"} color="#1C1B1F">
                                  {currencyFormatter.format(
                                    data?.request?.paymentMethodSurcharge
                                  )}
                                </Typography>
                              </Grid>
                              <Grid item xs={3}>
                                <Typography fontSize={"14px"} color="#49454F">
                                  VAT:
                                </Typography>
                                <Typography fontSize={"20px"} color="#1C1B1F">
                                  {currencyFormatter.format(data?.request?.vat)}
                                </Typography>
                              </Grid>
                            </Grid>

                            <Box width="100%" mt="24px">
                              <TextField
                                required
                                id="other-charges"
                                sx={{
                                  fontSize: "16px",
                                  color: "#1C1B1F",
                                  "& .MuiInputLabel-root": {
                                    color:
                                      required && !otherCharges
                                        ? "#B3261E"
                                        : "#1C1B1F",
                                  },
                                  "& .MuiInputLabel-root.Mui-focused": {
                                    color:
                                      required && !otherCharges
                                        ? "#B3261E"
                                        : "#79747E",
                                  },
                                  "& .MuiOutlinedInput-root": {
                                    "&.Mui-focused fieldset": {
                                      borderColor:
                                        required && !otherCharges
                                          ? "#B3261E"
                                          : "#79747E", // Border color when focused
                                    },
                                  },
                                }}
                                type="text"
                                label="Other Charges"
                                value={otherCharges}
                                onChange={(e) =>
                                  setOtherCharges(e.target.value)
                                }
                                fullWidth
                                // placeholder="Select origin"
                                InputProps={{
                                  startAdornment: <DollarIcon />,
                                  sx: {
                                    // maxWidth: "540px",
                                    borderRadius: "20px", // Apply border radius to the input element
                                    height: "56px",
                                    borderColor: "#79747E",
                                    fontSize: "16px",
                                    color: "#1C1B1F",
                                  },
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    )
                  ) : activeStep === 3 ? (
                    data?.serviceType === "autoImport" ? (
                      <>
                        <BillingDetails
                          billingInformation={billingInformation}
                          setBillingInformation={setBillingInformation}
                          order={data}
                          proceed={proceed}
                          type={type}
                          activeStep={activeStep}
                        />
                        <Box mt="30px">
                          <OrderPricing
                            id={data?.request?._id}
                            service={toTitleCase(data?.serviceType)}
                            requestItems={requests}
                            setrequests={setrequests}
                            data={data?.request}
                            setDiscountValue={setDiscountValue}
                            discountValue={discountValue}
                            warehouseCost={warehouseCost}
                            setWarehouseCost={setWarehouseCost}
                            required={required}
                            totalPickupCost={totalPickupCost}
                            setTotalPickupCost={setTotalPickupCost}
                            otherCharges={otherCharges}
                            setOtherCharges={setOtherCharges}
                            shippingCost={shippingCost}
                            setShippingCost={setShippingCost}
                            isRequest={isRequest}
                            setTotalCalculatedCost={setTotalCalculatedCost}
                          />
                        </Box>
                      </>
                    ) : (
                      <Box
                        display="flex"
                        sx={{ flexDirection: "column", gap: "30px" }}
                      >
                        <OrderInformation
                          activeStep={activeStep}
                          order={data}
                          type={type}
                          isRequest={isRequest}
                          deliveryCompany={deliveryCompany}
                          shipmentMethod={shipmentMethod}
                          setActiveStep={setActiveStep}
                        />
                        <PackageDetails
                          type={type}
                          refetch={refetch}
                          order={data}
                          origin={origin}
                          setOrigin={setOrigin}
                          requestId={data?.request?.requestId}
                          service={data?.request?.serviceType}
                          isRequest={isRequest}
                          activeStep={activeStep}
                          setActiveStep={setActiveStep}
                          requests={requests}
                          setrequests={setrequests}
                          confirm={true}
                          dimensions={{
                            width: width,
                            weight: weight,
                            height: height,
                            length: length,
                          }}
                        />
                        {data?.serviceType === "shopForMe" ? (
                          <>
                            <BillingDetails
                              order={data?.request}
                              type={type}
                              // totalCost={totalCost()}
                              setActiveStep={setActiveStep}
                              totalCalculatedCost={totalCalculatedCost}
                            />
                          </>
                        ) : null}
                      </Box>
                    )
                  ) : activeStep === 4 ? (
                    data?.serviceType === "autoImport" ? (
                      <Box display="flex" flexDirection="column" gap="30px">
                        <OrderInformation
                          activeStep={activeStep}
                          order={data}
                          type={type}
                          isRequest={isRequest}
                          deliveryCompany={deliveryCompany}
                          shipmentMethod={shipmentMethod}
                        />

                        <PackageDetails
                          refetch={refetch}
                          order={data}
                          origin={origin}
                          requestId={data?.request?.requestId}
                          service={data?.request?.serviceType}
                          isRequest={isRequest}
                          activeStep={activeStep}
                          setActiveStep={setActiveStep}
                          requests={requests}
                          setrequests={setrequests}
                          confirm={true}
                          type={type}
                          setOrigin={setOrigin}
                        />
                        <ShippingDetails
                          order={data}
                          destinationDetails={destinationDetails}
                          setDestinationDetails={setDestinationDetails}
                        />
                        <BillingDetails
                          activeStep={activeStep}
                          billingInformation={billingInformation}
                          setBillingInformation={setBillingInformation}
                          order={data}
                          // totalCost={totalCost()}
                          totalCalculatedCost={totalCalculatedCost}
                        />
                      </Box>
                    ) : (
                      <Box width="100%">
                        <Box bgcolor="#6750A4" borderRadius="20px" px="1px">
                          <Box
                            p={saveAsDraft ? "20px" : 0}
                            mb="40px"
                            display="flex"
                            gap="10px"
                            alignItems="center"
                          >
                            {saveAsDraft ? null : (
                              <img src={drone} alt="drone" />
                            )}
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
                                  ? `You have just saved this ${toTitleCase(
                                      data?.serviceType
                                    )} request to draft. The customer will not be informed about this order until this request has been approved.`
                                  : `You have just successfully approved this ${toTitleCase(
                                      data?.serviceType
                                    )} order request`}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        {data?.serviceType === "shopForMe" && !saveAsDraft ? (
                          <div
                            style={{
                              marginTop: "30px",
                              marginBottom: "30px",
                              width: "100%",
                              backgroundColor: "#F2B8B5",
                              padding: "20px 28px",
                              borderRadius: "20px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "20px",
                                fontWeight: 700,
                                color: "#21005D",
                                marginBottom: "20px",
                              }}
                            >
                              IMPORTANT NOTICE:
                            </p>
                            <p
                              style={{
                                fontSize: "20px",
                                fontWeight: 400,
                                color: "#49454F",
                              }}
                            >
                              You will be required to add shipping cost of this
                              order immediately the items in it have been
                              completely purchased and have arrived the Origin
                              Warehouse.
                            </p>
                          </div>
                        ) : null}
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
                              Here are more information on how to follow up this
                              order
                            </Typography>
                            {saveAsDraft ? (
                              <Typography pl="14px" fontSize="20px">
                                {`To complete the approval of this request, please
                              navigate to the "Drafts" tab in the order history.
                              Locate this request using its ID or any associated
                              information.`}
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
                                    The customer has been notified about this
                                    order and prompted to proceed with placing
                                    it.
                                  </Typography>
                                </Box>
                                <Box
                                  display="flex"
                                  gap="20px"
                                  alignItems="center"
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
                                    2
                                  </Box>
                                  <Typography fontSize="20px">
                                    Upon confirming the payment for this order,
                                    you can commence the required preparations
                                    for the shipment processes.
                                  </Typography>
                                </Box>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    )
                  ) : data?.serviceType === "autoImport" ? (
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
                                ? `You have just saved this ${data?.serviceType} request to draft. The customer will not be informed about this order until this request has been approved.`
                                : `You have just successfully approved this ${data?.serviceType} order request`}
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
                            Here are more information on how to follow up this
                            order
                          </Typography>
                          {saveAsDraft ? (
                            <Typography pl="14px" fontSize="20px">
                              {`To complete the approval of this request, please
                            navigate to the "Drafts" tab in the order history.
                            Locate this request using its ID or any associated
                            information.`}
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
                                  The customer has been informed about this
                                  order and prompted to Place this order.
                                </Typography>
                              </Box>
                              <Box
                                display="flex"
                                gap="20px"
                                alignItems="center"
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
                                  2
                                </Box>
                                <Typography fontSize="20px">
                                  The customer has been informed about this
                                  order and prompted to Place this order.
                                </Typography>
                              </Box>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  ) : null}
                </Box>
                <>
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
                      }}
                      onClick={() => navigate("/order-requests")}
                    >
                      Done
                    </Button>
                  ) : (
                    <>
                      <Box display="flex" alignItems="center" gap="10px">
                        <Button
                          startIcon={<ArrowLeftPurple />}
                          variant="outlined"
                          sx={{
                            borderColor: "#79747E",
                            color: "#79747E",
                            height: "40px",
                            borderRadius: "100px",
                            textTransform: "none",
                          }}
                          onClick={handleBack}
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
                                bgcolor: "#B3261E",
                                width: "220px",
                                color: "#fff",
                                height: "40px",
                                borderRadius: "100px",
                                textTransform: "none",
                                "&:hover": {
                                  bgcolor: "#B3261E",
                                },
                              }}
                              onClick={() => {
                                if (!finish) {
                                  approveOrder();
                                  handleUpdateRequest();
                                }
                              }}
                            >
                              Finish Request Approval
                            </Button>
                          </>
                        )}
                        {activeStep !== steps.length - 2 && (
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
                            onClick={() => {
                              if (!finish) {
                                handleNext();
                                if (activeStep === 0) {
                                  if (
                                    requests[0].itemName === "" ||
                                    requests[0].carBrand === ""
                                  ) {
                                    setrequests([
                                      ...data?.request?.requestItems,
                                    ]);
                                  }
                                  setOrigin(data?.request?.origin);
                                }
                              }
                            }}
                          >
                            Next
                          </Button>
                        )}
                      </Box>
                      {toTitleCase(data?.request?.serviceType) ===
                        "Auto Import" && activeStep === 4 ? (
                        <Box maxWidth="492px">
                          <Typography fontSize="14px">
                            Upon clicking “Finish Request Approval”, I confirm I
                            have read and agreed to{" "}
                            <Typography display="inline" color="#6750A4">
                              all terms and policies
                            </Typography>
                          </Typography>
                        </Box>
                      ) : null}
                      {toTitleCase(data?.request?.serviceType) !==
                        "Auto Import" && activeStep === 3 ? (
                        <Box maxWidth="492px">
                          <Typography fontSize="14px">
                            Upon clicking “Finish Request Approval”, I confirm I
                            have read and agreed to{" "}
                            <Typography display="inline" color="#6750A4">
                              all terms and policies
                            </Typography>
                          </Typography>
                        </Box>
                      ) : null}
                    </>
                  )}
                </>
              </div>
            ) : (
              <div
                className="p-[30px] bg-white rounded-[20px]"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                {/* <p className="border border-brand/200 p-[15px] rounded-[20px] font-roboto border-dotted ">
          Order Details
        </p> */}

                <p className="font-roboto text-[24px]">
                  <span>
                    {type === "request" || isRequest
                      ? "Request ID: "
                      : "Order ID:"}
                  </span>{" "}
                  <span className="font-[700]">
                    {data?.request?.requestId || data?.request?.orderId ? (
                      type === "request" || isRequest ? (
                        data?.request?.requestId && data?.request?.requestId
                      ) : (
                        data?.request?.orderId && data?.request?.orderId
                      )
                    ) : (
                      <CircularProgress size={20} />
                    )}
                  </span>
                </p>

                <div className="flex flex-col space-y-[40px] font-roboto">
                  <OrderInformation
                    order={data}
                    type={type}
                    isRequest={isRequest}
                  />
                  {type === "request" || isRequest ? (
                    <>
                      {data?.service === "Auto Import" ? null : (
                        <ShippingDetails
                          isRequest={isRequest}
                          order={data}
                          type={type}
                          toggle={toggle}
                          drop={drop}
                        />
                      )}
                      <PackageDetails
                        refetch={refetch}
                        origin={origin}
                        order={data}
                        dimensions={{
                          width: data?.request?.totalWidth,
                          weight: data?.request?.totalWeight,
                          height: data?.request?.totalHeight,
                          length: data?.request?.totalLength,
                        }}
                        isRequest={isRequest}
                        type={type}
                        toggle={toggle}
                        drop={drop}
                      />
                      {/* {data?.service === "Auto Import" ||
                    data?.service === "Shop For Me" ? null : (
                      <BillingDetails
                        order={data}
                        type={type}
                        isRequest={isRequest}
                        toggle={toggle}
                        drop={drop}
                      />
                    )} */}
                    </>
                  ) : (
                    <>
                      <PackageDetailsInfo
                        order={data?.request}
                        service={toTitleCase(data?.serviceType)}
                        refetch={refetch}
                        type={type}
                      />
                      <ShippingDetailsInfo
                        order={data?.request}
                        service={toTitleCase(data?.serviceType)}
                        type={type}
                      />
                      <BillingDetailsInfo
                        order={data}
                        service={toTitleCase(data?.serviceType)}
                        type={type}
                      />
                    </>
                  )}

                  {type === "request" || isRequest ? (
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        startIcon={<ArrowLeftPurple />}
                        variant="outlined"
                        sx={{
                          borderColor: "#79747E",
                          color: "#79747E",
                          height: "40px",
                          borderRadius: "100px",
                          textTransform: "none",
                        }}
                        onClick={() => navigate("/order-requests")}
                      >
                        Back
                      </Button>
                      <Button
                        disabled={!data}
                        startIcon={<CloseCircle />}
                        variant="contained"
                        sx={{
                          display:
                            toTitleCase(data?.request?.requestStatus) ===
                            "Responded"
                              ? "none"
                              : "flex",
                          bgcolor: "#B3261E",
                          color: "#fff",
                          height: "40px",
                          borderRadius: "100px",
                          textTransform: "none",
                        }}
                        onClick={() => navigate("/order-requests")}
                      >
                        Decline request
                      </Button>
                      <Button
                        disabled={!data}
                        startIcon={<ArrowRightWhite />}
                        variant="contained"
                        sx={{
                          display:
                            toTitleCase(data?.request?.requestStatus) ===
                            "Responded"
                              ? "none"
                              : "flex",
                          bgcolor: "#6750A4",
                          color: "#fff",
                          height: "40px",
                          borderRadius: "100px",
                          textTransform: "none",
                        }}
                        onClick={() => setProceed(true)}
                      >
                        Proceed with approval
                      </Button>
                    </Box>
                  ) : type === "draft" ? (
                    <Box display="flex" alignItems="center" gap="10px">
                      <Button
                        startIcon={<ArrowLeftPurple />}
                        variant="outlined"
                        sx={{
                          borderColor: "#79747E",
                          color: "#79747E",
                          height: "40px",
                          borderRadius: "100px",
                          textTransform: "none",
                        }}
                        onClick={() => navigate("/order-drafts")}
                      >
                        Back
                      </Button>
                      <Button
                        startIcon={<CheckWhiteIcon />}
                        variant="contained"
                        sx={{
                          bgcolor: "#B3261E",
                          color: "#fff",
                          height: "40px",
                          borderRadius: "100px",
                          textTransform: "none",
                        }}
                        onClick={() => navigate("/orders")}
                      >
                        Confirm & Submit Order
                      </Button>
                    </Box>
                  ) : (
                    <Box
                      width="100%"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Button
                        startIcon={<ArrowLeftPurple />}
                        variant="outlined"
                        sx={{
                          borderColor: "#79747E",
                          color: "#79747E",
                          height: "40px",
                          borderRadius: "100px",
                          width: "98px",
                          textTransform: "none",
                        }}
                        onClick={() => navigate("/orders")}
                      >
                        Back
                      </Button>
                      <Button
                        startIcon={<ActivityIcon />}
                        variant="contained"
                        sx={{
                          bgcolor: "#6750A4",
                          color: "#fff",
                          height: "40px",
                          borderRadius: "100px",
                          width: "196px",
                          textTransform: "none",
                        }}
                        onClick={() => navigate("/orders")}
                      >
                        View order activities
                      </Button>
                      <Button
                        startIcon={<CloseCircle />}
                        variant="contained"
                        sx={{
                          bgcolor: "#B3261E",
                          color: "#fff",
                          height: "40px",
                          borderRadius: "100px",
                          width: "147px",
                          textTransform: "none",
                        }}
                        onClick={() => navigate("/orders")}
                      >
                        Cancel order
                      </Button>
                    </Box>
                  )}
                </div>

                {/* <Box
            width="100%"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              startIcon={<ArrowLeftPurple />}
              variant="outlined"
              sx={{
                borderColor: "#79747E",
                color: "#79747E",
                height: "40px",
                borderRadius: "100px",
                width: "50%",
                textTransform: "none",
              }}
              onClick={() => navigate("/orders")}
            >
              Back to Order
            </Button>
          </Box> */}
              </div>
              // {toTitleCase(data?.request?.serviceType) === "Auto Import" &&
              // activeStep === 4 ? (
              //   <Box mt="10px" maxWidth="340px">
              //     <Typography fontSize="14px">
              //       Upon clicking “Finish Request Approval”, I confirm I have read
              //       and agreed to{" "}
              //       <Typography display="inline" color="#6750A4">
              //         all terms and policies
              //       </Typography>
              //     </Typography>
              //   </Box>
              // ) : null}
              // {activeStep === 3 ? (
              //   <Box mt="10px" maxWidth="340px">
              //     <Typography fontSize="14px">
              //       Upon clicking “Finish Request Approval”, I confirm I have read
              //       and agreed to{" "}
              //       <Typography display="inline" color="#6750A4">
              //         all terms and policies
              //       </Typography>
              //     </Typography>
              //   </Box>
              // ) : null}
            )}
          </>
        </div>
      )}
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            borderRadius: "30px",
            width: "fit-content",
          },
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
        action={
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        }
      />
      <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default OrderDetails;

{
  /* <div
  className={`${
    drop === 2 ? "h-full p-[10px]" : "h-[40px] overflow-hidden"
  } transition-all mt-[20px] border  rounded-[20px]`}
>
  <div
    onClick={() => toggle(2)}
    className={`${
      drop === 2 ? "" : "p-[10px]"
    } transition-all h-[40px] flex items-center justify-between cursor-pointer`}
  >
    <p className="text-[20px]">Package Origin/Shipment location</p>
    <IoChevronUpCircleOutline className="text-[25px]" />
  </div>

  <div className="grid grid-cols-5 mt-[30px] border">
    <p>loll</p>
    <p>loll</p>
    <p>loll</p>
    <p>loll</p>
    <p>loll</p>
  </div>
</div> */
}
