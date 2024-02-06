/* eslint-disable react/prop-types */
import { Link, Outlet, useMatch } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  const match = useMatch(to !== "" ? `/admin/orders/` + to : "/admin/orders/");
  return (
    <Link
      className={` ${
        match ? " border-b-[2px] border-brand/200" : ""
      }  h-full pb-[10px] font-roboto  outline-none`}
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
      <div className="bg-white border-t  flex items-end pt-[12px] px-[30px] space-x-[20px]">
        <CustomLink to="">Confirmed Orders</CustomLink>
        <CustomLink to="requests"> Order Requests</CustomLink>
        <CustomLink to="drafts">Draft Orders </CustomLink>
      </div>
      <div className="p-[20px] mt-[20px] h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default Orders;
