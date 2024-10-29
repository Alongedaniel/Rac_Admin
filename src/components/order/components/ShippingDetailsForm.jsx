import React, { useEffect, useState } from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import {
  Box,
  Grid,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import { City, Country, State } from "country-state-city";

const ShippingDetailsForm = ({
  receiverFirstName = "",
  setReceiverFirstName = () => {},
  receiverLastName = "",
  setReceiverLastName = () => {},
  receiverEmail = "",
  setReceiverEmail = () => {},
  receiverPhoneNumber = "",
  setReceiverPhoneNumber = () => {},
  destinationCountry = "",
  setDestinationCountry = () => {},
  destinationState = "",
  setDestinationState = () => {},
  destinationCity = "",
  setDestinationCity = () => {},
  receiverAddress = "",
  setReceiverAddress = () => {},
  receiverZipCode = "",
  setReceiverZipCode = () => {},
  service = "",
  setDestinationDetails,
  destinationDetails,
}) => {
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setStates(State.getStatesOfCountry(destinationCountry?.isoCode));
    setCities(
      City.getCitiesOfState(
        destinationCountry?.isoCode,
        destinationState?.isoCode,
      ),
    );
  }, []);
  const countryCodes = [
    { name: "Nigeria", code: "+234" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
  ];
  const [code, setCode] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    setReceiverPhoneNumber(code + number);
  }, [code, number]);

  return (
    <div>
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
          Fill in the order & customer details
        </p>
      </div>
      {service === "Import" ? (
        <Box>
          <Box
            ml="30px"
            mb="30px"
            sx={{ borderTop: "1px solid #79747E" }}
          ></Box>
          <Box mb="30px" p="20px 30px" borderRadius="20px" bgcolor="#F2B8B5">
            <Typography
              fontSize="14px"
              color="#21005D"
              fontWeight={500}
              mb="20px"
            >
              IMPORTANT NOTICE
            </Typography>
            <Box display="flex" flexDirection="column" gap="5px">
              <Box display="flex" gap="10px" alignItems="center">
                <Box
                  width="5px"
                  height="5px"
                  borderRadius="100%"
                  bgcolor="#49454F"
                ></Box>
                <Typography fontSize="14px" color="#49454F">
                  The{" "}
                  <Typography fontWeight={500} display="inline">
                    "Destination/Shipping Address,"
                  </Typography>{" "}
                  which serves as our pickup office in Nigeria, is where your
                  package will be delivered. Please choose the nearest available
                  option from the list below.
                </Typography>
              </Box>
              <Box display="flex" gap="10px" alignItems="center">
                <Box
                  width="5px"
                  height="5px"
                  borderRadius="100%"
                  bgcolor="#49454F"
                ></Box>
                <Typography fontSize="14px" color="#49454F">
                  If the customer prefers doorstep delivery, we can arrange that
                  once the package arrives at the selected{" "}
                  <Typography fontWeight={500} display="inline">
                    "Destination/Shipping Address"
                  </Typography>{" "}
                  (our office in Nigeria). Simply let us know the customer’s
                  preference.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" gap="10px" alignItems="center">
            <TextField
              required
              id="dest/ship-address"
              sx={{ fontSize: "16px", color: "#1C1B1F" }}
              type="text"
              label="Destination/Shipping Address"
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
            <Tooltip
              title="This is your shipping address, it is the location your package will be delivered to. You can then request for doorstep delivery upon arrival."
              placement="left-start"
            >
              <Box>
                <TooltipIcon />
              </Box>
            </Tooltip>
          </Box>
        </Box>
      ) : (
        <Box pl="30px">
          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            mt="10px"
            py="30px"
            pr="30px"
            sx={{ borderTop: "1px solid #79747E" }}
          >
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="first-name"
                  type="text"
                  label="Receiver's First Name"
                  value={receiverFirstName}
                  onChange={(e) => setReceiverFirstName(e.target.value)}
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
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="last-name"
                  type="text"
                  label="Receiver's Last Name"
                  value={receiverLastName}
                  onChange={(e) => setReceiverLastName(e.target.value)}
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
                />
              </Grid>
            </Grid>
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="receiver's-email"
                  type="text"
                  label="Receiver's Email"
                  value={receiverEmail}
                  onChange={(e) => setReceiverEmail(e.target.value)}
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
                />
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={4}>
                    <TextField
                      fullWidth
                      required
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      id="phone-number"
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      label="Phone Number"
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
                      // placeholder="Enter your country"
                    >
                      {countryCodes.map((country, i) => (
                        <MenuItem value={country.code} key={i}>
                          {country.code}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      fullWidth
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      //   id="shipment-method"
                      type="text"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
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
                      // placeholder="Enter your country"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="destination-country"
                  type="text"
                  label="Destination Country"
                  value={destinationCountry.name}
                  // onChange={(e) => setDestinationCountry(e.target.value)}
                  defaultValue={"Nigeria"}
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
                  {countries.map((country, i) => (
                    <MenuItem
                      sx={{ zIndex: 9999 }}
                      value={country.name}
                      key={i}
                      onClick={() => setDestinationCountry(country)}
                    >
                      {country.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="destination-state"
                  type="text"
                  value={destinationState.name}
                  // onChange={(e) => setDestinationState(e.target.value)}
                  label="Destination State"
                  defaultValue={"Lagos"}
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
                  {states.map((state, i) => (
                    <MenuItem
                      sx={{ zIndex: 9999 }}
                      value={state.name}
                      key={i}
                      onClick={() => setDestinationState(state)}
                    >
                      {state.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="destination-city"
                  type="text"
                  value={destinationCity.name}
                  // onChange={(e) => setDestinationCity(e.target.value)}
                  label="Destination City"
                  defaultValue={"Ikeja"}
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
                  {cities.map((city, i) => (
                    <MenuItem
                      value={city.name}
                      key={i}
                      onClick={() => setDestinationCity(city)}
                      sx={{ zIndex: 9999 }}
                    >
                      {city.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <TextField
              fullWidth
              required
              sx={{ fontSize: "16px", color: "#1C1B1F" }}
              id="receiver's address"
              type="text"
              label="Receiver's Address"
              value={receiverAddress}
              onChange={(e) => setReceiverAddress(e.target.value)}
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
            />
            <TextField
              fullWidth
              sx={{ fontSize: "16px", color: "#1C1B1F" }}
              id="zip-code"
              type="text"
              label="Zip/Postal Code"
              value={receiverZipCode}
              onChange={(e) => setReceiverZipCode(e.target.value)}
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
            />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default ShippingDetailsForm;
