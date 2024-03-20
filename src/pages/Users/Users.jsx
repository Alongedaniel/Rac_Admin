import { Box } from '@mui/material'
import React from 'react'
import { CustomLink } from '../orders';
import { Outlet } from 'react-router-dom';

const Users = ({children, showFullBar}) => {
  return (
    <Box position="relative">
      <Box
        position="fixed"
        width="100%"
        top={96}
        pr={showFullBar ? "250px" : "56px"}
        zIndex={2}
      >
        <div
          className="bg-white border-t  flex items-end pt-[12px] px-[50px] space-x-[20px]"
          style={{
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
          }}
        >
          <CustomLink to="/users-customers">Customers</CustomLink>
          <CustomLink to="/users-staffs">Staff</CustomLink>
        </div>
      </Box>
      <Box
        sx={{ px: "50px", mt: "60px", mb: "16px", height: "100%" }}
        // maxWidth={{ xs: "1100px", xl: "1400px" }}
      >
        <Outlet />
        {children}
      </Box>
    </Box>
  );
}

export default Users
