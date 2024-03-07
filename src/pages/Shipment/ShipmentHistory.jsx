import { Box, Button, Menu, MenuItem, Paper, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import ActionButton from '../../components/ActionButton';
import SearchIcon from '../../assets/icons/SearchIcon';
import BulkIcon from '../../assets/icons/BulkIcon';
import NewOrderIcon from '../../assets/icons/NewOrderIcon';
import FilterIcons from '../../assets/icons/FilterIcons';
import OrderTable from '../../components/OrderTable';
import laptop from '../../assets/images/laptop.png'
import { useNavigate } from 'react-router-dom';
import UserTag from '../../assets/icons/UserTag';
import MoreIcon from '../../assets/icons/MoreIcon';
import CheckMoreIcon from '../../assets/icons/CheckMoreIcon';
import CloseSquare from '../../assets/icons/CloseSquare';
import ProcessIcon from '../../assets/icons/ProcessIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import NewShipmentIcon from '../../assets/icons/NewShipmentIcon';

const ShipmentHistory = () => {
    const [anchorEl, setAnchorEl] = useState(null);
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
          return "#B3261E";
        case "Packaging Completed":
          return "#21005D";
        default:
          return null;
      }
    };
    const getStatusBgColor = (status) => {
      switch (status) {
        case "Cancelled":
          return "#B3261E"; // yellow
        case "In Transit":
          return "#6750A4";
        case "Arrived Destination":
          return "#21005D";
        case "Cleared":
          return "#21005D";
        case "Delivered":
          return "#21005D";
        case "Processing":
          return "#79747E";
        case "Not Started":
          return "#CAC4D0";
        default:
          return null;
      }
    };
    const navigate = useNavigate();
    const columns = [
      {
        field: "image",
        headerName: <HeaderName header="Package(s) Image" />,
        width: 150,
        sortable: false,
        renderCell: (params) => (
          <img
            src={params.row.image}
            alt=""
            style={{ width: "110px", height: "50px" }}
          />
        ),
      },
      {
        field: "id",
        headerName: <HeaderName header="Shipment ID" />,
        width: 170,
        renderCell: (params) => (
          <Typography
            onClick={() =>
              navigate(`shipping-id_${params.row.id}`, {
                state: {
                  order: params.row,
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
      {
        field: "customer",
        headerName: <HeaderName header="Customer" />,
        // type: "number",
        width: 170,
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
      {
        field: "service",
        headerName: <HeaderName header="Service" />,
        width: 150,
      },
      //   {
      //     field: "shipId",
      //     headerName: <HeaderName header="Shipment ID" />,
      //     width: 115,
      //   },
      {
        field: "shippingMethod",
        sortable: false,
        headerName: <HeaderName header="Shipping Method" />,
        width: 150,
      },
      {
        field: "shipmentMethod",
        sortable: false,
        headerName: <HeaderName header="Shipment Method" />,
        width: 150,
      },
      {
        field: "status",
        headerName: <HeaderName header="Status" />,
        // type: "number",
        width: 170,
        sortable: false,
        renderCell: (params) => (
          <Typography
            fontSize="14px"
            fontWeight={500}
            width="100%"
            color="#fff"
            sx={{
              bgcolor: getStatusBgColor(params.row.status),
              p: "5px 10px",
              borderRadius: "10px",
            }}
          >
            {params.row.status}
          </Typography>
        ),
      },
      {
        field: "origin",
        sortable: false,
        headerName: <HeaderName header="Origin" />,
        width: 150,
      },

      {
        field: "destination",
        headerName: <HeaderName header="Destination" />,
        // type: "number",
        width: 150,
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

      {
        field: "date",
        headerName: <HeaderName header="Shipment Date" />,
        // type: "number",
        width: 170,
      },
      {
        field: "cost",
        headerName: <HeaderName header="Total Cost" />,
        // type: "number",
        width: 150,
        renderCell: (params) => (
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="#000"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            {params.row.status === "Not Started" ||
            params.row.status === "Cleared" ||
            params.row.status === "Delivered" ||
            params.row.status === "Cancelled" ? (
              <Tooltip title={<Tip text1="Shipping cost: Paid" />}>
                <div>
                  <CheckIcon />
                </div>
              </Tooltip>
            ) : params.row.status === "In Transit" ? (
              <Tooltip title={<Tip text1="Shipping cost: Processing" />}>
                <div>
                  <ProcessIcon />
                </div>
              </Tooltip>
            ) : params.row.status === "Processing" ? (
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
      {
        field: "packaging",
        headerName: <HeaderName header="Packaging" />,
        // type: "number",
        width: 190,
        sortable: false,
        renderCell: (params) => (
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="#fff"
            sx={{
              width: "100%",
              bgcolor: getPackagingBgColor(params.row.packaging),
              p: "5px 10px",
              borderRadius: "10px",
            }}
          >
            {params.row.packaging}
          </Typography>
        ),
      },
      {
        field: "staff",
        headerName: <HeaderName header="Staff In Charge" />,
        // type: "number",
        width: 170,
      },
      {
        field: "deliveryCompany",
        headerName: <HeaderName header="Delivery Company" />,
        // type: "number",
        width: 150,
        sortable: false,
      },
      {
        field: "dispatchCompany",
        headerName: <HeaderName header="Dispatch Company" />,
        // type: "number",
        width: 150,
        sortable: false,
      },

      {
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
        image: laptop,
        service: "Shop For Me",
        id: "SH08756",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "Delivered",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Shop For Me",
        id: "SH08757",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Rail",
        destination: "Lagos, Nigeria",
        status: "Cleared",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Import",
        id: "SH08758",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "Not Started",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Auto Import",
        id: "SH08759",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Road",
        destination: "Lagos, Nigeria",
        status: "Cancelled",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Export",
        id: "SH08760",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Rail",
        destination: "Lagos, Nigeria",
        status: "Arrived Destination",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Shop For Me",
        id: "SH08761",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "In Transit",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Import",
        id: "SH08762",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Road",
        destination: "Lagos, Nigeria",
        status: "Processing",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Auto Import",
        id: "SH08763",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Rail",
        destination: "Lagos, Nigeria",
        status: "Delivered",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Export",
        id: "SH08764",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "Cleared",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Shop For Me",
        id: "SH08765",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Road",
        destination: "Lagos, Nigeria",
        status: "Not Started",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Import",
        id: "SH08766",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Rail",
        destination: "Lagos, Nigeria",
        status: "Cancelled",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Auto Import",
        id: "SH08767",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "Arrived Destination",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Export",
        id: "SH08768",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Road",
        destination: "Lagos, Nigeria",
        status: "In Transit",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Shop For Me",
        id: "SH08769",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "Processing",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Export",
        id: "SH08770",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Rail",
        destination: "Lagos, Nigeria",
        status: "Delivered",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Import",
        id: "SH08771",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Road",
        destination: "Lagos, Nigeria",
        status: "Cleared",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Shop For Me",
        id: "SH08772",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "Not Started",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Auto Import",
        id: "SH08773",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "Cancelled",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Import",
        id: "SH08774",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Rail",
        destination: "Lagos, Nigeria",
        status: "Arrived Destination",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Export",
        id: "SH08775",
        customer: "Rexo Offorex",
        shippingMethod: "Custom",
        shipmentMethod: "Road",
        destination: "Lagos, Nigeria",
        status: "In Transit",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging Completed",
        actions: "actions",
      },
      {
        image: laptop,
        service: "Shop For Me",
        id: "SH08776",
        customer: "Rexo Offorex",
        shippingMethod: "Basic",
        shipmentMethod: "Air",
        destination: "Lagos, Nigeria",
        status: "Processing",
        origin: "NG-LOS-A 3",
        date: "22-03-2023 13:05",
        cost: "$107.76",
        deliveryCompany: "---",
        dispatchCompany: "---",
        staff: "Micheal Sam obalodu",
        packaging: "Packaging In Progress",
        actions: "actions",
      },
    ];
  return (
    <Box py="16px" px="40px">
      {rows.length > 0 ? (
        <Box>
          <Box
            display="flex"
            alignItems="center"
            gap="10px"
            sx={{ justifyContent: "space-between" }}
            width="100%"
            mb="16px"
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
            <ActionButton title="Create new shipment" icon={<NewShipmentIcon />} />
          </Box>
          <Box height="80%">
            <OrderTable pageSize={10} columns={columns} rows={rows} />
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
            You don’t have any shipment yet, would you like to create one now?
          </Typography>
          <Button
            variant="contained"
            startIcon={<NewShipmentIcon />}
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
            Add new shipment
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default ShipmentHistory
