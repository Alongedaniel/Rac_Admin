import { Switch, useTheme } from '@mui/material';
import React from 'react'

const SwitchCopm = () => {
    const theme = useTheme()
  return (
    <Switch
      sx={{
        root: {
          width: 50,
          height: 26,
          padding: 0,
          "& .MuiSwitch-switchBase": {
            padding: 1,
            "&.Mui-checked": {
              transform: "translateX(24px)",
              color: theme.palette.common.white,
              "& + .MuiSwitch-track": {
                backgroundColor:
                  theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
                opacity: 1,
                border: 0,
              },
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
            },
          },
          "& .MuiSwitch-thumb": {
            width: 24,
            height: 24,
            borderRadius: "50%",
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor:
              theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
              duration: 500,
            }),
          },
        },
      }}
    />
  );
}

export default SwitchCopm
