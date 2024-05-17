import {
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTag from "../../assets/icons/UserTag";
import CheckIcon from "../../assets/icons/CheckIcon";
import ProcessIcon from "../../assets/icons/ProcessIcon";
import CloseSquare from "../../assets/icons/CloseSquare";
import CheckMoreIcon from "../../assets/icons/CheckMoreIcon";
import MoreIcon from "../../assets/icons/MoreIcon";
import FilterIcons from "../../assets/icons/FilterIcons";
import SearchIcon from "../../assets/icons/SearchIcon";
import ActionButton from "../../components/ActionButton";
import BulkIcon from "../../assets/icons/BulkIcon";
import NewOrderIcon from "../../assets/icons/NewOrderIcon";
import OrderTable from "../../components/OrderTable";
import ShopIcon from "../../assets/icons/ShopIcon";
import laptop from "../../assets/images/laptop.png";
import ManageIcon from "../../assets/icons/ManageIcon";
import PackageDetailsInfo from "../../components/order/components/PackageDetailsInfo";
import ArrowSquare from "../../assets/icons/ArrowSquare";
import UserModals from "../Users/components/UserModals";

const ShopForMe = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [packageDetails, setPackageDetails] = useState(false)
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
    let procId = [];
  const navigate = useNavigate();
  const columns = [
    {flex: 1,
      field: "image",
      headerName: <HeaderName header="Package(s) Image" />,
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box
        >
          {/* {params.row.image.length} */}
          {params.row.image.length === 1 ? (
            <Box display="flex" flexDirection="column" gap="5px">
              {params.row.image?.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  style={{
                    borderRadius: '5px',
                    width: "110px",
                    height: "50px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Box>
          ) : params.row.image.length === 2 ? (
            <Box display="flex" flexDirection="column" gap="5px">
              {params.row.image?.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                  style={{
                    borderRadius: '5px',
                    width: "110px",
                    height: `${(50 - 5) / 2}px`,
                    objectFit: "cover",
                  }}
                />
              ))}
            </Box>
          ) : params.row.image.length === 3 ? (
            <Box display="flex" gap="5px">
              <Box display="flex" flexDirection="column" gap="5px">
                {params.row.image?.slice(0, 2).map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    style={{
                        borderRadius: '5px',
                      width: `${(110 - 5) / 2}px`,
                      height: `${(50 - 5) / 2}px`,
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Box>
              {params.row.image?.slice(2, 3).map((image) => (
                <Box>
                  <img
                    key={image}
                    src={image}
                    alt=""
                    style={{
                        borderRadius: '5px',
                      width: `${(110 - 5) / 2}px`,
                      height: `${50}px`,
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          ) : params.row.image.length > 3 ? (
            <Box display="flex" gap="5px">
              <Box display="flex" flexDirection="column" gap="5px">
                {params.row.image?.slice(0, 2).map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    style={{
                        borderRadius: '5px',
                      width: `${(110 - 5) / 2}px`,
                      height: `${(50 - 5) / 2}px`,
                      objectFit: "cover",
                    }}
                  />
                ))}
              </Box>
              <Box display="flex" flexDirection="column" gap="5px">
                {params.row.image?.slice(2, 3).map((image) => (
                  <Box>
                    <img
                      key={image}
                      src={image}
                      alt=""
                      style={{
                        borderRadius: '5px',
                        width: `${(110 - 5) / 2}px`,
                        height: `${(50 - 5) / 2}px`,
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ))}
                <Typography textAlign='center' fontSize="12px" color="#49454F">
                  +{params.row.image.length - 3}
                </Typography>
              </Box>
            </Box>
          ) : null}
        </Box>
      ),
    },
    {flex: 1,
      field: "procid",
      headerName: <HeaderName header="Procurement ID" />,
      width: 160,
      renderCell: (params) => (
        <Box
          onClick={() => setPackageDetails(true)}
        >
          {/* {params.row.procid.map((proc) => {
              let id = []
            id.push(proc);
            return (
              <Typography
                // onClick={() =>
                //   navigate(`order-id_${params.row.id}`, {
                //     state: {
                //       order: params.row,
                //       type: "confirmed",
                //     },
                //   })
                // }
                sx={{ cursor: "pointer" }}
                fontSize="14px"
                fontWeight={500}
                color="#000"
              >
                {id.join().length > 13
                  ? id.join().slice(0, 13) + "..."
                  : id}
              </Typography>
            );
          })} */}
          <Typography
            // onClick={() =>
            //   navigate(`order-id_${params.row.id}`, {
            //     state: {
            //       order: params.row,
            //       type: "confirmed",
            //     },
            //   })
            // }
            sx={{ cursor: "pointer" }}
            fontSize="14px"
            fontWeight={500}
            color="#000"
          >
            {params.row.procid.join().length > 12
              ? params.row.procid.join(', ').slice(0, 12) + "..."
              : params.row.procid.map((item) => item)}
          </Typography>
        </Box>
      ),
    },
    {flex: 1,
      field: "id",
      headerName: <HeaderName header="Order ID" />,
      width: 110,
      renderCell: (params) => (
        <Typography
          onClick={() =>
            navigate(`/orders/order-id_${params.row.id}`, {
              state: {
                order: params.row,
                type: 'shop for me'
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
    //   {
    //     field: "service",
    //     headerName: <HeaderName header="Service" />,
    //     width: 120,
    //   },
    //   {
    //     field: "shipId",
    //     headerName: <HeaderName header="Shipment ID" />,
    //     width: 115,
    //   },
    {flex: 1,
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
    {flex: 1,
      field: "status",
      headerName: <HeaderName header="Status" />,
      // type: "number",
      width: 170,
      sortable: false,
      renderCell: (params) => (
        <Typography fontSize="14px" fontWeight={500} color="#000">
          {params.row.status}
        </Typography>
      ),
    },
    {flex: 1,
      field: "origin",
      sortable: false,
      headerName: <HeaderName header="Origin" />,
      width: 150,
    },
    {flex: 1,
      field: "destination",
      headerName: <HeaderName header="Destination" />,
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
            {params.row.destination}
          </Typography>
        </Tooltip>
      ),
    },

    {flex: 1,
      field: "date",
      headerName: <HeaderName header="Created On" />,
      // type: "number",
      width: 150,
    },
    {flex: 1,
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
          {params.row.status === "Items Procured" ? (
            <Tooltip title={<Tip text1="Shipping cost: Paid" />}>
              <div>
                <CheckIcon />
              </div>
            </Tooltip>
          ) : params.row.status === "Procurement In Progress" ? (
            <Tooltip
              title={<Tip text1="Shipping cost: Procurement In Progress" />}
            >
              <div>
                <ProcessIcon />
              </div>
            </Tooltip>
          ) : params.row.status === "Pending Procurement" ? (
            <Tooltip title={<Tip text1="Shipping cost: Pending Procurement" />}>
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
    //   {
    //     field: "type",
    //     headerName: <HeaderName header="Type" />,
    //     // type: "number",
    //     width: 120,
    //   },
    //   {
    //     field: "staff",
    //     headerName: <HeaderName header="Staff In Charge" />,
    //     // type: "number",
    //     width: 150,
    //   },
    //   {
    //     field: "packaging",
    //     headerName: <HeaderName header="Packaging" />,
    //     // type: "number",
    //     width: 180,
    //     sortable: false,
    //     renderCell: (params) => (
    //       <Typography
    //         fontSize="14px"
    //         fontWeight={500}
    //         color="#fff"
    //         sx={{
    //           bgcolor: getPackagingBgColor(params.row.packaging),
    //           p: "5px 10px",
    //           borderRadius: "10px",
    //         }}
    //       >
    //         {params.row.packaging}
    //       </Typography>
    //     ),
    //   },
    {flex: 1,
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
                    params.row.status !== "Items Procured" ? "none" : "block",
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
      image: [laptop],
      procid: ["PR08751"],
      origin: "London, UK",
      id: "OD78617",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop],
      procid: ["PR08753", "PR08754", "PR08755"],
      origin: "London, UK",
      id: "OD7862867",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD78637",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Pending Procurement",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD78647",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD78653",
      image: [laptop, laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD7833667",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD178677",
      image: [laptop, laptop, laptop, laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Pending Procurement",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop, laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD2786875",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD7867697",
      image: [
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
      ],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD7823607",
      image: [
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop,
        laptop
      ],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD7867617",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD7862765",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD7863877",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Pending Procurement",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD786347",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD786757",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD78667",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD78677",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Pending Procurement",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD786872",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD78237",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD78607",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD7843617",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD78627",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD7863457",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Pending Procurement",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD7864647",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD78657",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      id: "OD78667",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD78677",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Pending Procurement",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD786877",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD78623517",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Items Procured",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
    {
      id: "OD78607",
      image: [laptop, laptop, laptop, laptop],
      procid: ["PR08756", "PR08756", "PR08756"],
      origin: "London, UK",
      customer: "Rexo Offorex",
      destination: "Lagos, Nigeria",
      status: "Procurement In Progress",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      actions: "actions",
    },
  ];
  return (
    <>
      <Box>
        {rows.length > 0 ? (
          <Box p="16px 40px">
            <Box
              display="flex"
              alignItems="center"
              gap="10px"
              sx={{ justifyContent: "space-between" }}
              width="100%"
              mb="16px"
            >
              <Box
                maxWidth="50%"
                flex={1}
                display="flex"
                alignItems="center"
                gap="20px"
              >
                <ActionButton title="Filter view" icon={<FilterIcons />} />
                <TextField
                  id="search"
                  type="text"
                  placeholder="Search for orders with any related keyword"
                  fullWidth
                  InputProps={{
                    sx: {
                      "&.MuiTextField-root": { width: "100%" },
                      border: "1px solid #79747E",
                      height: "50px",
                      width: "100%",
                      //   maxWidth: "458px",
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
              <Box display="flex" alignItems="center" gap="16px">
                <ActionButton
                  bg="#4F378B"
                  title="Manage Processing Fees"
                  icon={<ManageIcon />}
                />
                <ActionButton
                  // action={() => navigate("/orders/create-new-order")}
                  title="Make new procurement"
                  icon={<ShopIcon width="18px" height="18px" color="#fff" />}
                />
              </Box>
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
              You don’t have any shop for me record yet, would you like to
              create one now?
            </Typography>
            <Button
              variant="contained"
              startIcon={<ShopIcon width="18px" height="18px" color="#fff" />}
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
              Add new shop for me order
            </Button>
          </Box>
        )}
      </Box>
      <UserModals
        open={packageDetails}
        onClose={() => setPackageDetails(false)}
        title="Package Details"
        type1="Ordeer ID"
        type2="Tracking ID"
        id1="OD78667"
        id2="SH78667"
      >
        <PackageDetailsInfo service="Shop For Me" view={true} />
      </UserModals>
    </>
  );
};

export default ShopForMe;
