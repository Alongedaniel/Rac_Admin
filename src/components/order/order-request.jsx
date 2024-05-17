import { BsThreeDots } from "react-icons/bs";
// import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useOrderRequestQuery } from "../../services/routes/order";
import { Box, Menu, MenuItem, Paper, TextField, Tooltip, Typography } from "@mui/material";
import ActionButton from "../ActionButton";
import SearchIcon from "../../assets/icons/SearchIcon";
import BulkIcon from "../../assets/icons/BulkIcon";
import NewOrderIcon from "../../assets/icons/NewOrderIcon";
import OrderTable from "../OrderTable";
import UserTag from "../../assets/icons/UserTag";
import MoreIcon from "../../assets/icons/MoreIcon";
import FilterIcons from "../../assets/icons/FilterIcons";

function OrderRequestComp({home=false}) {
  const { data, isLoading, isSuccess, error } = useOrderRequestQuery();
  const orderRequest = data?.data;
  console.log(data)
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
    const getStatusBgColor = (status) => {
      switch (status) {
        case "Responded":
        return {
          bgcolor: "#DF5000",
          borderColor: "transparent",
          color: "#fff",
        }; // yellow
        case "Not Responded":
          return {
            bgcolor: "#CAC4D0",
            borderColor: "transparent",
            color: "#49454F",
          };
        case "Declined":
          return {
            bgcolor: "#FFFFFF",
            border: "1px solid #DF5000",
            color: "#DF5000",
          };
        default:
          return null;
      }
    };
    const navigate = useNavigate();
    const columns = [
      {
        flex: 1,
        field: "id",
        headerName: <HeaderName header="Request ID" />,
        width: 105,
        renderCell: (params) => (
          <Typography
            onClick={() =>
              navigate(`request-id_${params.row.id}`, {
                state: {
                  order: params.row,
                  type: 'request'
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
        flex: 1,
        field: "service",
        headerName: <HeaderName header="Service" />,
        width: 120,
      },
      {
        flex: 1,
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
      {
        flex: 1,
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
      {
        flex: 1,
        field: "status",
        headerName: <HeaderName header="Status" />,
        // type: "number",
        width: 150,
        sortable: false,
        renderCell: (params) => (
          <Typography
            fontSize="14px"
            fontWeight={500}
            color="#000"
            p="5px 10px"
            sx={{ borderRadius: "10px", width: '120px', ...getStatusBgColor(params.row.status)}}
          >
            {params.row.status}
          </Typography>
        ),
      },
      {
        flex: 1,
        field: "date",
        headerName: <HeaderName header="Request Date" />,
        // type: "number",
        width: 150,
      },
      // {
        // flex: 1,
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
      //       {params.row.status === "Responded" ? (
      //         <Tooltip title={<Tip text1="Shipping cost: Paid" />}>
      //           <div>
      //             <CheckIcon />
      //           </div>
      //         </Tooltip>
      //       ) : params.row.status === "Processing" ? (
      //         <Tooltip title={<Tip text1="Shipping cost: Processing" />}>
      //           <div>
      //             <ProcessIcon />
      //           </div>
      //         </Tooltip>
      //       ) : params.row.status === "Cancelled" ? (
      //         <Tooltip title={<Tip text1="Shipping cost: Cancelled" />}>
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
      // {
        // flex: 1,
      //   field: "type",
      //   headerName: <HeaderName header="Type" />,
      //   // type: "number",
      //   width: 120,
      // },
      {
        flex: 1,
        field: "staff",
        headerName: <HeaderName header="Staff In Charge" />,
        // type: "number",
        width: 170,
      },
      // {
        // flex: 1,
      //   field: "packaging",
      //   headerName: <HeaderName header="Packaging" />,
      //   // type: "number",
      //   width: 180,
      //   sortable: false,
      //   renderCell: (params) => (
      //     <Typography
      //       fontSize="14px"
      //       fontWeight={500}
      //       color="#fff"
      //       sx={{
      //         bgcolor: getPackagingBgColor(params.row.packaging),
      //         p: "5px 10px",
      //         borderRadius: "10px",
      //       }}
      //     >
      //       {params.row.packaging}
      //     </Typography>
      //   ),
      // },
      {
        flex: 1,
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
                      params.row.status !== "Responded" ? "none" : "block",
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
        // flex: 1,
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
        id: "R78607",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78617",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78627",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78637",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78647",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78657",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78667",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78677",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78687",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78697",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78608",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78618",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78628",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78638",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78607",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78617",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78627",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78637",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78647",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78657",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78667",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78677",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78687",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78697",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78608",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78618",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78628",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78638",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78607",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78617",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78627",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78637",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78647",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78657",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78667",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78677",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78687",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78697",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78608",
        service: "Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78618",
        service: "Auto Import",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Declined",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78628",
        service: "Export",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      {
        id: "R78638",
        service: "Shop For Me",
        customer: "Rexo Offorex",
        location: "Lagos, Nigeria",
        status: "Not Responded",
        date: "22-03-2023 13:05",
        staff: "Micheal Sam obalodu",
        actions: "actions",
      },
      
    ];
  return (
    <>
      {rows?.length === 0 ? (
        <div className="flex flex-col items-center space-y-[30px] font-roboto mt-[-15%]">
          <p>You don’t have any order yet, would you like to create one now?</p>
          <button className="bg-brand/200 text-white w-fit p-[10px_15px] rounded-full">
            Add new order
          </button>
        </div>
      ) : (
        <Box>
          <Box
            display={home ? 'none' : "flex"}
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
                    // width: "458px",
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
            {/* <Box sx={{ flex: 1 }}> */}
            <ActionButton title="Create new order" icon={<NewOrderIcon />} />
            {/* </Box> */}
          </Box>
          <Box>
            <OrderTable columns={columns} rows={rows} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default OrderRequestComp;
