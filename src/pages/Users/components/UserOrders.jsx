import React, { useState } from 'react'
import OrderTable from '../../../components/OrderTable';
import { useNavigate } from 'react-router-dom';
import { Box, Menu, MenuItem, Paper, Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import UserTag from '../../../assets/icons/UserTag';
import CheckIcon from '../../../assets/icons/CheckIcon';
import ProcessIcon from '../../../assets/icons/ProcessIcon';
import CloseSquare from '../../../assets/icons/CloseSquare';
import CheckMoreIcon from '../../../assets/icons/CheckMoreIcon';
import MoreIcon from '../../../assets/icons/MoreIcon';

const UserOrders = () => {
  const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("xl"));
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
                     type: "confirmed",
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
                   title={
                     <Tip text1="Shipping cost: To be paid upon clearing" />
                   }
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
    <Box>
      <OrderTable rows={rows} columns={columns}  height='262px'/>
    </Box>
  )
}

export default UserOrders
