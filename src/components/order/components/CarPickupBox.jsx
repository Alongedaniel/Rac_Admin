import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EyeOpen from "../../../assets/icons/EyeOpen";
import DollarIcon from "../../../assets/icons/DollarIcon";
import carImage from "../../../assets/images/car.png";
import AddIcon from "../../../assets/icons/AddIcon";
import UserModals from "../../../pages/Users/components/UserModals";
import SwitchCopm from "./SwitchCopm";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import AutoImportItem from "./AutoImportItem";
import { City, Country, State } from "country-state-city";
import CircleRight from "../../../assets/icons/CircleRight";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import dayjs from "dayjs";

const CarPickupBox = ({
  car,
  index,
  required,
  setTotalPickupCost,
  totalPickupCost,
  isRequest,
  requestItems,
  setrequests,
}) => {
  const [pickupCosts, setPickupCosts] = useState(
    Array(requestItems.length).fill(0)
  );
  const [open, setOpen] = useState("");
  const [openCar, setOpenCar] = useState("");
  // useEffect(() => {
  //     setTotalPickupCost((prev) => prev + Number(pickupCost));
  // }, [pickupCost])

  const handleInputChange = (index, value) => {
    const newValue = parseFloat(value) || 0; // Convert to number or set to 0 if NaN
    const currentCost = pickupCosts[index];
    const newPickupCosts = [...pickupCosts];

    // Update totalCost
    const newTotalCost = totalPickupCost - currentCost + newValue;
    setTotalPickupCost(newTotalCost);
    newPickupCosts[index] = newValue;

    setPickupCosts(newPickupCosts);
  };

  const today = dayjs();
  const [date, setDate] = useState(today);
  const [address, setAddress] = useState(car?.pickupDetails?.address || "");
  const [city, setCity] = useState(car?.pickupDetails?.city || "");
  const [country, setCountry] = useState(car?.pickupDetails?.country || "");
  const [countryCode, setCountryCode] = useState(
    car?.pickupDetails?.countryCode || ""
  );
  const [email, setEmail] = useState(car?.pickupDetails?.email || "");
  const [firstName, setFirstName] = useState(
    car?.pickupDetails?.firstName || ""
  );
  const [lastName, setLastName] = useState(car?.pickupDetails?.lastName || "");
  const [locationType, setLocationType] = useState(
    car?.pickupDetails?.locationType || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    car?.pickupDetails?.phoneNumber || ""
  );
  const [pickUpDate, setPickUpDate] = useState(
    car?.pickupDetails?.pickUpDate || ""
  );
  const [state, setState] = useState(car?.pickupDetails?.state || "");
  const [zipPostalCode, setZipPostalCode] = useState(
    car?.pickupDetails?.zipPostalCode || ""
  );
  const [dropOff, setDropOff] = useState(firstName ? true : false);
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setStates(State.getStatesOfCountry(country?.isoCode));
    setCities(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [country, state]);

  const handleAddPickup = () => {
    if (dropOff) {
      setDropOff(false);
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
    } else setDropOff(true);
  };

  const updatePickup = (i) => {
    const updated = requestItems.map((req, id) =>
      id === i
        ? {
            ...req,
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
              zipPostalCode: zipPostalCode,
            },
          }
        : req
    );
    setrequests(updated);
  };

  // const  = () => {
  //   setrequests((prev) => [
  //     ...prev,
  //     {
  //       ...car,
  //       pickupDetails: {
  //         address,
  //         city: city.name,
  //         country: country.name,
  //         countryCode,
  //         email,
  //         firstName,
  //         lastName: "",
  //         locationType,
  //         phoneNumber,
  //         pickUpDate: date,
  //         state: state.name,
  //         zipPostalCode,
  //       },
  //     },
  //   ]);
  // };

  return (
    <Box
      p="16px"
      bgcolor={!car?.pickupDetails?.firstName ? "#fff" : "#F4EFF4"}
      border="1px solid #CAC4D0"
      borderRadius="20px"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="8px"
          onClick={() => setOpenCar(true)}
          sx={{ cursor: "pointer" }}
        >
          <img
            src={car.carImage}
            alt={car.carBrand}
            style={{
              width: "61px",
              height: "54px",
              border: "1px solid #CAC4D0",
              borderRadius: "16px",
              objectFit: "cover",
            }}
          />
          <Box>
            <Typography fontSize="16px" color="#49454F" mb="4px">
              <span style={{ fontWeight: 500 }}>Car {`${index}`}</span>
              {`: ${car.carBrand}`}
            </Typography>
            {!car?.pickupDetails?.firstName ? null : (
              <Typography>{car?.pickupDetails?.city}</Typography>
            )}
          </Box>
        </Box>
        <Box onClick={() => setOpenCar(true)} sx={{ cursor: "pointer" }}>
          <EyeOpen />
        </Box>
      </Box>
      {!car?.pickupDetails?.firstName ? (
        <Grid
          container
          wrap="nowrap"
          display="flex"
          alignItems="center"
          gap="8px"
          mt="32px"
        >
          <Grid
            item
            xs={7}
            width="100%"
            py="10px"
            pl="10px"
            borderRadius="100px"
            bgcolor="#F4EFF4"
            border="1px solid #CAC4D0"
          >
            <Typography fontSize="16px" color="#1C1B1F">
              Not available for pickup
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Button
              onClick={() => setOpen(true)}
              variant="text"
              startIcon={<AddIcon color="#6750A4" />}
              sx={{
                width: "100%",
                height: "40px",
                textTransform: "none",
                fontSize: "14px",
                color: "#6750A4",
                fotWeight: 500,
              }}
            >
              Enable pickup
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          wrap="nowrap"
          display="flex"
          alignItems="center"
          gap="8px"
          width="100%"
          mt="32px"
        >
          <Grid item xs={7} width="100%">
            <TextField
              required
              id="pickup-cost"
              sx={{
                fontSize: "16px",
                color: "#1C1B1F",
                "& .MuiInputLabel-root": {
                  color: required && !pickupCosts ? "#B3261E" : "#1C1B1F",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: required && !pickupCosts ? "#B3261E" : "#79747E",
                },
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor:
                      required && !pickupCosts ? "#B3261E" : "#79747E", // Border color when focused
                  },
                },
              }}
              type="number"
              label="Pick Up Cost"
              fullWidth
              value={pickupCosts[index]}
              onChange={(e) => {
                handleInputChange(index, e.target.value);
              }}
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
          <Grid item xs={5}>
            <Button
              onClick={() => setOpen(true)}
              variant="text"
              startIcon={<AddIcon color="#6750A4" />}
              sx={{
                width: "100%",
                height: "40px",
                textTransform: "none",
                fontSize: "14px",
                color: "#6750A4",
                fotWeight: 500,
              }}
            >
              Disable pickup
            </Button>
          </Grid>
        </Grid>
      )}
      <UserModals
        open={openCar}
        onClose={() => setOpenCar(false)}
        title="Car Details"
      >
        <AutoImportItem
          item={car}
          isRequest={isRequest}
          itemNumber={index}
          requests={requestItems}
          setrequests={setrequests}
        />
      </UserModals>
      <UserModals
        open={open}
        onClose={() => setOpen(false)}
        title="Pickup Details"
      >
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
                Enable Pickup
              </Typography>
              <Box display="flex" gap="10px" alignItems="center">
                <Box onClick={handleAddPickup}>
                  <SwitchCopm checked={dropOff} />
                </Box>
                <TooltipIcon />
              </Box>
            </Box>
            {dropOff && (
              <Box pl="30px" display="flex" flexDirection="column" gap="30px">
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
                    The car location(city) is used to determine the pickup cost.
                    Select a car in Houston or Atlanta city to enjoy a pick-up
                    cost of just $195
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
            )}
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
              updatePickup(index - 1);
              setOpen(false);
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
    </Box>
  );
};

export default CarPickupBox;
