import react from "react";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import CircleRight from "../../../assets/icons/CircleRight";
import ArrowRightWhite from "../../../assets/icons/ArrowRightWhite";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";

const OrderInformationForm = ({
  shopForMe,
  setAssignedCustomer,
  assignedCustomer,
  orderType,
  setOrderType,
  service,
  setService,
  shipmentMethod,
  setShipmentMethod,
  deliveryCompany,
  setDeliveryCompany,
}) => {
  const shipmentMethods = ["Road", "Air", "Rail", "Sea"];
  const deliveryCompanies = ["DHL", "Gokada", "Glovo"];
  const serviceList = ["Import", "Export", "Auto Import", "Shop For Me"];
  const orderTypeList = ["Shipment", "New Order", "Reorder", "Return"];

  return (
    <Box>
      <div className="flex items-center space-x-[10px] ">
        <CircleRight />
        <p className="font-roboto font-[500] text-[14px] text-t/100 text-brand/200 ">
          Fill in the order & customer details
        </p>
      </div>
      <Box
        display="flex"
        flexDirection="column"
        gap="30px"
        mt="10px"
        p="30px"
        sx={{ borderTop: "1px solid #79747E" }}
      >
        <TextField
          id="assigned-customer"
          sx={{ fontSize: "16px", color: "#1C1B1F" }}
          type="text"
          label="Assigned Customer"
          fullWidth
          disabled={shopForMe}
          value={assignedCustomer}
          onChange={(e) => setAssignedCustomer(e.target.value)}
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
        <Grid container gap="30px" wrap="nowrap">
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              sx={{ fontSize: "16px", color: "#1C1B1F" }}
              id="shipment-method"
              type="text"
              value={shopForMe ? "Shipment" : orderType}
              onChange={(e) => setOrderType(e.target.value)}
              label="Order Type"
              defaultValue={"Shipment"}
              disabled={shopForMe}
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
              {orderTypeList.map((method, i) => (
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
              id="service"
              type="text"
              label="Service"
              value={shopForMe ? "Shop For Me" : service}
              onChange={(e) => setService(e.target.value)}
              defaultValue={"Import"}
              disabled={shopForMe}
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
              {serviceList.map((method, i) => (
                <MenuItem value={method} key={i}>
                  {method}
                </MenuItem>
              ))}{" "}
            </TextField>
          </Grid>
        </Grid>
        <Grid container gap="30px" wrap="nowrap">
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              sx={{ fontSize: "16px", color: "#1C1B1F" }}
              id="shipment-method"
              type="text"
              label="Shipment Method"
              value={shipmentMethod}
              onChange={(e) => setShipmentMethod(e.target.value)}
              defaultValue={"Air"}
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
              {shipmentMethods.map((method, i) => (
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
              id="delivery-company"
              type="text"
              value={deliveryCompany}
              onChange={(e) => setDeliveryCompany(e.target.value)}
              label="Delivery Company"
              defaultValue={"DHL"}
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
              {deliveryCompanies.map((company, i) => (
                <MenuItem value={company} key={i}>
                  {company}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OrderInformationForm;
