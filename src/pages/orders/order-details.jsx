import { useState } from "react";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import CircleRight from "../../assets/icons/CircleRight";
import EditIcon from "../../assets/icons/EditIcon";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
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
import UserModals from "../Users/components/UserModals";
import PackageDetailsInfo from "../../components/order/components/PackageDetailsInfo";
import ShippingDetailsInfo from "../../components/order/components/ShippingDetailsInfo";
import BillingDetailsInfo from "../../components/order/components/BillingDetailsInfo";
import ActivityIcon from "../../assets/icons/ActivityIcon";
import CustomStepper from "../../components/CustomStepper";

function OrderDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location?.state?.order;
  const type = location?.state?.type;
  const theme = useTheme();
  const [drop, setDrop] = useState(null);
  const [saveAsDraft, setSaveAsDraft] = useState(false);

  const toggle = (i) => {
    setDrop((prevFaq) => (prevFaq === i ? null : i));
  };
  const [proceed, setProceed] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps =
    order.service === "Auto Import"
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
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
    else setProceed(false);
  };
  const shipmentMethods = ["Road", "Air", "Rail", "Sea"];
  const deliveryCompanies = ["DHL", "Gokada", "Glovo"];

  return (
    <>
      {order.service === "Shop For Me" && type !== "request" ? (
        <ShopForMeDetails />
      ) : (
        <div
          className="px-[40px] py-[30px] font-roboto h-full"
          style={{ maxWidth: "1140px" }}
        >
          {proceed ? (
            <div
              className="p-[30px] bg-white rounded-[20px]"
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <p className="font-roboto text-[24px]">
                <span>{type === "request" ? "Request ID:" : "Order ID:"}</span>{" "}
                <span className="font-[700]">{order.id}</span>
              </p>
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
                                {order.customer}
                              </p>
                            </div>
                          </div>
                          <div></div>
                          <div>
                            <p className="text-[14px] text-t/100 font-roboto">
                              Order Type:
                            </p>
                            <p className="font-roboto  text-[20px]">
                              {order.type ?? "Shipment"}
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
                              {order.service}
                            </p>
                          </div>
                          <div></div>
                          {type === "request" ? null : (
                            <>
                              <div>
                                <p className="text-[14px] text-t/100 font-roboto">
                                  Shipment Method:
                                </p>
                                <p className="font-roboto  text-[20px]">Air</p>
                              </div>
                              <div>
                                <p className="text-[14px] text-t/100 font-roboto">
                                  Delivery Company:
                                </p>
                                <p className="font-roboto  text-[20px]">DHL</p>
                              </div>
                            </>
                          )}
                          <div>
                            <p className="text-[14px] text-t/100 font-roboto">
                              Order Date:
                            </p>
                            <p className="font-roboto  text-[20px]">
                              12/02/2023
                            </p>
                          </div>
                          <div></div>
                          <div>
                            <p className="text-[14px] text-t/100 font-roboto">
                              Order Time:
                            </p>
                            <p className="font-roboto  text-[20px]">9:48am</p>
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
                        <Box pt="30px" sx={{ borderTop: "1px solid #79747E" }}>
                          <Box display="flex" alignItems="center" gap="30px">
                            <TextField
                              fullWidth
                              required
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              id="shipment-method"
                              type="text"
                              label="Shipment Method"
                              defaultValue={"Air"}
                              select
                              InputProps={{
                                sx: {
                                  borderRadius: "20px", // Apply border radius to the input element
                                  height: "56px",
                                  borderColor: "#79747E",
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
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              id="delivery-company"
                              type="text"
                              label="Delivery Company"
                              defaultValue={"DHL"}
                              select
                              InputProps={{
                                sx: {
                                  borderRadius: "20px", // Apply border radius to the input element
                                  height: "56px",
                                  borderColor: "#79747E",
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
                  order.service === "Auto Import" ||
                  order.service === "Shop For Me" ? (
                    <PackageDetails
                      proceed={proceed}
                      order={order}
                      type={type}
                    />
                  ) : (
                    <PackageDetailsForm />
                  )
                ) : activeStep === 2 ? (
                  order.service === "Auto Import" ? (
                    <>
                      <ShippingDetails
                        proceed={proceed}
                        order={order}
                        type={type}
                      />
                    </>
                  ) : order.service === "Shop For Me" ? (
                    <PaymentInformation toggle={toggle} drop={drop} />
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
                                  />
                                  <FormControlLabel
                                    value="$"
                                    control={<Radio color="primary" />}
                                    label="$"
                                  />
                                </Box>
                              </RadioGroup>
                            </FormControl>
                          </Box>
                          <Box mt="20px">
                            <TextField
                              id="discount"
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              // type="number"
                              label="Discount"
                              fullWidth
                              // placeholder="Select origin"
                              InputProps={{
                                startAdornment: <PercentageIcon />,
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
                    </Box>
                  )
                ) : activeStep === 3 ? (
                  order.service === "Auto Import" ? (
                    <>
                      <BillingDetails
                        proceed={proceed}
                        order={order}
                        type={type}
                      />
                      <Box mt="30px">
                        <PaymentInformation toggle={toggle} drop={drop} />
                      </Box>
                    </>
                  ) : (
                    <Box
                      display="flex"
                      sx={{ flexDirection: "column", gap: "30px" }}
                    >
                      <OrderInformation
                        order={order}
                        type={type}
                        toggle={toggle}
                        drop={drop}
                      />
                      <PackageDetails
                        order={order}
                        type={type}
                        toggle={toggle}
                        drop={drop}
                      />
                      {order.service === "Shop For Me" ? (
                        <>
                          <BillingDetails
                            order={order}
                            type={type}
                            toggle={toggle}
                            drop={drop}
                          />
                        </>
                      ) : null}
                    </Box>
                  )
                ) : activeStep === 4 ? (
                  order.service === "Auto Import" ? (
                    <Box display="flex" flexDirection="column" gap="30px">
                      <OrderInformation
                        order={order}
                        type={type}
                        toggle={toggle}
                        drop={drop}
                      />

                      <PackageDetails
                        order={order}
                        type={type}
                        toggle={toggle}
                        drop={drop}
                      />
                      <ShippingDetails
                        order={order}
                        type={type}
                        toggle={toggle}
                        drop={drop}
                      />
                      <BillingDetails
                        order={order}
                        type={type}
                        toggle={toggle}
                        drop={drop}
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
                                ? `You have just saved this ${order.service} request to draft. The customer will not be informed about this order until this request has been approved.`
                                : `You have just successfully approved this ${order.service} order request`}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      {order.service === "Shop For Me" && !saveAsDraft ? (
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
                  )
                ) : order.service === "Auto Import" ? (
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
                              ? `You have just saved this ${order.service} request to draft. The customer will not be informed about this order until this request has been approved.`
                              : `You have just successfully approved this ${order.service} order request`}
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
                                The customer has been informed about this order
                                and prompted to Place this order.
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
                                The customer has been informed about this order
                                and prompted to Place this order.
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
                          }}
                          onClick={() => {
                            if (!finish) handleNext();
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
                          if (!finish) handleNext();
                        }}
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                )}
              </>
            </div>
          ) : (
            <div
              className="p-[30px] bg-white rounded-[20px]"
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              {/* <p className="border border-brand/200 p-[15px] rounded-[20px] font-roboto border-dotted ">
          Order Details
        </p> */}

              <p className="font-roboto text-[24px]">
                <span>{type === "request" ? "Request ID:" : "Order ID:"}</span>{" "}
                <span className="font-[700]">{order.id}</span>
              </p>

              <div className="flex flex-col space-y-[40px] font-roboto">
                <OrderInformation order={order} type={type} />
                {type === "request" ? (
                  <>
                    {order.service === "Auto Import" ? null : (
                      <ShippingDetails
                        order={order}
                        type={type}
                        toggle={toggle}
                        drop={drop}
                      />
                    )}
                    <PackageDetails
                      order={order}
                      type={type}
                      toggle={toggle}
                      drop={drop}
                    />
                    {order.service === "Auto Import" ||
                    order.service === "Shop For Me" ? null : (
                      <BillingDetails
                        order={order}
                        type={type}
                        toggle={toggle}
                        drop={drop}
                      />
                    )}
                  </>
                ) : (
                  <>
                    <PackageDetailsInfo
                      order={order}
                      service={order.service}
                      type={type}
                    />
                    <ShippingDetailsInfo
                      order={order}
                      service={order.service}
                      type={type}
                    />
                    <BillingDetailsInfo
                      order={order}
                      service={order.service}
                      type={type}
                    />
                  </>
                )}

                {type === "request" ? (
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
                      startIcon={<CloseCircle />}
                      variant="contained"
                      sx={{
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
                      startIcon={<ArrowRightWhite />}
                      variant="contained"
                      sx={{
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
          )}
        </div>
      )}
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
