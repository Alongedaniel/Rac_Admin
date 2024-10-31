import { Box, Grid, MenuItem, Radio, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import CardWrapper from "./CardWrapper";
import { City, Country, State } from "country-state-city";

const BillingDetailsForm = ({
  firstName = "",
  setFirstName = () => {},
  lastName = "",
  setLastName = () => {},
  email = "",
  setEmail = () => {},
  phoneNumber = "",
  setPhoneNumber = () => {},
  country = "",
  setCountry = () => {},
  state = "",
  setState = () => {},
  city = "",
  setCity = () => {},
  address = "",
  setAddress = () => {},
  zipCode = "",
  setZipCode = () => {},
}) => {
  const [countries, setCountries] = useState(Country.getAllCountries());
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  useEffect(() => {
    setStates(State.getStatesOfCountry(country?.isoCode));
    setCities(
      City.getCitiesOfState(
        country?.isoCode,
        state?.isoCode
      )
    );
  }, [country, state]);
  const countryCodes = [
    { name: "Nigeria", code: "+234" },
    { name: "United States", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Canada", code: "+1" },
    { name: "Australia", code: "+61" },
  ];
  const [code, setCode] = useState("");
  const [number, setNumber] = useState(phoneNumber);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  useEffect(() => {
    setPhoneNumber(code + number);
  }, [code, number]);
  return (
    <div>
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
          Provide the customer billing address
        </p>
      </div>
      <Box mt="10px" ml="30px" sx={{ borderTop: "1px solid #79747E" }}></Box>
      <Box mt="10px" mb="30px">
        <Box mb="10px">
          {/* <CardWrapper
            showRadio={
              <Radio
                value="default"
                checked={selectedValue === "default"}
                onChange={handleChange}
                color="primary"
              />
            }
            title="Customer's Default Address"
          ></CardWrapper>
        </Box> */}
          <CardWrapper
            fullByDefault
            // title="Custom Billing Address"
            // showRadio={
            //   <Radio
            //     value="custom"
            //     checked={selectedValue === "custom"}
            //     onChange={handleChange}
            //     color="primary"
            //   />
            // }
          >
            <Box display="flex" flexDirection="column" gap="30px" mt="5px">
              <Grid container gap="30px" wrap="nowrap">
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    id="first-name"
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                    id="email"
                    type="text"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    id="country"
                    type="text"
                    label="Country"
                    value={country?.name}
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
                        value={country?.name}
                        key={i}
                        onClick={() => setCountry(country)}
                      >
                        {country?.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    required
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    id="state"
                    type="text"
                    value={state?.name}
                    onChange={(e) => setState(e.target.value)}
                    label=" State"
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
                        value={state?.name}
                        key={i}
                        onClick={() => setState(state)}
                      >
                        {state?.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    required
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    id="city"
                    type="text"
                    value={city?.name}
                    onChange={(e) => setCity(e.target.value)}
                    label="City"
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
                        value={city?.name}
                        key={i}
                        onClick={() => setCity(city)}
                        sx={{ zIndex: 9999 }}
                      >
                        {city?.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="address"
                type="text"
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
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
          </CardWrapper>
        </Box>
      </Box>
    </div>
  );
};

export default BillingDetailsForm;
