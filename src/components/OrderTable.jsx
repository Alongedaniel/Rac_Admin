import { Menu, MenuItem, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import MoreIcon from "../assets/icons/MoreIcon";
import { Box } from "iconsax-react";
import UserTag from "../assets/icons/UserTag";
import CheckIcon from "../assets/icons/CheckIcon";
import CheckMoreIcon from "../assets/icons/CheckMoreIcon";
import CloseSquare from "../assets/icons/CloseSquare";
import ProcessIcon from "../assets/icons/ProcessIcon";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const OrderTable = ({ rows, columns, pageSize = 10, height = "75vh" }) => {
  // const useStyles = makeStyles({
  //   root: {
  //     "& ::-webkit-scrollbar": {
  //       padding: "0 10px",
  //       backgroundColor: "#CAC4D0",

  //     },
  //     "& ::-webkit-scrollbar-thumb": {
  //       width: "140px important",
  //       height: "179px",
  //       borderRadius: "100px",
  //       backgroundColor: "#79747E",
  //     },
  //     "& ::-webkit-scrollbar-track": {
  //       backgroundColor: "transparent",
  //     },
  //   },
  // });
  // const classes = useStyles();

  return (
    // <div className={classes.root}>
    <DataGrid
      rows={rows}
      columns={columns}
      // getRowId={(row) => row.id}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: pageSize },
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
      sx={{
        zIndex: 1,
        height: 'fit-content',
        maxHeight: '75vh',
        bgcolor: "#fff",
        borderRadius: "20px",
      }}
    />
    // </div>
  );
};

export default OrderTable;
