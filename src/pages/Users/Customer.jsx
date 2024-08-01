import {
  Box,
  Button,
  CircularProgress,
  Menu,
  MenuItem,
  Paper,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import NewCustomerIcon from '../../assets/icons/NewCustomerIcon';
import { useNavigate } from 'react-router-dom';
import UserTag from '../../assets/icons/UserTag';
import CheckIcon from '../../assets/icons/CheckIcon';
import ProcessIcon from '../../assets/icons/ProcessIcon';
import CloseSquare from '../../assets/icons/CloseSquare';
import CheckMoreIcon from '../../assets/icons/CheckMoreIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import laptop from '../../assets/images/laptop.png'
import ActionButton from '../../components/ActionButton';
import FilterIcons from '../../assets/icons/FilterIcons';
import SearchIcon from '../../assets/icons/SearchIcon';
import BulkIcon from '../../assets/icons/BulkIcon';
import NewOrderIcon from '../../assets/icons/NewOrderIcon';
import OrderTable from '../../components/OrderTable';
import useCustomGetRequest from '../../utils/hooks/api/useCustomGetRequest';
import moment from 'moment/moment';
import CloseIcon from '../../assets/icons/CloseIcon';
import Requests from "../../utils/hooks/api/requests";


export const bgColor = ["#CAC4D0","#6750A4","#F9DEDC","#7D5260","#fff"
];
const Customer = () => {
  const navigate = useNavigate()
    const { data, loading, error, setError, refetch } =
      useCustomGetRequest(`/admin/users`);
  
  const { suspendUser, deleteUser, data: requestData, error: requestError, loading: requestLoading, setData } = Requests()

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null)
    const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("xl"));
  
  const open = Boolean(anchorEl);
  const [thisId, setThisId] = useState('')
  const handleOpenMenu = (e, id, row) => {
    setAnchorEl(e.currentTarget);
    setThisId(id)
    setSelectedRow(row)
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [openError, setOpenError] = useState(false);
  useEffect(() => {
    if (requestData?.message)
      setTimeout(() => {
        refetch();
      }, 6000)
    if (error || requestData?.message) {
      setOpenError(true);
    } else setOpenError(false);
  }, [loading, requestLoading]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
    setError("");
    setData(null)
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

  const truncateEmail = (email) => { 
    const maxLength = 13
    let seperate = email.split('@')
    let name =
      seperate[0].length > maxLength
        ? seperate[0].slice(0, maxLength) + "..."
        : seperate[0];
    let boiler = '@' + seperate[1]
    return name + boiler
  }

   const getStatusBgColor = (status) => {
     switch (status) {
       case "Suspended":
         return "#B3261E"; // yellow
       case "Verified":
         return "#6750A4";
       case "Unverified":
         return "#79747E";
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
        flex: desktop ? 1 : undefined,
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
          >
            {" "}
            <Box
              width="40px"
              height="40px"
              display="flex"
              alignItems={"center"}
              justifyContent="center"
              borderRadius={"100%"}
              bgcolor={bgColor[Math.floor(Math.random() * 6)]}
            >
              {params.row.firstName.slice(0, 1).toUpperCase()}
            </Box>
            <Typography
              onClick={() =>
                navigate(`${params.row._id}`)
              }
              sx={{ cursor: "pointer" }}
              fontSize="14px"
              fontWeight={500}
              color="#000"
            >
              {params.row.racId}
            </Typography>
          </Box>
        ),
      },
      {
        flex: desktop ? 1 : undefined,
        field: "firstName",
        headerName: <HeaderName header="Name" />,
        renderCell: (params) => (
          <Tooltip title={`${params.row.firstName} ${params.row.lastName}`}>
            <Typography>
              {params.row.firstName} {params.row.lastName}
            </Typography>
          </Tooltip>
        ),
        width: 170,
      },
      {
        flex: desktop ? 1 : undefined,
        field: "email",
        headerName: <HeaderName header="Email" />,
        width: 230,
        renderCell: (params) => (
          <Tooltip title={`${params.row.email}`}>
            <Typography>{truncateEmail(params.row.email ?? "")}</Typography>
          </Tooltip>
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
        flex: desktop ? 1 : undefined,
        field: "isEmailVerified",
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
              bgcolor: getStatusBgColor(
                params.row.isEmailVerified ? "Verified" : "Unverified"
              ),
              p: "5px 10px",
              borderRadius: "10px",
            }}
          >
            {params.row.isEmailVerified ? "Verified" : "Unverified"}
          </Typography>
        ),
      },
      {
        flex: desktop ? 1 : undefined,
        field: "contactAddress",
        sortable: false,
        headerName: <HeaderName header="Location" />,
        renderCell: (params) =>
          params.row.state || params.row.country ? (
            <Typography>
              {params.row.state}, {params.row.country}
            </Typography>
          ) : (
            "N/A"
          ),
        width: 150,
      },
      {
        flex: desktop ? 1 : undefined,
        field: "company",
        headerName: <HeaderName header="Company/Business" />,
        renderCell: (params) => (
          <Typography>{params.row.company ?? "N/A"}</Typography>
        ),
        width: 170,
      },
      {
        flex: desktop ? 1 : undefined,
        field: "admin",
        headerName: <HeaderName header="Assigned Admin" />,
        // type: "number",
        width: 210,
        renderCell: (params) => (
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="#21005D"
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <UserTag />
            {params.row.admin ?? "N/A"}
          </Typography>
        ),
      },
      {
        flex: desktop ? 1 : undefined,
        field: "orders",
        headerName: <HeaderName header="Orders" />,
        renderCell: (params) => (
          <Typography>{params.row.orders ?? 0}</Typography>
        ),
        width: 120,
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
        flex: desktop ? 1 : undefined,
        field: "createdAt",
        headerName: <HeaderName header="Registered On" />,
        renderCell: (params) =>
          params.row.createdAt ? (
            <Typography>
              {moment(params.row.createdAt).format("DD-MM-YYYY HH:mm")}
            </Typography>
          ) : (
            "N/A"
          ),
        // type: "number",
        width: 150,
      },

      {
        flex: desktop ? 1 : undefined,
        field: "actions",
        headerName: <HeaderName header="Actions" />,
        // type: "number",
        width: 70,
        sortable: false,
        renderCell: (params) => (
          <div>
            <IconButton
              sx={{
                bgcolor:
                  open && thisId === params.row.id ? "#E8DEF8" : undefined,
              }}
              onClick={(e) => handleOpenMenu(e, params.row.id, params.row)}
            >
              <MoreIcon />
            </IconButton>
            <Paper>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseMenu}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{
                  "& .MuiMenu-paper": {
                    borderRadius: "20px",
                    boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.1)",
                  },
                  left: { xs: "-90px", sm: "-190px" },
                }}
              >
                <MenuItem
                  sx={{ cursor: 'pointer', height: "56px" }}
                  onClick={() => {
                    navigate(`user-id_${selectedRow.racId}`, {
                      state: {
                        id: selectedRow._id,
                      },
                    });
                    handleCloseMenu();
                  }}
                >
                  View/Edit user
                </MenuItem>
                <MenuItem
                  sx={{ cursor: 'pointer', height: "56px" }}
                  onClick={() => {
                    suspendUser(`/admin/suspend-user/${selectedRow._id}`);
                    handleCloseMenu();
                  }}
                >
                  Suspend account
                </MenuItem>
                <MenuItem
                  sx={{ cursor: 'pointer', height: "56px" }}
                  onClick={() => {
                    deleteUser(`/admin/delete-user/${selectedRow._id}`);
                    handleCloseMenu();
                  }}
                >
                  Delete account
                </MenuItem>
                <MenuItem
                  sx={{ cursor: 'pointer', height: "56px" }}
                  onClick={() => {
                    navigate(`/orders/users`, {
                      state: {
                        name: selectedRow.firstName,
                        id: selectedRow._id,
                      },
                    });
                    handleCloseMenu();
                  }}
                >
                  Manage Orders
                </MenuItem>
                <MenuItem
                  sx={{ cursor: 'pointer', height: "56px" }}
                  onClick={() => {
                    navigate(`/order-requests/users/${selectedRow._id}`);
                    handleCloseMenu();
                  }}
                >
                  Manage Requests
                </MenuItem>
                <MenuItem
                  sx={{ cursor: 'pointer', height: "56px" }}
                  onClick={() => {
                    navigate(`/shipments/users/${selectedRow._id}`);
                    handleCloseMenu();
                  }}
                >
                  Manage Shipments
                </MenuItem>
                <MenuItem
                  sx={{ cursor: 'pointer', height: "56px" }}
                  onClick={() => {
                    navigate(`/payment-history/users`, {
                      state: {
                        name: selectedRow.firstName,
                        id: selectedRow._id,
                      },
                    });
                    handleCloseMenu();
                  }}
                >
                  Manage Payments
                </MenuItem>
                <MenuItem
                  sx={{ cursor: 'pointer', height: "56px" }}
                  onClick={() => {
                    handleCloseMenu();
                  }}
                >
                  Send message
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
  // const rows = [
  //   {
  //     location: "London, UK",
  //     id: "RACS1345671",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "rexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#CAC4D0",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345672",
  //     name: "Fexo Offorex Samuel",
  //     status: "Suspended",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#F9DEDC",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345673",
  //     name: "Dexo Offorex Samuel",
  //     status: "Verified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#6750A4",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345674",
  //     name: "Lexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#fff",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345675",
  //     name: "Rexo Offorex Samuel",
  //     status: "Suspended",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#6750A4",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345676",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#CAC4D0",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345677",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#6750A4",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345678",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#F9DEDC",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345679",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#7D5260",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345680",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#FFFFFF",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345681",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#F9DEDC",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS13456682",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#CAC4D0",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345683",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#7D5260",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345684",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#F9DEDC",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345685",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#CAC4D0",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345686",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //      bg: "#7D5260",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345687",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#F9DEDC",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345688",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //      bg: "#7D5260",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345689",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //      bg: "#7D5260",
  //   },
  //   {
  //     location: "London, UK",
  //     id: "RACS1345690",
  //     name: "Rexo Offorex Samuel",
  //     status: "Unverified",
  //     date: "22-03-2023 13:05",
  //     email: "refofforexsamuel@gmail.com",
  //     actions: "actions",
  //     admin: "Rexo Offorex Samuel",
  //     company: "God’s Will Ventures Alaba International",
  //     orders: 20,
  //     bg: "#F9DEDC",
  //   },
  // ];

  const rows = data?.users?.filter((row) => row.isAdmin === false)?.map((row) => ({
    ...row,
    racId: row.racId,
    id: row._id,
    country: row?.contactAddress[0]?.country, // Ensure each row has a unique id
    state: row?.contactAddress[0]?.state, // Ensure each row has a unique id
  }));

  return (
    <Box>
      {loading ? (
        <Box
          width="100%"
          height="80vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      ) : data?.users?.length > 0 ? (
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
              <ActionButton
                title="Bulk Actions"
                icon={<BulkIcon />}
                // action={() => handleOpenMenu() }
                items={[
                  "Suspend/delete accounts",
                  "Manage status",
                  "Send broadcast",
                ]}
              />
            </Box>
            <ActionButton
              action={() => navigate("adding-new-customer")}
              title="Add new customer"
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
            onClick={() => navigate("adding-new-customer")}
            variant="contained"
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
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { borderRadius: "30px" } }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error || requestData?.message}
        action={
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        }
      />
    </Box>
  );
}

export default Customer
