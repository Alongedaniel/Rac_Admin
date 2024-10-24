import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const EventUpdates = ({ id }) => {
  return (
    <Box
      p="20px"
      borderRadius="20px"
      border="1px solid #CAC4D0"
      bgcolor="#F4EFF4"
    >
      <Box mb="20px">
        <Typography fontSize="22px" color="#49454F">
          Event Update -{" "}
          <Typography display="inline" fontSize="22px" color="#6750A4">
            #{id}
          </Typography>
        </Typography>
      </Box>
      <Grid container mb="20px">
        <Grid item xs={12}>
          <Typography fontSize="14px" color="#49454F">
            Event Title:
          </Typography>
          <Typography
            sx={{ display: "inline" }}
            fontSize="22px"
            color="#1C1B1F"
          >
            Shipment was submitted
          </Typography>
        </Grid>
      </Grid>
      <Grid container mb="20px">
        <Grid item xs={12}>
          <Typography fontSize="14px" color="#49454F">
            Location
          </Typography>
          <Typography
            sx={{ display: "inline" }}
            fontSize="22px"
            color="#1C1B1F"
          >
            LAGOS - NIGERIA
          </Typography>
        </Grid>
      </Grid>
      <Grid container gap="20px" wrap="nowrap" mb="20px">
        <Grid item xs={6}>
          <Typography fontSize="14px" color="#49454F">
            Event Date:
          </Typography>
          <Typography
            sx={{ display: "inline" }}
            fontSize="22px"
            color="#1C1B1F"
          >
            12/02/2023
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography fontSize="14px" color="#49454F">
            Event Time:
          </Typography>
          <Typography
            sx={{ display: "inline" }}
            fontSize="22px"
            color="#1C1B1F"
          >
            9:47 AM
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <Typography fontSize="14px" color="#49454F">
            Note:
          </Typography>
          <Typography
            sx={{ display: "inline" }}
            fontSize="22px"
            color="#1C1B1F"
          >
            The notes will be visible here
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EventUpdates;
