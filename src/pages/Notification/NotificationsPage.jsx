import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowBack from "../../assets/icons/ArrowBack";
import Panel from "./components/Panel";
import SectionHeader from "../../components/SectionHeader";
import { useNavigate } from "react-router-dom";
import CloseCircle from "../../assets/icons/CloseCircle";
import { LuCheck } from "react-icons/lu";
import ScrollableSection from "../../components/ScrollableSection";

const NotificationsPage = () => {
  const navigate = useNavigate();
  const notifications = [
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "1h ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "2d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "6d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "1h ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "2d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "6d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "1h ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "2d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "6d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "1h ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "2d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "6d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "1h ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "2d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "6d ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
    {
      title: "Your payment for the Order OD78667 has been confirmed",
      time: "3w ago",
    },
  ];
  return (
    <Box p="40px">
      <Box p="28px 24px" maxWidth="1200px" bgcolor="#fff" borderRadius="24px">
        <Box display="flex" alignItems="center" gap="16px" mb="24px">
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography fontSize="24px" color="#1C1B1F">
            Notifications
          </Typography>
        </Box>
        <Box>
          {notifications.length > 0 ? (
            <>
              <Box mb="24px">
                <SectionHeader title="Most Recent" noBorder />
                <Box
                  mt="18px"
                  p="20px"
                  bgcolor="#FFFBFE"
                  width="100%"
                  border="1px solid #CAC4D0"
                  borderRadius="20px"
                >
                  <Typography fontSize="16px" color="#49454F">
                    You don’t have any notifications yet
                  </Typography>
                </Box>
              </Box>
              <Box>
                <SectionHeader title="Older" noBorder />
                <ScrollableSection height="800px">
                  <Box
                    mt="18px"
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                    gap="10px"
                    width="100%"
                  >
                    {notifications.map((notification) => (
                      <Panel
                        notification={notification}
                        key={notification.title}
                      />
                    ))}
                  </Box>
                </ScrollableSection>
              </Box>
              <Box display="flex" gap="10px" alignItems="center" mt="24px">
                <Button
                  startIcon={<CloseCircle color="#6750A4" />}
                  onClick={() => navigate(-1)}
                  variant="outlined"
                  sx={{
                    width: "102px",
                    height: "40px",
                    borderRadius: "100px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#6750A4",
                    border: "1px solid #79747E",
                    textTransform: "none",
                  }}
                >
                  Back
                </Button>
                {notifications.length > 0 && (
                  <Button
                    startIcon={<LuCheck />}
                    variant="contained"
                    disableElevation
                    sx={{
                      width: "168px",
                      height: "40px",
                      borderRadius: "100px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#fff",
                      bgcolor: "#6750A4",
                      textTransform: "none",
                      "&:hover": {
                        bgcolor: "#6750A4",
                      },
                    }}
                  >
                    Mark all as read
                  </Button>
                )}
              </Box>
            </>
          ) : (
            <Box
              mt="18px"
              p="20px"
              bgcolor="#FFFBFE"
              width="100%"
              border="1px solid #CAC4D0"
              borderRadius="20px"
            >
              <Typography fontSize="16px" color="#49454F">
                You don’t have any notifications yet
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NotificationsPage;
