import {
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NewCustomerIcon from "../../assets/icons/NewCustomerIcon";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../components/ActionButton";
import FilterIcons from "../../assets/icons/FilterIcons";
import SearchIcon from "../../assets/icons/SearchIcon";
import BulkIcon from "../../assets/icons/BulkIcon";
import OrderTable from "../../components/OrderTable";
import MoreIcon from "../../assets/icons/MoreIcon";
import useCustomGetRequest from "../../utils/hooks/api/useCustomGetRequest";
import CloseIcon from "../../assets/icons/CloseIcon";
import { bgColor } from "./Customer";
import moment from "moment";
import Requests from "../../utils/hooks/api/requests";

const Staff = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("xl"));
  const { data, loading, error, setError, refetch } =
    useCustomGetRequest(`/admin/get-staffs`);

  const {
    suspendUser,
    deleteUser,
    data: requestData,
    error: requestError,
    loading: requestLoading,
    setData,
  } = Requests();
  const open = Boolean(anchorEl);
  const [thisId, setThisId] = useState("");
  const menuItems = [
    "View/Edit user",
    "Suspend/Delete account",
    "Manage Orders",
    "Manage Shipments",
    "Manage Payments",
    "Send message",
  ];
  const handleOpenMenu = (e, id, row) => {
    setAnchorEl(e.currentTarget);
    setThisId(id);
    setSelectedRow(row);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [openError, setOpenError] = useState(false);
  useEffect(() => {
    if (requestData?.message)
      setTimeout(() => {
        refetch();
      }, 6000);
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
    setData(null);
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
      case "Closed":
        return "#21005D";
      case "Pending Verification":
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
            {params.row.firstName?.slice(0, 1).toUpperCase()}
          </Box>
          <Typography
            onClick={() => navigate(`${params.row._id}`)}
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
      field: "name",
      headerName: <HeaderName header="Name" />,
      width: 170,
      renderCell: (params) => (
        <Tooltip title={`${params.row.firstName} ${params.row.lastName}`}>
          <Typography>
            {params.row.firstName} {params.row.lastName}
          </Typography>
        </Tooltip>
      ),
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
            bgcolor: getStatusBgColor(
              params.row.isEmailVerified ? "Verified" : "Unverified",
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
      field: "location",
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
      flex: desktop ? 1 : undefined,
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
          <IconButton
            sx={{
              bgcolor: open && thisId === params.row.id ? "#E8DEF8" : undefined,
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
                sx={{ height: "56px" }}
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
                sx={{ height: "56px" }}
                onClick={() => {
                  suspendUser(`/admin/suspend-user/${selectedRow._id}`);
                  handleCloseMenu();
                }}
              >
                Suspend account
              </MenuItem>
              <MenuItem
                sx={{ height: "56px" }}
                onClick={() => {
                  deleteUser(`/admin/delete-user/${selectedRow._id}`);
                  handleCloseMenu();
                }}
              >
                Delete account
              </MenuItem>
              <MenuItem
                sx={{ height: "56px" }}
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
                sx={{ height: "56px" }}
                onClick={() => {
                  navigate(`/order-requests/users/${selectedRow._id}`);
                  handleCloseMenu();
                }}
              >
                Manage Requests
              </MenuItem>
              <MenuItem
                sx={{ height: "56px" }}
                onClick={() => {
                  navigate(`/shipments/users/${selectedRow._id}`);
                  handleCloseMenu();
                }}
              >
                Manage Shipments
              </MenuItem>
              <MenuItem
                sx={{ height: "56px" }}
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
                sx={{ height: "56px" }}
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
  //  const rows = [
  //    {
  //      location: "London, UK",
  //      id: "RACS1345671",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345672",
  //      name: "Fexo Offorex Samuel",
  //      status: "Suspended",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#F9DEDC",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345673",
  //      name: "Dexo Offorex Samuel",
  //      status: "Verified",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#CAC4D0",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345674",
  //      name: "Lexo Offorex Samuel",
  //      status: "Unverified",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#FFFFFF",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345675",
  //      name: "Rexo Offorex Samuel",
  //      status: "Closed",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#6750A4",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345676",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345677",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345678",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345679",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345680",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345681",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS13456682",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345683",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345684",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345685",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345686",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345687",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345688",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345689",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //    {
  //      location: "London, UK",
  //      id: "RACS1345690",
  //      name: "Rexo Offorex Samuel",
  //      status: "Pending Verification",
  //      date: "22-03-2023 13:05",
  //      email: "refofforexsamuel@gmail.com",
  //      actions: "actions",
  //      bg: "#7D5260",
  //    },
  //  ];
  const rows = data?.staffMembers?.map((row) => ({
    ...row,
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
      ) : data?.staffMembers?.length > 0 ? (
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
              action={() => navigate("adding-new-staff")}
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
      <Snackbar
        open={openError}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            borderRadius: "30px",
            width: "fit-content",
          },
        }}
        autoHideDuration={6000}
        onClose={handleClose}
        message={error}
        action={
          <Box onClick={handleClose}>
            <CloseIcon />
          </Box>
        }
      />
    </Box>
  );
};

export default Staff;
