import { Box, Grid, MenuItem, Radio, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CardWrapper from '../../../components/order/components/CardWrapper';
import { countryCodes, countries, states, cities } from "../constants";

const AdditionInfoForm = () => {
  return (
    <Box>
      <TextField
        fullWidth
        sx={{ fontSize: "16px", color: "#1C1B1F" }}
        id="business-name"
        type="text"
        label="Business/Company Name"
        // value={receiverFirstName}
        // onChange={(e) => setReceiverFirstName(e.target.value)}
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
      <Box mt="24px" display="flex" flexDirection="column" gap="16px">

          <Box
            display="flex"
            flexDirection="column"
            gap="30px"
            mt="5px"
            // py="30px"
            // pr="30px"
            //   sx={{ borderTop: "1px solid #79747E" }}
          >
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="receiver's-email"
                  type="text"
                  label="Email"
                  // value={receiverEmail}
                  // onChange={(e) => setReceiverEmail(e.target.value)}
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
                      // value={code}
                      // onChange={(e) => setCode(e.target.value)}
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
                      // value={number}
                      // onChange={(e) => setNumber(e.target.value)}
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
                  // value={destinationCountry}
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
                  // value={destinationState}
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
                  // value={destinationCity}
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
              id="address"
              type="text"
              label="Address"
              // value={receiverAddress}
              // onChange={(e) => setReceiverAddress(e.target.value)}
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
              // value={receiverZipCode}
              // onChange={(e) => setReceiverZipCode(e.target.value)}
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
    </Box>
  );
}

export default AdditionInfoForm
