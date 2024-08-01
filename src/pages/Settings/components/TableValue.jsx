import { Box, IconButton, TextField, Typography, Tooltip } from "@mui/material";
import React, { useState } from "react";
import EditValue from "../../../assets/icons/EditValue";
import CheckWhiteIcon from "../../../assets/icons/CheckWhiteIcon";
import { CheckmarkIcon } from "react-hot-toast";
import CheckIcon from "../../../assets/icons/CheckIcon";
import TickCircle from "../../../assets/icons/TickCircle";

const TableValue = ({value, setValue, percentage=false, dollar=false, weight=false, ...props}) => {
  const [edit, setEdit] = useState(false);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onHoverRemove = () => {
    setHover(false);
  };
  return (
    <Box
      bgcolor={hover ? "#E8DEF8" : "#FFFFFF"}
      borderBottom={
        hover
          ? "1px solid #1C1B1F"
          : edit
          ? "1px solid #6750A4"
          : "1px solid #E7E0EC"
      }
      onMouseOver={onHover}
      onMouseOut={onHoverRemove}
      //   pt="21px"
      //   pl="16px"
      height="56px"
      px="16px"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      sx={{ cursor: "pointer", transition: "all .4s ease" }}
      {...props}
      //   zIndex={2}
    >
      <Box>
        {edit ? (
          <Typography fontSize="12px" color="#6750A4">
            Enter Rate
          </Typography>
        ) : null}
        {edit ? (
          <TextField
            variant="standard"
            autoFocus={edit}
            sx={{
              p: 0,
              m: 0,
              border: "none",
              input: {
                p: 0,
                m: 0,
                border: "none",
              },
              "& .MuiTextfield-root": {
                border: "none", // Remove border
              },
            }}
            InputProps={{ disableUnderline: true }}
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <Typography
            fontSize="16px"
            //   pb="12px"
            fontWeight={400}
            color="#1C1B1F"
            flex={1}
          >
            {dollar && "$"}
            {value}
            {percentage && "%"}
          </Typography>
        )}
      </Box>
      {edit ? (
        <Tooltip title="Mark as done">
          <Box onClick={() => setEdit(false)} sx={{ cursor: "pointer" }}>
            <TickCircle color="#6750A4" />
          </Box>
        </Tooltip>
      ) : hover ? (
        <Tooltip title="Edit">
          <Box onClick={() => setEdit(true)} sx={{ cursor: "pointer" }}>
            <EditValue />
          </Box>
        </Tooltip>
      ) : null}
    </Box>
  );
};

export default TableValue;
