import {
  Box,
  Button,
  Checkbox,
  Grid,
  Menu,
  MenuItem,
  Radio,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface ItemTypes {
  icon: React.ReactNode;
  title: string;
  bg?: string;
  action?: () => void;
  items?: {
    header?: string;
    options:
      | {
          title: string;
          subOptions: string[];
        }[]
      | string[];
  };
}

const ActionButton = ({
  icon,
  title = "",
  bg = "#060C2C",
  action = () => {},
  items,
}: ItemTypes) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedSubOptions, setSelectedSubOptions] = useState<string[]>([]);
  return (
    <>
      <Button
        onClick={(e) => {
          if (items?.options?.length) handleOpenMenu(e);
          else action();
        }}
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
          "& .MuiMenu-paper": {
            borderRadius: "20px",
            "&::-webkit-scrollbar": { display: "none" },
          },
          top: "10px",
        }}
      >
        <Box
          bgcolor="#FFFBFE"
          maxHeight="450px"
          sx={{ "&::-webkit-scrollbar": { display: "none" } }}
        >
          {items?.header ? (
            <Box
              p="10px"
              minWidth="530px"
              width="530px"
              position="relative"
              bgcolor="#6750A414"
            >
              <Box bgcolor="#FFFBFE">
                <Box
                  p="10px"
                  borderBottom="1px solid #CAC4D0"
                  mb="10px"
                  bgcolor="#6750A414"
                  position="sticky"
                  top={0}
                  left={0}
                  right={0}
                  zIndex={3}
                >
                  <Typography fontSize="16px" color="#1C1B1F" fontWeight={500}>
                    {items?.header}
                  </Typography>
                </Box>
              </Box>
              <Grid
                container
                py="10px"
                display="flex"
                wrap="wrap"
                sx={{ alignItems: "flex-start" }}
              >
                {items?.options?.map((option) => (
                  <Grid
                    item
                    xs={option.title === "Processed date" ? 12 : 6}
                    height="auto"
                  >
                    <Box py="0px" display="flex" alignItems="center" gap="32px">
                      <Checkbox
                        checked={selectedOptions.includes(option.title)}
                        onClick={(event) => {
                          if (selectedOptions.includes(option.title)) {
                            setSelectedOptions((prev) =>
                              prev.filter((item) => item !== option.title)
                            );
                          } else {
                            setSelectedOptions([
                              ...selectedOptions,
                              option.title,
                            ]);
                          }
                        }}
                        // onClick={() => console.log(selectedOptions)}
                      />
                      <Typography fontSize="16px" color="#1C1B1F">
                        {option.title}
                      </Typography>
                    </Box>
                    <Box ml="60px">
                      {option.subOptions.map((subOption) => (
                        <Box
                          p="10px"
                          display="flex"
                          alignItems="center"
                          gap="25px"
                          mb="5px"
                        >
                          <Checkbox
                            disabled={!selectedOptions.includes(option.title)}
                            checked={selectedSubOptions.includes(subOption)}
                            onClick={(event) => {
                              if (selectedSubOptions.includes(subOption)) {
                                setSelectedSubOptions((prev) =>
                                  prev.filter((item) => item !== subOption)
                                );
                                console.log("there");
                              } else
                                setSelectedSubOptions([
                                  ...selectedSubOptions.filter(
                                    (item) => item !== subOption
                                  ),
                                  subOption,
                                ]);
                            }}
                            sx={{
                              borderRadius: 0,
                            }}
                          />
                          <Typography fontSize="12px" color="#1C1B1F">
                            {subOption}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            items?.options?.map((item) => (
              <MenuItem sx={{ height: "56px" }} onClick={handleCloseMenu}>
                {item}
              </MenuItem>
            ))
          )}
        </Box>
      </Menu>
    </>
  );
};

export default ActionButton;
