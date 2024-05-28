import React from "react";
import SectionHeader from "../../../components/SectionHeader";
import { Box, Grid, MenuItem, TextField } from "@mui/material";
import { countryCodes, countries, states, cities } from "../constants";

const ProfileInformationForm = ({
  firstName,
  lastName,
  email,
  country,
  state,
  city,
  streetAddress,
  countryCode,
  phoneNumber,
  postalCode,
  setFirstName,
  setLastName,
  setEmail,
  setCountry,
  setState,
  setCity,
  setStreetAddress,
  setCountryCode,
  setPhoneNumber,
  setPostalCode,
}) => {
  return (
    <>
      <SectionHeader title="Fill in the User’s profile information" />
      <Box
        display="flex"
        flexDirection="column"
        gap="30px"
        mt="30px"
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
              id="receiver's-email"
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
            <Grid container gap="20px" wrap="nowrap">
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  required
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="code"
                  type="text"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  label="Code"
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
                  {countryCodes.map((country, i) => (
                    <MenuItem value={country.code} key={i}>{country.code}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  id="phone-number"
                  label="Phone Number"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              defaultValue={""}
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
              value={state}
              onChange={(e) => setState(e.target.value)}
              label="State"
              defaultValue={""}
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
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="City"
              defaultValue={""}
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
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
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
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
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
    </>
  );
};

export default ProfileInformationForm;
