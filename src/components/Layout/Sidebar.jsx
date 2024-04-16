/* eslint-disable react/prop-types */
import { Box, Divider } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useMatch } from "react-router-dom";
import HomeIcon from "../../assets/icons/HomeIcon";
import UserIcon from "../../assets/icons/UserIcon";
import OrderIcon from "../../assets/icons/OrderIcon";
import ShipmentIcon from "../../assets/icons/ShipmentIcon";
import ShopIcon from "../../assets/icons/ShopIcon";
import WalletIcon from "../../assets/icons/WalletIcon";
import BlogIcon from "../../assets/icons/BlogIcon";
import CalculatorIcon from "../../assets/icons/CalculatorIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";

function CustomLink({ children, to, icon, showFullBar, title, ...props }) {
  const childMatch = useMatch(to !== "" ? `/` + to + "/*" : "/");
  const location = useLocation()
  const pathname = location.pathname;
  return (
    <Link
      style={{
        display: "flex",
        alignItems: 'center',
        justifyContent: showFullBar ? "flex-start" : "center",
        // margin: showFullBar ? 0 : '0 auto',
        padding: "16px",
        gap: showFullBar ? "16px" : 0,
        backgroundColor: childMatch ? "#E6E1E514" : "",
        color: "#E7E0EC",
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "#E6E1E514",
        },
      }}
      to={to}
      {...props}
    >
      <div>{icon}</div>
      <Box display={{xs: 'none', lg: 'block'}}>{showFullBar && children}</Box>
    </Link>
  );
}

function Sidebar({ showFullBar, setShowFullBar }) {
  const { user } = useSelector((state) => state.user);
  
  const handleClick = () => {
    setShowFullBar(!showFullBar);
  };
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#060C2C",
        py: "40px",
        display: "flex",
        flexDirection: "column",
        transition: "min-width .3s ease",
        height: "100vh",
        overflowY: "auto",
        // position: "fixed",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        zIndex: 9999,
      }}
    >
      <div
        className={
          showFullBar
            ? "rounded-r-[10px] bg-[#E6E1E514] w-[100%] p-[10px] flex items-center space-x-[10px]"
            : "rounded-r-[10px] bg-[#E6E1E514] w-[100%] p-[10px] flex items-center "
        }
        onClick={handleClick}
      >
        <div
          className="h-[40px] w-[40px] bg-gray-300 flex items-center
         justify-center rounded-full font-roboto text-[20px] font-[500]"
        >
          R
        </div>
        {showFullBar && (
          <Box display={{ xs: "none", lg: "block" }} sx={{ color: "#fff" }}>
            <p className="font-[400] ">Welcome Back</p>
            <p className="text-[14px]">
              {user?.firstName}{" "}
              <span className="font-[500]">ID {user?.racId}</span>
            </p>
          </Box>
        )}
      </div>
      <div className="mt-[20px] grow flex flex-col ">
        <>
          {links.slice(0, 1).map(({ to, id, title, icon }) => (
            <CustomLink
              showFullBar={showFullBar}
              to={to}
              key={id}
              icon={icon}
              title={title}
            >
              <span className=" w-full"> {title}</span>
            </CustomLink>
          ))}
        </>
        <div className="flex flex-col mb-[170px] mt-[16px]">
          {links.slice(1, 7).map(({ to, id, title, icon }) => (
            <CustomLink
              showFullBar={showFullBar}
              to={to}
              key={id}
              icon={icon}
              title={title}
            >
              <span className=" w-full"> {title}</span>
            </CustomLink>
          ))}
        </div>
        <Box px="24px">
          <Divider sx={{ width: "100%", height: "1px", bgcolor: "#79747E" }} />
        </Box>

        <div className="flex flex-col pt-[10px]">
          {links.slice(7, 10).map(({ to, id, title, icon }) => (
            <CustomLink
              showFullBar={showFullBar}
              to={to}
              key={id}
              icon={icon}
              title={title}
            >
              <span className=" w-full"> {title}</span>
            </CustomLink>
          ))}
        </div>
      </div>
    </Box>
  );
}

export default Sidebar;

const links = [
  {
    id: 1,
    title: "Home",
    to: "/",
    icon: <HomeIcon/>
  },
  {
    id: 2,
    title: "Users",
    to: "/users-customers",
    icon: <UserIcon />
  },
  {
    id: 3,
    title: "Orders",
    to: "/orders",
    icon: <OrderIcon />
  },
  {
    id: 4,
    title: "Shipment",
    to: "/shipment",
    icon: <ShipmentIcon />
  },
  {
    id: 5,
    title: "Shop For Me",
    to: "/shop-for-me",
    icon: <ShopIcon />
  },
  {
    id: 6,
    title: "Payments",
    to: "/payment-history",
    icon: <WalletIcon />
  },
  {
    id: 7,
    title: "Blog",
    to: "/blog",
    icon: <BlogIcon />
  },
  // {
  //   id: 8,
  //   title: "Refer a Friend",
  //   to: "refer-a-friend",
  // },
  {
    id: 9,
    title: "Get a Quote",
    to: "/get-a-quote",
    icon: <CalculatorIcon />
  },
  {
    id: 10,
    title: "Settings",
    to: "/settings",
    icon: <SettingsIcon />
  },
];
