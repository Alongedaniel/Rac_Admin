import React from "react";
import UserModals from "../../pages/Users/components/UserModals";
import { Box, Button, Typography } from "@mui/material";
import ArrowCircleUp from "../../assets/icons/ArrowCircleUp";
import EyeIconOpen from "../../assets/icons/EyeIconOpen";
import { CheckmarkIcon } from "react-hot-toast";
import { Check } from "iconsax-react";
import { LuCheck } from "react-icons/lu";
import CloseCircle from "../../assets/icons/CloseCircle";
import ArrowForwardIcon from "../../assets/icons/ArrowForwardIcon";
import ArrowLeftIcon from "../../assets/icons/ArrowLeftIcon";
import ArrowLeftPurple from "../../assets/icons/ArrowLeftPurple";

const Notification = ({ open, onClose }) => {
  const notifications = [
    {
      title:
        "A new Shop for me Order Request [ODR78667] has been made by customer, kindly respond now",
      time: "1h ago",
    },
    {
      title:
        "Shipment Cost Payment for Import Order Request [OD78667] has been confirmed, Kindly start shipment now",
      time: "2d ago",
    },
    {
      title:
        "Procurement Cost Payment for Shop for me Order Request [OD78667] has been confirmed, Kindly start procuring their items now now",
      time: "6d ago",
    },
    {
      title:
        "A new Shop for me Order Request [OD78667] has been made by customer, kindly respond now",
      time: "3w ago",
    },
    {
      title:
        "A new Shop for me Order Request [OD78667] has been made by customer, kindly respond now",
      time: "3w ago",
    },
  ];
  return (
    <UserModals
      open={open}
      onClose={onClose}
      title="Notifications"
      height={notifications.length > 0 ? '80%' : "fit-content"}
    >
      <Box mb="30px">
        {notifications.length > 0 ? (
          <Box
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap="10px"
            width="100%"
          >
            {notifications.map((notification) => (
              <Box
                position="relative"
                p="20px"
                bgcolor="#FFFBFE"
                border="1px solid #CAC4D0"
                display="flex"
                alignItems="center"
                borderRadius="20px"
                justifyContent="space-between"
                width="100%"
              >
                <Typography
                  fontSize="16px"
                  color="#49454F"
                  flex={1}
                  maxWidth="596px"
                >
                  {notification.title}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Box width="1px" height="16px" bgcolor="#CAC4D0"></Box>
                  <Typography ml="18px" mr="34px" fontSize="14px" color="#000">
                    {notification.time}
                  </Typography>
                  <EyeIconOpen />
                </Box>
                <Box
                  width="8px"
                  height="8px"
                  bgcolor="#DC362E"
                  position={"absolute"}
                  sx={{ top: 0, left: 0, borderRadius: "100%" }}
                ></Box>
              </Box>
            ))}
          </Box>
        ) : (
          <Box
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
      <Box display="flex" gap="10px" alignItems="center">
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
              color: "#1D192B",
              bgcolor: "#E8DEF8",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#E8DEF8",
              },
            }}
          >
            Mark all as read
          </Button>
        )}
        <Button
          startIcon={<CloseCircle color="#6750A4" />}
          onClick={onClose}
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
          Close
        </Button>
        {notifications.length > 0 && (
          <Button
            startIcon={
              <Box sx={{ transform: "rotate(180deg)" }}>
                <ArrowLeftPurple color="#fff" />
              </Box>
            }
            variant="contained"
            sx={{
              width: "172px",
              height: "40px",
              borderRadius: "100px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#fff",
              bgcolor: "#6750A4",
              textTransform: "none",
            }}
          >
            View all
          </Button>
        )}
      </Box>
    </UserModals>
  );
};

export default Notification;
