import { Box, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import CircleRight from '../../assets/icons/CircleRight'
import CardWrapper from '../../components/order/components/CardWrapper';
import SectionHeader from '../../components/SectionHeader';
import ShopForMeItems from './ShopForMeItems';

const ShopForMePackageDetails = () => {
  return (
    <Box>
      <Box mb="32px">
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
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  type="number"
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
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  type="number"
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
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  type="number"
                  label="Total Width (in Inches)"
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
                  sx={{ fontSize: "16px", color: "#1C1B1F" }}
                  type="number"
                  label="Total Height (in Inches)"
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
          </Box>
        </Box>
      </Box>
      <Box width="100%" mb="24px">
        <CardWrapper title="Package Origin">
          <Box mt="5px">
            <Grid container gap="30px" wrap="nowrap">
              <Grid item xs={12}>
                <Typography fontSize="14px" color="#49454F">
                  Origin warehouse:
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  fontSize="22px"
                  color="#21005D"
                >
                  UK (London - warehouse)
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      </Box>
      <Box>
        <Box mb='12px'>
          <SectionHeader title="Details About This Package" noBorder />
              </Box>
              <ShopForMeItems service='Shop For Me' />
      </Box>
    </Box>
  );
}

export default ShopForMePackageDetails
