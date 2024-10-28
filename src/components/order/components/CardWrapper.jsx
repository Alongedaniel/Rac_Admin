import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowCircleUp from "../../../assets/icons/ArrowCircleUp";
import { ArrowCircleDown } from "iconsax-react";

const CardWrapper = ({
  children,
  title,
  showRadio,
  fullByDefault,
  removeArrows,
  bottomRadius,
  topRadius,
  ...props
}) => {
  const [showFull, setShowFull] = useState(fullByDefault ? true : false);
  return (
    <Box
      {...props}
      width="100%"
      height={showFull ? "fit-content" : "78px"}
      overflow={showFull ? "auto" : "hidden"}
      py="20px"
      px={removeArrows ? "20px" : "35px"}
      border="1px solid #CAC4D0"
      display={"flex"}
      gap="16px"
      alignItems={"flex-start"}
      sx={{
        transition: "all .4s ease",
        borderTopLeftRadius: topRadius ? 0 : "20px",
        borderTopRightRadius: topRadius ? 0 : "20px",
        borderBottomLeftRadius: bottomRadius ? 0 : "20px",
        borderBottomRightRadius: bottomRadius ? 0 : "20px",
      }}
    >
      {showRadio ? showRadio : null}
      <Box
        // borderRadius="20px"
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Box
          mb={title || !removeArrows ? "20px" : 0}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{ cursor: "pointer" }}
        >
          <Typography
            sx={{ flex: 1 }}
            fontSize={removeArrows ? "16px" : "22px"}
            fontWeight={removeArrows ? 500 : 400}
            color="#49454F"
            onClick={() => setShowFull(!showFull)}
          >
            {title}
          </Typography>
          {removeArrows ? null : (
            <IconButton onClick={() => setShowFull(!showFull)}>
              {showFull ? <ArrowCircleUp /> : <ArrowCircleDown />}
            </IconButton>
          )}
        </Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default CardWrapper;
