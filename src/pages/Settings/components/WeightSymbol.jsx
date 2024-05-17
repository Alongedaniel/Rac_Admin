import { Box, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";

const WeightSymbol = () => {
  const [anchorEl, setAnchorEl] = useState(null);
    const [selectedSymbol, setSelectedSymbol] = useState("Kg");
    const open = Boolean(anchorEl)
    const close = () => {
        setAnchorEl(null)
    }
  return (
    <>
      <Box
        width="100%"
        bgcolor="#FFECF1"
        display="flex"
        height="46px"
        alignSelf={"flex-end"}
        alignItems="flex-end"
        pl="16px"
        borderBottom="1px solid #E7E0EC"
        pb="8px"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{cursor: 'pointer'}}
      >
        <Typography color="#1C1B1F" fontSize="16px" fontWeight={500}>
          /{selectedSymbol}
        </Typography>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={close}
        sx={{
          width: "92px",
        }}
        disableScrollLock
      >
        <MenuItem
          onClick={() => {
            setSelectedSymbol("Kg");
            setAnchorEl(null);
          }}
        >
          Kg
        </MenuItem>
        <MenuItem
          onClick={() => {
            setSelectedSymbol("lbs");
            setAnchorEl(null);
          }}
        >
          lbs
        </MenuItem>
      </Menu>
    </>
  );
};

export default WeightSymbol;
