import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowSquare from '../../assets/icons/ArrowSquare';
import UserTag from '../../assets/icons/UserTag';
import Eye from '../../assets/icons/Eye';
import CardWrapper from '../../components/order/components/CardWrapper';
import EditIcon from '../../assets/icons/EditIcon';
import NewShipmentIcon from '../../assets/icons/NewShipmentIcon';
import Line from '../../assets/icons/Line';
import EventUpdates from './EventUpdates';
import ArrowLeftPurple from '../../assets/icons/ArrowLeftPurple';

const ShipmentDetails = () => {
  const location = useLocation()
  const navigate = useNavigate()
    const order = location?.state?.order
  return (
    <Box py="30px" px="40px">
      <Box p="30px" borderRadius="20px" bgcolor="#fff">
        <Box display="flex" alignItems="center" gap="10px" mb="30px">
          <Typography fontSize="24px" color="#1C1B1F">
            Order ID:{" "}
            <Typography
              fontSize="24px"
              color="#1C1B1F"
              display="inline"
              fontWeight={700}
            >
              {order.id}
            </Typography>
          </Typography>
          <ArrowSquare />
          <Typography fontSize="24px" color="#1C1B1F">
            Tracking ID:{" "}
            <Typography
              fontSize="24px"
              color="#1C1B1F"
              display="inline"
              fontWeight={700}
            >
              SH78667
            </Typography>
          </Typography>
        </Box>
        <Box mb="30px">
          <SectionHeader title="Main Shipment Details" noBorder />
          <Box mt="20px" display="flex" gap="30px" alignItems="center">
            <CardWrapper title="Shipment Information">
              <Box mt="5px">
                <Grid container gap="30px" wrap="nowrap" mb="40px">
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Assigned Order:
                    </Typography>
                    <Box display="flex" alignItems="center" gap="8px">
                      <Typography
                        sx={{ display: "inline" }}
                        fontSize="22px"
                        color="#21005D"
                      >
                        {order.id}{" "}
                      </Typography>
                      <Eye />
                    </Box>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Assigned Customer:
                    </Typography>
                    <Box display="flex" alignItems="center" gap="8px">
                      <UserTag />
                      <Typography
                        display="inline"
                        fontSize="22px"
                        color="#21005D"
                      >
                        Rex Offorex
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={2.4}></Grid>
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Service:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      {order.service}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}></Grid>
                </Grid>
                <Grid container gap="30px" wrap="nowrap">
                  <Grid item xs={4.8}>
                    <Typography fontSize="14px" color="#49454F">
                      Packaging Status:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      {order.packaging}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Shipment Creation Date:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      {order.date}
                    </Typography>
                  </Grid>

                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Shipment Creation Time:
                    </Typography>
                    <Typography fontSize="22px" color="#1C1B1F">
                      9:48am
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}></Grid>
                </Grid>
              </Box>
            </CardWrapper>
            <EditIcon />
          </Box>
        </Box>
        <Box mb="10px">
          <SectionHeader noBorder title="Shipping Details" />
          <Box mt="20px" display="flex" gap="30px" alignItems="center">
            <CardWrapper title="Courier Information">
              <Box mt="5px">
                <Grid container gap="30px" wrap="nowrap">
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Delivery Company:
                    </Typography>
                    <Typography
                      sx={{ display: "inline" }}
                      fontSize="22px"
                      color="#21005D"
                    >
                      {order.deliveryCompany}
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}>
                    <Typography fontSize="14px" color="#49454F">
                      Tracking ID:
                    </Typography>
                    <Typography
                      display="inline"
                      fontSize="22px"
                      color="#21005D"
                    >
                      765764
                    </Typography>
                  </Grid>
                  <Grid item xs={4.8}>
                    <Typography fontSize="14px" color="#49454F">
                      Tracking Link:
                    </Typography>
                    <Typography fontSize="22px" color="#B3261E">
                      http://jjnkkukja.jhgyjayjdjjhcjc
                    </Typography>
                  </Grid>
                  <Grid item xs={2.4}></Grid>
                </Grid>
              </Box>
            </CardWrapper>
            <Box onClick={() => setActiveStep(1)}>
              <EditIcon />
            </Box>
          </Box>
        </Box>
        <Line />
        <Box mt="10px" mb="10px" display="flex" gap="30px" alignItems="center">
          <Box
            py="20px"
            px="35px"
            border="1px solid #CAC4D0"
            borderRadius="20px"
            width="100%"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" gap="24px">
              <Typography fontSize="22px" fontWeight={400} color="#49454F">
                Shipment Status:
              </Typography>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <Box
                  width="12px"
                  height="12px"
                  borderRadius="100%"
                  bgcolor="#fff"
                  border="2px solid #21005D"
                ></Box>
                <span style={{ fontSize: "22px", color: "#6750A4" }}>
                  Shipment {order.status}
                </span>
              </div>
            </Box>
            <Button
              startIcon={<NewShipmentIcon color="#6750A4" />}
              variant="text"
              sx={{
                color: "#6750A4",
                width: "206px",
                height: "40px",
                textTransform: "none",
                // mt: "30px",
              }}
              // onClick={() => navigate("/shipment")}
            >
              Update Shipping Details
            </Button>
          </Box>
          <Box visibility="hidden">
            <EditIcon />
          </Box>
        </Box>
        <Box display="flex" gap="30px" alignItems="center" mb="10px">
          <CardWrapper title="Event Updates">
            <Grid
              container
              spacing="10px"
              mt="5px"
              height="700px"
              overflow="auto"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Grid key={item} item xs={6}>
                  <EventUpdates id={item} />
                </Grid>
              ))}
            </Grid>
          </CardWrapper>
          <EditIcon />
        </Box>

        <Line />
        <Box mt="10px" display="flex" gap="30px" alignItems="center">
          <CardWrapper title="Estimated Delivery Period">
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Estimated Delivery Date:
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  fontSize="22px"
                  color="#1C1B1F"
                >
                  12/02/2023
                </Typography>
              </Grid>
              <Grid item xs={2.4}>
                <Typography fontSize="14px" color="#49454F">
                  Delivery Time of the Day:
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  fontSize="22px"
                  color="#1C1B1F"
                >
                  By End of Day
                </Typography>
              </Grid>
              <Grid item xs={2.4}></Grid>
              <Grid item xs={2.4}></Grid>
              <Grid item xs={2.4}></Grid>
            </Grid>
          </CardWrapper>
          <Box onClick={() => setActiveStep(1)}>
            <EditIcon />
          </Box>
        </Box>
        <Box mt="30px" display='flex' alignItems='center' gap='10px'>
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
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            startIcon={<NewShipmentIcon />}
            variant="contained"
            // disabled={service.length === 0}
            sx={{
              bgcolor: "#6750A4",
              color: "#fff",
              width: "218px",
              height: "40px",
              borderRadius: "100px",
              textTransform: "none",
            }}
          >
            Update Shipping Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ShipmentDetails
