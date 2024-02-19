import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowCircleUp from '../../../assets/icons/ArrowCircleUp';
import { ArrowCircleDown } from 'iconsax-react';

const CardWrapper = ({children, title, showRadio, fullByDefault, removeArrows, ...props }) => {
    const [showFull, setShowFull] = useState(fullByDefault ? true : false)
  return (
    <Box
      {...props}
      height={showFull ? "fit-content" : "78px"}
      overflow={showFull ? "auto" : "hidden"}
      py="20px"
      px={removeArrows ? '20px' : "35px"}
      border="1px solid #CAC4D0"
      borderRadius="20px"
      display="flex"
      flexDirection='column'
      justifyContent='flex-start'
    >
      <Box
        mb="20px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {showRadio ? showRadio : null}
        <Typography sx={{flex:1}} fontSize={removeArrows ? '16px' : "22px"} fontWeight={removeArrows ? 500 : 400} color="#49454F">
          {title}
        </Typography>
       {removeArrows ? null : <Box onClick={() => setShowFull(!showFull)}>
          {showFull ? <ArrowCircleUp /> : <ArrowCircleDown />}
        </Box>}
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

export default CardWrapper
