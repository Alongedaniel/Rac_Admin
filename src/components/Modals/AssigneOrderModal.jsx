import React from "react";
import UserModals from "../../pages/Users/components/UserModals";
import { Box, Grid, Typography } from "@mui/material";
import SectionHeader from "../SectionHeader";
import CardWrapper from "../order/components/CardWrapper";
import UserTag from "../../assets/icons/UserTag";
import Line from "../../assets/icons/Line";
import PackageDetailsInfo from "../order/components/PackageDetailsInfo";
import ShippingDetailsInfo from "../order/components/ShippingDetailsInfo";
import BillingDetailsInfo from "../order/components/BillingDetailsInfo";

const AssigneOrderModal = ({ open, onClose, order }) => {
  return (
    <UserModals
      open={open}
      onClose={onClose}
      title="Assigned Order Details"
      type1="Order ID"
      id1="OD78667"
    >
      <Box mb="30px">
        <SectionHeader noBorder title="Order Information" />
        <CardWrapper mt="20px" title="Order Information">
          <Box mt="5px">
            <Grid container wrap="nowrap" mb="20px">
              <Grid item xs={4.8}>
                <Typography fontSize="14px" color="#49454F">
                  Assigned Customer:
                </Typography>
                <Box display="flex" alignItems="center" gap="4px">
                  <UserTag />
                  <Typography fontSize="22px" color="#21005D">
                    {order.customer}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Order Type:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  Shipment
                </Typography>
              </Grid>
              <Grid item xs={4.8}>
                <Typography fontSize="14px" color="#49454F">
                  Order Status:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  {order.status}
                </Typography>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap">
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Service:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  {order.service}
                </Typography>
              </Grid>
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Shipment Method:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  {order.shipmentMethod}
                </Typography>
              </Grid>
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Delivery Company:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  DHL
                </Typography>
              </Grid>
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Order Creation Date:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  {order.date}
                </Typography>
              </Grid>
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Order Creation Time:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  {order.time}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
        <Box py="10px">
          <Line />
        </Box>
        <CardWrapper title="Shipping Details">
          <Box mt="5px">
            <Grid container wrap="nowrap" mb="20px">
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Shipping/Tracking ID:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  {order.id}
                </Typography>
              </Grid>
              <Grid item xs={9.6}>
                <Typography fontSize="14px" color="#49454F">
                  Shipping Status:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  Processing
                </Typography>
              </Grid>
            </Grid>
            <Grid container wrap="nowrap">
              <Grid item xs={12}>
                <Typography fontSize="14px" color="#49454F">
                  Packaging Status:
                </Typography>
                <Typography fontSize="22px" color="#1C1B1F">
                  {order.packaging}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      </Box>
      <Box mb="30px">
        <PackageDetailsInfo service={order.service} view={true} />
      </Box>
      <Box mb="30px">
        <ShippingDetailsInfo service={order.service} view={true} />
      </Box>
      <Box>
        <BillingDetailsInfo service={order.service} view={true} />
      </Box>
    </UserModals>
  );
};

export default AssigneOrderModal;
