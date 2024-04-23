import { useEffect, useState } from "react";
import { getNavbarTitle } from "../../utils";

import { CiBellOn } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { Box, Button, Menu, MenuItem, Paper, Typography } from "@mui/material";
import BreadcrumbNavigation from "../BreadcrumbNavigation";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import ArrowDown from "../../assets/icons/ArrowDown";
import Profile from "../../assets/icons/Profile";
import ActivitiesIcon from "../../assets/icons/ActivitiesIcon";
import SecurityIcon from "../../assets/icons/SecurityIcon";
import ArrowForwardIcon from "../../assets/icons/ArrowForwardIcon";

function Navbar({navbarTitle}) {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const menuItems = [
    {
      icon: <Profile />,
      label: "Profile Information",
    },
    {
      icon: <ActivitiesIcon />,
      label: "Account Activities",
    },
    {
      icon: <SecurityIcon />,
      label: "Account Security",
    },
  ];

  return (
    <Box
      // position='fixed'
      // maxWidth="1289px"
      // mx='auto'
      sx={{
        px: "40px",
        borderBottomLeftRadius:
          location.pathname === "/orders" ||
          location.pathname === "/order-requests" ||
          location.pathname === "/order-drafts" ||
          location.pathname.includes("users")
            ? 0
            : "30px",
        borderBottomRightRadius:
          location.pathname === "/orders" ||
          location.pathname === "/order-requests" ||
          location.pathname === "/order-drafts" ||
          location.pathname.includes("users")
            ? 0
            : "30px",
      }}
      // pt="25px"
      bgcolor="#fff"
      zIndex={9999}
    >
      <Box
        // width="100%"
        display="flex"
        py="10px"
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Box
          px="10px"
          display={"flex"}
          sx={{ gap: "10px", flexDirection: "column" }}
        >
          <Typography fontSize="28px" color={"#060C2C"}>
            {navbarTitle}
          </Typography>
          <BreadcrumbNavigation />
        </Box>
        <div className="flex items-center space-x-[30px]">
          <Box position={"relative"}>
            <NotificationIcon />
            <Box
              width="10px"
              height="10px"
              bgcolor="#B3261E"
              position={"absolute"}
              sx={{ top: 0, right: 0, borderRadius: "100%" }}
            ></Box>
          </Box>
          <Box sx={{ bgcolor: open ? "#FFFBFE" : "transparent" }}>
            <Box
              display="flex"
              onClick={(e) => {
                if (open) setAnchorEl(null);
                else setAnchorEl(e.currentTarget);
              }}
              sx={{
                cursor: "pointer",
                p: "10px",
                borderRadius: open ? "100px" : 0,
              }}
              bgcolor={open ? "#6750A414" : "transparent"}
            >
              <Box>
                <ProfileIcon />
              </Box>
              <Box
                sx={{
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  transition: ".2s linear",
                }}
              >
                <ArrowDown />
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorPosition={{ vertical: "bottom", horizontal: "left" }}
        PaperProps={{
          sx: {
            borderRadius: "20px",
            width: "320px",
            // Add any other styles or overrides here
          },
        }}
        sx={{
          top: "10px",
          left: "-20px",
          m: 0,
          p: 0,
          "& .MuiMenuItem-root": {
            padding: "16px",
            margin: 0,
          },
          "& .MuiMenu-paper": {
            padding: 0,
            margin: 0,
            bgcolor: "#FFFBFE",
          },
        }}
      >
        <Box bgcolor="#6750A414">
          {menuItems.map((item, i) => (
            <MenuItem m={0} key={i} onClick={() => setAnchorEl(null)}>
              <Box width="100%" display="flex" gap="16px" alignItems="center">
                {item.icon}
                <Typography fontSize="16px" color="#1C1B1F" flex={1}>
                  {item.label}
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </MenuItem>
          ))}
          <MenuItem onClick={() => setAnchorEl(null)}>
            <Button
              variant="containd"
              sx={{
                width: "280px",
                height: "40px",
                borderRadius: "100px",
                bgcolor: "#6750A4",
                color: "#fff",
                fontWeight: 500,
                fontSize: "14px",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#6750A4",
                },
              }}
            >
              Logout
            </Button>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
}

export default Navbar;
