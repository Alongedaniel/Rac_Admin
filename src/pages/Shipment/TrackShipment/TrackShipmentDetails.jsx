import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SectionHeader from '../../../components/SectionHeader';
import CardWrapper from '../../../components/order/components/CardWrapper';
import WhatsappIcon from '../../../assets/icons/WhatsappIcon';
import ArrowLeftPurple from '../../../assets/icons/ArrowLeftPurple';
import NewShipmentIcon from '../../../assets/icons/NewShipmentIcon';
import LeftArrow from '../../../assets/icons/LeftArrow';
import { useNavigate } from 'react-router-dom';

const TrackShipmentDetails = () => {
    const navigate = useNavigate()
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
              border="1px solid #CAC4D0"
              width="100%"
              height="88px"
              borderRadius="24px"
            ></Box>
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
          <CardWrapper title="All Shipment Updates"></CardWrapper>
        </Box>
        <Box mb="24px">
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
        </Box>
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
}

export default TrackShipmentDetails
