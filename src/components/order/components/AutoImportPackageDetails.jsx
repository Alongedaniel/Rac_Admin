import {
  Box,
  Button,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import CardWrapper from "./CardWrapper";
import DollarIcon from "../../../assets/icons/DollarIcon";
import SubtractIcon from "../../../assets/icons/SubtractIcon";
import PlusIcon from "../../../assets/icons/PlusIcon";
import UploadIcon from "../../../assets/icons/UploadIcon";
import { BsPlus } from "react-icons/bs";
import DeletIcon from "../../../assets/icons/DeletIcon";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import SwitchCopm from "./SwitchCopm";
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddPropertyModal from "./AddPropertyModal";

const AutoImportPackageDetails = ({
  origin = "",
  setOrigin = () => {},
  requests,
  setrequests,
}) => {
  const today = dayjs();
  const [date, setDate] = useState(today);
  const [open, setOpen] = useState(false);
    const [imageError, setImageError] = useState("");
    const MAX_FILE_SIZE = 2 * 1024 * 1024;
  const [origins, setOrigins] = useState([
    "UK Warehouse (London)",
    "Dubai Warehouse",
    "China Warehouse (Guangzhou city)",
    "US Warehouse (Richmond Texas)",
  ]);
  const addNewOrder = () => {
    const newOrder = {
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
      pickupCost: {
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
    };
    setrequests([...requests, newOrder]);
  };

  const handleInputChange = (id, field, value) => {
     if (field === "productImage" && value) {
       if (value.size > MAX_FILE_SIZE) {
         setImageError(
           "File size exceeds the 2 MB limit. Please upload a smaller file."
         );
         return;
       }
     }
    const updatedrequests = requests.map((order, i) =>
      i === id
        ? {
            ...order,
            ...(typeof field === "string" ? { [field]: value } : field),
          }
        : order
    );
    setrequests(updatedrequests);
  };

  const handleDeleteItem = (id) => {
    const filteredOrder = requests.filter((order, i) => i !== id);
    setrequests(filteredOrder);
  };
  return (
    <Box>
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
              {origins.map((x, i) => (
                <MenuItem value={x} key={i} onClick={() => setOrigin(x)}>
                  {x}
                </MenuItem>
              ))}
            </TextField>
            <TooltipIcon />
          </Box>
        </Box>
      </Box>
      <Box mt="30px">
        <div className="flex items-center space-x-[10px] ">
          <CircleRight />
          <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
            Fill in the Car(s) Details
          </p>
        </div>
        {requests?.map((request, i) => (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "30px",
              my: "20px",
            }}
          >
            <CardWrapper title={`Car - #${i + 1}`}>
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
                          value={request.carBrand}
                          onChange={(e) =>
                            handleInputChange(i, "carBrand", e.target.value)
                          }
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
                          value={request.model}
                          onChange={(e) =>
                            handleInputChange(i, "model", e.target.value)
                          }
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
                          value={request.productionYear}
                          onChange={(e) =>
                            handleInputChange(
                              i,
                              "productionYear",
                              e.target.value
                            )
                          }
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
                          value={request.carValue}
                          onChange={(e) =>
                            handleInputChange(i, "carValue", e.target.value)
                          }
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
                          value={request.carCondition}
                          select
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
                        >
                          {["Drivable", "Not Drivable"].map((x) => (
                            <MenuItem
                              value={x}
                              key={i}
                              onClick={() =>
                                handleInputChange(i, "carCondition", x)
                              }
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
                          value={request.color}
                          onChange={(e) =>
                            handleInputChange(i, "color", e.target.value)
                          }
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
                          value={request.mileage}
                          onChange={(e) =>
                            handleInputChange(i, "mileage", e.target.value)
                          }
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
                          value={request.vehicleIdNumber}
                          onChange={(e) =>
                            handleInputChange(
                              i,
                              "vehicleIdNumber",
                              e.target.value
                            )
                          }
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
                          value={request.link}
                          onChange={(e) =>
                            handleInputChange(i, "link", e.target.value)
                          }
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
                            id={`file-${i}`}
                            style={{ display: "none" }}
                            onChange={(e) =>
                              handleInputChange(
                                i,
                                "carImage",
                                e.target.files[0]
                              )
                            }
                          />
                          <label
                            htmlFor={`file-${i}`}
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
                          }}
                        >
                          {request.carImage
                            ? request.carImage.name
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
                            id={`file-${i}`}
                            style={{ display: "none" }}
                            onChange={(e) =>
                              handleInputChange(
                                i,
                                "carTitle",
                                e.target.files[0]
                              )
                            }
                          />
                          <label
                            htmlFor={`file-${i}`}
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
                          }}
                        >
                          {request.carTitle
                            ? request.carTitle.name
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
                      value={request.additionalDescription}
                      onChange={(e) =>
                        handleInputChange(
                          i,
                          "additionalDescription",
                          e.target.value
                        )
                      }
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
                  <Box mb="30px">
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
                              // value={productName}
                              // onChange={(e) => setProductName(e.target.value)}
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
                                  // value={productName}
                                  // onChange={(e) => setProductName(e.target.value)}
                                  fullWidth
                                  select
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
                                  // value={productName}
                                  // onChange={(e) => setProductName(e.target.value)}
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
                          // value={productName}
                          // onChange={(e) => setProductName(e.target.value)}
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
                          // value={productName}
                          // onChange={(e) => setProductName(e.target.value)}
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
                            <Grid item xs={4}>
                              {" "}
                              <TextField
                                required
                                id="contact-state"
                                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                type="text"
                                label="Location Of The Car (State)"
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
                            <Grid item xs={4}>
                              {" "}
                              <TextField
                                required
                                id="contact-city"
                                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                type="text"
                                label="Location Of The Car (City)"
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
                          <Typography fontSize={"12px"} px="20px" mt="5px">
                            The car location(city) is used to determine the
                            pickup cost. Select a car in Houston or Atlanta city
                            to enjoy a pick-up cost of just $195
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
            <Box onClick={() => handleDeleteItem(i)}>
              <DeletIcon />
            </Box>
          </Box>
        ))}
        <Button
          startIcon={<BsPlus size={20} />}
          variant="contained"
          sx={{
            bgcolor: "#49454F",
            color: "#E6E1E5",
            width: "233px",
            height: "56px",
            borderRadius: "20px",
            textTransform: "none",
          }}
          onClick={() => addNewOrder()}
        >
          Add new product/item
        </Button>
      </Box>
      <AddPropertyModal open={open} onClose={() => setOpen(false)} />
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
    </Box>
  );
};

export default AutoImportPackageDetails;
