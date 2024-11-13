import { Box, Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import HomeIcon from "../assets/icons/HomeIcon";
import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";
import { useNavigate, useParams, Link } from "react-router-dom";
import OrderIcon from "../assets/icons/OrderIcon";
import UserIcon from "../assets/icons/UserIcon";
import WalletIcon from "../assets/icons/WalletIcon";
import ShopIcon from "../assets/icons/ShopIcon";
import ShipmentIcon from "../assets/icons/ShipmentIcon";
import SettingsIcon from "../assets/icons/SettingsIcon";
import CalculatorIcon from "../assets/icons/CalculatorIcon";

const BreadcrumbNavigation = () => {
  const url = window.location.pathname;
  const segments = url.split("/").filter((segment) => segment !== "");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(segments);
  const PageIcon = ({url}) => {
    const current = url === '/' ? url : url.split('/')[1]
    console.log(current, 'curr')
    switch (current) {
      case '/':
        return <HomeIcon width="19px" height="19px" />;
      case 'order-requests':
        return <OrderIcon width="19px" height="19px" />;
      case 'orders':
        return <OrderIcon width="19px" height="19px" />;
      case 'users-customers':
        return <UserIcon width="19px" height="19px" />;
      case 'users-staffs':
        return <UserIcon width="19px" height="19px" />;
      case 'payment-history':
        return <WalletIcon width="19px" height="19px" />;
      case 'get-a-quote':
        return <CalculatorIcon width="19px" height="19px" />;
      case 'settings':
        return <SettingsIcon width="19px" height="19px" />;
      case 'shop-for-me':
        return <ShopIcon width="19px" height="19px" />
      case 'shipments':
        return <ShipmentIcon width="19px" height="19px" />;
    }
  }
  return (
    <Box display='flex' alignItems='center' gap='8px'>
      {/* <Box onClick={() => navigate("/")}>
        <HomeIcon width="19px" height="19px" />
      </Box> */}
      <PageIcon url={url} />
      <Breadcrumbs
        separator={
          url === "/" || segments.length === 1 ? null : <ArrowLeftIcon />
        }
      >
        {url === "/" ? (
          <Typography sx={{ fontSize: "14px", color: "#625B71" }}>
            Home
          </Typography>
        ) : null}
        {segments.map((link, i) => {
          const routeTo = `/${segments.slice(0, i + 1).join("/")}`;
          return (
            <Link
              key={i}
              style={{
                fontSize: "14px",
                color: "#625B71",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#E6E1E514",
                },
                pointerEvents: i === segments.length - 1 ? "none" : "all",
              }}
              to={i === segments.length - 1 ? "" : routeTo}
            >
              {link}
              {/* {id ? `=${id}` : null} */}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbNavigation;
