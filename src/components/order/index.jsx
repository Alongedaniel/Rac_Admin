import "./order.css";

import { BsThreeDots } from "react-icons/bs";
// import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { Box, Button, Menu, MenuItem, Paper, TextField, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import NewOrderIcon from "../../assets/icons/NewOrderIcon";
import ActionButton from "../ActionButton";
import BulkIcon from "../../assets/icons/BulkIcon";
import FilterIcons from "../../assets/icons/FilterIcons";
import { FaSearch } from "react-icons/fa";
import SearchIcon from "../../assets/icons/SearchIcon";
import OrderTable from "../OrderTable";
import { useNavigate } from "react-router-dom";
import CheckIcon from "../../assets/icons/CheckIcon";
import ProcessIcon from "../../assets/icons/ProcessIcon";
import CloseSquare from "../../assets/icons/CloseSquare";
import CheckMoreIcon from "../../assets/icons/CheckMoreIcon";
import MoreIcon from "../../assets/icons/MoreIcon";
import UserTag from "../../assets/icons/UserTag";
import { useGetProducts } from "../../utils/hooks/api/useGetProducts";
import axios from "axios";
import useCustomGetRequest from "../../utils/hooks/api/useCustomGetRequest";

function OrderHome() {
  const confirmedOrders = ['Confirmed', 'Delivered'];
  const { data } = useCustomGetRequest("import/mine/65b4eb70b9eac43109281773");
  console.log(data)
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('xl'))
    const open = Boolean(anchorEl);
    const handleOpenMenu = (e) => {
      setAnchorEl(e.currentTarget);
    };
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };
    const HeaderName = ({ header }) => {
      return (
        <Typography fontSize="14px" fontWeight={500} color="#000">
          {header}
        </Typography>
      );
    };
    const Tip = ({ text1 = "", text2 = "", text3 = "" }) => {
      return (
        <Typography fontSize="12px" fontWeight={500} color="#F4EFF4">
          {text1}
          <Typography fontSize="12px" fontWeight={500} color="#F4EFF4">
            {text2}
          </Typography>{" "}
          <Typography fontSize="12px" fontWeight={500} color="#F4EFF4">
            {text3}
          </Typography>
        </Typography>
      );
    };
    const getPackagingBgColor = (packaging) => {
      switch (packaging) {
        case "Packaging In Progress":
          return "#B3261E"; // yellow
        case "Packaging Canceled":
          return "#6750A4";
        case "Packaging Completed":
          return "#21005D";
        case "Not Started":
          return "#79747E";
        default:
          return null;
      }
    };
    const navigate = useNavigate();
    const columns = [
      {flex: desktop ? 1 : undefined,
        field: "id",
        headerName: <HeaderName header="Order ID" />,
        width: 90,
        renderCell: (params) => (
          <Typography
            onClick={() =>
              navigate(`order-id_${params.row.id}`, {
                state: {
                  order: params.row,
                  type: 'confirmed'
                },
              })
            }
            sx={{ cursor: "pointer" }}
            fontSize="14px"
            fontWeight={500}
            color="#000"
          >
            {params.row.id}
          </Typography>
        ),
      },
      {flex: desktop ? 1 : undefined,
        field: "service",
        headerName: <HeaderName header="Service" />,
        width: 120,
      },
      {flex: desktop ? 1 : undefined,
        field: "shipId",
        headerName: <HeaderName header="Shipment ID" />,
        width: 115,
      },
      {flex: desktop ? 1 : undefined,
        field: "customer",
        headerName: <HeaderName header="Customer" />,
        // type: "number",
        width: 150,
        renderCell: (params) => (
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="#21005D"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <UserTag />
            {params.row.customer}
          </Typography>
        ),
      },
      {flex: desktop ? 1 : undefined,
        field: "location",
        headerName: <HeaderName header="Shipment Location" />,
        // type: "number",
        width: 170,
        sortable: false,
        renderCell: (params) => (
          <Tooltip
            title={
              <Tip
                text1="City: Liverpool"
                text2="State: England"
                text3="State: England"
              />
            }
          >
            <Typography
              sx={{ cursor: "pointer" }}
              fontSize="14px"
              fontWeight={500}
              color="#000"
            >
              {params.row.location}
            </Typography>
          </Tooltip>
        ),
      },
      {flex: desktop ? 1 : undefined,
        field: "status",
        headerName: <HeaderName header="Status" />,
        // type: "number",
        width: 110,
        sortable: false,
        renderCell: (params) => (
          <Typography fontSize="14px" fontWeight={500} color="#000">
            {params.row.status}
          </Typography>
        ),
      },
      {flex: desktop ? 1 : undefined,
        field: "date",
        headerName: <HeaderName header="Processed Date" />,
        // type: "number",
        width: 150,
      },
      {flex: desktop ? 1 : undefined,
        field: "cost",
        headerName: <HeaderName header="Total Cost" />,
        // type: "number",
        width: 130,
        renderCell: (params) => (
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="#000"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {params.row.status === "Processed" ? (
              <Tooltip title={<Tip text1="Shipping cost: Paid" />}>
                <div>
                  <CheckIcon />
                </div>
              </Tooltip>
            ) : params.row.status === "Processing" ? (
              <Tooltip title={<Tip text1="Shipping cost: Processing" />}>
                <div>
                  <ProcessIcon />
                </div>
              </Tooltip>
            ) : params.row.status === "Cancelled" ? (
              <Tooltip title={<Tip text1="Shipping cost: Cancelled" />}>
                <div>
                  <CloseSquare />
                </div>
              </Tooltip>
            ) : (
              <Tooltip
                title={<Tip text1="Shipping cost: To be paid upon clearing" />}
              >
                <div>
                  <CheckMoreIcon />
                </div>
              </Tooltip>
            )}
            {params.row.cost}
          </Typography>
        ),
      },
      {flex: desktop ? 1 : undefined,
        field: "type",
        headerName: <HeaderName header="Type" />,
        // type: "number",
        width: 120,
      },
      {flex: desktop ? 1 : undefined,
        field: "staff",
        headerName: <HeaderName header="Staff In Charge" />,
        // type: "number",
        width: 150,
      },
      {flex: desktop ? 1 : undefined,
        field: "packaging",
        headerName: <HeaderName header="Packaging" />,
        // type: "number",
        width: 180,
        sortable: false,
        renderCell: (params) => (
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="#fff"
            sx={{
              bgcolor: getPackagingBgColor(params.row.packaging),
              p: "5px 10px",
              borderRadius: "10px",
            }}
          >
            {params.row.packaging}
          </Typography>
        ),
      },
      {flex: desktop ? 1 : undefined,
        field: "actions",
        headerName: <HeaderName header="Actions" />,
        // type: "number",
        width: 70,
        sortable: false,
        renderCell: (params) => (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div onClick={handleOpenMenu}>
              <MoreIcon />
            </div>
            <Paper>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                sx={{
                  "& .MuiMenu-paper": { boxShadow: 0, borderRadius: "20px" },
                }}
              >
                <MenuItem sx={{ height: "56px" }} onClick={handleCloseMenu}>
                  View Order Details
                </MenuItem>
                <MenuItem sx={{ height: "56px" }} onClick={handleCloseMenu}>
                  Check Payment Status
                </MenuItem>
                <MenuItem
                  sx={{
                    display:
                      params.row.status !== "Processed" ? "none" : "block",
                    height: "56px",
                  }}
                  onClick={handleCloseMenu}
                >
                  Cancel Order
                </MenuItem>
              </Menu>
            </Paper>
          </div>
        ),
      },
      // {
      //   field: "fullName",
      //   headerName: "Full name",
      //   description: "This column has a value getter and is not sortable.",
      //   sortable: false,
      //   width: 160,
      //   valueGetter: (params) =>
      //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
      // },
    ];

    const rows = [
      {
        id: "OD78617",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78627",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Not Started",
        actions: "actions",
      },
      {
        id: "OD78637",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Cancelled",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        id: "OD78647",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Canceled",
        actions: "actions",
      },
      {
        id: "OD78657",
        service: "Auto Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78667",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78677",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Cancelled",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78687",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78697",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78607",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78617",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78627",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Not Started",
        actions: "actions",
      },
      {
        id: "OD78637",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Cancelled",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        id: "OD78647",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Canceled",
        actions: "actions",
      },
      {
        id: "OD78657",
        service: "Auto Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78667",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78677",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Cancelled",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78687",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78697",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78607",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78617",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78627",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Not Started",
        actions: "actions",
      },
      {
        id: "OD78637",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Cancelled",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        id: "OD78647",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Canceled",
        actions: "actions",
      },
      {
        id: "OD78657",
        service: "Auto Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78667",
        service: "Shop For Me",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78677",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Cancelled",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78687",
        service: "Export",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78697",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Processed",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        id: "OD78607",
        service: "Import",
        shipId: "SH08756",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "processing",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        type: "Shipment",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
    ];
  return (
    <>
      <Box>
        {rows.length > 0 ? (
          <Box>
            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{ justifyContent: "space-between" }}
              width="100%"
              mb='16px'
            >
              <Box display="flex" alignItems="center" gap="20px">
                <ActionButton title="Filter view" icon={<FilterIcons />} />
                <TextField
                  id="search"
                  type="text"
                  placeholder="Search for orders with any related keyword"
                  InputProps={{
                    sx: {
                      border: "1px solid #79747E",
                      height: "50px",
                      minWidth: "458px",
                      p: "4px 16px",
                      borderRadius: "16px",
                      input: {
                        ml: "12px",
                      },
                    },
                    startAdornment: <SearchIcon />,
                  }}
                />
                <ActionButton title="Bulk Actions" icon={<BulkIcon />} />
              </Box>
              <ActionButton action={() => navigate('/orders/create-new-order')} title="Create new order" icon={<NewOrderIcon />} />
            </Box>
            <Box>
              <OrderTable columns={columns} rows={rows} />
            </Box>
          </Box>
        ) : (
          <Box
            display="flex"
            sx={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "30px",
            }}
            width="100%"
            height="70vh"
          >
            <Typography
              sx={{
                width: "460px",
                textAlign: "center",
                fontSize: "22px",
                color: "#000",
              }}
            >
              You don’t have any order yet, would you like to create one now?
            </Typography>
            <Button
              variant="contained"
              startIcon={<NewOrderIcon />}
              sx={{
                width: "fit-content",
                p: "10px 24px",
                bgcolor: "#6750A4",
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "capitalize",
                "&:hover": {
                  bgcolor: "#6750A4",
                },
                borderRadius: "100px",
              }}
            >
              Add new order
            </Button>
          </Box>
        )}
      </Box>
    </>
    // <div className="h-full">
    //   {order ? (
    //     <>
    //       <div className="flex items-center justify-between ">
    //         <div className="flex items-center space-x-[20px]">
    //           <button className="bg-brand/100 text-white font-roboto p-[10px_15px] rounded-[10px]">
    //             Filter View
    //           </button>
    //           <div className="border border-gray-600 rounded-[10px] px-[15px] w-[400px]">
    //             <input
    //               type="text"
    //               className="h-full w-full py-[11px] outline-none bg-transparent font-roboto"
    //               placeholder="Search for users with any related keyword"
    //             />
    //           </div>
    //           <button className="bg-brand/100 text-white font-roboto p-[10px_15px] rounded-[10px]">
    //             Bulk Actions
    //           </button>
    //         </div>
    //         <div>
    //           <button className="bg-brand/100 text-white font-roboto p-[10px_15px] rounded-[10px]">
    //             Create new Order
    //           </button>
    //         </div>
    //       </div>
    //       <div className=" h-[500px] mt-[30px] relative max-w-[1200px] overflow-x-auto w-full scrollbar">
    //         <table className="w-full bg-white text-sm text-left rtl:text-right  rounded-[10px]">
    //           <thead className="font-roboto  text-[14px] ">
    //             <tr className=" space-x-[20px]">
    //               <th className="px-6 py-3">
    //                 <input
    //                   type="checkbox"
    //                   name=""
    //                   id=""
    //                   className="h-[18px] w-[18px]"
    //                 />
    //               </th>
    //               <th scope="col" className="min-w-[90px]  py-3">
    //                 Order ID
    //               </th>
    //               <th scope="col" className="min-w-[100px]  py-3">
    //                 Type
    //               </th>
    //               <th scope="col" className="min-w-[110px] py-3">
    //                 Shipment ID
    //               </th>
    //               <th scope="col" className="min-w-[110px]  py-3">
    //                 Customer
    //               </th>
    //               <th scope="col" className="min-w-[130px]   py-3">
    //                 Shipment Location
    //               </th>
    //               <th scope="col" className="min-w-[110px] py-3">
    //                 Status
    //               </th>
    //               <th scope="col" className="min-w-[130px] py-3">
    //                 Processed Date
    //               </th>
    //               <th scope="col" className="min-w-[110px] py-3">
    //                 Payment Status
    //               </th>
    //               <th scope="col" className="min-w-[150px] py-3">
    //                 Staff In Charge
    //               </th>
    //               <th scope="col" className="min-w-[170px] py-3">
    //                 Packaging
    //               </th>
    //               <th scope="col" className="min-w-[60px] py-3">
    //                 Total
    //               </th>
    //               <th scope="col" className="min-w-[60px] py-3">
    //                 Actions
    //               </th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr className="bg-red-50 border-b gap-x-[20px] font-roboto">
    //               <th
    //                 scope="row"
    //                 className="px-6 py-4 font-medium  whitespace-nowrap"
    //               >
    //                 <input
    //                   type="checkbox"
    //                   name=""
    //                   id=""
    //                   className="h-[18px] w-[18px]"
    //                 />
    //               </th>
    //               <td className="min-w-[90px] py-4">
    //                 <div>
    //                   <p className="text-[16px] font-[500]">OD78667</p>
    //                   <p className="">{"SH08756"}</p>
    //                 </div>
    //               </td>
    //               <td className="min-w-[100px] py-4 font-[500] text-[14px]">
    //                 Shipment
    //               </td>
    //               <td className="min-w-[110px] text-[16px] font-[500] py-4">
    //                 SH08756
    //               </td>
    //               <td className="min-w-[110px] text-[16px] font-[500] py-4">
    //                 <div className="flex items-center space-x-[2px]">
    //                   <p>loll</p>
    //                   <p className="text-[#21005D] font-[500] text-[14px]">
    //                     Rexo Offorex
    //                   </p>
    //                 </div>
    //               </td>
    //               <td className="min-w-[130px] text-[14px] font-[500] py-4">
    //                 NG-LOS-A 3
    //               </td>
    //               <td className="min-w-[110px] text-[14px] font-[500] py-4">
    //                 Processed
    //               </td>
    //               <td className="min-w-[130px] text-[14px] font-[500] py-4">
    //                 22-03-2023 13:05
    //               </td>
    //               <td className="min-w-[110px] text-[14px] font-[500] py-4">
    //                 c
    //               </td>
    //               <td className="min-w-[150px] text-[14px] font-[500] py-4">
    //                 Micheal Sam obalodu
    //               </td>
    //               <td className="min-w-[150px] text-[14px] font-[500] py-4">
    //                 <p className="bg-[#B3261E] p-[4px_8px] w-fit text-[12px] rounded-[10px] text-white">
    //                   Packaging in progress
    //                 </p>
    //               </td>
    //               <td className="min-w-[110px] text-[14px] font-[500] py-4 ">
    //                 $107.76
    //               </td>
    //               <td className="min-w-[110px] text-[14px] font-[500] py-4 ">
    //                 <Menu as="div" className="relative inline-block text-left">
    //                   <div>
    //                     <Menu.Button className="inline-flex w-full justify-center ">
    //                       <BsThreeDots className="text-[25px]" />
    //                     </Menu.Button>
    //                   </div>
    //                   <Transition
    //                     as={Fragment}
    //                     enter="transition ease-out duration-100"
    //                     enterFrom="transform opacity-0 scale-95"
    //                     enterTo="transform opacity-100 scale-100"
    //                     leave="transition ease-in duration-75"
    //                     leaveFrom="transform opacity-100 scale-100"
    //                     leaveTo="transform opacity-0 scale-95"
    //                   >
    //                     <Menu.Items className="absolute z-20 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#FFFBFE] border-none shadow-lg  ">
    //                       <div className="">
    //                         <Menu.Item>
    //                           <Link to='/admin/order-detail'
    //                             className={`hover:bg-brand/200 hover:text-white group flex w-full items-center rounded-t-md  px-2 py-[10px] text-sm`}
    //                           >
    //                             View Order Details
    //                           </Link>
    //                         </Menu.Item>
    //                         <Menu.Item>
    //                           <button
    //                             className={` hover:bg-brand/200 hover:text-white group flex w-full items-center  px-2 py-[10px] text-sm`}
    //                           >
    //                             Check Payment Status
    //                           </button>
    //                         </Menu.Item>
    //                         <Menu.Item>
    //                           <button
    //                             className={`hover:bg-brand/200 hover:text-white group flex w-full items-center rounded-b-md  px-2 py-[10px] text-sm`}
    //                           >
    //                             Cancel Order
    //                           </button>
    //                         </Menu.Item>
    //                       </div>
    //                     </Menu.Items>
    //                   </Transition>
    //                 </Menu>
    //               </td>
    //             </tr>
    //           </tbody>
    //         </table>
    //       </div>
    //     </>
    //   ) : (
    //     <div className="flex flex-col items-center space-y-[30px] font-roboto border w-full h-[500px] justify-center">
    //       <p>You don’t have any order yet, would you like to create one now?</p>
    //       <Link to='/admin/orders/create' className="bg-brand/200 text-white w-fit p-[10px_15px] rounded-full">
    //         Add new order
    //       </Link>
    //     </div>
    //   )}
    // </div>
  );
}

export default OrderHome;
