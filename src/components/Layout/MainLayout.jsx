import React, { useState } from 'react'
import { Box, Container, Stack } from '@mui/material'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = ({ children }) => {
  const [showFullBar, setShowFullBar] = useState(false);
  return (
    // <Container maxWidth="xl" disableGutters>
      <Box display="flex">
        <Box
          minWidth={showFullBar ? { xs: "56px", lg: "250px" } : "56px"}
          width={showFullBar ? { xs: "56px", lg: "250px" } : "56px"}
          position={"relative"}
        >
          <Box
            width={showFullBar ? { xs: "56px", lg: "250px" } : "56px"}
            position="fixed"
          >
            <Sidebar
              showFullBar={showFullBar}
              setShowFullBar={setShowFullBar}
            />
          </Box>
        </Box>

        <Box width="100%" overflow='hidden' position="relative">
          <Box width="100%" position="relative" height="96px">
            <Box
              zIndex={999}
              width="100%"
              // maxWidth={ "1400px"}
              pr={{ xs: "40px", lg: showFullBar ? 0 : "40px", xl: "40px" }}
              position="fixed"
            >
              <Navbar />
            </Box>
          </Box>
          <Box width="100%">
            {children}
          </Box>
        </Box>
      </Box>
    // </Container>
  );
}

export default MainLayout
