import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate()
  return (
    <Box p="32px 40px">
      <Box p="24px 30px" borderRadius="20px" maxWidth="1200px" bgcolor="#fff">
        <Typography fontSize="24px" color="#1C1B1F" mb="24px">
          My Account
        </Typography>
        <Box display="flex" gap="20px" mb="24px">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="24px"
            borderRadius="20px"
            border="1px solid #CAC4D0"
            height="226px"
            width="100%"
          >
            <Box>
              <Typography color="#49454F" fontSize="22px">
                Profile Information
              </Typography>
              <Typography color="#49454F" fontSize="16px">
                We know you through your profile information and it reflects on
                your invoices
              </Typography>
            </Box>
            <Box pt="16px" borderTop="2.2px dashed #79747E">
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  bgcolor: "#6750A4",
                  width: "100%",
                }}
                onClick={() => navigate("my_account_profile_information")}
              >
                View profile
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="24px"
            borderRadius="20px"
            border="1px solid #CAC4D0"
            height="226px"
            width="100%"
          >
            <Box>
              <Typography color="#49454F" fontSize="22px">
                Communication preferences
              </Typography>
              <Typography color="#49454F" fontSize="16px">
                You can customise your notification preferences for order or
                shipping updates, promotions, etc.
              </Typography>
            </Box>
            <Box pt="16px" borderTop="2.2px dashed #79747E">
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  bgcolor: "#6750A4",
                  width: "100%",
                }}
                onClick={() => navigate("my_account_communication_preferences")}
              >
                Modify communication preferences
              </Button>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="24px"
            borderRadius="20px"
            border="1px solid #CAC4D0"
            height="226px"
            width="100%"
          >
            <Box>
              <Typography color="#49454F" fontSize="22px">
                Security
              </Typography>
              <Typography color="#49454F" fontSize="16px">
                You can update your security settings easily here.
              </Typography>
            </Box>
            <Box pt="16px" borderTop="2.2px dashed #79747E">
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  height: "40px",
                  borderRadius: "100px",
                  textTransform: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  bgcolor: "#6750A4",
                  width: "100%",
                }}
                onClick={() => navigate("my_account_security")}
              >
                Modify security settings
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mb="24px">
          <Typography fontSize="24px" color="#1C1B1F" mb="24px">
            Payments
          </Typography>
          <Box display="flex" gap="20px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="24px"
              borderRadius="20px"
              border="1px solid #CAC4D0"
              height="278px"
              width="100%"
            >
              <Box>
                <Typography color="#49454F" fontSize="22px">
                  RAC exchange rates
                </Typography>
                <Typography color="#49454F" fontSize="16px">
                  Review and manage exchange rates applicable to international
                  shipments.
                </Typography>
              </Box>
              <Box pt="16px" borderTop="2.2px dashed #79747E">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    bgcolor: "#6750A4",
                    width: "100%",
                  }}
                  onClick={() => navigate("rac_exchange_rates")}
                >
                  Review exchange rates
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="24px"
              borderRadius="20px"
              border="1px solid #CAC4D0"
              height="278px"
              width="100%"
            >
              <Box>
                <Typography color="#49454F" fontSize="22px">
                  Shipment fees
                </Typography>
                <Typography color="#49454F" fontSize="16px">
                  Access and adjust fees associated with different shipment
                  types and destinations.
                </Typography>
              </Box>
              <Box pt="16px" borderTop="2.2px dashed #79747E">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    bgcolor: "#6750A4",
                    width: "100%",
                  }}
                  onClick={() => navigate("all_shipment_fees")}
                >
                  Review Shipment charges
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="24px"
              borderRadius="20px"
              border="1px solid #CAC4D0"
              height="278px"
              width="100%"
            >
              <Box>
                <Typography color="#49454F" fontSize="22px">
                  Procurement fees
                </Typography>
                <Typography color="#49454F" fontSize="16px">
                  Manage and review costs related to procurement processes and
                  vendor charges.
                </Typography>
              </Box>
              <Box pt="16px" borderTop="2.2px dashed #79747E">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    bgcolor: "#6750A4",
                    width: "100%",
                  }}
                  onClick={() => navigate("procurement_fees")}
                >
                  Review Procurement fees
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="24px"
              borderRadius="20px"
              border="1px solid #CAC4D0"
              height="278px"
              width="100%"
            >
              <Box>
                <Typography color="#49454F" fontSize="22px">
                  Payment Methods
                </Typography>
                <Typography color="#49454F" fontSize="16px">
                  Configure and manage accepted payment methods for customer
                  transactions.
                </Typography>
              </Box>
              <Box pt="16px" borderTop="2.2px dashed #79747E">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    bgcolor: "#6750A4",
                    width: "100%",
                  }}
                  onClick={() => navigate("payment_methods")}
                >
                  Review Payment Methods
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box mb="24px">
          <Typography fontSize="24px" color="#1C1B1F" mb="24px">
            General
          </Typography>
          <Box display="flex" gap="20px" mb="24px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="24px"
              borderRadius="20px"
              border="1px solid #CAC4D0"
              height="226px"
              width="100%"
            >
              <Box>
                <Typography color="#49454F" fontSize="22px">
                  Warehouse locations
                </Typography>
                <Typography color="#49454F" fontSize="16px">
                  View the complete shipment history of your customers.
                </Typography>
              </Box>
              <Box pt="16px" borderTop="2.2px dashed #79747E">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    bgcolor: "#6750A4",
                    width: "100%",
                  }}
                  onClick={() => navigate("warehouse_locations")}
                >
                  Review Shipment History
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="24px"
              borderRadius="20px"
              border="1px solid #CAC4D0"
              height="226px"
              width="100%"
            >
              <Box>
                <Typography color="#49454F" fontSize="22px">
                  Shipping Methods
                </Typography>
                <Typography color="#49454F" fontSize="16px">
                  Set up and customise various shipping methods and rules.
                </Typography>
              </Box>
              <Box pt="16px" borderTop="2.2px dashed #79747E">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    bgcolor: "#6750A4",
                    width: "100%",
                  }}
                  onClick={() =>
                    navigate("shipping_methods")
                  }
                >
                  Configure Shipping Methods
                </Button>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="24px"
              borderRadius="20px"
              border="1px solid #CAC4D0"
              height="226px"
              width="100%"
            >
              <Box>
                <Typography color="#49454F" fontSize="22px">
                  Customer Support Settings
                </Typography>
                <Typography color="#49454F" fontSize="16px">
                  Configure settings for customer service, including contact
                  methods and support hours.
                </Typography>
              </Box>
              <Box pt="16px" borderTop="2.2px dashed #79747E">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    height: "40px",
                    borderRadius: "100px",
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: 500,
                    bgcolor: "#6750A4",
                    width: "100%",
                  }}
                  onClick={() => navigate("customer_support_details")}
                >
                  CTA
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* <Button
          variant="outlined"
          sx={{
            color: "#6750A4",
            width: "170px",
            height: "40px",
            borderRadius: "100px",
            textTransform: "none",
            fontSize: "14px",
            fontWeight: 500,
            border: "1px solid #79747E",
          }}
          startIcon={<ArrowLeftPurple />}
        >
          Back to Settings
        </Button> */}
      </Box>
    </Box>
  );
};

export default Settings;
