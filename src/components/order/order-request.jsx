import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ActionButton from "../ActionButton";
import SearchIcon from "../../assets/icons/SearchIcon";
import BulkIcon from "../../assets/icons/BulkIcon";
import NewOrderIcon from "../../assets/icons/NewOrderIcon";
import OrderTable from "../OrderTable";
import UserTag from "../../assets/icons/UserTag";
import MoreIcon from "../../assets/icons/MoreIcon";
import FilterIcons from "../../assets/icons/FilterIcons";
import useCustomGetRequest from "../../utils/hooks/api/useCustomGetRequest";
import moment from "moment";
import CloseIcon from "../../assets/icons/CloseIcon";
import NewCustomerIcon from "../../assets/icons/NewCustomerIcon";
import { toTitleCase } from "../../pages/orders/order-details";

export const GetCustomerName = ({ id }) => {
  const { data: customer, loading } = useCustomGetRequest(
    `/admin/users/${id}` ?? "",
  );
  return (
    <Typography color="#21005D">
      {customer
        ? `${customer?.user?.firstName} ${customer?.user?.lastName}`
        : "N/A"}
    </Typography>
  );
};

export const getStatusBgColor = (status) => {
  switch (status) {
    case "Approved":
      return {
        backgroundColor: "#DF5000",
        borderColor: "transparent",
        color: "#fff",
      }; // yellow
    case "Not Responded":
      return {
        backgroundColor: "#CAC4D0",
        borderColor: "transparent",
        color: "#49454F",
      };
    case "Declined":
      return {
        backgroundColor: "#FFFFFF",
        border: "1px solid #DF5000",
        color: "#DF5000",
      };
    default:
      return null;
  }
};

function OrderRequestComp({ home = false, all = false }) {
  useEffect(() => {
    localStorage.removeItem("requests");
  }, []);
  const location = useLocation();
  const { userid } = useParams();
  console.log(userid);
  const { data, loading, setError, error } = useCustomGetRequest(
    all ? `/cross-service/all-services` : `/admin/user-orders/${userid}`,
  );
  console.log(data);
  const [openError, setOpenError] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (error) {
      setOpenError(true);
    } else setOpenError(false);
    setRows(
      data?.requests[0]?.allData?.reverse()?.map((row) => ({
        ...row,
        id: row.requestId,
        requestStatus:
          row.requestStatus === "responded"
            ? "Approved"
            : row.requestStatus === "not responded" ||
                row.requestStatus === "Not Responded"
              ? "Not Responded"
              : "Declined"
                  .split(" ")
                  .map(
                    (x, i) =>
                      x.charAt(0).toUpperCase() + x.slice(1).toLowerCase(),
                  )
                  .join(" "),
      })),
    );
  }, [loading]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenError(false);
    setError("");
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [thisId, setThisId] = useState("");
  const handleOpenMenu = (e, id, row) => {
    setAnchorEl(e.currentTarget);
    setThisId(id);
    setSelectedRow(row);
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

  const navigate = useNavigate();
  const columns = [
    {
      flex: 1,
      field: "id",
      headerName: <HeaderName header="Request ID" />,
      width: 105,
      renderCell: (params) => (
        <Typography
          onClick={() => {
            navigate(`/order-requests/${params.row._id}`)
            localStorage.setItem(
              "title",
              JSON.stringify(toTitleCase(params.row.serviceType))
            );
          }}
          sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          fontSize="14px"
          fontWeight={500}
          color="#000"
          width={"100%"}
          height={"100%"}
        >
          {params.row.id}
        </Typography>
      ),
    },
    {
      flex: 1,
      field: "serviceType",
      headerName: <HeaderName header="Service" />,
      width: 120,
      renderCell: (params) => (
        <Typography>{toTitleCase(params.row.serviceType)}</Typography>
      ),
    },
    {
      flex: 1,
      field: "customer",
      headerName: <HeaderName header="Customer" />,
      // type: "number",
      width: 190,
      renderCell: (params) => (
        <Typography
          fontSize="14px"
          fontWeight={500}
          color="#21005D"
          sx={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          {<GetCustomerName id={params.row.user} /> && <UserTag />}
          <GetCustomerName id={params.row.user} />
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
      renderCell: (params) =>
        params.row.location ? (
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
        ) : (
          "N/A"
        ),
    },
    {
      flex: 1,
      field: "requestStatus",
      headerName: <HeaderName header="Status" />,
      // type: "number",
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Typography
          onClick={() => navigate(`/order-requests/${params.row._id}`)}
          fontSize="14px"
          fontWeight={500}
          // textTransform="capitalize"
          color="#000"
          p="5px 10px"
          sx={{
            borderRadius: "10px",
            width: "120px",
            cursor: "pointer",
            ...getStatusBgColor(params.row.requestStatus),
          }}
        >
          {params.row.requestStatus}
        </Typography>
      ),
    },
    {
      flex: 1,
      field: "createdAt",
      headerName: <HeaderName header="Request Date" />,
      // type: "number",
      renderCell: (params) =>
        params.row.createdAt ? (
          <Typography>
            {moment(params.row.createdAt).format("DD-MM-YYYY HH:mm")}
          </Typography>
        ) : (
          "N/A"
        ),
      width: 150,
    },
    {
      flex: 1,
      field: "staff",
      headerName: <HeaderName header="Staff In Charge" />,
      // type: "number",
      width: 170,
      renderCell: (params) => "N/A",
    },
    {
      flex: 1,
      field: "actions",
      headerName: <HeaderName header="Actions" />,
      // type: "number",
      width: 70,
      sortable: false,
      renderCell: (params) => (
        <Box position="relative">
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
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              onClose={handleCloseMenu}
              sx={{
                "& .MuiMenu-paper": {
                  borderRadius: "20px",
                  boxShadow: "0px 4px 10px 4px rgba(0, 0, 0, 0.1)",
                },
                left: { xs: "-100px", sm: "-150px" },
              }}
            >
              <MenuItem
                sx={{ height: "56px" }}
                onClick={() => {
                  navigate(`/order-requests/request-id_${selectedRow.id}`, {
                    state: {
                      order: params.row,
                      type: "request",
                      requestId: selectedRow._id,
                    },
                  });
                  handleCloseMenu();
                }}
              >
                View Order Request Details
              </MenuItem>
              {params.row.requestStatus === "Not Responded" && (
                <MenuItem sx={{ height: "56px" }} onClick={handleCloseMenu}>
                  Decline Order Request
                </MenuItem>
              )}
              {params.row.requestStatus === "Declined" && (
                <MenuItem
                  sx={{
                    height: "56px",
                  }}
                  onClick={handleCloseMenu}
                >
                  Resolve Order Request
                </MenuItem>
              )}
            </Menu>
          </Paper>
        </Box>
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

  // const rows = data?.requests[0]?.allData?.map((row) => ({
  //   ...row,
  //   id: row.requestId,
  //   requestStatus:
  //     row.requestStatus === "responded"
  //       ? "Approved"
  //       : row.requestStatus ===
  //         "not responded" || row.requestStatus ===
  //         "Not Responded" ? 'Not Responded' : 'Declined'
  //           .split(" ")
  //           .map((x, i) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
  //           .join(" "),
  // }));
  const [searchQuery, setSearchQuery] = useState(null);
  const [filteredRows, setFilteredRows] = useState(rows);

  useEffect(() => {
    const result = searchQuery
      ? rows.filter(
          (row) =>
            row.requestId.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.requestStatus.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : rows;

    setFilteredRows(result);
  }, [searchQuery, rows]);

  const filterOptions = {
    header: "Show Orders only under the following category",
    options: [
      {
        title: "Staff(s) in charge",
        subOptions: [
          "Micheal Sam",
          "Rexomi Off",
          "Feradic Fintech",
          "Exlemu Nudo",
          "Ferincle Modifyv",
          "Vickony Else",
        ],
      },
      {
        title: "Packaging status",
        subOptions: [
          "Not started",
          "Packaging in progress",
          "Packaging complete",
        ],
      },
      {
        title: "Order status",
        subOptions: ["Processed", "Processing", "unprocessed"],
      },
      {
        title: "Order cost",
        subOptions: [
          "$0 - $20",
          "$20 - $50",
          "$50 - $100",
          "$100 - $500",
          "Above $500",
        ],
      },
      {
        title: "Payment status",
        subOptions: ["Confirmed", "Not yet confirmed", "Reversed"],
      },
      {
        title: "Processed date",
        subOptions: [],
      },
    ],
  };

  console.log(rows);

  return (
    <>
      <Box
        display={home ? "none" : "flex"}
        alignItems="center"
        gap="50px"
        sx={{ justifyContent: "space-between" }}
        width="100%"
        mb="16px"
      >
        <Box display="flex" alignItems="center" gap="20px" flex={1}>
          <ActionButton
            title="Filter view"
            icon={<FilterIcons />}
            items={filterOptions}
          />
          <TextField
            id="search"
            type="text"
            placeholder="Search for orders with any related keyword"
            value={searchQuery}
            fullWidth
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
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
          <ActionButton
            title="Bulk Actions"
            icon={<BulkIcon />}
            items={{ options: ["Decline Order Requests"] }}
          />
        </Box>
        {/* <Box sx={{ flex: 1 }}> */}
        {/* action={() => navigate("/create-new-order")} */}
        <ActionButton
          title="Create new request"
          icon={<NewOrderIcon />}
          action={() => navigate("/create-new-order")}
        />
        {/* </Box> */}
      </Box>
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
      ) : filteredRows?.length > 0 ? (
        <Box>
          <Box>
            <OrderTable columns={columns} rows={filteredRows} />
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
            onClick={() => navigate("/orders/create-new-order")}
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
            Add new request
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
    </>
  );
}

export default OrderRequestComp;
