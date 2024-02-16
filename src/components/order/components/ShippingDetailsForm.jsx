import React, { useEffect, useState } from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import { Box, Grid, MenuItem, TextField } from "@mui/material";

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
}) => {
  const countries = [
    "Nigeria",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];
  const states = ["Lagos", "Kano", "Abuja", "Rivers", "Anambra"];
    const cities = ["Ikeja", "Badagry", "Lekki", "Oshodi", "Ikoyi"];
    const countryCodes = [
      { name: "Nigeria", code: "+234" },
      { name: "United States", code: "+1" },
      { name: "United Kingdom", code: "+44" },
      { name: "Canada", code: "+1" },
      { name: "Australia", code: "+61" },
    ];
    const [code, setCode] = useState('')
    const [number, setNumber] = useState('')
    useEffect(() => { 
        setReceiverPhoneNumber(code + number)  
    },[code, number])
  return (
    <div>
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
          Fill in the order & customer details
        </p>
      </div>
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
                        {country.name} {country.code}
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
                value={destinationCountry}
                onChange={(e) => setDestinationCountry(e.target.value)}
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
                {countries.map((method, i) => (
                  <MenuItem value={method} key={i}>
                    {method}
                  </MenuItem>
                ))}{" "}
              </TextField>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                required
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                id="destination-state"
                type="text"
                value={destinationState}
                onChange={(e) => setDestinationState(e.target.value)}
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
                {states.map((company, i) => (
                  <MenuItem value={company} key={i}>
                    {company}
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
                value={destinationCity}
                onChange={(e) => setDestinationCity(e.target.value)}
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
                {cities.map((company, i) => (
                  <MenuItem value={company} key={i}>
                    {company}
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
    </div>
  );
};

export default ShippingDetailsForm;
