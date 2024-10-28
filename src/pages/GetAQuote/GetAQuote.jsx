import {
  Box,
  Button,
  Grid,
  MenuItem,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import CardWrapper from "../../components/order/components/CardWrapper";
import DeletIcon from "../../assets/icons/DeletIcon";
import AddIcon from "../../assets/icons/AddIcon";
import { ArrowCircleLeft } from "iconsax-react";
import ArrowRightWhite from "../../assets/icons/ArrowRightWhite";
import DollarIcon from "../../assets/icons/DollarIcon";
import TooltipIcon from "../../assets/icons/TooltipIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import SubtractIcon from "../../assets/icons/SubtractIcon";
import ArrowBack from "../../assets/icons/ArrowBack";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import image from "../../assets/images/boxes.png";
import QuoteIcon from "../../assets/icons/QuoteIcon";

const GetAQuote = () => {
  const [selectedRadioValue, setSelectedRadioValue] = useState("procurement");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [originCountry, setOriginCountry] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [quantityValue, setQuantityValue] = useState(0);
  const [cost, setCost] = useState("");
  const [getQuote, setGetQuote] = useState(false);
  const handleRadioChange = (e) => {
    setSelectedRadioValue(e.target.value);
  };
  const countries = [
    "Nigeria",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];
  const destination = [
    "Dubai",
    "South Africa",
    "France",
    "Canada",
    "Australia",
  ];
  return (
    <Box p="30px 40px">
      <Box p="30px" borderRadius="20px" bgcolor="#fff" maxWidth="1200px">
        {!getQuote ? (
          <Box>
            <SectionHeader title="Select the desired service" noBorder />
            <Box mt="18px" mb="24px">
              <Box display="flex" alignItems="center" gap="16px">
                <Box
                  p="10px"
                  border="1px solid #CAC4D0"
                  width="fit-content"
                  borderRadius="16px"
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Radio
                    sx={{ p: 0, m: 0 }}
                    value="procurement"
                    checked={selectedRadioValue === "procurement"}
                    onChange={handleRadioChange}
                  />
                  <Typography fontSize="14px" color="#49454F">
                    Procurement
                  </Typography>
                </Box>
                <Box
                  p="10px"
                  border="1px solid #CAC4D0"
                  width="fit-content"
                  borderRadius="16px"
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Radio
                    sx={{ p: 0, m: 0 }}
                    value="export"
                    checked={selectedRadioValue === "export"}
                    onChange={handleRadioChange}
                  />
                  <Typography fontSize="14px" color="#49454F">
                    Export
                  </Typography>
                </Box>
                <Box
                  p="10px"
                  border="1px solid #CAC4D0"
                  width="fit-content"
                  borderRadius="16px"
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Radio
                    sx={{ p: 0, m: 0 }}
                    value="import"
                    checked={selectedRadioValue === "import"}
                    onChange={handleRadioChange}
                  />
                  <Typography fontSize="14px" color="#49454F">
                    Import
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box mb="24px">
              {selectedRadioValue === "export" ? (
                <Box>
                  <Typography fontSize="14px" color="#49454F">
                    Using this option gives you an estimate of the shipment cost
                    for export (all costs related to shipping items from Nigeria
                    to the destination country abroad).
                  </Typography>
                </Box>
              ) : selectedRadioValue === "import" ? (
                <Box>
                  <Typography fontSize="14px" color="#49454F">
                    Using this option gives you an estimate of the shipment cost
                    for import (all costs related to shipping items from some
                    certain countries abroad down to Nigeria).
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography fontSize="14px" color="#49454F">
                    Using this option gives you an estimate of the procurement
                    cost (that includes all costs related to shopping for items
                    and bringing them to the origin warehouse of some certain
                    countries abroad).
                  </Typography>
                  <Typography fontSize="14px" color="#49454F">
                    To get the shipping cost of items from the origin warehouse
                    in any country of choice to Nigeria, you can get a quote
                    using the{" "}
                    <Typography
                      display="inline"
                      fontSize="16px"
                      fontWeight={500}
                      color="#49454F"
                    >
                      ‘import’
                    </Typography>{" "}
                    option
                  </Typography>
                </Box>
              )}
            </Box>
            <Box mb="24px">
              <Box p="16px 24px" border="1px solid #CAC4D0" borderRadius="20px">
                <Typography fontSize="22px" color="#49454F" mb="16px">
                  Provide details about your package
                </Typography>
                <Grid container wrap="nowrap" gap="24px" mb="20px">
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      id="destination-country"
                      type="text"
                      label="Origin Country"
                      value={originCountry}
                      onChange={(e) => setOriginCountry(e.target.value)}
                      // defaultValue={"Nigeria"}
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
                      {destination.map((method, i) => (
                        <MenuItem value={method} key={i}>
                          {method}
                        </MenuItem>
                      ))}{" "}
                    </TextField>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      id="destination-country"
                      type="text"
                      label="Destination Country"
                      value={destinationCountry}
                      onChange={(e) => setDestinationCountry(e.target.value)}
                      // defaultValue={"Nigeria"}
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
                </Grid>
                <Grid container wrap="nowrap" gap="24px" mb="16px">
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      required
                      sx={{ fontSize: "16px", color: "#1C1B1F" }}
                      id="shipping-cost"
                      type="text"
                      value={shippingCost}
                      onChange={(e) => setShippingCost(e.target.value)}
                      label="Total Shipping to Origin Warehouse cost"
                      InputProps={{
                        startAdornment: <DollarIcon />,
                        sx: {
                          borderRadius: "20px", // Apply border radius to the input element
                          //   borderBottomLeftRadius: "20px", // Apply border radius to the input element
                          height: "56px",
                          borderColor: "#79747E",
                          fontSize: "16px",
                          color: "#1C1B1F",
                        },
                      }}
                      // placeholder="Enter your country"
                    />
                  </Grid>
                  <Grid item xs={6}></Grid>
                </Grid>
                <Box display="flex" gap="22px" alignItems="center" mb="16px">
                  <Box
                    width="100%"
                    p="20px 24px"
                    border="1px solid #CAC4D0"
                    borderRadius="20px"
                  >
                    <Typography fontSize="22px" color="#49454F" mb="20px">
                      Item -{" "}
                      <Typography
                        display="inline"
                        fontSize="22px"
                        color="#6750A4"
                      >
                        #1
                      </Typography>
                    </Typography>
                    {selectedRadioValue === "procurement" ? null : (
                      <Grid container wrap="nowrap" gap="24px" mb="16px">
                        <Grid item xs={4}>
                          <TextField
                            required
                            id="total-length"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Length (in Inches)"
                            fullWidth
                            // placeholder="Select origin"
                            InputProps={{
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
                        <Grid item xs={4}>
                          <TextField
                            required
                            id="total-width"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Width (in Inches)"
                            fullWidth
                            // placeholder="Select origin"
                            InputProps={{
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
                        <Grid item xs={4}>
                          <TextField
                            required
                            id="total-height"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Height (in Inches)"
                            fullWidth
                            // placeholder="Select origin"
                            InputProps={{
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
                      </Grid>
                    )}
                    <Grid container wrap="nowrap" gap="24px">
                      <Grid item xs={4}>
                        {selectedRadioValue === "procurement" ? (
                          <Box display="flex" gap="10px" alignItems="center">
                            <TextField
                              required
                              id="urgent-purchase"
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              type="text"
                              label="Urgent Purchase"
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
                            >
                              <MenuItem value="Yes">Yes</MenuItem>
                              <MenuItem value="No">No</MenuItem>
                            </TextField>
                            <TooltipIcon />
                          </Box>
                        ) : (
                          <TextField
                            required
                            id="total-weight"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Weight (in Inches)"
                            fullWidth
                            // placeholder="Select origin"
                            InputProps={{
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
                        )}
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          required
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          id="shipping-cost"
                          type="text"
                          value={cost}
                          onChange={(e) => setCost(e.target.value)}
                          label="Item Cost From store"
                          InputProps={{
                            startAdornment: <DollarIcon />,
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              //   borderBottomLeftRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                          // placeholder="Enter your country"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="quantity"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="number"
                          label="Quantity"
                          value={quantityValue}
                          fullWidth
                          // placeholder="Select origin"
                          InputProps={{
                            startAdornment: (
                              <Box
                                zIndex={2}
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                  if (quantityValue > 0)
                                    setQuantityValue((prev) => prev - 1);
                                }}
                              >
                                <SubtractIcon />
                              </Box>
                            ),
                            endAdornment: (
                              <Box
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                  setQuantityValue((prev) => prev + 1);
                                }}
                              >
                                <PlusIcon />
                              </Box>
                            ),
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                              input: {
                                textAlign: "center",
                              },
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <DeletIcon />
                </Box>
                <Box display="flex" gap="22px" alignItems="center" mb="16px">
                  <Box
                    width="100%"
                    p="20px 24px"
                    border="1px solid #CAC4D0"
                    borderRadius="20px"
                  >
                    <Typography fontSize="22px" color="#49454F" mb="20px">
                      Item -{" "}
                      <Typography
                        display="inline"
                        fontSize="22px"
                        color="#6750A4"
                      >
                        #2
                      </Typography>
                    </Typography>
                    {selectedRadioValue === "procurement" ? null : (
                      <Grid container wrap="nowrap" gap="24px" mb="16px">
                        <Grid item xs={4}>
                          <TextField
                            required
                            id="total-length"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Length (in Inches)"
                            fullWidth
                            // placeholder="Select origin"
                            InputProps={{
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
                        <Grid item xs={4}>
                          <TextField
                            required
                            id="total-width"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Width (in Inches)"
                            fullWidth
                            // placeholder="Select origin"
                            InputProps={{
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
                        <Grid item xs={4}>
                          <TextField
                            required
                            id="total-height"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Height (in Inches)"
                            fullWidth
                            // placeholder="Select origin"
                            InputProps={{
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
                      </Grid>
                    )}
                    <Grid container wrap="nowrap" gap="24px">
                      <Grid item xs={4}>
                        {selectedRadioValue === "procurement" ? (
                          <Box display="flex" gap="10px" alignItems="center">
                            <TextField
                              required
                              id="urgent-purchase"
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              type="text"
                              label="Urgent Purchase"
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
                            >
                              <MenuItem value="Yes">Yes</MenuItem>
                              <MenuItem value="No">No</MenuItem>
                            </TextField>
                            <TooltipIcon />
                          </Box>
                        ) : (
                          <TextField
                            required
                            id="total-weight"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Weight (in Inches)"
                            fullWidth
                            // placeholder="Select origin"
                            InputProps={{
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
                        )}
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          fullWidth
                          required
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          id="shipping-cost"
                          type="text"
                          value={cost}
                          onChange={(e) => setCost(e.target.value)}
                          label="Item Cost From store"
                          InputProps={{
                            startAdornment: <DollarIcon />,
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              //   borderBottomLeftRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                            },
                          }}
                          // placeholder="Enter your country"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          id="quantity"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="number"
                          label="Quantity"
                          value={quantityValue}
                          fullWidth
                          // placeholder="Select origin"
                          InputProps={{
                            startAdornment: (
                              <Box
                                zIndex={2}
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                  if (quantityValue > 1)
                                    setQuantityValue((prev) => prev - 1);
                                  setQuantity(quantityValue);
                                }}
                              >
                                <SubtractIcon />
                              </Box>
                            ),
                            endAdornment: (
                              <Box
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                  setQuantityValue((prev) => prev + 1);
                                  setQuantity(quantityValue);
                                }}
                              >
                                <PlusIcon />
                              </Box>
                            ),
                            sx: {
                              borderRadius: "20px", // Apply border radius to the input element
                              height: "56px",
                              borderColor: "#79747E",
                              fontSize: "16px",
                              color: "#1C1B1F",
                              input: {
                                textAlign: "center",
                              },
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  <DeletIcon />
                </Box>
                <Box>
                  <Button
                    variant="text"
                    startIcon={<AddIcon />}
                    sx={{
                      color: "#6750A4",
                      fontSize: "14px",
                      fontWeight: 500,
                      textTransform: "none",
                      width: "105px",
                      height: "40px",
                    }}
                  >
                    Add item
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                startIcon={<ArrowRightWhite />}
                sx={{
                  bgcolor: "#6750A4",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  borderRadius: "100px",
                  width: "300px",
                  height: "40px",
                }}
                onClick={() => setGetQuote(true)}
              >
                Get Quote
              </Button>
            </Box>
          </Box>
        ) : (
          <Box display="flex" justifyContent="space-between">
            <Box maxWidth="457px">
              <Typography
                fontSize="24px"
                fontWeight={700}
                color="#49454F"
                mb="10px"
              >
                You Just Got a Quote!
              </Typography>
              <Typography fontSize="16px" color="#49454F" mb="16px">
                The Shipment cost shown below (all costs related to shipping
                items from Nigeria to the destination country abroad) is based
                on the package details you provided.
              </Typography>
              <Box
                p="16px 24px"
                borderRadius="20px"
                bgcolor="#21005D"
                mb="24px"
              >
                <Typography
                  fontSize="16px"
                  fontWeight={500}
                  color="#fff"
                  mb="16px"
                >
                  Estimated Shipment Cost
                </Typography>
                <Typography fontSize="22px" color="#fff" mb="5px">
                  $126.66
                </Typography>
                <Typography fontSize="14px" color="#fff">
                  The Naira Equivalent that will be charged if paid now is{" "}
                  <Typography
                    display="inline"
                    fontSize="14px"
                    fontWeight={700}
                    color="#fff"
                  >
                    ₦20,000
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <SectionHeader title="What next?" noBorder />
                {selectedRadioValue === "procurement" ? (
                  <Box mt="12px">
                    <Typography fontSize="14px" color="#1C1B1F" mb="10px">
                      Would you like to initiate a shop for me order right away?
                    </Typography>
                    <Box display="flex" gap="10px" alignItems="center">
                      <Button
                        variant="contained"
                        startIcon={<QuoteIcon color="#fff" />}
                        sx={{
                          bgcolor: "#6750A4",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "100px",
                          width: "210px",
                          height: "40px",
                        }}
                      >
                        Initiate shop for me
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<ArrowLeftPurple />}
                        sx={{
                          color: "#6750A4",
                          border: "1px solid #6750A4",
                          fontSize: "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "100px",
                          width: "181px",
                          height: "40px",
                        }}
                        onClick={() => setGetQuote(false)}
                      >
                        Get another quote
                      </Button>
                    </Box>
                  </Box>
                ) : selectedRadioValue === "export" ? (
                  <Box mt="12px">
                    <Typography fontSize="14px" color="#1C1B1F" mb="10px">
                      Would you like to initiate an export order rights away?
                    </Typography>
                    <Box display="flex" gap="10px" alignItems="center">
                      <Button
                        variant="contained"
                        startIcon={<QuoteIcon color="#fff" />}
                        sx={{
                          bgcolor: "#6750A4",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "100px",
                          width: "210px",
                          height: "40px",
                        }}
                      >
                        Initiate export
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<ArrowLeftPurple />}
                        sx={{
                          color: "#6750A4",
                          border: "1px solid #6750A4",
                          fontSize: "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "100px",
                          width: "181px",
                          height: "40px",
                        }}
                        onClick={() => setGetQuote(false)}
                      >
                        Get another quote
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <Box mt="12px">
                    <Typography fontSize="14px" color="#1C1B1F" mb="10px">
                      Would you like to initiate an import order rights away?
                    </Typography>
                    <Box display="flex" gap="10px" alignItems="center">
                      <Button
                        variant="contained"
                        startIcon={<QuoteIcon color="#fff" />}
                        sx={{
                          bgcolor: "#6750A4",
                          color: "#fff",
                          fontSize: "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "100px",
                          width: "210px",
                          height: "40px",
                        }}
                      >
                        Initiate import
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<ArrowLeftPurple />}
                        sx={{
                          color: "#6750A4",
                          border: "1px solid #6750A4",
                          fontSize: "14px",
                          fontWeight: 500,
                          textTransform: "none",
                          borderRadius: "100px",
                          width: "181px",
                          height: "40px",
                        }}
                        onClick={() => setGetQuote(false)}
                      >
                        Get another quote
                      </Button>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <img
              src={image}
              style={{ maxHeight: "343px", maxWidth: "445px" }}
              alt="boxes"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GetAQuote;
