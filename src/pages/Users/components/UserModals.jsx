import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import CloseCircle from '../../../assets/icons/CloseCircle';
import CloseCircleRed from '../../../assets/icons/CloseCircleRed';

const UserModals = ({open, onClose, children, title}) => {
    
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        bgcolor="#fff"
        sx={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
        top="50%"
        left="50%"
        width="900px"
        height="fit-content"
        maxHeight='600px'
        overflow='auto'
        borderRadius="20px"
      >
        <Box bgcolor="#6750A41C" p="30px">
          <Box
            border="2px dashed #6750A4"
            borderRadius="20px"
            mb="30px"
            p="20px 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize="28px" color="#6750A4">
              {title}
            </Typography>
            <Box onClick={onClose}>
              <CloseCircleRed />
            </Box>
          </Box>
          {children}
        </Box>
      </Box>
    </Modal>
  );
}

export default UserModals
