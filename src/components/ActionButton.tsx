import { Button, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

const ActionButton = ({
  icon,
  title = "",
  bg = "#060C2C",
  action= () => {},
  items = []
}) => {
   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);
   const handleOpenMenu = (e) => {
     setAnchorEl(e.currentTarget);
   };
   const handleCloseMenu = () => {
     setAnchorEl(null);
   };
  return (
    <>
      <Button
        onClick={(e) => { if (items.length) handleOpenMenu(e); else action()}}
        variant="contained"
        sx={{
          // width: "fit-content",
          minWidth: "170px",
          p: "16px",
          borderRadius: "16px",
          bgcolor: bg,
          fontSize: "14px",
          fontWeight: 500,
          textTransform: "none",
          "&:hover": {
            bgcolor: bg,
          },
        }}
        startIcon={icon}
      >
        {title}
      </Button>
      <Menu
        disableScrollLock
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        sx={{
          "& .MuiMenu-paper": { borderRadius: "20px" },
          top: "10px",
        }}
      >
        {items.map((menuItem) => (
          <MenuItem sx={{ height: "56px" }} onClick={handleCloseMenu}>
            {menuItem}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default ActionButton
