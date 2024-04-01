import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import CircleRight from '../../../assets/icons/CircleRight';
import CardWrapper from './CardWrapper';
import DollarIcon from '../../../assets/icons/DollarIcon';
import SubtractIcon from '../../../assets/icons/SubtractIcon';
import PlusIcon from '../../../assets/icons/PlusIcon';
import UploadIcon from '../../../assets/icons/UploadIcon';
import { BsPlus } from 'react-icons/bs';
import DeletIcon from '../../../assets/icons/DeletIcon';
import TooltipIcon from '../../../assets/icons/TooltipIcon';
import SwitchCopm from './SwitchCopm';
import dayjs from 'dayjs';
import {
  DatePicker,
  LocalizationProvider
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import AddPropertyModal from './AddPropertyModal';

const AutoImportPackageDetails = ({ origin = "", setOrigin = () => { } }) => {
    const today = dayjs()
  const [date, setDate] = useState(today);
  const [open, setOpen] = useState(false)
    const originList = [
      "Origin 1",
      "Origin 2",
      "Origin 3",
      "Origin 4",
      "Origin 5",
    ];
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
              onChange={(e) => setOrigin(e.target.value)}
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
              {originList.map((method, i) => (
                <MenuItem value={method} key={i}>
                  {method}
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
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginTop: "20px",
          }}
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
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
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
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
                        fullWidth
                        select
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
                        select
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
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
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
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
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
                        fullWidth
                        select
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
                    <Grid item xs={3.75}>
                      {" "}
                      <TextField
                        required
                        id="car-color"
                        sx={{ fontSize: "16px", color: "#1C1B1F" }}
                        type="text"
                        label="Car Color"
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
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
                    </Grid>
                    <Grid item xs={4}>
                      {" "}
                      <TextField
                        required
                        id="vin-number"
                        sx={{ fontSize: "16px", color: "#1C1B1F" }}
                        type="text"
                        label="VIN Number"
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
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
                        // value={productName}
                        // onChange={(e) => setProductName(e.target.value)}
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
                        bgcolor="#CAC4D0"
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
                        bgcolor="#CAC4D0"
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
                    We need the details of the car title before we can schedule
                    a pick up, Be sure sure that our driver can collect can it
                    during pick up, as we can’t ship a car without the title.
                  </Typography>
                </Box>
                <Box mb="30px">
                  <TextField
                    id="car description"
                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                    type="text"
                    label="Additional Car Description"
                    // value={productDescription}
                    // onChange={(e) => setProductDescription(e.target.value)}
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
                        <Typography fontSize={'12px'} px='20px' mt='5px'>
                          The car location(city) is used to determine the pickup
                          cost. Select a car in Houston or Atlanta city to enjoy
                          a pick-up cost of just $195
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
                                  width: '100%',
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
          <DeletIcon />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "30px",
            my: "20px",
          }}
        >
          <CardWrapper title="Car - #2"></CardWrapper>
          <DeletIcon />
        </Box>
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
        >
          Add new product/item
        </Button>
      </Box>
      <AddPropertyModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default AutoImportPackageDetails
