import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EyeOpen from "../../../assets/icons/EyeOpen";
import DollarIcon from "../../../assets/icons/DollarIcon";
import carImage from "../../../assets/images/car.png";
import AddIcon from "../../../assets/icons/AddIcon";
import UserModals from "../../../pages/Users/components/UserModals";
import SwitchCopm from "./SwitchCopm";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import AutoImportItem from "./AutoImportItem";

const CarPickupBox = ({
  car,
  index,
  required,
  setTotalPickupCost,
  totalPickupCost,
  isRequest,
  requestItems,
}) => {
  const [pickupCosts, setPickupCosts] = useState(
    Array(requestItems.length).fill(0),
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
        <Box width="100%" mt="32px">
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
                  borderColor: required && !pickupCosts ? "#B3261E" : "#79747E", // Border color when focused
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
        </Box>
      )}
      <UserModals
        open={openCar}
        onClose={() => setOpenCar(false)}
        title="Car Details"
      >
        <AutoImportItem item={car} isRequest={isRequest} itemNumber={index} />
      </UserModals>
      <UserModals
        open={open}
        onClose={() => setOpen(false)}
        title="Pickup Details"
      >
        <Box>
          <Box mb="30px" display="flex" gap="60px" alignItems="center">
            <Typography fontSize="22px" color="#1C1B1F">
              Drop Off
            </Typography>
            <Box display="flex" gap="10px" alignItems="center">
              <SwitchCopm />
              <TooltipIcon />
            </Box>
          </Box>
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
                The car location(city) is used to determine the pickup cost.
                Select a car in Houston or Atlanta city to enjoy a pick-up cost
                of just $195
              </Typography>
            </Box>
          </Box>
        </Box>
      </UserModals>
    </Box>
  );
};

export default CarPickupBox;
