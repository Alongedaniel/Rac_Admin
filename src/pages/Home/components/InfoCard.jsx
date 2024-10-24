import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const InfoCard = ({ title, count, iconComponents = [], subTitle }) => {
  return (
    <Box
      border="1px solid #CAC4DO"
      bgcolor="#fff"
      sx={{ width: "100%", borderRadius: "20px", p: "20px" }}
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <Typography
            fontSize="16px"
            fontWeight={500}
            color="#1D192B"
            mb="15px"
          >
            {title}
          </Typography>
          <Typography fontSize="28px" color="#6750A4" mb="8px">
            {count}
          </Typography>
          <Typography fontSize="12px" mb="15px" color="#79747E">
            {subTitle}
          </Typography>
        </Box>
        <Grid container spacing={1} wrap="nowrap">
          {iconComponents.map((x, i) => (
            <Grid
              item
              xs={3}
              key={i}
              display="flex"
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                gap="4px"
                alignItems="center"
                mr={i + 1 === iconComponents.length ? 0 : "8px"}
              >
                {x.icon}
                <Typography fontSize="11px" color="#625B71">
                  {x.value}
                </Typography>
              </Box>
              <Box
                display={i + 1 === iconComponents.length ? "none" : "block"}
                width="1px"
                height="6px"
                bgcolor="#CAC4D0"
              ></Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default InfoCard;
