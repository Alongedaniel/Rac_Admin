/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to, icon, ...props }) {
  const childMatch = useMatch(to !== "" ? `/admin/` + to + "/*" : "/admin/");
  return (
    <Link
      className={` ${
        childMatch ? "bg-brand/active" : ""
      }   w-full p-[10px_16px] hover:bg-brand/active  flex items-center space-x-[16px] font-roboto text-white outline-none`}
      to={to}
      {...props}
    >
      <div>{icon}</div>
      {children}
    </Link>
  );
}

function Sidebar() {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="min-w-[250px] bg-brand py-[15px] flex flex-col">
      <div className="rounded-r-[10px] bg-[#E6E1E514] w-[90%] p-[10px] flex items-center space-x-[10px]">
        <div
          className="h-[40px] w-[40px] bg-gray-300 flex items-center
         justify-center rounded-full font-roboto text-[20px] font-[500]"
        >
          R
        </div>
        <div className="text-white font-roboto">
          <p className="font-[400] ">Welcome Back</p>
          <p className="text-[14px]">
            {user?.firstName}{" "}
            <span className="font-[500]">ID {user?.racId}</span>
          </p>
        </div>
      </div>
      <div className="mt-[20px] grow flex flex-col justify-between">
        <div className="flex flex-col space-y-[10px]">
          {links.slice(0, 7).map(({ to, id, title }) => (
            <CustomLink to={to} key={id}>
              <div className="">i</div>
              <span className=" w-full"> {title}</span>
            </CustomLink>
          ))}
        </div>
        <div className="flex flex-col space-y-[10px] border-t pt-[10px] border-[#938F99]">
          {links.slice(7, 10).map(({ to, id, title }) => (
            <CustomLink to={to} key={id}>
              <div className="">i</div>
              <span className=" w-full"> {title}</span>
            </CustomLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

const links = [
  {
    id: 1,
    title: "Home",
    to: "",
  },
  {
    id: 2,
    title: "Customers",
    to: "customers",
  },
  {
    id: 3,
    title: "Orders",
    to: "orders",
  },
  {
    id: 4,
    title: "Shipment",
    to: "shipment",
  },
  {
    id: 5,
    title: "Shop For Me",
    to: "shop-for-me",
  },
  {
    id: 6,
    title: "Billing",
    to: "billing",
  },
  {
    id: 7,
    title: "Blog",
    to: "blog",
  },
  {
    id: 8,
    title: "Refer a Friend",
    to: "refer-a-friend",
  },
  {
    id: 9,
    title: "Get a Quote",
    to: "get-a-quote",
  },
  {
    id: 10,
    title: "Settings",
    to: "settings",
  },
];
