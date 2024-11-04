import React, { useEffect, useState } from "react";
import EditIcon from "../../../assets/icons/EditIcon";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import CircleRight from "../../../assets/icons/CircleRight";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import ItemBox from "./ItemBox";
import ProductBox from "./ProductBox";
import CardWrapper from "../../../components/order/components/CardWrapper";
import { toTitleCase } from "../order-details";
import AutoImportItem from "../../../components/order/components/AutoImportItem";
import AddIcon from "../../../assets/icons/AddIcon";
import PackageDetailsForm from "../../../components/order/components/PackageDetailsForm";
import UserModals from "../../Users/components/UserModals";
import AutoImportPackageDetails from "../../../components/order/components/AutoImportPackageDetails";
import SwitchCopm from "../../../components/order/components/SwitchCopm";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import DollarIcon from "../../../assets/icons/DollarIcon";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import PlusIcon from "../../../assets/icons/PlusIcon";
import SubtractIcon from "../../../assets/icons/SubtractIcon";
import UploadIcon from "../../../assets/icons/UploadIcon";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { City, Country, State } from "country-state-city";

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
  dimensions,
}) => {
  const [open, setOpen] = useState(false);
  const [openPreviewModal, setOpenPreviewModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [carCondition, setCarCondition] = useState("");
  const [carImage, setCarImage] = useState({ img: "", name: "" });
  const [carTitle, setCarTitle] = useState({ img: "", name: "" });
  const [carValue, setCarValue] = useState(0);
  const [color, setColor] = useState("");
  const [link, setLink] = useState("");
  const [mileage, setMileage] = useState(0);
  const [model, setModel] = useState("");
  const [productionYear, setProductionYear] = useState("");
  const [vehicleIdNumber, setVehicleIdNumber] = useState("");
  const [additionalDescription, setAdditionalDescription] = useState("");
  const [dropOff, setDropOff] = useState(false);

  const [itemName, setItemName] = useState("");
  const [originalCost, setOriginalCost] = useState(0);
  const [store, setStore] = useState("");
  const [itemUrl, setItemUrl] = useState("");
  const [urgentPurchase, setUrgentPurchase] = useState(false);
  const [quantityValue, setQuantityValue] = useState(0);
  const [itemImage, setItemImage] = useState({ img: "", name: "" });
  const today = dayjs();
  const [date, setDate] = useState(today);

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [locationType, setLocationType] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [state, setState] = useState("");
  const [zipPostalCode, setZipPostalCode] = useState("");
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setStates(State.getStatesOfCountry(country?.isoCode));
    setCities(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [country, state]);

  const resetFields = () => {
    setCarBrand("");
    setCarCondition("");
    setCarImage("");
    setCarTitle("");
    setCarValue(0);
    setColor("");
    setLink("");
    setMileage(0);
    setModel("");
    setProductionYear("");
    setVehicleIdNumber("");
    setAdditionalDescription("");
    setDropOff(false);

    setItemName("");
    setOriginalCost(0);
    setStore("");
    setItemUrl("");
    setUrgentPurchase(false);
    setQuantityValue(0);
    setItemImage(null);

    setAddress("");
    setCity("");
    setCountry("");
    setCountryCode("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setLocationType("");
    setPhoneNumber("");
    setPickUpDate("");
    setState("");
  };

  const [openEditOrigin, setOpenEditOrigin] = useState(false);
  const [origins, setOrigins] = useState(
    order?.request?.serviceType === "Export"
      ? ["Nigeria Warehouse (Lagos)"]
      : [
          "UK Warehouse (London)",
          "Dubai Warehouse",
          "China Warehouse (Guangzhou city)",
          "US Warehouse (Richmond Texas)",
        ]
  );

    const [imageError, setImageError] = useState("");
    const MAX_FILE_SIZE = 2 * 1024 * 1024;

  const handleUploadImage = (e, setImage) => {
    const file = e.target.files[0];
    if (file.size > MAX_FILE_SIZE) {
      setImageError(
        "File size exceeds the 2 MB limit. Please upload a smaller file."
      );
      return;
    }
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage({
          img: reader.result,
          name: file.name,
        });
      };
      reader.readAsDataURL(file); // Converts file to a base64 string
    }
  };

  const handleAddCar = () => {
    setrequests((prev) => [
      ...prev,
      toTitleCase(order?.request?.serviceType) === "Shop For Me"
        ? {
            itemName,
            originalCost,
            qty: quantityValue,
            additionalDescription,
            itemImage: itemImage?.img,
            store,
            urgentPurchase,
            itemUrl,
          }
        : {
            carBrand,
            carCondition,
            color,
            link,
            model,
            carValue,
            mileage,
            additionalDescription,
            carImage: carImage?.img,
            carTitle: carTitle?.img,
            productionYear,
            vehicleIdNumber,
            pickupDetails: {
              address,
              city: city.name,
              country: country.name,
              countryCode,
              email,
              firstName,
              lastName: "",
              locationType,
              phoneNumber,
              pickUpDate: date,
              state: state.name,
              zipPostalCode,
            },
          },
    ]);
    resetFields();
  };
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
                  {origin}
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
        {!activeStep && !proceed ? null : (
          <Box onClick={() => setOpenEditOrigin(true)}>
            <EditIcon />
          </Box>
        )}
      </Box>
      {toTitleCase(order?.serviceType) === "Auto Import"
        ? (confirm ? requests : order?.request?.requestItems)?.map((item, i) =>
            isRequest ? (
              <AutoImportItem
                view
                item={item}
                itemNumber={i + 1}
                proceed={proceed}
                refetch={refetch}
                order={order}
                requests={requests}
                activeStep={activeStep}
                setrequests={setrequests}
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
            )
          )
        : !confirm
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
                requests={requests}
                setrequests={setrequests}
              />
            ))
          : requests?.map((item, i) => (
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
                requests={requests}
                setrequests={setrequests}
              />
            ))}
      {(toTitleCase(order?.serviceType) === "Import" ||
        toTitleCase(order?.serviceType) === "Export") &&
        order?.request?.requestStatus === "responded" && (
          <Box mt="20px" display="flex" alignItems="center" gap="30px">
            <CardWrapper title="Package Dimension">
              <div className="grid grid-cols-6 mt-[20px]">
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Weight:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {dimensions?.weight} kg
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Height:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {dimensions?.height} inches
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Length:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {dimensions?.length} inches
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Width:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {dimensions?.width} inches
                  </p>
                </div>
              </div>
            </CardWrapper>
            {!proceed && !activeStep ? null : (
              <Box onClick={() => setActiveStep(1)}>
                <EditIcon />
              </Box>
            )}
          </Box>
        )}
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
        open={openEditOrigin}
        onClose={() => setOpenEditOrigin(false)}
        title={"Edit Package Origin"}
      >
        <Box>
          <div className="flex items-center space-x-[10px] ">
            <CircleRight />
            <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
              Tell us where this package will be shipped from
            </p>
          </div>
          <Box px="30px" mt="12px">
            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              pt="30px"
              sx={{ borderTop: "1px solid #79747E" }}
            >
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="origin"
                type="text"
                label="Origin/Shipment Location"
                placeholder="Select origin"
                value={origin}
                // onChange={(e) => setOrigin(e.target.value)}
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
                {origins.map((x) => (
                  <MenuItem
                    key={x}
                    value={x}
                    onClick={() => {
                      setOrigin(x);
                      setOpenEditOrigin(false);
                    }}
                  >
                    {x}
                  </MenuItem>
                ))}
              </TextField>
              <TooltipIcon />
            </Box>
          </Box>
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
              onClick={() => setOpenEditOrigin(false)}
            >
              Back
            </Button>
            {/* <Button
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
                setOpenEditOrigin(false);
              }}
            >
              Update
            </Button> */}
          </Box>
        </Box>
      </UserModals>
      <UserModals
        open={open}
        onClose={() => setOpen(false)}
        title={
          toTitleCase(order?.serviceType) === "Auto Import"
            ? "Add New Car"
            : "Add New Item"
        }
      >
        {toTitleCase(order?.serviceType) === "Auto Import" ? (
          // <AutoImportPackageDetails
          //   setOrigin={setOrigin}
          //   origin={origin}
          //   requests={requests}
          //   setrequests={setrequests}
          //   service={toTitleCase(order?.request?.serviceType)}
          // />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "30px",
              my: "20px",
            }}
          >
            <CardWrapper title={`Car - #${requests?.length + 1}`}>
              <Box>
                <Box mt="10px" pt="30px">
                  <Box
                    mb="30px"
                    display="flex"
                    flexDirection="column"
                    gap="30px"
                  >
                    <Grid container wrap="nowrap" gap="30px">
                      <Grid item xs={3}>
                        {" "}
                        <TextField
                          required
                          id="brand"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Brand"
                          value={carBrand}
                          onChange={(e) => setCarBrand(e.target.value)}
                          fullWidth
                          // placeholder="Select origin"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={4.5}>
                        {" "}
                        <TextField
                          required
                          id="model"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Model"
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                          fullWidth
                          // placeholder="Select origin"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={4.5}>
                        {" "}
                        <TextField
                          required
                          id="production-year"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Production Year"
                          value={productionYear}
                          onChange={(e) => setProductionYear(e.target.value)}
                          fullWidth
                          // placeholder="Select origin"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" gap="30px">
                      <Grid item xs={4.5}>
                        {" "}
                        <TextField
                          required
                          id="car-value"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Car Value"
                          value={carValue}
                          onChange={(e) => setCarValue(e.target.value)}
                          fullWidth
                          placeholder="Enter the cost of the car"
                          InputProps={{
                            startAdornment: <DollarIcon />,
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={3.75}>
                        {" "}
                        <TextField
                          required
                          id="car-condition"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Car Condition"
                          value={carCondition}
                          select
                          fullWidth
                          placeholder="Select car condition"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        >
                          {["Drivable", "Not Drivable"].map((x) => (
                            <MenuItem
                              value={x}
                              key={x}
                              onClick={() => setCarCondition(x)}
                            >
                              {x}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={3.75}>
                        {" "}
                        <TextField
                          required
                          id="car-color"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Car Color"
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          fullWidth
                          placeholder="What is the car color?"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid container wrap="nowrap" gap="30px">
                      <Grid item xs={4}>
                        {" "}
                        <TextField
                          required
                          id="mileage"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Mileage"
                          value={mileage}
                          onChange={(e) => setMileage(e.target.value)}
                          fullWidth
                          placeholder="Enter the Mileage"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        {" "}
                        <TextField
                          required
                          id="vin-number"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="VIN Number"
                          value={vehicleIdNumber}
                          onChange={(e) => setVehicleIdNumber(e.target.value)}
                          fullWidth
                          placeholder="Enter the VIN Number"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        {" "}
                        <TextField
                          required
                          id="url"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Direct URL/Website Link to the Car"
                          value={link}
                          onChange={(e) => setLink(e.target.value)}
                          fullWidth
                          placeholder="Enter the Car’s web link"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box mb="30px" display="flex" alignItems="center" gap="30px">
                    <Box width="100%">
                      <Typography
                        fontSize="12px"
                        sx={{ pl: "10px" }}
                        color="#49454F"
                        mb="10px"
                      >
                        Upload Car Picture
                      </Typography>
                      <Box height="40px" display="flex">
                        <Box width="100%">
                          <input
                            type="file"
                            name="file"
                            id={`car-image`}
                            style={{ display: "none" }}
                            onChange={(e) => handleUploadImage(e, setCarImage)}
                          />
                          <label
                            htmlFor={`car-image`}
                            style={{
                              display: "inline-block",
                              height: "100%",
                              width: "100%",
                            }}
                          >
                            <Box
                              height="100%"
                              width="100%"
                              display="flex"
                              gap="10px"
                              justifyContent={"center"}
                              alignItems={"center"}
                              bgcolor="#E8DEF8"
                              fontSize="14px"
                              fontWeight={500}
                              border="1px solid #79747E"
                            >
                              <UploadIcon />
                              Choose file
                            </Box>
                          </label>
                        </Box>
                        <Box
                          width="100%"
                          height="100%"
                          display="flex"
                          justifyContent={"center"}
                          alignItems={"center"}
                          border="1px solid #79747E"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            borderTopRightRadius: "100px",
                            borderBottomRightRadius: "100px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (carImage?.name) {
                              setSelectedImage(carImage?.img);
                              setOpenPreviewModal(true);
                            }
                          }}
                        >
                          {carImage.name
                            ? carImage.name.length > 25
                              ? carImage.name.slice(0, 25) + "..."
                              : carImage.name
                            : "No file chosen"}
                        </Box>
                      </Box>
                    </Box>
                    <Box width="100%">
                      <Typography
                        fontSize="12px"
                        sx={{ pl: "10px" }}
                        color="#49454F"
                        mb="10px"
                      >
                        Upload Copy of Car Title
                      </Typography>
                      <Box height="40px" display="flex">
                        <Box width="100%">
                          <input
                            type="file"
                            name="file"
                            id={`car-title`}
                            style={{ display: "none" }}
                            onChange={(e) => handleUploadImage(e, setCarTitle)}
                          />
                          <label
                            htmlFor={`car-title`}
                            style={{
                              display: "inline-block",
                              height: "100%",
                              width: "100%",
                            }}
                          >
                            <Box
                              height="100%"
                              width="100%"
                              display="flex"
                              gap="10px"
                              justifyContent={"center"}
                              alignItems={"center"}
                              bgcolor="#E8DEF8"
                              fontSize="14px"
                              fontWeight={500}
                              border="1px solid #79747E"
                            >
                              <UploadIcon />
                              Choose file
                            </Box>
                          </label>
                        </Box>
                        <Box
                          width="100%"
                          height="100%"
                          display="flex"
                          justifyContent={"center"}
                          alignItems={"center"}
                          border="1px solid #79747E"
                          sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            borderTopRightRadius: "100px",
                            borderBottomRightRadius: "100px",
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            if (carTitle?.name) {
                              setSelectedImage(carTitle?.img);
                              setOpenPreviewModal(true);
                            }
                          }}
                        >
                          {carTitle.name
                            ? carTitle.name.length > 25
                              ? carTitle.name.slice(0, 25) + "..."
                              : carTitle.name
                            : "No file chosen"}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    mb="30px"
                    p="15px 20px"
                    borderRadius="20px"
                    bgcolor="#F2B8B5"
                  >
                    <Typography
                      fontSize="16px"
                      color="#1C1B1F"
                      fontWeight={700}
                    >
                      Note:
                    </Typography>
                    <Typography fontSize="16px" color="#1C1B1F">
                      We need the details of the car title before we can
                      schedule a pick up, Be sure sure that our driver can
                      collect can it during pick up, as we can’t ship a car
                      without the title.
                    </Typography>
                  </Box>
                  <Box mb="30px">
                    <TextField
                      id="car description"
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      type="text"
                      label="Additional Car Description"
                      value={additionalDescription}
                      onChange={(e) => setAdditionalDescription(e.target.value)}
                      fullWidth
                      multiline
                      rows={5}
                      placeholder="Additional Car Description for the car "
                      InputProps={{
                        sx: {
                          // maxWidth: "540px",
                          borderRadius: "20px", // Apply border radius to the input element
                          // height: "144px",
                          borderColor: "#79747E",
                          fontSize: "16px",
                          color: "#1C1B1F",
                        },
                      }}
                    />
                  </Box>
                  {/* <Box mb="30px">
                    <div className="flex items-center space-x-[10px] ">
                      <CircleRight />
                      <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                        Describe this car further with the following properties
                        (optional)
                      </p>
                    </div>
                    <Box px="30px" mb="30px">
                      <Box
                        display="flex"
                        alignItems="center"
                        gap="30px"
                        pt="30px"
                        sx={{ borderTop: "1px solid #79747E" }}
                      >
                        <TextField
                          id="item-color"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Item Color"
                          // value={color}
                          // onChange={(e) => setColor(e.target.value)}
                          placeholder="Enter the color of the item"
                          InputProps={{
                            sx: {
                              width: "277px",
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                        <Button
                          startIcon={<BsPlus size={20} />}
                          variant="contained"
                          sx={{
                            bgcolor: "#49454F",
                            color: "#E6E1E5",
                            width: "176px",
                            height: "56px",
                            borderRadius: "20px",
                            textTransform: "none",
                          }}
                          onClick={() => setOpen(true)}
                        >
                          Add Properties
                        </Button>
                      </Box>
                    </Box>
                  </Box> */}
                  <Box>
                    <div className="flex items-center space-x-[10px] ">
                      <CircleRight />
                      <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                        Additional Details
                      </p>
                    </div>
                    <Box mb="30px">
                      <Box
                        ml="30px"
                        mb="30px"
                        sx={{ borderTop: "1px solid #79747E" }}
                      ></Box>
                      <Box
                        mb="30px"
                        display="flex"
                        gap="60px"
                        alignItems="center"
                      >
                        <Typography fontSize="22px" color="#1C1B1F">
                          Enable Pickup
                        </Typography>
                        <Box display="flex" gap="10px" alignItems="center">
                          <Box onClick={() => setDropOff(!dropOff)}>
                            <SwitchCopm checked={dropOff} />
                          </Box>
                          <TooltipIcon />
                        </Box>
                      </Box>
                      {dropOff ? (
                        <Box
                          pl="30px"
                          display="flex"
                          flexDirection="column"
                          gap="30px"
                        >
                          <Grid container gap="30px" wrap="nowrap">
                            <Grid item xs={5}>
                              {" "}
                              <TextField
                                required
                                id="contact-name"
                                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                type="text"
                                label="Pick up Contact Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                fullWidth
                                placeholder="Contact’s name"
                                InputProps={{
                                  sx: {
                                    borderRadius: "20px", // Apply border radius to the input element
                                    height: "56px",
                                    borderColor: "#79747E",
                                    fontSize: "16px",
                                    color: "#1C1B1F",
                                  },
                                }}
                              />
                            </Grid>
                            <Grid item xs={7}>
                              <Grid container wrap="nowrap">
                                <Grid item xs={4}>
                                  {" "}
                                  <TextField
                                    required
                                    id="contact-code"
                                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                    type="text"
                                    label="Contact Phone Number"
                                    value={countryCode}
                                    onChange={(e) =>
                                      setCountryCode(e.target.value)
                                    }
                                    fullWidth
                                    InputProps={{
                                      sx: {
                                        borderTopLeftRadius: "20px", // Apply border radius to the input element
                                        borderBottomLeftRadius: "20px", // Apply border radius to the input element
                                        height: "56px",
                                        borderColor: "#79747E",
                                        fontSize: "16px",
                                        color: "#1C1B1F",
                                      },
                                    }}
                                  />
                                </Grid>
                                <Grid item xs={8}>
                                  {" "}
                                  <TextField
                                    required
                                    id="contact-email-address"
                                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) =>
                                      setPhoneNumber(e.target.value)
                                    }
                                    fullWidth
                                    placeholder="Enter contact’s phone number"
                                    InputProps={{
                                      sx: {
                                        borderTopRightRadius: "20px", // Apply border radius to the input element
                                        borderBottomRightRadius: "20px", // Apply border radius to the input element
                                        height: "56px",
                                        borderColor: "#79747E",
                                        fontSize: "16px",
                                        color: "#1C1B1F",
                                      },
                                    }}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                          <TextField
                            required
                            id="contact-email-address"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="text"
                            label="Pick up Contact Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            placeholder="Contact’s email address"
                            InputProps={{
                              sx: {
                                borderRadius: "20px", // Apply border radius to the input element
                                height: "56px",
                                borderColor: "#79747E",
                                fontSize: "16px",
                                color: "#1C1B1F",
                              },
                            }}
                          />
                          <TextField
                            required
                            id="contact-address"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="text"
                            label="Pick up Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            fullWidth
                            placeholder="Enter the Address"
                            InputProps={{
                              sx: {
                                borderRadius: "20px", // Apply border radius to the input element
                                height: "56px",
                                borderColor: "#79747E",
                                fontSize: "16px",
                                color: "#1C1B1F",
                              },
                            }}
                          />
                          <Box>
                            <Grid container wrap="nowrap" gap="30px">
                              <Grid item xs={4}>
                                {" "}
                                <TextField
                                  required
                                  id="contact-country"
                                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                  type="text"
                                  label="Location Of The Car (Country)"
                                  value={country.name}
                                  // onChange={(e) => setCountry(e.target.value)}
                                  fullWidth
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
                                >
                                  {countries.map((country, i) => (
                                    <MenuItem
                                      sx={{ zIndex: 9999 }}
                                      value={country.name}
                                      key={i}
                                      onClick={() => setCountry(country)}
                                    >
                                      {country.name}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Grid>
                              <Grid item xs={4}>
                                {" "}
                                <TextField
                                  required
                                  id="contact-state"
                                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                  type="text"
                                  label="Location Of The Car (State)"
                                  value={state.name}
                                  // onChange={(e) => setState(e.target.value)}
                                  fullWidth
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
                                >
                                  {states.map((state, i) => (
                                    <MenuItem
                                      sx={{ zIndex: 9999 }}
                                      value={state.name}
                                      key={i}
                                      onClick={() => setState(state)}
                                    >
                                      {state.name}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Grid>
                              <Grid item xs={4}>
                                {" "}
                                <TextField
                                  required
                                  id="contact-city"
                                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                  type="text"
                                  label="Location Of The Car (City)"
                                  value={city.name}
                                  // onChange={(e) => setCity(e.target.value)}
                                  fullWidth
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
                                >
                                  {cities.map((city, i) => (
                                    <MenuItem
                                      value={city.name}
                                      key={i}
                                      onClick={() => setCity(city)}
                                      sx={{ zIndex: 9999 }}
                                    >
                                      {city.name}
                                    </MenuItem>
                                  ))}
                                </TextField>
                              </Grid>
                            </Grid>
                            <Typography fontSize={"12px"} px="20px" mt="5px">
                              The car location(city) is used to determine the
                              pickup cost. Select a car in Houston or Atlanta
                              city to enjoy a pick-up cost of just $195
                            </Typography>
                          </Box>
                          <Grid container wrap="nowrap" gap="30px">
                            <Grid item xs={4.5}>
                              {" "}
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                  label="Pick Up Date"
                                  slotProps={{
                                    textField: {
                                      helperText: "MM/DD/YYYY",
                                    },
                                  }}
                                  value={date}
                                  onChange={(newValue) => setDate(newValue)}
                                  sx={{
                                    //   display: 'none',
                                    width: "100%",
                                    borderRadius: "20px", // Apply border radius to the input element
                                    height: "56px",
                                    borderColor: "#79747E",
                                    fontSize: "16px",
                                    color: "#1C1B1F",
                                  }}
                                />
                              </LocalizationProvider>
                            </Grid>
                            <Grid item xs={7.5}>
                              {" "}
                              <TextField
                                required
                                id="location-type"
                                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                type="text"
                                label="Pickup Location Type *"
                                value={locationType}
                                onChange={(e) =>
                                  setLocationType(e.target.value)
                                }
                                fullWidth
                                InputProps={{
                                  sx: {
                                    borderRadius: "20px", // Apply border radius to the input element
                                    height: "56px",
                                    borderColor: "#79747E",
                                    fontSize: "16px",
                                    color: "#1C1B1F",
                                  },
                                }}
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      ) : null}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CardWrapper>
          </Box>
        ) : (
          // <PackageDetailsForm
          //   setOrigin={setOrigin}
          //   origin={origin}
          //   requests={requests}
          //   setrequests={setrequests}
          //   service={toTitleCase(order?.request?.serviceType)}
          // />
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
              fullByDefault
              title={`Item - #${requests?.length + 1}`}
            >
              <Box>
                <Box mt="10px" pt="30px">
                  <Box mb="30px">
                    {service === "Shop For Me" && (
                      <Box mb="30px">
                        <Grid container gap="30px" wrap="nowrap" mb="30px">
                          <Grid item xs={9}>
                            <Box display="flex" gap="10px" alignItems="center">
                              <TextField
                                required
                                id="store"
                                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                type="text"
                                label="Store"
                                value={store}
                                onChange={(e) => setStore(e.target.value)}
                                fullWidth
                                placeholder="Select a store"
                                InputProps={{
                                  sx: {
                                    borderRadius: "20px", // Apply border radius to the input element
                                    height: "56px",
                                    borderColor: "#79747E",
                                    fontSize: "16px",
                                    color: "#1C1B1F",
                                  },
                                }}
                              />
                              <TooltipIcon />
                            </Box>
                          </Grid>
                          <Grid item xs={3}>
                            <Box display="flex" gap="10px" alignItems="center">
                              <TextField
                                required
                                id="urgent-purchase"
                                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                type="text"
                                label="Urgent Purchase"
                                value={urgentPurchase ? "Yes" : "No"}
                                fullWidth
                                // placeholder="Select origin"
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
                              >
                                {["Yes", "No"].map((x) => (
                                  <MenuItem
                                    value={x}
                                    key={x}
                                    onClick={() =>
                                      setUrgentPurchase(
                                        x === "Yes" ? true : false
                                      )
                                    }
                                  >
                                    {x}
                                  </MenuItem>
                                ))}
                              </TextField>
                              <TooltipIcon />
                            </Box>
                          </Grid>
                        </Grid>
                        <TextField
                          required
                          id="item-url"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Item URL"
                          value={itemUrl}
                          onChange={(e) => setItemUrl(e.target.value)}
                          fullWidth
                          placeholder="Paste the item link here"
                          InputProps={{
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                        />
                      </Box>
                    )}
                    <TextField
                      required
                      id="product-name"
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      type="text"
                      label="Product Name"
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      fullWidth
                      InputProps={{
                        sx: {
                          borderRadius: "20px", // Apply border radius to the input element
                          height: "56px",
                          borderColor: "#79747E",
                          fontSize: "16px",
                          color: "#1C1B1F",
                        },
                      }}
                    />
                  </Box>
                  <Grid container wrap="nowrap" gap="30px" mb="30px">
                    <Grid item xs={8}>
                      <TextField
                        required
                        id="cost"
                        sx={{ fontSize: "16px", color: "#1C1B1F" }}
                        type="text"
                        value={originalCost}
                        onChange={(e) =>
                          setOriginalCost(Number(e.target.value))
                        }
                        label="Item Original Cost"
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
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        id="quantity"
                        sx={{ fontSize: "16px", color: "#1C1B1F" }}
                        type="number"
                        label="Quantity"
                        value={quantityValue}
                        fullWidth
                        // placeholder="Select origin"
                        InputProps={{
                          startAdornment: (
                            <Box
                              zIndex={2}
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                if (quantityValue > 0)
                                  setQuantityValue((prev) => prev - 1);
                              }}
                            >
                              <SubtractIcon />
                            </Box>
                          ),
                          endAdornment: (
                            <Box
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                setQuantityValue((prev) => prev + 1);
                              }}
                            >
                              <PlusIcon />
                            </Box>
                          ),
                          sx: {
                            borderRadius: "20px", // Apply border radius to the input element
                            height: "56px",
                            borderColor: "#79747E",
                            fontSize: "16px",
                            color: "#1C1B1F",
                            input: {
                              textAlign: "center",
                            },
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Box mb="30px">
                    <Typography
                      fontSize="12px"
                      sx={{ pl: "10px" }}
                      color="#49454F"
                    >
                      Upload Product/Item Picture
                    </Typography>
                    <Box height="40px" display="flex">
                      <Box width="100%">
                        <input
                          type="file"
                          name="file"
                          id={`item-image`}
                          style={{ display: "none" }}
                          onChange={(e) => handleUploadImage(e, setItemImage)}
                        />
                        <label
                          htmlFor={`item-image`}
                          style={{
                            display: "inline-block",
                            height: "100%",
                            width: "100%",
                          }}
                        >
                          <Box
                            height="100%"
                            width="100%"
                            display="flex"
                            gap="10px"
                            justifyContent={"center"}
                            alignItems={"center"}
                            bgcolor="#E8DEF8"
                            fontSize="14px"
                            fontWeight={500}
                            border="1px solid #79747E"
                          >
                            <UploadIcon />
                            Choose file
                          </Box>
                        </label>
                      </Box>
                      <Box
                        width="100%"
                        height="100%"
                        display="flex"
                        justifyContent={"center"}
                        alignItems={"center"}
                        border="1px solid #79747E"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          borderTopRightRadius: "100px",
                          borderBottomRightRadius: "100px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          if (itemImage?.name) {
                            setSelectedImage(itemImage?.img);
                            setOpenPreviewModal(true);
                          }
                        }}
                      >
                        {itemImage?.name
                          ? itemImage?.name?.length > 25
                            ? itemImage?.name?.slice(0, 25) + "..."
                            : itemImage?.name
                          : "No file chosen"}
                      </Box>
                    </Box>
                  </Box>
                  <Box mb="30px">
                    <TextField
                      id="product/item description"
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      type="text"
                      label="Product/Item Description"
                      value={additionalDescription}
                      onChange={(e) => setAdditionalDescription(e.target.value)}
                      fullWidth
                      multiline
                      rows={5}
                      // placeholder="Select origin"
                      InputProps={{
                        sx: {
                          // maxWidth: "540px",
                          borderRadius: "20px", // Apply border radius to the input element
                          // height: "144px",
                          borderColor: "#79747E",
                          fontSize: "16px",
                          color: "#1C1B1F",
                        },
                      }}
                    />
                  </Box>
                  {/* <Box>
                      <div className="flex items-center space-x-[10px] ">
                        <CircleRight />
                        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                          Describe the item you wish to purchase further with
                          the following properties
                        </p>
                      </div>
                      <Box px="30px" mb="30px">
                        <Box
                          display="flex"
                          alignItems="center"
                          gap="30px"
                          pt="30px"
                          sx={{ borderTop: "1px solid #79747E" }}
                        >
                          <TextField
                            id="item-color"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="text"
                            label="Item Color"
                            value={itemColor}
                            onChange={(e) => setItemColor(e.target.value)}
                            placeholder="Enter the color of the item"
                            InputProps={{
                              sx: {
                                width: "277px",
                                borderRadius: "20px", // Apply border radius to the input element
                                height: "56px",
                                borderColor: "#79747E",
                                fontSize: "16px",
                                color: "#1C1B1F",
                              },
                            }}
                          />
                          <Button
                            startIcon={<AddIcon color="#E6E1E5" />}
                            onClick={() => setOpen(true)}
                            variant="contained"
                            sx={{
                              bgcolor: "#49454F",
                              color: "#E6E1E5",
                              width: "176px",
                              height: "56px",
                              borderRadius: "20px",
                              textTransform: "none",
                            }}
                          >
                            Add Properties
                          </Button>
                        </Box>
                      </Box>
                    </Box> */}
                </Box>
              </Box>
            </CardWrapper>
          </Box>
        )}
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
            onClick={() => setOpen(false)}
          >
            Back
          </Button>
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
              handleAddCar();
              setOpen(false);
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
      <UserModals
        open={openPreviewModal}
        onClose={() => setOpenPreviewModal(false)}
        title={
          toTitleCase(order?.serviceType) === "Auto Import"
            ? "Car Picture"
            : "Item Picture"
        }
        width="fit-content"
        height="fit-content"
      >
        <Box
          sx={{
            borderRadius: "20px",
          }}
        >
          <img
            src={selectedImage}
            alt="car"
            style={{ width: "518px", height: "311px", objectFit: "cover" }}
          />
        </Box>
        <Box mt="30px" width="100%" display="flex" justifyContent="flex-end">
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
            onClick={() => setOpenPreviewModal(false)}
          >
            Back
          </Button>
        </Box>
      </UserModals>
      <Snackbar
        open={imageError.length}
        message={imageError}
        onClose={() => setImageError("")}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            borderRadius: "30px",
            width: "fit-content",
          },
        }}
      />
    </div>
  );
};

export default PackageDetails;
