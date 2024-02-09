import { Tooltip, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import MoreIcon from "../assets/icons/MoreIcon";
import { Box } from "iconsax-react";
import UserTag from "../assets/icons/UserTag";
import CheckIcon from "../assets/icons/CheckIcon";
import CheckMoreIcon from "../assets/icons/CheckMoreIcon";
import CloseSquare from "../assets/icons/CloseSquare";
import ProcessIcon from "../assets/icons/ProcessIcon";

const OrderTable = () => {
    const HeaderName = ({ header }) => {
      return (
        <Typography fontSize="14px" fontWeight={500} color="#000">
          {header}
        </Typography>
      );
    };
    const Tip = ({text1='', text2='', text3=''}) => {
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
            case 'Packaging In Progress':
                return "#B3261E"; // yellow
            case 'Packaging Canceled':
                return "#6750A4";
            case 'Packaging Completed':
                return "#21005D";
            case 'Not Started':
                return "#79747E";
            default:
                return null
        }
    }
  const columns = [
    {
      field: "id",
      headerName: <HeaderName header="Order ID" />,
      width: 90,
      renderCell: (params) => (
        <Typography
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
      field: "service",
      headerName: <HeaderName header="Service" />,
      width: 120,
    },
    {
      field: "shipId",
      headerName: <HeaderName header="Shipment ID" />,
      width: 115,
    },
    {
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
    {
      field: "date",
      headerName: <HeaderName header="Processed Date" />,
      // type: "number",
      width: 150,
    },
    {
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
    {
      field: "type",
      headerName: <HeaderName header="Type" />,
      // type: "number",
      width: 120,
    },
    {
      field: "staff",
      headerName: <HeaderName header="Staff In Charge" />,
      // type: "number",
      width: 150,
    },
    {
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
          <MoreIcon />
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
      actions: "axtions",
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
      actions: "axtions",
    },
    {
      id: "OD78637",
      service: "Export",
      shipId: "SH08756",
      customer: "Rexo Offorex",
      location: "Lagos, Nigeria",
      status: "Cancelled",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      type: "Shipment",
      staff: "Micheal Sam obalodu",
      packaging: "Packaging Completed",
      actions: "axtions",
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
      actions: "axtions",
    },
    {
      id: "OD78657",
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
      actions: "axtions",
    },
    {
      id: "OD78667",
      service: "Export",
      shipId: "SH08756",
      customer: "Rexo Offorex",
      location: "Lagos, Nigeria",
      status: "Processing",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      type: "Shipment",
      staff: "Micheal Sam obalodu",
      packaging: "Packaging In Progress",
      actions: "axtions",
    },
    {
      id: "OD78677",
      service: "Export",
      shipId: "SH08756",
      customer: "Rexo Offorex",
      location: "Lagos, Nigeria",
      status: "Cancelled",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      type: "Shipment",
      staff: "Micheal Sam obalodu",
      packaging: "Packaging In Progress",
      actions: "axtions",
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
      actions: "axtions",
    },
    {
      id: "OD78697",
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
      actions: "axtions",
    },
    {
      id: "OD78607",
      service: "Export",
      shipId: "SH08756",
      customer: "Rexo Offorex",
      location: "Lagos, Nigeria",
      status: "processing",
      date: "22-03-2023 13:05",
      cost: "$107.76",
      type: "Shipment",
      staff: "Micheal Sam obalodu",
      packaging: "Packaging In Progress",
      actions: "axtions",
    },
  ];
  return (
    <div
      style={{
        height: "100%",
        width: "1404px",
        scrollbarWidth: "thin",
        scrollbarColor: "#888 #f1f1f1",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableColumnFilter
        disableColumnSelector
        disableColumnMenu
        getRowSpacing={(params) => ({
          top: 5,
          bottom: 5,
        })}
      />
    </div>
  );
};

export default OrderTable;
