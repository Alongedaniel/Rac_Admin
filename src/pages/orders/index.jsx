/* eslint-disable react/prop-types */
import { Link, Outlet, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch(to !== "" ? `/orders/` + to : "/orders/");
  return (
    <Link
      className={` ${
        match ? " border-b-[2px] border-brand/200 text-brand/200 " : ""
      }  h-full pb-[10px] font-roboto font-[500]
text-[14px]  outline-none`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

function Orders() {
  return (
    <div className="">
      <div
        className="bg-white border-t  flex items-end pt-[12px] px-[50px] space-x-[20px]"
        style={{
          borderBottomLeftRadius:  "30px",
          borderBottomRightRadius: "30px",
        }}
      >
        <CustomLink to="">Orders</CustomLink>
        <CustomLink to="requests">Requests</CustomLink>
        <CustomLink to="drafts">Draft</CustomLink>
      </div>
      <div className="px-[50px] mt-[16px] h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;
