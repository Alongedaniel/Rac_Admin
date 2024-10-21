import { Box, Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import car from "../../../assets/images/car.png";
import CardWrapper from "./CardWrapper";
import EditIcon from "../../../assets/icons/EditIcon";
import currencyFormatter from "../../CurrencyFormatter";
import AutoImportPackageDetails from "./AutoImportPackageDetails";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";
import UserModals from "../../../pages/Users/components/UserModals";
import DollarIcon from "../../../assets/icons/DollarIcon";
import CircleRight from "../../../assets/icons/CircleRight";
import { BsPlus } from "react-icons/bs";
import SwitchCopm from "./SwitchCopm";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import UploadIcon from "../../../assets/icons/UploadIcon";
import dayjs from "dayjs";
import { City, Country, State } from "country-state-city";

const AutoImportItem = ({ view, item, itemNumber, proceed }) => {
  const today = dayjs();
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(today);
  const [carBrand, setCarBrand] = useState(item?.carBrand || "");
  const [carCondition, setCarCondition] = useState(item?.carCondition || "");
  const [carImage, setCarImage] = useState(item?.carImage || "");
  const [carTitle, setCarTitle] = useState(item?.carTitle || "");
  const [carValue, setCarValue] = useState(item?.carValue || 0);
  const [color, setColor] = useState(item?.color || "");
  const [link, setLink] = useState(item?.link || "");
  const [mileage, setMileage] = useState(item?.mileage || 0);
  const [model, setModel] = useState(item?.model || "");
  const [productionYear, setProductionYear] = useState(
    item?.productionYear || ""
  );
  const [vehicleIdNumber, setVehicleIdNumber] = useState(
    item?.vehicleIdNumber || ""
  );
  const [additionalDescription, setAdditionalDescription] = useState(
    item?.additionalDescription || ""
  );
  const [address, setAddress] = useState(item?.pickupDetails?.address || "");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState(
    item?.pickupDetails?.countryCode || ""
  );
  const [email, setEmail] = useState(item?.pickupDetails?.email || "");
  const [firstName, setFirstName] = useState(
    item?.pickupDetails?.firstName || ""
  );
  const [lastName, setLastName] = useState(item?.pickupDetails?.lastName || "");
  const [locationType, setLocationType] = useState(
    item?.pickupDetails?.locationType || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    item?.pickupDetails?.phoneNumber || ""
  );
  const [pickUpDate, setPickUpDate] = useState(
    item?.pickupDetails?.pickUpDate || ""
  );
  const [state, setState] = useState("");
  const [zipPostalCode, setZipPostalCode] = useState(
    item?.pickupDetails?.zipPostalCode || ""
  );
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedState, setSelectedState] = useState();
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setStates(State.getStatesOfCountry(selectedCountry?.isoCode));
    setCities(
      City.getCitiesOfState(selectedCountry?.isoCode, selectedState?.isoCode)
    );
  }, []);

  console.log(country)
  console.log(state)
  console.log(city)
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        marginTop: "20px",
      }}
    >
      <CardWrapper title={`Car - #${itemNumber}`}>
        <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
          <>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Car Model:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.carBrand}
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Model:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.model}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Year:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.productionYear}
              </p>
            </div>
          </>
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Value:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {currencyFormatter.format(item?.carValue)}
            </p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Condition:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.carCondition}
            </p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Car Color:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.color}
            </p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Mileage:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.mileage}km
            </p>
          </div>
        </div>
        <div className="mt-[30px] grid grid-cols-5">
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              VIN Number:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.vehicleIdNumber}
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Direct URL/Website Link to the Car:
            </p>
            <a
              href={item?.link}
              className="font-roboto  text-[20px]"
              style={{ color: "#B3261E" }}
            >
              {item?.link}
            </a>
          </div>
          <div className="col-span-2">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
              Car Picture:
            </p>
            <Box width="280px" height="150px" borderRadius="10px">
              <div>
                <img
                  src={item?.carImage}
                  alt="car"
                  className=" mt-[10px] rounded-[10px]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Box>
          </div>
          <div className="col-span-3">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
              Copy of the Car Title:
            </p>
            <img
              src={item?.carTitle}
              alt="car"
              className="w-[147px] h-[150px] mt-[10px] rounded-[10px]"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-5">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
              Additional Description:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.additionalDescription}
            </p>
          </div>
        </div>
        {/* <div className="grid grid-cols-5 mt-[30px] gap-[20px]">
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Color:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">Blue</p>
          </div>
          <div className="">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Stripes:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">5 inches</p>
          </div>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div> */}
        <Box
          display={item?.pickupDetails?.firstName ? "block" : "none"}
          width="100%"
          height="1px"
          bgcolor="#79747E"
          mt="30px"
          mb="20px"
        ></Box>
        <div
          style={{ display: item?.pickupDetails?.firstName ? "block" : "none" }}
        >
          <div style={{ marginBottom: "20px" }}>
            <p className="font-roboto  text-[22px] text-brand/100">
              Pickup Details
            </p>
          </div>
          <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's First Name:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.firstName}
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Last Name:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.lastName}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Phone Number:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.phoneNumber}
              </p>
            </div>
            <div className="col-span-3">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Contact's Email:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.email}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-[20px] mt-[30px] ">
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Country:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.country}
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                State:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.state}
              </p>
            </div>
            <div className="">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                City:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.city}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Zip/postal Code:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.pickupDetails?.zipPostalCode}
              </p>
            </div>
          </div>
          <div className="mt-[30px] col-span-5">
            <p className="text-[14px] text-t/100 font-roboto text-brand/200">
              Street Address:
            </p>
            <p className="font-roboto  text-[20px] text-brand/100">
              {item?.pickupDetails?.address}
            </p>
          </div>
        </div>
      </CardWrapper>
      {view && !proceed ? null : (
        <Box onClick={() => setOpenModal(true)}>
          <EditIcon />
        </Box>
      )}
      <UserModals
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Edit Package Details"
      >
        <CardWrapper title="Car - #1">
          <Box>
            <Box mt="10px" pt="30px">
              <Box mb="30px" display="flex" flexDirection="column" gap="30px">
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
                      // placeholder="select origin"
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
                      // placeholder="select origin"
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
                      onChange={(e) => setCarCondition(e.target.value)}
                      fullWidth
                      // placeholder="select origin"
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
                      placeholder="Enter the Millage"
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
                      }}
                    >
                      No file chosen
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
                      }}
                    >
                      No file chosen
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
                <Typography fontSize="16px" color="#1C1B1F" fontWeight={700}>
                  Note:
                </Typography>
                <Typography fontSize="16px" color="#1C1B1F">
                  We need the details of the car title before we can schedule a
                  pick up, Be sure sure that our driver can collect can it
                  during pick up, as we can’t ship a car without the title.
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
                  maxRows={5}
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
              <Box mb="30px">
                <div className="flex items-center space-x-[10px] ">
                  <CircleRight />
                  <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                    Describe this car further with the following properties
                    (optional)
                  </p>
                </div>
                {/* <Box px="30px" mb="30px">
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
                      // value={itemColor}
                      // onChange={(e) => setItemColor(e.target.value)}
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
                  </Box>
                </Box> */}
              </Box>
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
                  <Box mb="30px" display="flex" gap="60px" alignItems="center">
                    <Typography fontSize="22px" color="#1C1B1F">
                      Drop Off
                    </Typography>
                    <Box display="flex" gap="10px" alignItems="center">
                      <SwitchCopm />
                      <TooltipIcon />
                    </Box>
                  </Box>
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
                              onChange={(e) => setCountryCode(e.target.value)}
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
                              onChange={(e) => setPhoneNumber(e.target.value)}
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
                      placeholder="Enter the Millage"
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
                            onChange={(e) => setCountry(e.target.value)}
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
                                onClick={() => setSelectedCountry(country)}
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
                            onChange={(e) => setState(e.target.value)}
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
                                onClick={() => setSelectedState(state)}
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
                            onChange={(e) => setCity(e.target.value)}
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
                                // onClick={() => setCity(city)}
                                sx={{ zIndex: 9999 }}
                              >
                                {city.name}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                      </Grid>
                      <Typography fontSize={"12px"} px="20px" mt="5px">
                        The car location(city) is used to determine the pickup
                        cost. Select a car in Houston or Atlanta city to enjoy a
                        pick-up cost of just $195
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
                          // value={productName}
                          // onChange={(e) => setProductName(e.target.value)}
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
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardWrapper>
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
            onClick={() => setOpenModal(false)}
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
          >
            Update
          </Button>
        </Box>
      </UserModals>
    </Box>
  );
};

export default AutoImportItem;
