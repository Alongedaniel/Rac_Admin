import { Box, Typography } from '@mui/material';
import React, { useState } from 'react'
import EyeOpen from '../../../assets/icons/EyeOpen';

const Panel = ({ notification, key }) => {
    const [isRead, setIsRead] = useState(false)
  return (
      <Box
          key={key}
      position="relative"
      p="20px"
    //   bgcolor="#FFFBFE"
      border="1px solid #CAC4D0"
      display="flex"
      alignItems="center"
      borderRadius="20px"
      justifyContent="space-between"
          width="100%"
          onClick={() => setIsRead(true)}
    >
      <Typography fontSize="16px" color="#49454F" flex={1} maxWidth="596px">
        {notification.title}
      </Typography>
      <Box display="flex" alignItems="center">
        <Box width="1px" height="16px" bgcolor="#CAC4D0"></Box>
        <Typography ml="18px" mr="34px" fontSize="14px" color="#000">
          {notification.time}
        </Typography>
        <EyeOpen />
      </Box>
      {!isRead && <Box
        width="8px"
        height="8px"
        bgcolor="#DC362E"
        position={"absolute"}
        sx={{ top: 0, left: 0, borderRadius: "100%" }}
      ></Box>}
    </Box>
  );
}

export default Panel
