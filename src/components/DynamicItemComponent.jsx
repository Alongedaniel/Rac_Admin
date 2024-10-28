import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import DeletIcon from "../assets/icons/DeletIcon";
import CardWrapper from "./order/components/CardWrapper";
import TooltipIcon from "../assets/icons/TooltipIcon";
import DollarIcon from "../assets/icons/DollarIcon";
import SubtractIcon from "../assets/icons/SubtractIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import UploadIcon from "../assets/icons/UploadIcon";
import CircleRight from "../assets/icons/CircleRight";
import AddIcon from "../assets/icons/AddIcon";
import AddPropertyModal from "./order/components/AddPropertyModal";
import { useRef, useState } from "react";

const DynamicItemComponent = ({
  index,
  productDescription,
  originalCost,
  productName,
  setProductName = () => {},
  setOriginalCost = () => {},
  setProductDescription = () => {},
  service,
  setItemColor = () => {},
  itemColor = "",
  removeComponent,
}) => {
  const container = useRef(null);
  const [quantityValue, setQuantityValue] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  console.log(index);
  return (
    <Box
      ref={container}
      key={index}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        marginTop: "20px",
      }}
    >
      <CardWrapper title={`Item - #${index + 1}`}>
        <Box>
          <Box mt="10px" pt="30px">
            <Box mb="30px">
              {service === "Shop For Me" && (
                <Box mb="30px">
                  <Grid container gap="30px" wrap="nowrap" mb="30px">
                    <Grid item xs={9}>
                      <Box display="flex" gap="10px" alignItems="center">
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
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
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
                  value={originalCost}
                  onChange={(e) => setOriginalCost(e.target.value)}
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
            <Box mb="30px">
              <Typography fontSize="12px" sx={{ pl: "10px" }} color="#49454F">
                Upload Product/Item Picture
              </Typography>
              <Box height="40px" display="flex">
                <Box width="100%">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file"
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
                  {selectedFile ? selectedFile.name : "No file chosen"}
                </Box>
              </Box>
            </Box>
            <Box mb="30px">
              <TextField
                id="product/item description"
                sx={{ fontSize: "16px", color: "#1C1B1F" }}
                type="text"
                label="Product/Item Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
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
            <Box>
              <div className="flex items-center space-x-[10px] ">
                <CircleRight />
                <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
                  Describe the item you wish to purchase further with the
                  following properties
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
            </Box>
          </Box>
        </Box>
      </CardWrapper>
      <Box onClick={() => removeComponent(index)}>
        <DeletIcon />
      </Box>
      <AddPropertyModal open={open} onClose={() => setOpen(false)} />
    </Box>
  );
};

export default DynamicItemComponent;
