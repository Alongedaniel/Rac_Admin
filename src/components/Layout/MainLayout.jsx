import React, { useState } from 'react'
import { Box, Container, Stack } from '@mui/material'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainLayout = ({ children }) => {
  const [showFullBar, setShowFullBar] = useState(false);
  return (
    <Container maxWidth="xl" disableGutters>
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

        <Box width maxWidth={"1400px"} position="relative">
          <Box width="100%" position="relative" height="102px">
            <Box
              zIndex={9999}
              width="100%"
              maxWidth={showFullBar ? { xs: "1100px", xl: "1230px" } : "1400px"}
              pr={{ xs: "40px", lg: showFullBar ? 0 : "40px", xl: "40px" }}
              position="fixed"
            >
              <Navbar />
            </Box>
          </Box>
          <Box width="100%" maxWidth={showFullBar ? "1230px" : "1400px"}>
            {children}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default MainLayout
