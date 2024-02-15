import { Button } from '@mui/material'
import React from 'react'

const ActionButton = ({icon, title}) => {
  return (
    <Button
      variant="contained"
      sx={{
        // width: "fit-content",
        p: "16px",
        borderRadius: "16px",
        bgcolor: "#060C2C",
        fontSize: "14px",
        fontWeight: 500,
        "&:hover": {
          bgcolor: "#060C2C",
        },
      }}
      startIcon={icon}
    >
      {title}
    </Button>
  );
}

export default ActionButton
