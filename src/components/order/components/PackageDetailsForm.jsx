import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CircleRight from "../../../assets/icons/CircleRight";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import { IoChevronUpCircleOutline } from "react-icons/io5";
import DollarIcon from "../../../assets/icons/DollarIcon";
import SubtractIcon from "../../../assets/icons/SubtractIcon";
import PlusIcon from "../../../assets/icons/PlusIcon";
import UploadIcon from "../../../assets/icons/UploadIcon";
import { BsPlus } from "react-icons/bs";
import DeletIcon from "../../../assets/icons/DeletIcon";
import CardWrapper from "./CardWrapper";
import AddIcon from "../../../assets/icons/AddIcon";
import AddPropertyModal from "./AddPropertyModal";
import DynamicItemComponent from "../../DynamicItemComponent";

const PackageDetailsForm = ({
  requests,
  setrequests = () => {},
  required,
  order,
  origin = "",
  productName = "",
  setProductName = () => {},
  originalCost = "",
  setOriginalCost = () => {},
  setQuantity = () => {},
  itemColor = "",
  setItemColor = () => {},
  productDescription = "",
  setProductDescription = () => {},
  weight = "",
  length = "",
  width = "",
  height = "",
  setHeight = () => {},
  setWidth = () => {},
  setWeight = () => {},
  setLength = () => {},
  setOrigin = () => {},
  service = "",
}) => {
 const [origins, setOrigins] = useState(["UK Warehouse", "Nigeria Warehouse"]);
  const [quantityValue, setQuantityValue] = useState(1);
  const [open, setOpen] = useState(false);
  // const [requests, setrequests] = useState([
  //   {
  //     productName: "",
  //     originalCost: "",
  //     quantity: 0,
  //     itemColor: "",
  //     productDescription: "",
  //     productImage: null
  //   },
  // ]);

  console.log(requests);

  const addNewOrder = () => {
    const newOrder = {
      itemName: "",
      itemOriginalCost: "",
      quantity: 0,
      itemDescription: "",
      itemImage: null,
    };
    setrequests([...requests, newOrder]);
  };

    useEffect(() => {
      const storedRequests = localStorage.getItem("requests");
      if (storedRequests) {
        setrequests(JSON.parse(storedRequests));
      }
    }, []);

    useEffect(() => {
      localStorage.setItem("requests", JSON.stringify(requests));
    }, [requests]);

  console.log(requests);

  const handleInputChange = (id, field, value) => {
    const updatedrequests = requests.map((order, i) =>
      i === id ? { ...order, [field]: value } : order
    );
    setrequests(updatedrequests);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
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
              // onChange={(e) => setOrigin(e.target.value)}
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
            >{origins.map((x) => <MenuItem key={x} value={x} onClick={() => setOrigin(x)}>{x}</MenuItem>)}</TextField>
            <TooltipIcon />
          </Box>
        </Box>
      </Box>
      <Box mt="30px">
        <div className="flex items-center space-x-[10px] ">
          <CircleRight />
          <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
            Add details about your package
          </p>
        </div>
        {order?.request?.requestItems
          ? requests.map((request, i) => {
              // setProductName(request.itemName);
              // setProductDescription(request.itemDescription);
              // setOriginalCost(request.itemOriginalCost);
              // setOrigin(order?.request?.origin);
              // setQuantity()
              return (
                <Box
                  key={i}
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    marginTop: "20px",
                  }}
                >
                  <CardWrapper title={`Item - #${i + 1}`}>
                    <Box>
                      <Box mt="10px" pt="30px">
                        <Box mb="30px">
                          {service === "Shop For Me" && (
                            <Box mb="30px">
                              <Grid
                                container
                                gap="30px"
                                wrap="nowrap"
                                mb="30px"
                              >
                                <Grid item xs={9}>
                                  <Box
                                    display="flex"
                                    gap="10px"
                                    alignItems="center"
                                  >
                                    <TextField
                                      required
                                      id="store"
                                      sx={{
                                        fontSize: "16px",
                                        color: "#1C1B1F",
                                      }}
                                      type="text"
                                      label="Store"
                                      // value={productName}
                                      // onChange={(e) => setProductName(e.target.value)}
                                      fullWidth
                                      placeholder="Select a store"
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
                                    <TooltipIcon />
                                  </Box>
                                </Grid>
                                <Grid item xs={3}>
                                  <Box
                                    display="flex"
                                    gap="10px"
                                    alignItems="center"
                                  >
                                    <TextField
                                      required
                                      id="urgent-purchase"
                                      sx={{
                                        fontSize: "16px",
                                        color: "#1C1B1F",
                                      }}
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
                                    />
                                    <TooltipIcon />
                                  </Box>
                                </Grid>
                              </Grid>
                              <TextField
                                required
                                id="item-url"
                                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                type="text"
                                label="Item URL"
                                // value={productName}
                                // onChange={(e) => setProductName(e.target.value)}
                                fullWidth
                                placeholder="Paste the item link here"
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
                            </Box>
                          )}
                          <TextField
                            required
                            id="product-name"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="text"
                            label="Product Name"
                            value={request.itemName}
                            // onChange={(e) => setProductName(e.target.value)}
                            onChange={(e) =>
                              handleInputChange(i, "itemName", e.target.value)
                            }
                            fullWidth
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
                        </Box>
                        <Grid container wrap="nowrap" gap="30px" mb="30px">
                          <Grid item xs={8}>
                            <TextField
                              required
                              id="cost"
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              type="text"
                              value={request.itemOriginalCost}
                              // onChange={(e) => setOriginalCost(e.target.value)}
                              onChange={(e) =>
                                handleInputChange(
                                  i,
                                  "itemOriginalCost",
                                  e.target.value
                                )
                              }
                              label="Item Original Cost"
                              fullWidth
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
                          <Grid item xs={4}>
                            <TextField
                              id="quantity"
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              type="number"
                              label="Quantity"
                              value={request.quantity}
                              fullWidth
                              // placeholder="Select origin"
                              InputProps={{
                                startAdornment: (
                                  <Box
                                    zIndex={2}
                                    sx={{ cursor: "pointer" }}
                                    // onClick={() => {
                                    //   if (quantityValue > 1)
                                    //     setQuantityValue((prev) => prev - 1);
                                    //   setQuantity(quantityValue);
                                    // }}
                                    onClick={() => {
                                      if (quantityValue > 1)
                                      {
                                        setQuantityValue((prev) => prev - 1);
                                        handleInputChange(
                                          i,
                                          "quantity",
                                          quantityValue
                                        );
                                      }
                                    }}
                                  >
                                    <SubtractIcon />
                                  </Box>
                                ),
                                endAdornment: (
                                  <Box
                                    sx={{ cursor: "pointer" }}
                                    // onClick={() => {
                                    //   setQuantityValue((prev) => prev + 1);
                                    //   setQuantity(quantityValue);
                                    // }}
                                    onClick={() => {
                                      setQuantityValue((prev) => prev + 1);
                                      handleInputChange(
                                        i,
                                        "quantity",
                                        quantityValue
                                      );
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
                        <Box mb="30px">
                          <Typography
                            fontSize="12px"
                            sx={{ pl: "10px" }}
                            color="#49454F"
                          >
                            Upload Product/Item Picture
                          </Typography>
                          <Box height="40px" display="flex">
                            <Box width="100%">
                              <input
                                type="file"
                                name="file"
                                id={`file-${i}`}
                                style={{ display: "none" }}
                                // onChange={handleFileChange}
                                onChange={(e) =>
                                  handleInputChange(
                                    i,
                                    "productImage",
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
                              {request.productImage
                                ? request.productImage.name
                                : "No file chosen"}
                            </Box>
                          </Box>
                        </Box>
                        <Box mb="30px">
                          <TextField
                            id="product/item description"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="text"
                            label="Product/Item Description"
                            value={request.itemDescription}
                            // onChange={(e) =>
                            //   setProductDescription(e.target.value)
                            // }
                            onChange={(e) =>
                              handleInputChange(
                                i,
                                "itemDescription",
                                e.target.value
                              )
                            }
                            fullWidth
                            multiline
                            rows={5}
                            // placeholder="Select origin"
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
                        {/* <Box>
                      <div className="flex items-center space-x-[10px] ">
                        <CircleRight />
                        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                          Describe the item you wish to purchase further with
                          the following properties
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
                            value={itemColor}
                            onChange={(e) => setItemColor(e.target.value)}
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
                            startIcon={<AddIcon color="#E6E1E5" />}
                            onClick={() => setOpen(true)}
                            variant="contained"
                            sx={{
                              bgcolor: "#49454F",
                              color: "#E6E1E5",
                              width: "176px",
                              height: "56px",
                              borderRadius: "20px",
                              textTransform: "none",
                            }}
                          >
                            Add Properties
                          </Button>
                        </Box>
                      </Box>
                    </Box> */}
                      </Box>
                    </Box>
                  </CardWrapper>
                  <Box
                    display="flex"
                    aligItems="center"
                    justifyContent="center"
                    onClick={() => handleDeleteItem(i)}
                  >
                    <DeletIcon />
                  </Box>
                </Box>
              );
            })
          : requests.map((order, i) => (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
                  marginTop: "20px",
                }}
              >
                <CardWrapper fullByDefault title={`Item - #${i + 1}`}>
                  <Box>
                    <Box mt="10px" pt="30px">
                      <Box mb="30px">
                        {service === "Shop For Me" && (
                          <Box mb="30px">
                            <Grid container gap="30px" wrap="nowrap" mb="30px">
                              <Grid item xs={9}>
                                <Box
                                  display="flex"
                                  gap="10px"
                                  alignItems="center"
                                >
                                  <TextField
                                    required
                                    id="store"
                                    sx={{ fontSize: "16px", color: "#1C1B1F" }}
                                    type="text"
                                    label="Store"
                                    // value={productName}
                                    // onChange={(e) => setProductName(e.target.value)}
                                    fullWidth
                                    placeholder="Select a store"
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
                                  <TooltipIcon />
                                </Box>
                              </Grid>
                              <Grid item xs={3}>
                                <Box
                                  display="flex"
                                  gap="10px"
                                  alignItems="center"
                                >
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
                                  />
                                  <TooltipIcon />
                                </Box>
                              </Grid>
                            </Grid>
                            <TextField
                              required
                              id="item-url"
                              sx={{ fontSize: "16px", color: "#1C1B1F" }}
                              type="text"
                              label="Item URL"
                              // value={productName}
                              // onChange={(e) => setProductName(e.target.value)}
                              fullWidth
                              placeholder="Paste the item link here"
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
                          </Box>
                        )}
                        <TextField
                          required
                          id="product-name"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Product Name"
                          value={order.itemName}
                          onChange={(e) =>
                            handleInputChange(i, "itemName", e.target.value)
                          }
                          fullWidth
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
                      </Box>
                      <Grid container wrap="nowrap" gap="30px" mb="30px">
                        <Grid item xs={8}>
                          <TextField
                            required
                            id="cost"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="text"
                            value={order.itemOriginalCost}
                            onChange={(e) =>
                              handleInputChange(
                                i,
                                "itemOriginalCost",
                                e.target.value
                              )
                            }
                            label="Item Original Cost"
                            fullWidth
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
                        <Grid item xs={4}>
                          <TextField
                            id="quantity"
                            sx={{ fontSize: "16px", color: "#1C1B1F" }}
                            type="number"
                            label="Quantity"
                            value={order.quantity}
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
                                    handleInputChange(
                                      i,
                                      "quantity",
                                      quantityValue
                                    );
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
                                    handleInputChange(
                                      i,
                                      "quantity",
                                      quantityValue
                                    );
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
                      <Box mb="30px">
                        <Typography
                          fontSize="12px"
                          sx={{ pl: "10px" }}
                          color="#49454F"
                        >
                          Upload Product/Item Picture
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
                                  "productImage",
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
                            {order.productImage
                              ? order.productImage.name
                              : "No file chosen"}
                          </Box>
                        </Box>
                      </Box>
                      <Box mb="30px">
                        <TextField
                          id="product/item description"
                          sx={{ fontSize: "16px", color: "#1C1B1F" }}
                          type="text"
                          label="Product/Item Description"
                          value={order.itemDescription}
                          onChange={(e) =>
                            handleInputChange(
                              i,
                              "itemDescription",
                              e.target.value
                            )
                          }
                          fullWidth
                          multiline
                          rows={5}
                          maxRows={5}
                          // placeholder="Select origin"
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
                      {/* <Box>
                      <div className="flex items-center space-x-[10px] ">
                        <CircleRight />
                        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                          Describe the item you wish to purchase further with
                          the following properties
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
                            value={itemColor}
                            onChange={(e) => setItemColor(e.target.value)}
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
                            startIcon={<AddIcon color="#E6E1E5" />}
                            onClick={() => setOpen(true)}
                            variant="contained"
                            sx={{
                              bgcolor: "#49454F",
                              color: "#E6E1E5",
                              width: "176px",
                              height: "56px",
                              borderRadius: "20px",
                              textTransform: "none",
                            }}
                          >
                            Add Properties
                          </Button>
                        </Box>
                      </Box>
                    </Box> */}
                    </Box>
                  </Box>
                </CardWrapper>
                <Box
                  display="flex"
                  aligItems="center"
                  justifyContent="center"
                  onClick={() => handleDeleteItem(i)}
                >
                  <DeletIcon />
                </Box>
              </Box>
            ))}
        <Button
          startIcon={<AddIcon color="#E6E1E5" />}
          variant="contained"
          sx={{
            mt: "20px",
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
        {service === "Shop For Me" ? null : (
          <Box mt="30px">
            <div className="flex items-center space-x-[10px] ">
              <CircleRight />
              <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                Let’s know the weight and dimensions of the entire package
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
                <Grid container wrap="nowrap" gap="30px" mb="10px">
                  <Grid item xs={3}>
                    <TextField
                      required
                      id="total-weight"
                      sx={{
                        fontSize: "16px",
                        color: "#1C1B1F",
                        "& .MuiInputLabel-root": {
                          color: required && !weight ? "#B3261E" : "#1C1B1F",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: required && !weight ? "#B3261E" : "#79747E",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor:
                              required && !weight ? "#B3261E" : "#79747E", // Border color when focused
                          },
                        },
                      }}
                      type="text"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      label="Total Weight (in kg)"
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
                  <Grid item xs={3}>
                    <TextField
                      required
                      id="total-length"
                      sx={{
                        fontSize: "16px",
                        color: "#1C1B1F",
                        "& .MuiInputLabel-root": {
                          color: required && !length ? "#B3261E" : "#1C1B1F",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: required && !length ? "#B3261E" : "#79747E",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor:
                              required && !length ? "#B3261E" : "#79747E", // Border color when focused
                          },
                        },
                      }}
                      type="text"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      label="Total Length (in Inches)"
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
                  <Grid item xs={3}>
                    <TextField
                      required
                      id="total-width"
                      sx={{
                        fontSize: "16px",
                        color: "#1C1B1F",
                        "& .MuiInputLabel-root": {
                          color: required && !width ? "#B3261E" : "#1C1B1F",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: required && !width ? "#B3261E" : "#79747E",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor:
                              required && !width ? "#B3261E" : "#79747E", // Border color when focused
                          },
                        },
                      }}
                      type="text"
                      label="Total Width (in Inches)"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
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
                  <Grid item xs={3}>
                    <TextField
                      required
                      id="total-height"
                      type="text"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      label="Total Height (in Inches)"
                      fullWidth
                      sx={{
                        fontSize: "16px",
                        color: "#1C1B1F",
                        "& .MuiInputLabel-root": {
                          color: required && !height ? "#B3261E" : "#1C1B1F",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: required && !height ? "#B3261E" : "#79747E",
                        },
                        "& .MuiOutlinedInput-root": {
                          "&.Mui-focused fieldset": {
                            borderColor:
                              required && !height ? "#B3261E" : "#79747E", // Border color when focused
                          },
                        },
                      }}
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
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PackageDetailsForm;
