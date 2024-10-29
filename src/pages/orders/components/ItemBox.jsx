import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "../../../assets/icons/EditIcon";
import CardWrapper from "../../../components/order/components/CardWrapper";
import UserModals from "../../Users/components/UserModals";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";
import { toTitleCase } from "../order-details";
import currencyFormatter from "../../../components/CurrencyFormatter";
import TooltipIcon from "../../../assets/icons/TooltipIcon";
import DollarIcon from "../../../assets/icons/DollarIcon";
import SubtractIcon from "../../../assets/icons/SubtractIcon";
import PlusIcon from "../../../assets/icons/PlusIcon";
import UploadIcon from "../../../assets/icons/UploadIcon";
import Requests from "../../../utils/hooks/api/requests";
import CloseIcon from "../../../assets/icons/CloseIcon";

const ItemBox = ({
  order,
  type = "",
  proceed = false,
  item,
  itemNumber,
  isRequest,
  activeStep,
  refetch,
  confirm,
  requestId,
  requestService,
  setActiveStep,
  requests,
  setrequests,
}) => {
  const { customPostRequest, loading, error, success, setSuccess, setError } =
    Requests();
  const [open, setOpen] = useState(false);
  const service = toTitleCase(order?.serviceType);
  const [productName, setProductName] = useState(item?.itemName);
  const [originalCost, setOriginalCost] = useState(
    item?.itemOriginalCost ?? item?.originalCost ?? 0
  );
  const [store, setStore] = useState(item?.store);
  const [itemUrl, setItemUrl] = useState(item?.itemUrl);
  const [urgentPurchase, setUrgentPurchase] = useState(item?.urgentPurchase);
  const [quantityValue, setQuantityValue] = useState(
    item?.qty ?? item?.quantity ?? 0
  );
  const [productDescription, setProductDescription] = useState(
    item?.itemDescription ?? item?.additionalDescription
  );
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    refetch();
  }, [loading]);

  const editedData = {
    service:
      service === "Shop For Me"
        ? (order?.serviceType ?? requestService)
        : (service ?? requestService),
    update:
      service === "Shop For Me"
        ? {
            ...item,
            itemName: productName,
            originalCost: Number(originalCost),
            additionalDescription: productDescription,
            qty: quantityValue,
            store: store,
            itemUrl: itemUrl,
            urgentPurchase: urgentPurchase,
          }
        : {
            ...item,
            itemName: productName,
            itemOriginalCost: Number(originalCost),
            quantity: quantityValue,
            itemDescription: productDescription,
          },
    requestId: order?.request?.requestId ?? requestId,
    requestItemIndex: itemNumber - 1,
  };
  console.log(editedData);

  const handleClose = () => {
    setError("");
    setSuccess(false);
  };

  const handleUpdateItem = async () => {
    try {
      customPostRequest(`/cross-service/edit-requests`, editedData);
    } catch (e) {}
  };

  const handleEditItem = (i) => {
    const updated = requests.map((req, id) => {
      if (id === i) {
        return {
          ...req,
          itemName: productName,
          originalCost: Number(originalCost),
          additionalDescription: productDescription,
          qty: quantityValue,
          store: store,
          itemUrl: itemUrl,
          urgentPurchase: urgentPurchase,
        };
      }
    });
    setrequests(updated);
  };

  return (
    <Box
      key={item?.id}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "30px",
        marginTop: "20px",
      }}
    >
      <CardWrapper title={` Item - #${itemNumber}`}>
        {isRequest ? (
          <>
            <div className="grid grid-cols-4 mt-[30px] gap-[20px]">
              {service === "Shop For Me" ? (
                <>
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Store:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {item?.store ?? "N/A"}
                    </p>
                  </div>
                  {/* <div className=""></div> */}
                  <div className="col-span-2">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Urgent Purchase:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {item?.urgentPurchase ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="col-span-4">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Item URL:
                    </p>
                    <a
                      href={item?.itemUrl ?? ""}
                      className="font-roboto  text-[20px]"
                      style={{ color: "#B3261E" }}
                    >
                      {item?.itemUrl ?? "N/A"}
                    </a>
                  </div>
                </>
              ) : null}
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Item Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.itemName ?? "N/A"}
                </p>
              </div>
              <div></div>
              {service === "Shop For Me" ? (
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    Item Cost from Store:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {currencyFormatter.format(item?.originalCost ?? 0)}
                  </p>
                </div>
              ) : !confirm ? null : (
                <div className="">
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                    ID: {item?.idType}
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {item?.idNumber ?? "N/A"}
                  </p>
                </div>
              )}
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Quantity:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.qty ?? item?.quantity ?? "N/A"}
                </p>
              </div>
              {service === "Shop For Me" || !confirm ? null : (
                <>
                  {" "}
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Delivered by:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {item?.deliveredBy ?? "N/A"}
                    </p>
                  </div>
                  <div className=""></div>
                  <div className="">
                    <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                      Item delivery status:
                    </p>
                    <p className="font-roboto  text-[20px] text-brand/100">
                      {item?.itemDeliveryStatus ?? "N/A"}
                    </p>
                  </div>
                </>
              )}
              <div className=""></div>
              <div className=""></div>
            </div>
            <div className="mt-[20px] grid grid-cols-4">
              <div>
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Product/Item Picture:
                  <div className="w-[220px] h-[150px] mt-[10px] rounded-[10px] border">
                    <img
                      src={item?.itemImage ?? ""}
                      alt="product"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </p>
              </div>
              <div className=""></div>
              {service === "Shop For Me" ? (
                <>
                  <div className=""></div>
                  <div className=""></div>
                </>
              ) : null}

              <div>
                <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                  Additional Description:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {service === "Shop For Me"
                    ? item?.additionalDescription
                    : (item?.itemDescription ?? "N/A")}
                </p>
              </div>
              {service === "Shop For Me" ? null : (
                <div>
                  <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                    Item original cost:
                  </p>
                  <p className="font-roboto  text-[20px] text-brand/100">
                    {currencyFormatter.format(item?.itemOriginalCost ?? 0)}
                  </p>
                </div>
              )}
            </div>
            {/* <div className="grid grid-cols-4 mt-[10px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Color:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.itemColor ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Stripes:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.stripes ?? "N/A"} inches`}
                </p>
              </div>
              <div className=""></div>
              <div className=""></div>
            </div> */}
          </>
        ) : (
          <>
            <div className="grid grid-cols-4 mt-[30px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Product Name:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.itemName ?? "N/A"}
                </p>
              </div>
              <div></div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Product Original Cost
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  ${item?.originalCost ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Quantity:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.qty ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Weight:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.weight}kg` ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Height:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.height} inches` ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Length:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.length} inches` ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Width:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.width} inches` ?? "N/A"}
                </p>
              </div>
            </div>
            <div className="mt-[20px]">
              <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                Product/Item Picture:
              </p>
              <div className="w-[220px] h-[150px] mt-[10px] rounded-[10px] border"></div>
              <p className="text-[14px] text-t/100 font-roboto text-brand/200 mt-[10px]">
                Product Description:
              </p>
              <p className="font-roboto  text-[20px] text-brand/100">
                {item?.additionalDescription ?? "N/A"}
              </p>
            </div>
            <div className="grid grid-cols-2 mt-[10px] gap-[20px]">
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Color:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {item?.color ?? "N/A"}
                </p>
              </div>
              <div className="">
                <p className="text-[14px] text-t/100 font-roboto text-brand/200">
                  Stripes:
                </p>
                <p className="font-roboto  text-[20px] text-brand/100">
                  {`${item?.stripes} inches` ?? "N/A"}
                </p>
              </div>
            </div>
          </>
        )}
      </CardWrapper>
      {!activeStep && !proceed ? null : (
        <Box
          onClick={() => {
            if (confirm || service === "Shop For Me") {
              setOpen(true);
            } else setActiveStep(1);
          }}
        >
          <EditIcon />
        </Box>
      )}
      <UserModals
        open={open}
        onClose={() => setOpen(false)}
        title="Edit Package Details"
      >
        <CardWrapper title={`Item - #${itemNumber}`}>
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
                            sx={{
                              fontSize: "16px",
                              color: "#1C1B1F",
                            }}
                            type="text"
                            label="Store"
                            value={store}
                            onChange={(e) => setStore(e.target.value)}
                            fullWidth
                            placeholder="Select a store"
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
                            sx={{
                              fontSize: "16px",
                              color: "#1C1B1F",
                            }}
                            type="text"
                            label="Urgent Purchase"
                            value={urgentPurchase ? "Yes" : "No"}
                            // onChange={(e) => setUrgentPurchase(e.target.value)}
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
                            {["Yes", "No"].map((x) => (
                              <MenuItem
                                value={x}
                                key={x}
                                onClick={() =>
                                  x === "Yes"
                                    ? setUrgentPurchase(true)
                                    : setUrgentPurchase(false)
                                }
                              >
                                {x}
                              </MenuItem>
                            ))}
                          </TextField>
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
                      value={itemUrl}
                      onChange={(e) => setItemUrl(e.target.value)}
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
                            // setQuantity(quantityValue);
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
                            // setQuantity(quantityValue);
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
        <Box mt="30px">
          <Button
            startIcon={<ArrowLeftPurple />}
            variant="outlined"
            sx={{
              borderColor: "#79747E",
              color: "#79747E",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
              mr: "10px",
            }}
            onClick={() => setOpen(false)}
          >
            Back
          </Button>
          <Button
            startIcon={<ArrowRightWhite />}
            variant="contained"
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "172px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
            onClick={() => {
              
              // handleUpdateItem();
              setOpen(false);
            }}
          >
            Update
          </Button>
        </Box>
      </UserModals>
      <Snackbar
        open={error || success}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            borderRadius: "30px",
            width: "fit-content",
          },
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={success ? "Item successfully updated" : error}
        action={
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        }
      />
      <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default ItemBox;
