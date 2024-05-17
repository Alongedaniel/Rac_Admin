import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import InfoCard from './components/InfoCard'
import Shop from '../../assets/icons/Shop'
import Export from '../../assets/icons/Export'
import Import from '../../assets/icons/Import'
import Car from '../../assets/icons/Car'
import Chart from './components/Chart'
import OrderRequestComp from '../../components/order/order-request'
import ArrowLeftPurple from '../../assets/icons/ArrowLeftPurple'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const IconComponents = [
        {
            icon: <Shop />,
            value: 200
        },
        {
            icon: <Export />,
            value: 200
        },
        {
            icon: <Import />,
            value: 200
        },
        {
            icon: <Car />,
            value: 200
        },
    ]
  return (
    <Box p="32px 40px">
      <Box display="flex" gap="16px" mb="24px">
        <InfoCard
          title="Total Orders"
          count="1200"
          subTitle="Total orders performed on the RAC Logistics platform"
          iconComponents={IconComponents}
        />
        <InfoCard
          title="Total Shipments"
          count="1200"
          subTitle="Total shipments managed on the RAC Logistics platform"
          iconComponents={IconComponents}
        />
        <InfoCard
          title="Pending Payments"
          count="1200"
          subTitle="All pending payments on the RAC Logistics platform"
          iconComponents={IconComponents}
        />
        <InfoCard
          title="Order Requests"
          count="1200"
          subTitle="Total orders requested by customers through the RAC Logistics platform"
          iconComponents={IconComponents}
        />
      </Box>
      <Box mb="24px">
        <Chart />
      </Box>
      <Box>
        <Box display="flex" alignItems="center" gap="8px" mb="16px">
          <Typography fontSize="16px" fontWeight={500} color="#49454F">
            Unapproved Order Requests
          </Typography>
          <Box height="1px" width="100%" flex={1} bgcolor="#CAC4D0"></Box>
          <Button
                      variant="text"
                      startIcon={
                          <Box sx={{ transform: 'rotate(180deg)' }}>
                              <ArrowLeftPurple />
                          </Box>
                      }
                      sx={{
                          width: "97px",
                          height: "26px",
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#6750A4",
                          textTransform: "none",
                      }}
                      onClick={() => navigate('/order-requests') }
          >
            See all
          </Button>
        </Box>
        <OrderRequestComp home />
      </Box>
    </Box>
  );
}

export default Home
