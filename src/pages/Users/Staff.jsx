import { Box, Button, Menu, MenuItem, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import NewCustomerIcon from '../../assets/icons/NewCustomerIcon';
import { useNavigate } from 'react-router-dom';
import ActionButton from '../../components/ActionButton';
import FilterIcons from '../../assets/icons/FilterIcons';
import SearchIcon from '../../assets/icons/SearchIcon';
import BulkIcon from '../../assets/icons/BulkIcon';
import OrderTable from '../../components/OrderTable';
import MoreIcon from '../../assets/icons/MoreIcon';

const Staff = () => {
  const navigate = useNavigate()
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
    const truncateEmail = (email) => {
      const maxLength = 13;
      let seperate = email.split("@");
      let name =
        seperate[0].length > maxLength
          ? seperate[0].slice(0, maxLength) + "..."
          : seperate[0];
      let boiler = "@" + seperate[1];
      return name + boiler;
  };
  const getStatusBgColor = (status) => {
    switch (status) {
      case "Suspended":
        return "#B3261E"; // yellow
      case "Verified":
        return "#6750A4";
      case "Unverified":
        return "#79747E";
      case 'Closed':
        return "#21005D";
      case 'Pending Verification':
        return "#CAC4D0";
      default:
        return null;
    }
  };
     const columns = [
       // {
       //   field: "image",
       //   headerName: <HeaderName header="Package(s) Image" />,
       //   width: 150,
       //   sortable: false,
       //   renderCell: (params) => (
       //     <Box>
       //       {/* {params.row.image.length} */}
       //       {params.row.image.length === 1 ? (
       //         <Box display="flex" flexDirection="column" gap="5px">
       //           {params.row.image?.map((image) => (
       //             <img
       //               key={image}
       //               src={image}
       //               alt=""
       //               style={{
       //                 borderRadius: "5px",
       //                 width: "110px",
       //                 height: "50px",
       //                 objectFit: "cover",
       //               }}
       //             />
       //           ))}
       //         </Box>
       //       ) : params.row.image.length === 2 ? (
       //         <Box display="flex" flexDirection="column" gap="5px">
       //           {params.row.image?.map((image) => (
       //             <img
       //               key={image}
       //               src={image}
       //               alt=""
       //               style={{
       //                 borderRadius: "5px",
       //                 width: "110px",
       //                 height: `${(50 - 5) / 2}px`,
       //                 objectFit: "cover",
       //               }}
       //             />
       //           ))}
       //         </Box>
       //       ) : params.row.image.length === 3 ? (
       //         <Box display="flex" gap="5px">
       //           <Box display="flex" flexDirection="column" gap="5px">
       //             {params.row.image?.slice(0, 2).map((image) => (
       //               <img
       //                 key={image}
       //                 src={image}
       //                 alt=""
       //                 style={{
       //                   borderRadius: "5px",
       //                   width: `${(110 - 5) / 2}px`,
       //                   height: `${(50 - 5) / 2}px`,
       //                   objectFit: "cover",
       //                 }}
       //               />
       //             ))}
       //           </Box>
       //           {params.row.image?.slice(2, 3).map((image) => (
       //             <Box>
       //               <img
       //                 key={image}
       //                 src={image}
       //                 alt=""
       //                 style={{
       //                   borderRadius: "5px",
       //                   width: `${(110 - 5) / 2}px`,
       //                   height: `${50}px`,
       //                   objectFit: "cover",
       //                 }}
       //               />
       //             </Box>
       //           ))}
       //         </Box>
       //       ) : params.row.image.length > 3 ? (
       //         <Box display="flex" gap="5px">
       //           <Box display="flex" flexDirection="column" gap="5px">
       //             {params.row.image?.slice(0, 2).map((image) => (
       //               <img
       //                 key={image}
       //                 src={image}
       //                 alt=""
       //                 style={{
       //                   borderRadius: "5px",
       //                   width: `${(110 - 5) / 2}px`,
       //                   height: `${(50 - 5) / 2}px`,
       //                   objectFit: "cover",
       //                 }}
       //               />
       //             ))}
       //           </Box>
       //           <Box display="flex" flexDirection="column" gap="5px">
       //             {params.row.image?.slice(2, 3).map((image) => (
       //               <Box>
       //                 <img
       //                   key={image}
       //                   src={image}
       //                   alt=""
       //                   style={{
       //                     borderRadius: "5px",
       //                     width: `${(110 - 5) / 2}px`,
       //                     height: `${(50 - 5) / 2}px`,
       //                     objectFit: "cover",
       //                   }}
       //                 />
       //               </Box>
       //             ))}
       //             <Typography
       //               textAlign="center"
       //               fontSize="12px"
       //               color="#49454F"
       //             >
       //               +{params.row.image.length - 3}
       //             </Typography>
       //           </Box>
       //         </Box>
       //       ) : null}
       //     </Box>
       //   ),
       // },
       // {
       //   field: "procid",
       //   headerName: <HeaderName header="Procurement ID" />,
       //   width: 160,
       //   renderCell: (params) => (
       //     <Box>
       //       {/* {params.row.procid.map((proc) => {
       //         let id = []
       //       id.push(proc);
       //       return (
       //         <Typography
       //           // onClick={() =>
       //           //   navigate(`order-id_${params.row.id}`, {
       //           //     state: {
       //           //       order: params.row,
       //           //       type: "confirmed",
       //           //     },
       //           //   })
       //           // }
       //           sx={{ cursor: "pointer" }}
       //           fontSize="14px"
       //           fontWeight={500}
       //           color="#000"
       //         >
       //           {id.join().length > 13
       //             ? id.join().slice(0, 13) + "..."
       //             : id}
       //         </Typography>
       //       );
       //     })} */}
       //       <Typography
       //         // onClick={() =>
       //         //   navigate(`order-id_${params.row.id}`, {
       //         //     state: {
       //         //       order: params.row,
       //         //       type: "confirmed",
       //         //     },
       //         //   })
       //         // }
       //         sx={{ cursor: "pointer" }}
       //         fontSize="14px"
       //         fontWeight={500}
       //         color="#000"
       //       >
       //         {params.row.procid.join().length > 12
       //           ? params.row.procid.join().slice(0, 12) + "..."
       //           : params.row.procid.map((item) => item)}
       //       </Typography>
       //     </Box>
       //   ),
       // },
       {
         field: "id",
         headerName: <HeaderName header="User Avatar & ID" />,
         width: 210,
         renderCell: (params) => (
           <Box
             display="flex"
             alignItems={"center"}
             gap="16px"
             p="8px"
             borderRadius={"24px"}
             bgcolor="rgba(103, 80, 164, 0.05)"
             width='100%'
           >
             {" "}
             <Box
               width="40px"
               height="40px"
               display="flex"
               alignItems={"center"}
               justifyContent="center"
               borderRadius={"100%"}
               bgcolor={params.row.bg}
             >
               {params.row.name.slice(0, 1)}
             </Box>
             <Typography
               onClick={() =>
                 navigate(`user-id_${params.row.id}`, {
                   state: {
                     order: params.row,
                     type: "shop for me",
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
           </Box>
         ),
       },
       {
         field: "name",
         headerName: <HeaderName header="Name" />,
         width: 170,
       },
       {
         field: "email",
         headerName: <HeaderName header="Email" />,
         width: 230,
         renderCell: (params) => (
           <Typography>{truncateEmail(params.row.email ?? "")}</Typography>
         ),
       },
       // {
       //   field: "customer",
       //   headerName: <HeaderName header="Customer" />,
       //   // type: "number",
       //   width: 150,
       //   renderCell: (params) => (
       //     <Typography
       //       fontSize="14px"
       //       fontWeight={500}
       //       color="#21005D"
       //       sx={{ display: "flex", alignItems: "center", gap: "5px" }}
       //     >
       //       <UserTag />
       //       {params.row.customer}
       //     </Typography>
       //   ),
       // },
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
             color={
               params.row.status === "Pending Verification" ? "#49454F" : "#fff"
             }
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
         field: "location",
         sortable: false,
         headerName: <HeaderName header="Location" />,
         width: 150,
       },
       // {
       //   field: "location",
       //   headerName: <HeaderName header="location" />,
       //   // type: "number",
       //   width: 170,
       //   sortable: false,
       //   renderCell: (params) => (
       //     <Tooltip
       //       title={
       //         <Tip
       //           text1="City: Liverpool"
       //           text2="State: England"
       //           text3="State: England"
       //         />
       //       }
       //     >
       //       <Typography
       //         sx={{ cursor: "pointer" }}
       //         fontSize="14px"
       //         fontWeight={500}
       //         color="#000"
       //       >
       //         {params.row.location}
       //       </Typography>
       //     </Tooltip>
       //   ),
       // },

       {
         field: "date",
         headerName: <HeaderName header="Registered On" />,
         // type: "number",
         width: 150,
       },
       // {
       //   field: "cost",
       //   headerName: <HeaderName header="Total Cost" />,
       //   // type: "number",
       //   width: 130,
       //   renderCell: (params) => (
       //     <Typography
       //       fontSize="14px"
       //       fontWeight={500}
       //       color="#000"
       //       sx={{ display: "flex", alignItems: "center", gap: "5px" }}
       //     >
       //       {params.row.status === "Items Procured" ? (
       //         <Tooltip title={<Tip text1="Shipping cost: Paid" />}>
       //           <div>
       //             <CheckIcon />
       //           </div>
       //         </Tooltip>
       //       ) : params.row.status === "Procurement In Progress" ? (
       //         <Tooltip
       //           title={<Tip text1="Shipping cost: Procurement In Progress" />}
       //         >
       //           <div>
       //             <ProcessIcon />
       //           </div>
       //         </Tooltip>
       //       ) : params.row.status === "Pending Procurement" ? (
       //         <Tooltip
       //           title={<Tip text1="Shipping cost: Pending Procurement" />}
       //         >
       //           <div>
       //             <CloseSquare />
       //           </div>
       //         </Tooltip>
       //       ) : (
       //         <Tooltip
       //           title={<Tip text1="Shipping cost: To be paid upon clearing" />}
       //         >
       //           <div>
       //             <CheckMoreIcon />
       //           </div>
       //         </Tooltip>
       //       )}
       //       {params.row.cost}
       //     </Typography>
       //   ),
       // },
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
                       params.row.status !== "Items Procured"
                         ? "none"
                         : "block",
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
         location: "London, UK",
         id: "RACS1345671",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345672",
         name: "Fexo Offorex Samuel",
         status: "Suspended",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#F9DEDC",
       },
       {
         location: "London, UK",
         id: "RACS1345673",
         name: "Dexo Offorex Samuel",
         status: "Verified",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#CAC4D0",
       },
       {
         location: "London, UK",
         id: "RACS1345674",
         name: "Lexo Offorex Samuel",
         status: "Unverified",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#FFFFFF",
       },
       {
         location: "London, UK",
         id: "RACS1345675",
         name: "Rexo Offorex Samuel",
         status: "Closed",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#6750A4",
       },
       {
         location: "London, UK",
         id: "RACS1345676",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345677",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345678",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345679",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345680",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345681",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS13456682",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345683",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345684",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345685",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345686",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345687",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345688",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345689",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
       {
         location: "London, UK",
         id: "RACS1345690",
         name: "Rexo Offorex Samuel",
         status: "Pending Verification",
         date: "22-03-2023 13:05",
         email: "refofforexsamuel@gmail.com",
         actions: "actions",
         bg: "#7D5260",
       },
     ];
  return (
    <Box>
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
            <ActionButton
              action={() => navigate("/orders/create-new-order")}
              title="Add new staff"
              icon={<NewCustomerIcon />}
            />
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
            You don’t have any registered customer yet, would you like to add
            one now?
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("adding-new-staff")}
            startIcon={<NewCustomerIcon />}
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
            Add new customer
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Staff
