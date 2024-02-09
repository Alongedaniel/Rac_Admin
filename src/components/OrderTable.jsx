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

const OrderTable = ({rows, columns}) => {

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
        // getRowId={(row) => row.id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
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
        sx={{ zIndex: 1}}
      />
    </div>
  );
};

export default OrderTable;
