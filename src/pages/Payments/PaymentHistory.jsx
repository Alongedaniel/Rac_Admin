import { Box, Button, Menu, MenuItem, Paper, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import ActionButton from '../../components/ActionButton';
import SearchIcon from '../../assets/icons/SearchIcon';
import BulkIcon from '../../assets/icons/BulkIcon';
import OrderTable from '../../components/OrderTable';
import ShopIcon from '../../assets/icons/ShopIcon';
import FilterIcons from '../../assets/icons/FilterIcons';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '../../assets/icons/CheckIcon';
import ProcessIcon from '../../assets/icons/ProcessIcon';
import CloseSquare from '../../assets/icons/CloseSquare';
import CheckMoreIcon from '../../assets/icons/CheckMoreIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import ReverseIcon from '../../assets/icons/ReverseIcon';

const PaymentHistory = () => {
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
        field: "id",
        headerName: <HeaderName header="Invoice ID" />,
        width: 110,
        renderCell: (params) => (
          <Typography
            onClick={() =>
              navigate(`invoice-id_${params.row.id}`, {
                state: {
                  order: params.row,
                },
              })
            }
            sx={{ cursor: "pointer" }}
            fontSize="14px"
            fontWeight={500}
            color="#1C1B1F"
          >
            {params.row.id}
          </Typography>
        ),
      },
      {flex: 1,
        field: "referenceId",
        headerName: <HeaderName header="Reference ID" />,
        width: 150,
        sortable: false,
        renderCell: (params) => (
          <Typography fontSize="14px" color="#1C1B1F">
            {params.row.referenceId}
          </Typography>
        ),
      },
      {flex: 1,
        field: "orderId",
        headerName: <HeaderName header="Req/Order ID" />,
        width: 160,
        renderCell: (params) => (
          <Typography
            sx={{ cursor: "pointer" }}
            fontSize="14px"
            color="#1C1B1F"
          >
            {params.row.orderId}
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
        field: "service",
        headerName: <HeaderName header="Service" />,
        // type: "number",
        width: 150,
        renderCell: (params) => (
          <Typography fontSize="14px" color="#1C1B1F">
            {params.row.service}
          </Typography>
        ),
      },
      {flex: 1,
        field: "paymentFor",
        headerName: <HeaderName header="Payment For" />,
        // type: "number",
        width: 170,
        sortable: false,
        renderCell: (params) => (
          <Typography fontSize="14px" color="#1C1B1F">
            {params.row.paymentFor}
          </Typography>
        ),
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
            {params.row.status === "paid" ? (
              <Tooltip title={<Tip text1="Paid" />}>
                <div>
                  <CheckIcon />
                </div>
              </Tooltip>
            ) : params.row.status === "processing" ? (
              <Tooltip title={<Tip text1="Processing" />}>
                <div>
                  <ProcessIcon />
                </div>
              </Tooltip>
            ) : params.row.status === "cancelled" ? (
              <Tooltip title={<Tip text1="Cancelled" />}>
                <div>
                  <CloseSquare />
                </div>
              </Tooltip>
            ) : params.row.status === "reversed" ? (
              <Tooltip title={<Tip text1="Reversed" />}>
                <div>
                  <ReverseIcon />
                </div>
              </Tooltip>
            ) : params.row.status === "unpaid" ? (
              <Tooltip title={<Tip text1="Unpaid" />}>
                <div>
                  <CheckMoreIcon />
                </div>
              </Tooltip>
            ) : (
              <Tooltip
                title={<Tip text1="To be paid upon clearing" />}
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
      {flex: 1,
        field: "createdDate",
        headerName: <HeaderName header="Created On" />,
        // type: "number",
        width: 150,
      },
      {flex: 1,
        field: "paidDate",
        headerName: <HeaderName header="Paid On" />,
        // type: "number",
        width: 150,
      },
      {flex: 1,
        field: "paymentMethod",
        headerName: <HeaderName header="Payment Method" />,
        // type: "number",
        width: 150,
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
        id: "IN6123578",
        referenceId: "T814020787890154",
        orderId: "OD78667",
        service: "Export",
        paymentFor: "Shipping Cost",
        cost: "$107.76",
        createdDate: "22-03-2023 13:05",
        paidDate: "22-03-2023 13:05",
        paymentMethod: "Paystack",
        status: "unpaid",
      },
      {
        id: "IN6123579",
        referenceId: "T814020787890154",
        orderId: "OD78667",
        service: "Auto Import",
        paymentFor: "Shipping Cost",
        cost: "$107.76",
        createdDate: "22-03-2023 13:05",
        paidDate: "22-03-2023 13:05",
        paymentMethod: "Paystack",
        status: "to-be-paid",
      },
      {
        id: "IN6123580",
        referenceId: "T814020787890154",
        orderId: "OD78667",
        service: "Auto Import",
        paymentFor: "Clearing & Port Handling Cost",
        cost: "$107.76",
        createdDate: "22-03-2023 13:05",
        paidDate: "22-03-2023 13:05",
        paymentMethod: "Paystack",
        status: "paid",
      },
      {
        id: "IN6123581",
        referenceId: "T814020787890154",
        orderId: "OD78667",
        service: "Shop For Me",
        paymentFor: "Shipping Cost",
        cost: "$107.76",
        createdDate: "22-03-2023 13:05",
        paidDate: "22-03-2023 13:05",
        paymentMethod: "Paystack",
        status: "processing",
      },
      {
        id: "IN6123582",
        referenceId: "T814020787890154",
        orderId: "OD78667",
        service: "Shop For Me",
        paymentFor: "Procurement Cost",
        cost: "$107.76",
        createdDate: "22-03-2023 13:05",
        paidDate: "22-03-2023 13:05",
        paymentMethod: "Paystack",
        status: "cancelled",
      },
      {
        id: "IN6123583",
        referenceId: "T814020787890154",
        orderId: "OD78667",
        service: "Import",
        paymentFor: "Shipping Cost",
        cost: "$107.76",
        createdDate: "22-03-2023 13:05",
        paidDate: "22-03-2023 13:05",
        paymentMethod: "Paystack",
        status: "reversed",
      },
    ];
  return (
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
              //   maxWidth="50%"
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
            {/* <Box display="flex" alignItems="center" gap="16px">
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
            </Box> */}
          </Box>
          <Box><OrderTable columns={columns} rows={rows} /></Box>
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
            You have no payment history here at the moment yet.
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
  );
}

export default PaymentHistory
