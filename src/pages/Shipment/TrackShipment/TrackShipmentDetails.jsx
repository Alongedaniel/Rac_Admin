import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import CardWrapper from "../../../components/order/components/CardWrapper";
import WhatsappIcon from "../../../assets/icons/WhatsappIcon";
import ArrowLeftPurple from "../../../assets/icons/ArrowLeftPurple";
import NewShipmentIcon from "../../../assets/icons/NewShipmentIcon";
import LeftArrow from "../../../assets/icons/LeftArrow";
import { useNavigate } from "react-router-dom";
import TrackItemIcon from "../../../assets/icons/TrackItemIcon";
import TickCircle from "../../../assets/icons/TickCircle";
import LineArrow from "../../../assets/icons/LineArrow";
import MinusCircle from "../../../assets/icons/MinusCircle";
import ScrollableSection from "../../../components/ScrollableSection";

const TrackShipmentDetails = () => {
  const navigate = useNavigate();
  const shipmentDetails = [
    {
      day: "Wednesday",
      date: "April, 05 2023",
      tracks: [
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "April, 05 2023",
      tracks: [
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "April, 05 2023",
      tracks: [
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "April, 05 2023",
      tracks: [
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "April, 05 2023",
      tracks: [
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
      ],
    },
    {
      day: "Wednesday",
      date: "April, 05 2023",
      tracks: [
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
        {
          time: "09:53 Local time",
          processLocation: "Processed at LONDON - HEARTHROW - UK",
          location: "LONDON - HEATHROW - UK",
        },
      ],
    },
  ];

  return (
    <Box p="30px 40px">
      <Box p="30px" maxWidth="1140px" borderRadius="24px" bgcolor="#fff">
        <Box mb="24px" display="flex" alignItems="center" gap="10px">
          <Box sx={{ cursor: "pointer" }} onClick={() => navigate(-1)}>
            <LeftArrow />
          </Box>
          <Typography fontSize="24px" color="#1C1B1F">
            Tracking ID:{" "}
            <Typography
              fontSize="24px"
              color="#1C1B1F"
              display="inline"
              fontWeight={700}
            >
              RACS1234567
            </Typography>
          </Typography>
        </Box>
        <Box mb="24px">
          <SectionHeader title="Shipping Locations and Status" noBorder />
          <Box
            mt="18px"
            p="24px"
            border="1px solid #CAC4D0"
            display="flex"
            gap="16px"
            borderRadius="24px"
          >
            <Box>
              <Typography fontSize="16px" fontWeight={500} color="#49454F">
                Origin:
              </Typography>
              <Typography fontSize="16px" color="#49454F">
                Lagos, Nigeria
              </Typography>
            </Box>
            <Box width="1px" height="88px" bgcolor="#CAC4D0"></Box>
            <Box
              flex={1}
              // border="1px solid #CAC4D0"
              width="100%"
              // height="88px"
              // borderRadius="24px"
            >
              <Grid container wrap="nowrap" mb="16px">
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={2.875}
                >
                  <TickCircle />
                  <LineArrow />
                </Grid>
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={2.875}
                >
                  <MinusCircle />
                  <LineArrow />
                </Grid>
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={2.875}
                >
                  <MinusCircle />
                  <LineArrow />
                </Grid>
                <Grid
                  sx={{ display: "flex", alignItems: "center" }}
                  item
                  xs={2.875}
                >
                  <MinusCircle />
                  <LineArrow />
                </Grid>
                <Grid item xs={0.5}>
                  <MinusCircle />
                </Grid>
              </Grid>
              <Grid container wrap="nowrap">
                <Grid item xs={2.4}>
                  <Typography fontSize="16px" fontWeight={500} color="#49454F">
                    Processing
                  </Typography>
                </Grid>
                <Grid item xs={2.4}>
                  <Typography
                    textAlign="left"
                    fontSize="16px"
                    fontWeight={500}
                    color="#49454F"
                  >
                    In Transit
                  </Typography>
                </Grid>
                <Grid item xs={2.4}>
                  <Typography
                    textAlign="center"
                    fontSize="16px"
                    fontWeight={500}
                    color="#49454F"
                  >
                    Undergoing Customs Clearing
                  </Typography>
                </Grid>
                <Grid item xs={2.4}>
                  <Typography
                    textAlign="right"
                    fontSize="16px"
                    fontWeight={500}
                    color="#49454F"
                  >
                    Ready for Pickup
                  </Typography>
                </Grid>
                <Grid item xs={2.4}>
                  <Typography
                    textAlign="right"
                    fontSize="16px"
                    fontWeight={500}
                    color="#49454F"
                  >
                    Delivered
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box width="1px" height="88px" bgcolor="#CAC4D0"></Box>
            <Box>
              <Typography fontSize="16px" fontWeight={500} color="#49454F">
                Destination:
              </Typography>
              <Typography fontSize="16px" color="#49454F">
                Texas, USA
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap="10px" mb="24px">
          <Box width="100%">
            <SectionHeader title="Most Recent Update" noBorder />
            <Box mt="16px" pl="34px">
              <Typography fontSize="22px" fontWeight={700} color="#1C1B1F">
                Processed at London-Heathrow -UK
              </Typography>
              <Typography fontSize="14px" color="#1C1B1F">
                April, 05 2023 09:53 AM local time, London- Heathrow-UK
              </Typography>
            </Box>
          </Box>
          <Box width="100%">
            <SectionHeader title="Estimated Delivery date" noBorder />
            <Box mt="16px" pl="34px">
              <Typography fontSize="22px" fontWeight={700} color="#1C1B1F">
                April,10 2023 - By End of Day
              </Typography>
              <Typography fontSize="14px" color="#1C1B1F">
                12 days remaining to arrive destination
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box mb="24px">
          <CardWrapper title="All Shipment Updates">
            <Box mt="5px" borderBottom="1px solid #CAC4D0" position="relative">
              <ScrollableSection height="800px">
                <Box bgcolor="transparent">
                  {shipmentDetails?.map((item, i) => (
                    <Box
                      key={i}
                      display="flex"
                      borderBottom={
                        i + 1 !== shipmentDetails.length
                          ? "2px dashed #79747E"
                          : "none"
                      }
                    >
                      <Box
                        p="10px 10px 10px 10px"
                        width="100%"
                        maxWidth="139px"
                      >
                        <Typography fontSize="14px" color="#1C1B1F">
                          {item.day}
                        </Typography>
                        <Typography
                          fontSize="16px"
                          color="#1C1B1F"
                          fontWeight={700}
                        >
                          {item.date}
                        </Typography>
                      </Box>
                      <Box
                        p="10px"
                        width="100%"
                        borderLeft="1px solid #79747E"
                        display="flex"
                        flexDirection="column"
                        gap="15px"
                      >
                        {item.tracks?.map((item, i) => (
                          <Box
                            key={i}
                            display="flex"
                            alignItems="center"
                            gap="40px"
                          >
                            <Box
                              position="relative"
                              left="-20px"
                              pl="30px"
                              // bgcolor="#fff"
                            >
                              <TrackItemIcon />
                            </Box>
                            <Box
                              display="flex"
                              flexDirection="column"
                              gap="5px"
                            >
                              <Typography fontSize="14px" color="#1C1B1F">
                                {item.time}
                              </Typography>
                              <Typography
                                fontSize="14px"
                                color="#1C1B1F"
                                fontWeight={500}
                              >
                                {item.processLocation}
                              </Typography>
                              <Typography fontSize="14px" color="#1C1B1F">
                                {item.location}
                              </Typography>
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </ScrollableSection>
              {/* <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                sx={{
                  boxShadow: "0px -4px 8px -4px rgba(0, 0, 0, 0.2)",
                  width: "100%",
                  height: "7px",
                  background: `linear-gradient(to top, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0.02) 100%)`,
                  borderRadius: '8px 8px 0 0'
                }}
              ></Box> */}
            </Box>
          </CardWrapper>
        </Box>
        {/* <Box mb="24px">
          <SectionHeader title="Have A Concern?" noBorder />
          <Box mt="16px" pl="34px">
            <Typography fontSize="14px" color="#1C1B1F" mb="10px">
              If you would prefer to speak to someone personally about the
              location of your shipment, please use the button below;
            </Typography>
            <Button
              startIcon={<WhatsappIcon />}
              variant="outlined"
              sx={{
                width: "227px",
                borderColor: "#79747E",
                color: "#79747E",
                height: "40px",
                borderRadius: "100px",
                textTransform: "none",
              }}
            >
              Speak to a Customer Rep
            </Button>
          </Box>
        </Box> */}
        <Box>
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
};

export default TrackShipmentDetails;
