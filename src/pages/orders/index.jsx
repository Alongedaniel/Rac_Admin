/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Link, Outlet, useLocation, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch(to !== "" ? `/orders/` + to : "/orders/");
  const location = useLocation();
  const currentRoute = location.pathname === to
  return (
    <Link
      className={` ${
        match || currentRoute  ? " border-b-[2px] border-brand/200 text-brand/200 " : ""
      }  h-full pb-[10px] font-roboto font-[500]
text-[14px]  outline-none`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

function Orders({children}) {
  return (
    <Box sx={{ position: "relative" }}>
      <div
        className="bg-white border-t  flex items-end pt-[12px] px-[50px] space-x-[20px]"
        style={{
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/order-requests">Requests</CustomLink>
        <CustomLink to="/order-drafts">Draft</CustomLink>
      </div>
      <Box sx={{px: '50px', mt: '16px', height: '100%'}}
        // maxWidth={{ xs: "1100px", xl: "1400px" }}
      >
        <Outlet />
        {children}
      </Box>
    </Box>
  );
}

export default Orders;
