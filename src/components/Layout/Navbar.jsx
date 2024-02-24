import { useEffect, useState } from "react";
import { getNavbarTitle } from "../../utils";

import { CiBellOn } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import BreadcrumbNavigation from "../BreadcrumbNavigation";
import NotificationIcon from "../../assets/icons/NotificationIcon";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import ArrowDown from "../../assets/icons/ArrowDown";

function Navbar() {
  const location = useLocation();
  const [navbarTitle, setNavbarTitle] = useState(
    getNavbarTitle(location.pathname)
  );

  useEffect(() => {
    const updatedPathname = location.pathname;
    setNavbarTitle(getNavbarTitle(updatedPathname));
  }, [location.pathname]);

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
          location.pathname === "/order-drafts"
            ? 0
            : "30px",
        borderBottomRightRadius:
          location.pathname === "/orders" ||
          location.pathname === "/order-requests" ||
          location.pathname === "/order-drafts"
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
          <Box display="flex">
            <ProfileIcon />
            <Box>
              <ArrowDown />
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default Navbar;
