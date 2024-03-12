import { Button } from '@mui/material'
import React from 'react'

const ActionButton = ({
  icon,
  title = "",
  action = () => {},
  bg = "#060C2C",
}) => {
  return (
    <Button
      onClick={action}
      variant="contained"
      sx={{
        // width: "fit-content",
        minWidth: '170px',
        p: "16px",
        borderRadius: "16px",
        bgcolor: bg,
        fontSize: "14px",
        fontWeight: 500,
        "&:hover": {
          bgcolor: bg,
        },
      }}
      startIcon={icon}
    >
      {title}
    </Button>
  );
};

export default ActionButton
